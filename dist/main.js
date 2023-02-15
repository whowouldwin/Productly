/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Article.js":
/*!***********************!*\
  !*** ./js/Article.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Article": () => (/* binding */ Article)
/* harmony export */ });
class Article {
    constructor({ id, title, urlToImage, tags, ...rest }) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
    }
    //Article generator
    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', this.id);

        this.urlToImage && (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`)

        if (this.title || this.tags) {
            template += `<div class="strategy__content">`
            this.title && (template += `<h3 class="strategy__name">${this.title}</h3>`)

            if (this.tags){
                template += `<div class="strategy__tags tags">`
                this.tags.map(tag => {
                    template += `<span class="tag tag_colored">${tag}</span>`
                })
                template += `</div>`
            }

            template += `</div>`
        }
        article.innerHTML = template;
        return article;
    }
}

/***/ }),

/***/ "./js/ArticleModal.js":
/*!****************************!*\
  !*** ./js/ArticleModal.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleModal": () => (/* binding */ ArticleModal)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Modal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


class  ArticleModal extends Object(function webpackMissingModule() { var e = new Error("Cannot find module './Modal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {
    constructor(classes, {id, title, urlToImage, tags, content, date }) {
        super(classes);
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
        this.content = content;
        this.date = date;
    }

    //Article modal generator
    generateContent() {
        let template = '';
        let article = document.createElement('div');
        article.className = 'article-modal__content';

        this.urlToImage && (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`)

        if (this.title || this.tags || this.content || this.date) {
            template += `<div class="strategy__content">`

            this.date && (template += `<p class="strategy__date">${this.date}</p>`)

            this.title && (template += `<h3 class="strategy__name">${this.title}</h3>`)

            this.content && (template += `<p class="strategy__text">${this.content}</p>`)

            if (this.tags){
                template += `<div class="strategy__tags tags">`
                this.tags.map(tag => {
                    template += `<span class="tag tag_colored">${tag}</span>`
                })
                template += `</div>`
            }

            template += `</div>`
        }
        article.innerHTML = template;
        return article;
    }
    renderModal() {
        let content = this.generateContent();
        super.buildModal(content);
    }
}

/***/ }),

/***/ "./js/Modal.js":
/*!*********************!*\
  !*** ./js/Modal.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
    constructor(classes) {
        this.classes = classes;
        this.modal = '';
        this.modalContent = '';
        this.modalCloseBtn = '';
        this.overlay = '';
    }

    buildModal(content) {
        //Overlay
        this.overlay = this.createDomNode(this.overlay, 'div','overlay', 'overlay_modal');

        //Modal
        this.modal = this.createDomNode(this.modal, 'div','modal', this.classes);

        //Modal content
        this.modalContent = this.createDomNode(this.modalContent,'div', 'modal__content')

        //CloseBtn
        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn,'span', 'modal__close-icon');
        this.modalCloseBtn.innerHTML = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M12.4239 10.5173L20.6009 2.34005C21.1331 1.80815 21.1331 0.94815 20.6009 0.416255C20.069 -0.11564 19.209 -0.11564 18.6771 0.416255L10.4999 8.59349L2.3229 0.416255C1.79076 -0.11564 0.931004 -0.11564 0.399108 0.416255C-0.133036 0.94815 -0.133036 1.80815 0.399108 2.34005L8.5761 10.5173L0.399108 18.6945C-0.133036 19.2264 -0.133036 20.0864 0.399108 20.6183C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6183L10.4999 12.4411L18.6771 20.6183C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6183C21.1331 20.0864 21.1331 19.2264 20.6009 18.6945L12.4239 10.5173Z" fill="#2F281E"/>\n' +
            '</svg>'
        this.setContent(content);
        this.appendModalElements();

        //Bind events
        this.bindEvents();


        //Open modal
        this.openModal();
    }

    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node;
    };
    setContent(content) {
        if (typeof content === 'string') {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content);
        }
    }
    appendModalElements() {
        this.modal.append(this.modalCloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    bindEvents() {
        this.modalCloseBtn.addEventListener('click', this.closeModal);
        this.overlay.addEventListener('click', this.closeModal);
    }

    openModal() {
        console.log('Test openModal');
        document.body.append(this.overlay);
    }
    closeModal(e) {
        let overlay = document.querySelector('.overlay');
        if (overlay) {
            let classes = e.target.classList;
            if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
                overlay.remove();
            }
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Article_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/Article.js */ "./js/Article.js");
/* harmony import */ var _js_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/Modal.js */ "./js/Modal.js");
/* harmony import */ var _js_ArticleModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/ArticleModal.js */ "./js/ArticleModal.js");

