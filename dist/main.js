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
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.js */ "./js/Modal.js");


class  ArticleModal extends _Modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0Esd0JBQXdCLG1EQUFPO0FBQy9CLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQ0FBSztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3RseS8uL2pzL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGx5Ly4vanMvQXJ0aWNsZU1vZGFsLmpzIiwid2VicGFjazovL3Byb2R1Y3RseS8uL2pzL01vZGFsLmpzIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0bHkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2R1Y3RseS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3IoeyBpZCwgdGl0bGUsIHVybFRvSW1hZ2UsIHRhZ3MsIC4uLnJlc3QgfSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy51cmxUb0ltYWdlID0gdXJsVG9JbWFnZTtcbiAgICAgICAgdGhpcy50YWdzID0gdGFncztcbiAgICB9XG4gICAgLy9BcnRpY2xlIGdlbmVyYXRvclxuICAgIGdlbmVyYXRlQXJ0aWNsZSgpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XG4gICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICBhcnRpY2xlLmNsYXNzTmFtZSA9ICdzdHJhdGVneSBibG9jay1zaGFkb3dlZCc7XG4gICAgICAgIGFydGljbGUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGhpcy5pZCk7XG5cbiAgICAgICAgdGhpcy51cmxUb0ltYWdlICYmICh0ZW1wbGF0ZSArPSBgPGltZyBjbGFzcz1cInN0cmF0ZWd5X19pbWFnZVwiIHNyYz0ke3RoaXMudXJsVG9JbWFnZX0gYWx0PVwic3RyYXRlZ3lcIj5gKVxuXG4gICAgICAgIGlmICh0aGlzLnRpdGxlIHx8IHRoaXMudGFncykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxkaXYgY2xhc3M9XCJzdHJhdGVneV9fY29udGVudFwiPmBcbiAgICAgICAgICAgIHRoaXMudGl0bGUgJiYgKHRlbXBsYXRlICs9IGA8aDMgY2xhc3M9XCJzdHJhdGVneV9fbmFtZVwiPiR7dGhpcy50aXRsZX08L2gzPmApXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRhZ3Mpe1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8ZGl2IGNsYXNzPVwic3RyYXRlZ3lfX3RhZ3MgdGFnc1wiPmBcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8c3BhbiBjbGFzcz1cInRhZyB0YWdfY29sb3JlZFwiPiR7dGFnfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPC9kaXY+YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPC9kaXY+YFxuICAgICAgICB9XG4gICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIHJldHVybiBhcnRpY2xlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vTW9kYWwuanMnO1xuXG5leHBvcnQgY2xhc3MgIEFydGljbGVNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFzc2VzLCB7aWQsIHRpdGxlLCB1cmxUb0ltYWdlLCB0YWdzLCBjb250ZW50LCBkYXRlIH0pIHtcbiAgICAgICAgc3VwZXIoY2xhc3Nlcyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnVybFRvSW1hZ2UgPSB1cmxUb0ltYWdlO1xuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIC8vQXJ0aWNsZSBtb2RhbCBnZW5lcmF0b3JcbiAgICBnZW5lcmF0ZUNvbnRlbnQoKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xuICAgICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcnRpY2xlLmNsYXNzTmFtZSA9ICdhcnRpY2xlLW1vZGFsX19jb250ZW50JztcblxuICAgICAgICB0aGlzLnVybFRvSW1hZ2UgJiYgKHRlbXBsYXRlICs9IGA8aW1nIGNsYXNzPVwic3RyYXRlZ3lfX2ltYWdlXCIgc3JjPSR7dGhpcy51cmxUb0ltYWdlfSBhbHQ9XCJzdHJhdGVneVwiPmApXG5cbiAgICAgICAgaWYgKHRoaXMudGl0bGUgfHwgdGhpcy50YWdzIHx8IHRoaXMuY29udGVudCB8fCB0aGlzLmRhdGUpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8ZGl2IGNsYXNzPVwic3RyYXRlZ3lfX2NvbnRlbnRcIj5gXG5cbiAgICAgICAgICAgIHRoaXMuZGF0ZSAmJiAodGVtcGxhdGUgKz0gYDxwIGNsYXNzPVwic3RyYXRlZ3lfX2RhdGVcIj4ke3RoaXMuZGF0ZX08L3A+YClcblxuICAgICAgICAgICAgdGhpcy50aXRsZSAmJiAodGVtcGxhdGUgKz0gYDxoMyBjbGFzcz1cInN0cmF0ZWd5X19uYW1lXCI+JHt0aGlzLnRpdGxlfTwvaDM+YClcblxuICAgICAgICAgICAgdGhpcy5jb250ZW50ICYmICh0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJzdHJhdGVneV9fdGV4dFwiPiR7dGhpcy5jb250ZW50fTwvcD5gKVxuXG4gICAgICAgICAgICBpZiAodGhpcy50YWdzKXtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPGRpdiBjbGFzcz1cInN0cmF0ZWd5X190YWdzIHRhZ3NcIj5gXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPHNwYW4gY2xhc3M9XCJ0YWcgdGFnX2NvbG9yZWRcIj4ke3RhZ308L3NwYW4+YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDwvZGl2PmBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDwvZGl2PmBcbiAgICAgICAgfVxuICAgICAgICBhcnRpY2xlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICByZXR1cm4gYXJ0aWNsZTtcbiAgICB9XG4gICAgcmVuZGVyTW9kYWwoKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZW5lcmF0ZUNvbnRlbnQoKTtcbiAgICAgICAgc3VwZXIuYnVpbGRNb2RhbChjb250ZW50KTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFzc2VzKSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XG4gICAgICAgIHRoaXMubW9kYWwgPSAnJztcbiAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5tb2RhbENsb3NlQnRuID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9ICcnO1xuICAgIH1cblxuICAgIGJ1aWxkTW9kYWwoY29udGVudCkge1xuICAgICAgICAvL092ZXJsYXlcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gdGhpcy5jcmVhdGVEb21Ob2RlKHRoaXMub3ZlcmxheSwgJ2RpdicsJ292ZXJsYXknLCAnb3ZlcmxheV9tb2RhbCcpO1xuXG4gICAgICAgIC8vTW9kYWxcbiAgICAgICAgdGhpcy5tb2RhbCA9IHRoaXMuY3JlYXRlRG9tTm9kZSh0aGlzLm1vZGFsLCAnZGl2JywnbW9kYWwnLCB0aGlzLmNsYXNzZXMpO1xuXG4gICAgICAgIC8vTW9kYWwgY29udGVudFxuICAgICAgICB0aGlzLm1vZGFsQ29udGVudCA9IHRoaXMuY3JlYXRlRG9tTm9kZSh0aGlzLm1vZGFsQ29udGVudCwnZGl2JywgJ21vZGFsX19jb250ZW50JylcblxuICAgICAgICAvL0Nsb3NlQnRuXG4gICAgICAgIHRoaXMubW9kYWxDbG9zZUJ0biA9IHRoaXMuY3JlYXRlRG9tTm9kZSh0aGlzLm1vZGFsQ2xvc2VCdG4sJ3NwYW4nLCAnbW9kYWxfX2Nsb3NlLWljb24nKTtcbiAgICAgICAgdGhpcy5tb2RhbENsb3NlQnRuLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjFcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjEgMjJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cXG4nICtcbiAgICAgICAgICAgICc8cGF0aCBkPVwiTTEyLjQyMzkgMTAuNTE3M0wyMC42MDA5IDIuMzQwMDVDMjEuMTMzMSAxLjgwODE1IDIxLjEzMzEgMC45NDgxNSAyMC42MDA5IDAuNDE2MjU1QzIwLjA2OSAtMC4xMTU2NCAxOS4yMDkgLTAuMTE1NjQgMTguNjc3MSAwLjQxNjI1NUwxMC40OTk5IDguNTkzNDlMMi4zMjI5IDAuNDE2MjU1QzEuNzkwNzYgLTAuMTE1NjQgMC45MzEwMDQgLTAuMTE1NjQgMC4zOTkxMDggMC40MTYyNTVDLTAuMTMzMDM2IDAuOTQ4MTUgLTAuMTMzMDM2IDEuODA4MTUgMC4zOTkxMDggMi4zNDAwNUw4LjU3NjEgMTAuNTE3M0wwLjM5OTEwOCAxOC42OTQ1Qy0wLjEzMzAzNiAxOS4yMjY0IC0wLjEzMzAzNiAyMC4wODY0IDAuMzk5MTA4IDIwLjYxODNDMC42NjQxODQgMjAuODgzNiAxLjAxMjcyIDIxLjAxNjkgMS4zNjEgMjEuMDE2OUMxLjcwOTI5IDIxLjAxNjkgMi4wNTc1OCAyMC44ODM2IDIuMzIyOSAyMC42MTgzTDEwLjQ5OTkgMTIuNDQxMUwxOC42NzcxIDIwLjYxODNDMTguOTQyNSAyMC44ODM2IDE5LjI5MDcgMjEuMDE2OSAxOS42MzkgMjEuMDE2OUMxOS45ODczIDIxLjAxNjkgMjAuMzM1NiAyMC44ODM2IDIwLjYwMDkgMjAuNjE4M0MyMS4xMzMxIDIwLjA4NjQgMjEuMTMzMSAxOS4yMjY0IDIwLjYwMDkgMTguNjk0NUwxMi40MjM5IDEwLjUxNzNaXCIgZmlsbD1cIiMyRjI4MUVcIi8+XFxuJyArXG4gICAgICAgICAgICAnPC9zdmc+J1xuICAgICAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgICAgIHRoaXMuYXBwZW5kTW9kYWxFbGVtZW50cygpO1xuXG4gICAgICAgIC8vQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cblxuICAgICAgICAvL09wZW4gbW9kYWxcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEb21Ob2RlKG5vZGUsIGVsZW1lbnQsIC4uLmNsYXNzZXMpIHtcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwZW5kTW9kYWxFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5hcHBlbmQodGhpcy5tb2RhbENsb3NlQnRuKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hcHBlbmQodGhpcy5tb2RhbENvbnRlbnQpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYXBwZW5kKHRoaXMubW9kYWwpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNb2RhbCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNb2RhbCk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGVzdCBvcGVuTW9kYWwnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5vdmVybGF5KTtcbiAgICB9XG4gICAgY2xvc2VNb2RhbChlKSB7XG4gICAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICAgICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc2VzID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuICAgICAgICAgICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ292ZXJsYXknKSB8fCBjbGFzc2VzLmNvbnRhaW5zKCdtb2RhbF9fY2xvc2UtaWNvbicpKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLy8gaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuLy8gaW1wb3J0IGpzZG9tIGZyb20gXCJqc2RvbVwiO1xuLy8gY29uc3QgeyBKU0RPTSB9ID0ganNkb207XG5cbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi4vanMvQXJ0aWNsZS5qc1wiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vanMvTW9kYWwuanNcIjtcbmltcG9ydCAgeyBBcnRpY2xlTW9kYWwgfSBmcm9tIFwiLi4vanMvQXJ0aWNsZU1vZGFsLmpzXCI7XG5cblxuLy8gY29uc3QgZmlsZVBhdGggPSBcIi4uL2luZGV4Lmh0bWxcIjtcbi8vIGNvbnN0IGh0bWwgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmLThcIik7XG4vLyBjb25zdCBkb20gPSBuZXcgSlNET00oaHRtbCk7XG4vLyBnbG9iYWwud2luZG93ID0gZG9tLndpbmRvdztcbi8vIGdsb2JhbC5kb2N1bWVudCA9IGRvbS53aW5kb3cuZG9jdW1lbnQ7XG5cblxuXG5cbmNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6ICdJbmNyZWFzaW5nIFByb3NwZXJpdHkgV2l0aCBQb3NpdGl2ZSBUaGlua2luZycsXG4gICAgICAgIHVybFRvSW1hZ2U6ICdpbWFnZXMvc3RyYXRlZ2llcy8xLmpwZycsXG4gICAgICAgIHRhZ3M6IFsnQXJ0JywgJ0Rlc2lnbiddLFxuICAgICAgICBjb250ZW50OiAnS25vd2luZyB5b3Vyc2VsZiBpcyB0aGUgZmlyc3QsIGFuZCBhIHZlcnkgY3JpdGljYWwgc3RlcCBpbiB0aGUgcHJvY2VzcyBvZiBwbGFubmluZyB5b3VyIGZ1dHVyZS4gSG93IGNhbiB5b3UgZmlndXJlIG91dCB3aGF0IHlvdSB3YW50IHRvIGRvIHdpdGggeW91ciBsaWZlIGlmIHlvdSBkb27igJl0IGtub3c6IFdoYXQgYW0gSSBnb2luZyB0byBkbyB3aXRoIHRoZSAgcmVzdCBvZiBteSBsaWZlPyBXaGF0IGlzIG15IGRyZWFtIGpvYj8gV2hhdCBkbyBJIGVuam95IGRvaW5nPyBXaGF04oCZcyBteSBwYXNzaW9uPyBXaGF0IGtpbmQgb2YgY2FyZWVyIGZpdHMgbXkgcGVyc29uYWxpdHk/JyxcbiAgICAgICAgZGF0ZTogJzAxLjAxLjIwMjAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICB0aXRsZTogJ01vdGl2YXRpb24gSXMgVGhlIEZpcnN0IFN0ZXAgVG8gU3VjY2VzcycsXG4gICAgICAgIHVybFRvSW1hZ2U6ICdpbWFnZXMvc3RyYXRlZ2llcy8yLmpwZycsXG4gICAgICAgIHRhZ3M6IFsnQ3VsdHVyZSddLFxuICAgICAgICBjb250ZW50OiAnS25vd2luZyB5b3Vyc2VsZiBpcyB0aGUgZmlyc3QsIGFuZCBhIHZlcnkgY3JpdGljYWwgc3RlcCBpbiB0aGUgcHJvY2VzcyBvZiBwbGFubmluZyB5b3VyIGZ1dHVyZS4gSG93IGNhbiB5b3UgZmlndXJlIG91dCB3aGF0IHlvdSB3YW50IHRvIGRvIHdpdGggeW91ciBsaWZlIGlmIHlvdSBkb27igJl0IGtub3c6IFdoYXQgYW0gSSBnb2luZyB0byBkbyB3aXRoIHRoZSAgcmVzdCBvZiBteSBsaWZlPyBXaGF0IGlzIG15IGRyZWFtIGpvYj8gV2hhdCBkbyBJIGVuam95IGRvaW5nPyBXaGF04oCZcyBteSBwYXNzaW9uPyBXaGF0IGtpbmQgb2YgY2FyZWVyIGZpdHMgbXkgcGVyc29uYWxpdHk/JyxcbiAgICAgICAgZGF0ZTogJzAxLjAxLjIwMjAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgU3RlcHMgRm9yIFlvdXIgUGVyc29uYWwgT3IgQnVzaW5lc3MgTGlmZScsXG4gICAgICAgIHVybFRvSW1hZ2U6ICdpbWFnZXMvc3RyYXRlZ2llcy8zLmpwZycsXG4gICAgICAgIHRhZ3M6IFsnQ3VsdHVyZScsICdEZXNpZ24nLCAnQXJ0J10sXG4gICAgICAgIGNvbnRlbnQ6ICdLbm93aW5nIHlvdXJzZWxmIGlzIHRoZSBmaXJzdCwgYW5kIGEgdmVyeSBjcml0aWNhbCBzdGVwIGluIHRoZSBwcm9jZXNzIG9mIHBsYW5uaW5nIHlvdXIgZnV0dXJlLiBIb3cgY2FuIHlvdSBmaWd1cmUgb3V0IHdoYXQgeW91IHdhbnQgdG8gZG8gd2l0aCB5b3VyIGxpZmUgaWYgeW91IGRvbuKAmXQga25vdzogV2hhdCBhbSBJIGdvaW5nIHRvIGRvIHdpdGggdGhlICByZXN0IG9mIG15IGxpZmU/IFdoYXQgaXMgbXkgZHJlYW0gam9iPyBXaGF0IGRvIEkgZW5qb3kgZG9pbmc/IFdoYXTigJlzIG15IHBhc3Npb24/IFdoYXQga2luZCBvZiBjYXJlZXIgZml0cyBteSBwZXJzb25hbGl0eT8nLFxuICAgICAgICBkYXRlOiAnMDEuMDEuMjAyMCdcbiAgICB9XG5dO1xuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9SZW5kZXIgYXJ0aWNsZXNcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICByZW5kZXJBcnRpY2xlc1RvRG9tKClcbiAgICB9XG5cbiAgICAvL1RhZ3NcbiAgICBhZGRUYWdzQ2xpY2tIYW5kbGVyKCk7XG5cbiAgICAvL2dlbmVyYXRlIGJhc2UgbW9kYWwgZnJvbSBtb2RhbCBjbGFzc1xuICAgIGFkZFRvb2xzQ2xpY2tIYW5kbGVyKCk7XG5cblxufVxuY29uc3QgYWRkVGFnc0NsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyYXRlZ2llc19fdGFncycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWcnKSkge1xuICAgICAgICAgICAgbGV0IGNsaWNrZWRUYWcgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICByZW1vdmVTZWxlY3RlZFRhZ3MoKTtcbiAgICAgICAgICAgIHNlbGVjdENsaWNrZWRUYWcoY2xpY2tlZFRhZyk7XG4gICAgICAgICAgICBpZiAoY2xpY2tlZFRhZy5pbm5lclRleHQgPT09ICdBbGwnKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FsbFN0cmF0ZWdpZXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyU3RyYXRlZ3lCeVNlbGVjdGVkVGFnKGNsaWNrZWRUYWcuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5jb25zdCByZW1vdmVTZWxlY3RlZFRhZ3MgPSAoKSA9PiB7XG4gICAgbGV0IHRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RyYXRlZ2llc19fdGFncyAudGFnJyk7XG4gICAgY29uc29sZS5sb2codGFncyk7XG4gICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgIHRhZy5jbGFzc0xpc3QucmVtb3ZlKCd0YWdfc2VsZWN0ZWQnKTtcbiAgICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3RhZ19ib3JkZXJlZCcpO1xuICAgIH0pXG59O1xuXG5jb25zdCBzZWxlY3RDbGlja2VkVGFnID0gKGNsaWNrZWRUYWcpID0+IHtcbiAgICBjbGlja2VkVGFnLmNsYXNzTGlzdC5hZGQoJ3RhZ19zZWxlY3RlZCcpO1xuICAgIGNsaWNrZWRUYWcuY2xhc3NMaXN0LnJlbW92ZSgndGFnX2JvcmRlcmVkJyk7XG59O1xuY29uc3Qgc2hvd0FsbFN0cmF0ZWdpZXMgPSAoKSA9PiB7XG4gICAgbGV0IHN0cmF0ZWdpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RyYXRlZ3ktd3JhcHBlciAuc3RyYXRlZ3knKTtcbiAgICBzdHJhdGVnaWVzLmZvckVhY2goc3RyYXRlZ3kgPT4ge1xuICAgICAgICBzdHJhdGVneS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJhdGVneV9oaWRkZW4nKTtcblxuICAgIH0pXG59O1xuY29uc3QgZmlsdGVyU3RyYXRlZ3lCeVNlbGVjdGVkVGFnID0gKHNlbGVjdGVkVGFnKSA9PiB7XG4gICAgbGV0IHN0cmF0ZWdpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RyYXRlZ3ktd3JhcHBlciAuc3RyYXRlZ3knKTtcbiAgICBzdHJhdGVnaWVzLmZvckVhY2goc3RyYXRlZ3kgPT4ge1xuICAgICAgICBzdHJhdGVneS5jbGFzc0xpc3QuYWRkKCdzdHJhdGVneV9oaWRkZW4nKTtcbiAgICAgICAgc3RyYXRlZ3kucXVlcnlTZWxlY3RvckFsbCgnLnRhZycpLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFnLmlubmVyVGV4dCA9PT0gc2VsZWN0ZWRUYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3kuY2xhc3NMaXN0LnJlbW92ZSgnc3RyYXRlZ3lfaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9KVxufTtcblxuY29uc3QgcmVuZGVyQXJ0aWNsZXNUb0RvbSA9ICgpID0+IHtcbiAgbGV0IHN0cmF0ZWdpZXNXcmFwcGVyID0gZ2V0U3RyYXRlZ2llc1dyYXBwZXIoKTtcbiAgZ2VuZXJhdGVBcnRpY2xlcyhkYXRhKS5mb3JFYWNoKGFydGljbGUgPT4ge1xuICAgICAgICAgIHN0cmF0ZWdpZXNXcmFwcGVyLmFwcGVuZChhcnRpY2xlLmdlbmVyYXRlQXJ0aWNsZSgpKTtcbiAgICAgIH0pO1xuICBhZGRTdHJhdGVneUNsaWNrSGFuZGxlcigpO1xufVxuY29uc3QgZ2V0U3RyYXRlZ2llc1dyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHN0cmF0ZWdpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyYXRlZ3ktd3JhcHBlcicpO1xuICBzdHJhdGVnaWVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICByZXR1cm4gc3RyYXRlZ2llc0NvbnRhaW5lcjtcbn1cblxuY29uc3QgZ2VuZXJhdGVBcnRpY2xlcyA9IChkYXRhKSA9PiB7XG4gIGxldCBhcnRpY2xlcyA9IFtdO1xuICBkYXRhLmZvckVhY2goYXJ0aWNsZSA9PiB7XG4gICAgICBhcnRpY2xlcy5wdXNoKG5ldyBBcnRpY2xlKGFydGljbGUpKVxuICB9KTtcbiAgcmV0dXJuIGFydGljbGVzO1xufVxuXG5jb25zdCBhZGRUb29sc0NsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvb2xzX19idXR0b24gLmJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdlbmVyYXRlVG9vbHNNb2RhbCgpO1xuICB9KVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvb2xzTW9kYWwgPSAoKSA9PiB7XG4gICAgcmVuZGVyTW9kYWxXaW5kb3coJ1Rlc3QnKTtcbn1cbmNvbnN0IHJlbmRlck1vZGFsV2luZG93ID0gKGNvbnRlbnQpID0+IHtcbiAgbGV0IG1vZGFsID0gbmV3IE1vZGFsKCd0b29scy1tb2RhbCcpO1xuICBtb2RhbC5idWlsZE1vZGFsKGNvbnRlbnQpO1xufVxuXG5jb25zdCBhZGRTdHJhdGVneUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmF0ZWd5LXdyYXBwZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnN0cmF0ZWd5JykpIHtcbiAgICAgICAgbGV0IGNsaWNrZWRTdHJhdGVneUlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnN0cmF0ZWd5JykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRTdHJhdGVneUlkKTtcbiAgICAgIH1cbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==