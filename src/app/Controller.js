import EventEmitter from '../lib/EventEmitter.js';
import Model from './Model.js';
import View from './View.js';

export default class Controller extends EventEmitter{

    constructor() {
        super();
        this.model = new Model();
        this.view = new View();

        this.model.on('loadSourcesComplete', data => this.view.displaySources(data));
        this.model.on('loadTopHeadlinesComplete', data => this.view.displayArticles(data));
        this.model.on('loadEverythingFromSourceComplete', data => this.view.displayArticles(data));
        this.model.on('searchEverythingComplete', data => this.view.displayArticles(data));
        this.model.on('maxNewsCountArchived', () => this.view.hideLoadMoreBtn());

        this.view.on('srcBtnClick', data => this.model.loadArticlesFromSource(data));
        this.view.on('loadMoreBtnClick', () => this.model.loadMore());
        this.view.on('searchSubmit', data => this.model.searchEverything(data));
        this.view.on('logoClick', () => this.model.loadTopHeadlines());
    }

    initPage() {
        this.model.loadSources();
        this.model.loadTopHeadlines();
    }

}