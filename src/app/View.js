import EventEmitter from '../lib/EventEmitter.js';

export default class View extends EventEmitter{
    constructor() {
        super();

        this.initEvents();
    }

    initEvents() {
        document.querySelector('.main__button_load-more').addEventListener('click', (e) => {
            e.preventDefault();
            this.emit('loadMoreBtnClick');
        });

        document.querySelector('.header__search_submit').addEventListener('click', (e) => {
            e.preventDefault();
            this.emit('searchSubmit', document.querySelector('.header__search').value);
        });

        document.querySelector('.header__search').addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                this.emit('searchSubmit', document.querySelector('.header__search').value);
            }
        });

        document.querySelector('.header__title__box').addEventListener('click', (e) => {
            e.preventDefault();
            this.emit('logoClick');
        });
    }

    displaySources(data) {
        if (data.sources !== undefined) {
            document.querySelector('.conn-failed-message').style.display = 'none';
            let template = document.querySelector('#nav-button-template');
            let container = document.querySelector('.nav');
            for (let i = 0; i < data.sources.length; i++) {
                let clone = template.content.cloneNode(true).querySelector('.nav__item');
                clone.id = data.sources[i].id;
                clone.innerHTML = data.sources[i].name;
                clone.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.emit('srcBtnClick', clone.id);
                });
                container.appendChild(clone);
            }
        } else {
            document.querySelector('.conn-failed-message').style.display = 'block';
            document.querySelector('.main__button_load-more').style.display = 'none';
        }
    }

    displayArticles(data) {
        if (data.articles !== undefined) {
            document.querySelector('.conn-failed-message').style.display = 'none';
            let template = document.querySelector('#article-template');
            let container = document.querySelector('.main__content');
            container.innerHTML = '';
            for (let i = 0; i < data.articles.length; i++) {
                let clone = template.content.cloneNode(true).querySelector('.main__article');
                if (data.articles[i].urlToImage) {
                    clone.querySelector('.main__article__figure')
                        .style.backgroundImage = `url(${data.articles[i].urlToImage})`;
                    clone.querySelector('.main__article_icon').style.display = 'none';
                }
                clone.querySelector('.main__article_author').innerHTML = data.articles[i].author;
                clone.querySelector('.main__article_date').innerHTML = data.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('-');
                clone.querySelector('.main__article_title').innerHTML = data.articles[i].title;
                clone.querySelector('.main__article_source').innerHTML = data.articles[i].source.name;
                clone.querySelector('.main__article_description').innerHTML = data.articles[i].description;
                clone.querySelector('.main__article_url').setAttribute('href', data.articles[i].url);
                container.appendChild(clone);
            }

            if (!data.articles.length) {
                document.querySelector('.no-results-message').style.display = 'block';
            } else {
                document.querySelector('.no-results-message').style.display = 'none';
            }

            if (data.articles.length < 5) {
                document.querySelector('.main__button_load-more').style.display = 'none';
            } else {
                document.querySelector('.main__button_load-more').style.display = 'block';
            }
        } else {
            document.querySelector('.conn-failed-message').style.display = 'block';
            document.querySelector('.main__button_load-more').style.display = 'none';
        }
    }

    hideLoadMoreBtn() {
        document.querySelector('.main__button_load-more').style.display = 'none';
    }
}