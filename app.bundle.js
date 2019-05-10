!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(6),o=n(7);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(8);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){"use strict";n.r(t);n(5);var r=n(0),o=n.n(r),i=n(1),u=n.n(i),c=n(2),l=n.n(c),s=n(3),a=n.n(s),d=n(4),f=n.n(d),h=function(){function e(){o()(this,e),this.events={}}return u()(e,[{key:"on",value:function(e,t){return this.events[e]=this.events[e]||[],this.events[e].push(t),this}},{key:"off",value:function(e,t){var n=this.events[e];if(!n)return this;for(var r=0;r<n.length;r++)if(n[r]===t){n.splice(r,1);break}return this}},{key:"once",value:function(e,t){this.events[e]=this.events[e]||[];return this.events[e].push(function n(){t(),this.off(e,n)}),this}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=this.events[e];return!!o&&(o.forEach(function(e){e.apply(void 0,n)}),!0)}},{key:"listenerCount",value:function(e){return(this.events[e]||[]).length}},{key:"rowListeners",value:function(e){return this.events[e]}}]),e}(),y=function(e){function t(){var e;return o()(this,t),(e=l()(this,a()(t).call(this))).startURL="https://newsapi.org/v2/",e.sources="sources?",e.topHeadlines="top-headlines?",e.everything="everything?",e.apiKeyURL="apiKey=5878ce9411164b5398895920c506a413",e}return f()(t,e),u()(t,[{key:"loadSources",value:function(){var e=this,t=this.startURL+this.sources+this.apiKeyURL,n=new Request(t);return fetch(n).then(function(e){return e.json()}).then(function(t){return e.emit("loadSourcesComplete",t)})}},{key:"loadTopHeadlines",value:function(e){var t=this,n=this.startURL+this.topHeadlines+"country=gb&pageSize=5&page="+e+"&"+this.apiKeyURL,r=new Request(n);return fetch(r).then(function(e){return e.json()}).then(function(e){return t.emit("loadTopHeadlinesComplete",e)})}},{key:"loadEverythingFromSource",value:function(e,t){var n=this,r=this.startURL+this.everything+"pageSize=5&page="+e+"&sources="+t+"&"+this.apiKeyURL,o=new Request(r);return fetch(o).then(function(e){return e.json()}).then(function(e){return n.emit("loadEverythingFromSourceComplete",e)})}},{key:"searchEverything",value:function(e){var t=this,n=this.startURL+this.everything+'q="'+e+'"&'+this.apiKeyURL,r=new Request(n);return fetch(r).then(function(e){return e.json()}).then(function(e){return t.emit("searchEverythingComplete",e)})}}]),t}(h),p=function(e){function t(){var e;return o()(this,t),(e=l()(this,a()(t).call(this))).newsAPI=new y,e.newsAPI.on("loadSourcesComplete",function(t){return e.emit("loadSourcesComplete",t)}),e.newsAPI.on("loadTopHeadlinesComplete",function(t){return e.emit("loadTopHeadlinesComplete",t)}),e.newsAPI.on("loadEverythingFromSourceComplete",function(t){return e.emit("loadEverythingFromSourceComplete",t)}),e.newsAPI.on("searchEverythingComplete",function(t){return e.emit("searchEverythingComplete",t)}),e.load=String("top"),e.src=String(""),e.page=1,e.q=String(""),e}return f()(t,e),u()(t,[{key:"loadSources",value:function(){this.newsAPI.loadSources()}},{key:"loadTopHeadlines",value:function(){this.load=String("top"),this.page=1,this.newsAPI.loadTopHeadlines(this.page),this.page++}},{key:"loadArticlesFromSource",value:function(e){this.load=String("fromSrc"),this.src=String(e),this.page=1,this.newsAPI.loadEverythingFromSource(this.page,this.src),this.page++}},{key:"searchEverything",value:function(e){e?(this.load=String("search"),this.q=String(e),this.page=1,this.newsAPI.searchEverything(this.q),this.page++):this.loadTopHeadlines()}},{key:"loadMore",value:function(){this.page<9?("top"===this.load?this.newsAPI.loadTopHeadlines(this.page):"fromSrc"===this.load?this.newsAPI.loadEverythingFromSource(this.page,this.src):"search"===this.load&&this.newsAPI.searchEverything(this.q),this.page++):this.emit("maxNewsCountArchived")}}]),t}(h),m=function(e){function t(){var e;return o()(this,t),(e=l()(this,a()(t).call(this))).initEvents(),e}return f()(t,e),u()(t,[{key:"initEvents",value:function(){var e=this;document.querySelector(".main__button_load-more").addEventListener("click",function(t){t.preventDefault(),e.emit("loadMoreBtnClick")}),document.querySelector(".header__search_submit").addEventListener("click",function(t){t.preventDefault(),e.emit("searchSubmit",document.querySelector(".header__search").value)}),document.querySelector(".header__search").addEventListener("keyup",function(t){t.preventDefault(),13===t.keyCode&&e.emit("searchSubmit",document.querySelector(".header__search").value)}),document.querySelector(".header__title__box").addEventListener("click",function(t){t.preventDefault(),e.emit("logoClick")})}},{key:"displaySources",value:function(e){var t=this;if(void 0!==e.sources){document.querySelector(".conn-failed-message").style.display="none";for(var n=document.querySelector("#nav-button-template"),r=document.querySelector(".nav"),o=function(o){var i=n.content.cloneNode(!0).querySelector(".nav__item");i.id=e.sources[o].id,i.innerHTML=e.sources[o].name,i.addEventListener("click",function(e){e.preventDefault(),t.emit("srcBtnClick",i.id)}),r.appendChild(i)},i=0;i<e.sources.length;i++)o(i)}else document.querySelector(".conn-failed-message").style.display="block",document.querySelector(".main__button_load-more").style.display="none"}},{key:"displayArticles",value:function(e){if(void 0!==e.articles){document.querySelector(".conn-failed-message").style.display="none";var t=document.querySelector("#article-template"),n=document.querySelector(".main__content");n.innerHTML="";for(var r=0;r<e.articles.length;r++){var o=t.content.cloneNode(!0).querySelector(".main__article");e.articles[r].urlToImage&&(o.querySelector(".main__article__figure").style.backgroundImage="url(".concat(e.articles[r].urlToImage,")"),o.querySelector(".main__article_icon").style.display="none"),o.querySelector(".main__article_author").innerHTML=e.articles[r].author,o.querySelector(".main__article_date").innerHTML=e.articles[r].publishedAt.slice(0,10).split("-").reverse().join("-"),o.querySelector(".main__article_title").innerHTML=e.articles[r].title,o.querySelector(".main__article_source").innerHTML=e.articles[r].source.name,o.querySelector(".main__article_description").innerHTML=e.articles[r].description,o.querySelector(".main__article_url").setAttribute("href",e.articles[r].url),n.appendChild(o)}e.articles.length?document.querySelector(".no-results-message").style.display="none":document.querySelector(".no-results-message").style.display="block",e.articles.length<5?document.querySelector(".main__button_load-more").style.display="none":document.querySelector(".main__button_load-more").style.display="block"}else document.querySelector(".conn-failed-message").style.display="block",document.querySelector(".main__button_load-more").style.display="none"}},{key:"hideLoadMoreBtn",value:function(){document.querySelector(".main__button_load-more").style.display="none"}}]),t}(h),v=function(e){function t(){var e;return o()(this,t),(e=l()(this,a()(t).call(this))).model=new p,e.view=new m,e.model.on("loadSourcesComplete",function(t){return e.view.displaySources(t)}),e.model.on("loadTopHeadlinesComplete",function(t){return e.view.displayArticles(t)}),e.model.on("loadEverythingFromSourceComplete",function(t){return e.view.displayArticles(t)}),e.model.on("searchEverythingComplete",function(t){return e.view.displayArticles(t)}),e.model.on("maxNewsCountArchived",function(){return e.view.hideLoadMoreBtn()}),e.view.on("srcBtnClick",function(t){return e.model.loadArticlesFromSource(t)}),e.view.on("loadMoreBtnClick",function(){return e.model.loadMore()}),e.view.on("searchSubmit",function(t){return e.model.searchEverything(t)}),e.view.on("logoClick",function(){return e.model.loadTopHeadlines()}),e}return f()(t,e),u()(t,[{key:"initPage",value:function(){this.model.loadSources(),this.model.loadTopHeadlines()}}]),t}(h);(new(function(){function e(){o()(this,e),this.controller=new v}return u()(e,[{key:"run",value:function(){this.controller.initPage()}}]),e}())).run()}]);
//# sourceMappingURL=app.bundle.js.map