// import fs from "fs";
// import jsdom from "jsdom";
// const { JSDOM } = jsdom;






// const filePath = "../index.html";
// const html = fs.readFileSync(filePath, "utf-8");
// const dom = new JSDOM(html);
// global.window = dom.window;
// global.document = dom.window.document;




const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: 'images/strategies/1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: 'images/strategies/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: 'images/strategies/3.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    }
];


window.onload = function () {
    //Render articles
    if (data) {
        renderArticlesToDom()
    }

    //Tags
    addTagsClickHandler();

    //generate base modal from modal class
    addToolsClickHandler();


}
const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (event) => {
        if (event.target.classList.contains('tag')) {
            let clickedTag = event.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(clickedTag.innerText);
            }
        }
    })
}
const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    console.log(tags);
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
};

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
};
const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');

    })
};
const filterStrategyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
                if (tag.innerText === selectedTag) {
                    strategy.classList.remove('strategy_hidden');
                }
            })
    })
};
const renderArticlesToDom = () => {
  let strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach(article => {
          strategiesWrapper.append(article.generateArticle());
      });
  addStrategyClickHandler();
}
const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector('.strategy-wrapper');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
}

const generateArticles = (data) => {
  let articles = [];
  data.forEach(article => {
      articles.push(new _js_Article_js__WEBPACK_IMPORTED_MODULE_0__.Article(article))
  });
  return articles;
}

const addToolsClickHandler = () => {
  document.querySelector('.tools__button .button').addEventListener('click', () => {
    generateToolsModal();
  })
}

const generateToolsModal = () => {
    renderModalWindow('Test');
}
const renderModalWindow = (content) => {
  let modal = new _js_Modal_js__WEBPACK_IMPORTED_MODULE_1__.Modal('tools-modal');
  modal.buildModal(content);
}

