import EventEmitter from '../lib/EventEmitter.js';
import NewsAPI from '../lib/NewsAPI.js';

export default class Model extends EventEmitter{

    constructor() {
        super();

        this.newsAPI = new NewsAPI();

        this.newsAPI.on('loadSourcesComplete', data => this.emit('loadSourcesComplete', data));
        this.newsAPI.on('loadTopHeadlinesComplete', data => this.emit('loadTopHeadlinesComplete', data));
        this.newsAPI.on('loadEverythingFromSourceComplete', data => this.emit('loadEverythingFromSourceComplete', data));
        this.newsAPI.on('searchEverythingComplete', data => this.emit('searchEverythingComplete', data));

        this.load = String('top'); // top, fromSrc, search
        this.src = String('');
        this.page = 1;
        this.q = String('');
    }

    loadSources() {
        this.newsAPI.loadSources();
    }

    loadTopHeadlines() {
        this.load = String('top');
        this.page = 1;
        this.newsAPI.loadTopHeadlines(this.page);
        this.page++;
    }

    loadArticlesFromSource(src) {
        this.load = String('fromSrc');
        this.src = String(src);
        this.page = 1;
        this.newsAPI.loadEverythingFromSource(this.page, this.src);
        this.page++;
    }

    searchEverything(q) {
        if (q) {
            this.load = String('search');
            this.q = String(q);
            this.page = 1;
            this.newsAPI.searchEverything(this.q);
            this.page++;
        } else {
            this.loadTopHeadlines();
        }
    }

    loadMore() {
        if (this.page < 9) {
            if (this.load === 'top') {
                this.newsAPI.loadTopHeadlines(this.page);
            } else if (this.load === 'fromSrc') {
                this.newsAPI.loadEverythingFromSource(this.page, this.src);
            } else if (this.load === 'search') {
                this.newsAPI.searchEverything(this.q);
            }
            this.page++;
        } else {
            this.emit('maxNewsCountArchived');
        }
    }
}