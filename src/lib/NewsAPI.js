import EventEmitter from '../lib/EventEmitter';

export default class NewsAPI extends EventEmitter{

    constructor() {
        super();
        this.startURL = 'https://newsapi.org/v2/';
        this.sources = 'sources?';
        this.topHeadlines = 'top-headlines?';
        this.everything = 'everything?';
        this.apiKeyURL = 'apiKey=5878ce9411164b5398895920c506a413';
        //this.apiKeyURL = 'apiKey=8a109737ab0f48d3bb8f5f9c365479fc';
    }

    loadSources() {
        let url = this.startURL + this.sources + this.apiKeyURL;
        let req = new Request(url);
        return fetch(req).then(response => response.json()).then(data => this.emit('loadSourcesComplete', data));
    }

    loadTopHeadlines(page) {
        let url = this.startURL + this.topHeadlines +
            'country=gb&' +
            'pageSize=5&' +
            'page=' + page + '&' +
            this.apiKeyURL;
        let req = new Request(url);
        return fetch(req).then(response => response.json()).then(data => this.emit('loadTopHeadlinesComplete', data));
    }

    loadEverythingFromSource(page, sourceID) {
        let url = this.startURL + this.everything +
            'pageSize=5&' +
            'page=' + page + '&' +
            'sources=' + sourceID + '&' +
            this.apiKeyURL;
        let req = new Request(url);
        return fetch(req).then(response => response.json()).then(data => this.emit('loadEverythingFromSourceComplete', data));
    }

    searchEverything(q) {
        let url = this.startURL + this.everything +
        'q="' + q + '"&' +
        this.apiKeyURL;
        let req = new Request(url);
        return fetch(req).then(response => response.json()).then(data => this.emit('searchEverythingComplete', data));
    }
}