const addStrategyClickHandler = () => {
  document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
      if (e.target.closest('.strategy')) {
        let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
        console.log(clickedStrategyId);
      }
  })
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSx3QkFBd0IsbURBQU87QUFDL0IsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFLO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdGx5Ly4vanMvQXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9wcm9kdWN0bHkvLi9qcy9BcnRpY2xlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGx5Ly4vanMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGx5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGx5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvZHVjdGx5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGx5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcnRpY2xlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGlkLCB0aXRsZSwgdXJsVG9JbWFnZSwgdGFncywgLi4ucmVzdCB9KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnVybFRvSW1hZ2UgPSB1cmxUb0ltYWdlO1xuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xuICAgIH1cbiAgICAvL0FydGljbGUgZ2VuZXJhdG9yXG4gICAgZ2VuZXJhdGVBcnRpY2xlKCkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSAnJztcbiAgICAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgICAgIGFydGljbGUuY2xhc3NOYW1lID0gJ3N0cmF0ZWd5IGJsb2NrLXNoYWRvd2VkJztcbiAgICAgICAgYXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0aGlzLmlkKTtcblxuICAgICAgICB0aGlzLnVybFRvSW1hZ2UgJiYgKHRlbXBsYXRlICs9IGA8aW1nIGNsYXNzPVwic3RyYXRlZ3lfX2ltYWdlXCIgc3JjPSR7dGhpcy51cmxUb0ltYWdlfSBhbHQ9XCJzdHJhdGVneVwiPmApXG5cbiAgICAgICAgaWYgKHRoaXMudGl0bGUgfHwgdGhpcy50YWdzKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPGRpdiBjbGFzcz1cInN0cmF0ZWd5X19jb250ZW50XCI+YFxuICAgICAgICAgICAgdGhpcy50aXRsZSAmJiAodGVtcGxhdGUgKz0gYDxoMyBjbGFzcz1cInN0cmF0ZWd5X19uYW1lXCI+JHt0aGlzLnRpdGxlfTwvaDM+YClcblxuICAgICAgICAgICAgaWYgKHRoaXMudGFncyl7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxkaXYgY2xhc3M9XCJzdHJhdGVneV9fdGFncyB0YWdzXCI+YFxuICAgICAgICAgICAgICAgIHRoaXMudGFncy5tYXAodGFnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxzcGFuIGNsYXNzPVwidGFnIHRhZ19jb2xvcmVkXCI+JHt0YWd9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8L2Rpdj5gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8L2Rpdj5gXG4gICAgICAgIH1cbiAgICAgICAgYXJ0aWNsZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICAgICAgcmV0dXJuIGFydGljbGU7XG4gICAgfVxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCc7XG5cbmV4cG9ydCBjbGFzcyAgQXJ0aWNsZU1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzZXMsIHtpZCwgdGl0bGUsIHVybFRvSW1hZ2UsIHRhZ3MsIGNvbnRlbnQsIGRhdGUgfSkge1xuICAgICAgICBzdXBlcihjbGFzc2VzKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudXJsVG9JbWFnZSA9IHVybFRvSW1hZ2U7XG4gICAgICAgIHRoaXMudGFncyA9IHRhZ3M7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgLy9BcnRpY2xlIG1vZGFsIGdlbmVyYXRvclxuICAgIGdlbmVyYXRlQ29udGVudCgpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XG4gICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFydGljbGUuY2xhc3NOYW1lID0gJ2FydGljbGUtbW9kYWxfX2NvbnRlbnQnO1xuXG4gICAgICAgIHRoaXMudXJsVG9JbWFnZSAmJiAodGVtcGxhdGUgKz0gYDxpbWcgY2xhc3M9XCJzdHJhdGVneV9faW1hZ2VcIiBzcmM9JHt0aGlzLnVybFRvSW1hZ2V9IGFsdD1cInN0cmF0ZWd5XCI+YClcblxuICAgICAgICBpZiAodGhpcy50aXRsZSB8fCB0aGlzLnRhZ3MgfHwgdGhpcy5jb250ZW50IHx8IHRoaXMuZGF0ZSkge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxkaXYgY2xhc3M9XCJzdHJhdGVneV9fY29udGVudFwiPmBcblxuICAgICAgICAgICAgdGhpcy5kYXRlICYmICh0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJzdHJhdGVneV9fZGF0ZVwiPiR7dGhpcy5kYXRlfTwvcD5gKVxuXG4gICAgICAgICAgICB0aGlzLnRpdGxlICYmICh0ZW1wbGF0ZSArPSBgPGgzIGNsYXNzPVwic3RyYXRlZ3lfX25hbWVcIj4ke3RoaXMudGl0bGV9PC9oMz5gKVxuXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgJiYgKHRlbXBsYXRlICs9IGA8cCBjbGFzcz1cInN0cmF0ZWd5X190ZXh0XCI+JHt0aGlzLmNvbnRlbnR9PC9wPmApXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRhZ3Mpe1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8ZGl2IGNsYXNzPVwic3RyYXRlZ3lfX3RhZ3MgdGFnc1wiPmBcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8c3BhbiBjbGFzcz1cInRhZyB0YWdfY29sb3JlZFwiPiR7dGFnfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPC9kaXY+YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPC9kaXY+YFxuICAgICAgICB9XG4gICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIHJldHVybiBhcnRpY2xlO1xuICAgIH1cbiAgICByZW5kZXJNb2RhbCgpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdlbmVyYXRlQ29udGVudCgpO1xuICAgICAgICBzdXBlci5idWlsZE1vZGFsKGNvbnRlbnQpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzZXMpIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcbiAgICAgICAgdGhpcy5tb2RhbCA9ICcnO1xuICAgICAgICB0aGlzLm1vZGFsQ29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLm1vZGFsQ2xvc2VCdG4gPSAnJztcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gJyc7XG4gICAgfVxuXG4gICAgYnVpbGRNb2RhbChjb250ZW50KSB7XG4gICAgICAgIC8vT3ZlcmxheVxuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmNyZWF0ZURvbU5vZGUodGhpcy5vdmVybGF5LCAnZGl2Jywnb3ZlcmxheScsICdvdmVybGF5X21vZGFsJyk7XG5cbiAgICAgICAgLy9Nb2RhbFxuICAgICAgICB0aGlzLm1vZGFsID0gdGhpcy5jcmVhdGVEb21Ob2RlKHRoaXMubW9kYWwsICdkaXYnLCdtb2RhbCcsIHRoaXMuY2xhc3Nlcyk7XG5cbiAgICAgICAgLy9Nb2RhbCBjb250ZW50XG4gICAgICAgIHRoaXMubW9kYWxDb250ZW50ID0gdGhpcy5jcmVhdGVEb21Ob2RlKHRoaXMubW9kYWxDb250ZW50LCdkaXYnLCAnbW9kYWxfX2NvbnRlbnQnKVxuXG4gICAgICAgIC8vQ2xvc2VCdG5cbiAgICAgICAgdGhpcy5tb2RhbENsb3NlQnRuID0gdGhpcy5jcmVhdGVEb21Ob2RlKHRoaXMubW9kYWxDbG9zZUJ0biwnc3BhbicsICdtb2RhbF9fY2xvc2UtaWNvbicpO1xuICAgICAgICB0aGlzLm1vZGFsQ2xvc2VCdG4uaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgMCAyMSAyMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxcbicgK1xuICAgICAgICAgICAgJzxwYXRoIGQ9XCJNMTIuNDIzOSAxMC41MTczTDIwLjYwMDkgMi4zNDAwNUMyMS4xMzMxIDEuODA4MTUgMjEuMTMzMSAwLjk0ODE1IDIwLjYwMDkgMC40MTYyNTVDMjAuMDY5IC0wLjExNTY0IDE5LjIwOSAtMC4xMTU2NCAxOC42NzcxIDAuNDE2MjU1TDEwLjQ5OTkgOC41OTM0OUwyLjMyMjkgMC40MTYyNTVDMS43OTA3NiAtMC4xMTU2NCAwLjkzMTAwNCAtMC4xMTU2NCAwLjM5OTEwOCAwLjQxNjI1NUMtMC4xMzMwMzYgMC45NDgxNSAtMC4xMzMwMzYgMS44MDgxNSAwLjM5OTEwOCAyLjM0MDA1TDguNTc2MSAxMC41MTczTDAuMzk5MTA4IDE4LjY5NDVDLTAuMTMzMDM2IDE5LjIyNjQgLTAuMTMzMDM2IDIwLjA4NjQgMC4zOTkxMDggMjAuNjE4M0MwLjY2NDE4NCAyMC44ODM2IDEuMDEyNzIgMjEuMDE2OSAxLjM2MSAyMS4wMTY5QzEuNzA5MjkgMjEuMDE2OSAyLjA1NzU4IDIwLjg4MzYgMi4zMjI5IDIwLjYxODNMMTAuNDk5OSAxMi40NDExTDE4LjY3NzEgMjAuNjE4M0MxOC45NDI1IDIwLjg4MzYgMTkuMjkwNyAyMS4wMTY5IDE5LjYzOSAyMS4wMTY5QzE5Ljk4NzMgMjEuMDE2OSAyMC4zMzU2IDIwLjg4MzYgMjAuNjAwOSAyMC42MTgzQzIxLjEzMzEgMjAuMDg2NCAyMS4xMzMxIDE5LjIyNjQgMjAuNjAwOSAxOC42OTQ1TDEyLjQyMzkgMTAuNTE3M1pcIiBmaWxsPVwiIzJGMjgxRVwiLz5cXG4nICtcbiAgICAgICAgICAgICc8L3N2Zz4nXG4gICAgICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgdGhpcy5hcHBlbmRNb2RhbEVsZW1lbnRzKCk7XG5cbiAgICAgICAgLy9CaW5kIGV2ZW50c1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuXG4gICAgICAgIC8vT3BlbiBtb2RhbFxuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZURvbU5vZGUobm9kZSwgZWxlbWVudCwgLi4uY2xhc3Nlcykge1xuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIHNldENvbnRlbnQoY29udGVudCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcHBlbmRNb2RhbEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmFwcGVuZCh0aGlzLm1vZGFsQ2xvc2VCdG4pO1xuICAgICAgICB0aGlzLm1vZGFsLmFwcGVuZCh0aGlzLm1vZGFsQ29udGVudCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hcHBlbmQodGhpcy5tb2RhbCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5tb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1vZGFsKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1vZGFsKTtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUZXN0IG9wZW5Nb2RhbCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLm92ZXJsYXkpO1xuICAgIH1cbiAgICBjbG9zZU1vZGFsKGUpIHtcbiAgICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICAgICAgbGV0IGNsYXNzZXMgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG4gICAgICAgICAgICBpZiAoY2xhc3Nlcy5jb250YWlucygnb3ZlcmxheScpIHx8IGNsYXNzZXMuY29udGFpbnMoJ21vZGFsX19jbG9zZS1pY29uJykpIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG4vLyBpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG4vLyBpbXBvcnQganNkb20gZnJvbSBcImpzZG9tXCI7XG4vLyBjb25zdCB7IEpTRE9NIH0gPSBqc2RvbTtcblxuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9qcy9BcnRpY2xlLmpzXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi9qcy9Nb2RhbC5qc1wiO1xuaW1wb3J0ICB7IEFydGljbGVNb2RhbCB9IGZyb20gXCIuLi9qcy9BcnRpY2xlTW9kYWwuanNcIjtcblxuXG4vLyBjb25zdCBmaWxlUGF0aCA9IFwiLi4vaW5kZXguaHRtbFwiO1xuLy8gY29uc3QgaHRtbCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGYtOFwiKTtcbi8vIGNvbnN0IGRvbSA9IG5ldyBKU0RPTShodG1sKTtcbi8vIGdsb2JhbC53aW5kb3cgPSBkb20ud2luZG93O1xuLy8gZ2xvYmFsLmRvY3VtZW50ID0gZG9tLndpbmRvdy5kb2N1bWVudDtcblxuXG5cblxuY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogJ0luY3JlYXNpbmcgUHJvc3Blcml0eSBXaXRoIFBvc2l0aXZlIFRoaW5raW5nJyxcbiAgICAgICAgdXJsVG9JbWFnZTogJ2ltYWdlcy9zdHJhdGVnaWVzLzEuanBnJyxcbiAgICAgICAgdGFnczogWydBcnQnLCAnRGVzaWduJ10sXG4gICAgICAgIGNvbnRlbnQ6ICdLbm93aW5nIHlvdXJzZWxmIGlzIHRoZSBmaXJzdCwgYW5kIGEgdmVyeSBjcml0aWNhbCBzdGVwIGluIHRoZSBwcm9jZXNzIG9mIHBsYW5uaW5nIHlvdXIgZnV0dXJlLiBIb3cgY2FuIHlvdSBmaWd1cmUgb3V0IHdoYXQgeW91IHdhbnQgdG8gZG8gd2l0aCB5b3VyIGxpZmUgaWYgeW91IGRvbuKAmXQga25vdzogV2hhdCBhbSBJIGdvaW5nIHRvIGRvIHdpdGggdGhlICByZXN0IG9mIG15IGxpZmU/IFdoYXQgaXMgbXkgZHJlYW0gam9iPyBXaGF0IGRvIEkgZW5qb3kgZG9pbmc/IFdoYXTigJlzIG15IHBhc3Npb24/IFdoYXQga2luZCBvZiBjYXJlZXIgZml0cyBteSBwZXJzb25hbGl0eT8nLFxuICAgICAgICBkYXRlOiAnMDEuMDEuMjAyMCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiAnTW90aXZhdGlvbiBJcyBUaGUgRmlyc3QgU3RlcCBUbyBTdWNjZXNzJyxcbiAgICAgICAgdXJsVG9JbWFnZTogJ2ltYWdlcy9zdHJhdGVnaWVzLzIuanBnJyxcbiAgICAgICAgdGFnczogWydDdWx0dXJlJ10sXG4gICAgICAgIGNvbnRlbnQ6ICdLbm93aW5nIHlvdXJzZWxmIGlzIHRoZSBmaXJzdCwgYW5kIGEgdmVyeSBjcml0aWNhbCBzdGVwIGluIHRoZSBwcm9jZXNzIG9mIHBsYW5uaW5nIHlvdXIgZnV0dXJlLiBIb3cgY2FuIHlvdSBmaWd1cmUgb3V0IHdoYXQgeW91IHdhbnQgdG8gZG8gd2l0aCB5b3VyIGxpZmUgaWYgeW91IGRvbuKAmXQga25vdzogV2hhdCBhbSBJIGdvaW5nIHRvIGRvIHdpdGggdGhlICByZXN0IG9mIG15IGxpZmU/IFdoYXQgaXMgbXkgZHJlYW0gam9iPyBXaGF0IGRvIEkgZW5qb3kgZG9pbmc/IFdoYXTigJlzIG15IHBhc3Npb24/IFdoYXQga2luZCBvZiBjYXJlZXIgZml0cyBteSBwZXJzb25hbGl0eT8nLFxuICAgICAgICBkYXRlOiAnMDEuMDEuMjAyMCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiAnU3VjY2VzcyBTdGVwcyBGb3IgWW91ciBQZXJzb25hbCBPciBCdXNpbmVzcyBMaWZlJyxcbiAgICAgICAgdXJsVG9JbWFnZTogJ2ltYWdlcy9zdHJhdGVnaWVzLzMuanBnJyxcbiAgICAgICAgdGFnczogWydDdWx0dXJlJywgJ0Rlc2lnbicsICdBcnQnXSxcbiAgICAgICAgY29udGVudDogJ0tub3dpbmcgeW91cnNlbGYgaXMgdGhlIGZpcnN0LCBhbmQgYSB2ZXJ5IGNyaXRpY2FsIHN0ZXAgaW4gdGhlIHByb2Nlc3Mgb2YgcGxhbm5pbmcgeW91ciBmdXR1cmUuIEhvdyBjYW4geW91IGZpZ3VyZSBvdXQgd2hhdCB5b3Ugd2FudCB0byBkbyB3aXRoIHlvdXIgbGlmZSBpZiB5b3UgZG9u4oCZdCBrbm93OiBXaGF0IGFtIEkgZ29pbmcgdG8gZG8gd2l0aCB0aGUgIHJlc3Qgb2YgbXkgbGlmZT8gV2hhdCBpcyBteSBkcmVhbSBqb2I/IFdoYXQgZG8gSSBlbmpveSBkb2luZz8gV2hhdOKAmXMgbXkgcGFzc2lvbj8gV2hhdCBraW5kIG9mIGNhcmVlciBmaXRzIG15IHBlcnNvbmFsaXR5PycsXG4gICAgICAgIGRhdGU6ICcwMS4wMS4yMDIwJ1xuICAgIH1cbl07XG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL1JlbmRlciBhcnRpY2xlc1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJlbmRlckFydGljbGVzVG9Eb20oKVxuICAgIH1cblxuICAgIC8vVGFnc1xuICAgIGFkZFRhZ3NDbGlja0hhbmRsZXIoKTtcblxuICAgIC8vZ2VuZXJhdGUgYmFzZSBtb2RhbCBmcm9tIG1vZGFsIGNsYXNzXG4gICAgYWRkVG9vbHNDbGlja0hhbmRsZXIoKTtcblxuXG59XG5jb25zdCBhZGRUYWdzQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJhdGVnaWVzX190YWdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhZycpKSB7XG4gICAgICAgICAgICBsZXQgY2xpY2tlZFRhZyA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkVGFncygpO1xuICAgICAgICAgICAgc2VsZWN0Q2xpY2tlZFRhZyhjbGlja2VkVGFnKTtcbiAgICAgICAgICAgIGlmIChjbGlja2VkVGFnLmlubmVyVGV4dCA9PT0gJ0FsbCcpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxsU3RyYXRlZ2llcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJTdHJhdGVneUJ5U2VsZWN0ZWRUYWcoY2xpY2tlZFRhZy5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cbmNvbnN0IHJlbW92ZVNlbGVjdGVkVGFncyA9ICgpID0+IHtcbiAgICBsZXQgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdHJhdGVnaWVzX190YWdzIC50YWcnKTtcbiAgICBjb25zb2xlLmxvZyh0YWdzKTtcbiAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgdGFnLmNsYXNzTGlzdC5yZW1vdmUoJ3RhZ19zZWxlY3RlZCcpO1xuICAgICAgICB0YWcuY2xhc3NMaXN0LmFkZCgndGFnX2JvcmRlcmVkJyk7XG4gICAgfSlcbn07XG5cbmNvbnN0IHNlbGVjdENsaWNrZWRUYWcgPSAoY2xpY2tlZFRhZykgPT4ge1xuICAgIGNsaWNrZWRUYWcuY2xhc3NMaXN0LmFkZCgndGFnX3NlbGVjdGVkJyk7XG4gICAgY2xpY2tlZFRhZy5jbGFzc0xpc3QucmVtb3ZlKCd0YWdfYm9yZGVyZWQnKTtcbn07XG5jb25zdCBzaG93QWxsU3RyYXRlZ2llcyA9ICgpID0+IHtcbiAgICBsZXQgc3RyYXRlZ2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdHJhdGVneS13cmFwcGVyIC5zdHJhdGVneScpO1xuICAgIHN0cmF0ZWdpZXMuZm9yRWFjaChzdHJhdGVneSA9PiB7XG4gICAgICAgIHN0cmF0ZWd5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmF0ZWd5X2hpZGRlbicpO1xuXG4gICAgfSlcbn07XG5jb25zdCBmaWx0ZXJTdHJhdGVneUJ5U2VsZWN0ZWRUYWcgPSAoc2VsZWN0ZWRUYWcpID0+IHtcbiAgICBsZXQgc3RyYXRlZ2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdHJhdGVneS13cmFwcGVyIC5zdHJhdGVneScpO1xuICAgIHN0cmF0ZWdpZXMuZm9yRWFjaChzdHJhdGVneSA9PiB7XG4gICAgICAgIHN0cmF0ZWd5LmNsYXNzTGlzdC5hZGQoJ3N0cmF0ZWd5X2hpZGRlbicpO1xuICAgICAgICBzdHJhdGVneS5xdWVyeVNlbGVjdG9yQWxsKCcudGFnJykuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWcuaW5uZXJUZXh0ID09PSBzZWxlY3RlZFRhZykge1xuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJhdGVneV9oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0pXG59O1xuY29uc3QgcmVuZGVyQXJ0aWNsZXNUb0RvbSA9ICgpID0+IHtcbiAgbGV0IHN0cmF0ZWdpZXNXcmFwcGVyID0gZ2V0U3RyYXRlZ2llc1dyYXBwZXIoKTtcbiAgZ2VuZXJhdGVBcnRpY2xlcyhkYXRhKS5mb3JFYWNoKGFydGljbGUgPT4ge1xuICAgICAgICAgIHN0cmF0ZWdpZXNXcmFwcGVyLmFwcGVuZChhcnRpY2xlLmdlbmVyYXRlQXJ0aWNsZSgpKTtcbiAgICAgIH0pO1xuICBhZGRTdHJhdGVneUNsaWNrSGFuZGxlcigpO1xufVxuY29uc3QgZ2V0U3RyYXRlZ2llc1dyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHN0cmF0ZWdpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyYXRlZ3ktd3JhcHBlcicpO1xuICBzdHJhdGVnaWVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICByZXR1cm4gc3RyYXRlZ2llc0NvbnRhaW5lcjtcbn1cblxuY29uc3QgZ2VuZXJhdGVBcnRpY2xlcyA9IChkYXRhKSA9PiB7XG4gIGxldCBhcnRpY2xlcyA9IFtdO1xuICBkYXRhLmZvckVhY2goYXJ0aWNsZSA9PiB7XG4gICAgICBhcnRpY2xlcy5wdXNoKG5ldyBBcnRpY2xlKGFydGljbGUpKVxuICB9KTtcbiAgcmV0dXJuIGFydGljbGVzO1xufVxuXG5jb25zdCBhZGRUb29sc0NsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvb2xzX19idXR0b24gLmJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdlbmVyYXRlVG9vbHNNb2RhbCgpO1xuICB9KVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvb2xzTW9kYWwgPSAoKSA9PiB7XG4gICAgcmVuZGVyTW9kYWxXaW5kb3coJ1Rlc3QnKTtcbn1cbmNvbnN0IHJlbmRlck1vZGFsV2luZG93ID0gKGNvbnRlbnQpID0+IHtcbiAgbGV0IG1vZGFsID0gbmV3IE1vZGFsKCd0b29scy1tb2RhbCcpO1xuICBtb2RhbC5idWlsZE1vZGFsKGNvbnRlbnQpO1xufVxuXG5jb25zdCBhZGRTdHJhdGVneUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmF0ZWd5LXdyYXBwZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnN0cmF0ZWd5JykpIHtcbiAgICAgICAgbGV0IGNsaWNrZWRTdHJhdGVneUlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnN0cmF0ZWd5JykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRTdHJhdGVneUlkKTtcbiAgICAgIH1cbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==