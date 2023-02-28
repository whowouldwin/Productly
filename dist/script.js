/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Article.js":
/*!***********************!*\
  !*** ./js/Article.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Article": () => (/* binding */ Article)
/* harmony export */ });
class Article {
  constructor(_ref) {
    let {
      id,
      title,
      urlToImage,
      tags,
      ...rest
    } = _ref;
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
    this.urlToImage && (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);
    if (this.title || this.tags) {
      template += `<div class="strategy__content">`;
      this.title && (template += `<h3 class="strategy__name">${this.title}</h3>`);
      if (this.tags) {
        template += `<div class="strategy__tags tags">`;
        this.tags.map(tag => {
          template += `<span class="tag tag_colored">${tag}</span>`;
        });
        template += `</div>`;
      }
      template += `</div>`;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleModal": () => (/* binding */ ArticleModal)
/* harmony export */ });
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.js */ "./js/Modal.js");

class ArticleModal extends _Modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal {
  constructor(classes, _ref) {
    let {
      id,
      title,
      urlToImage,
      tags,
      content,
      date
    } = _ref;
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
    this.urlToImage && (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);
    if (this.title || this.tags || this.content || this.date) {
      template += `<div class="strategy__content">`;
      this.date && (template += `<p class="strategy__date">${this.date}</p>`);
      this.title && (template += `<h3 class="strategy__name">${this.title}</h3>`);
      this.content && (template += `<p class="strategy__text">${this.content}</p>`);
      if (this.tags) {
        template += `<div class="strategy__tags tags">`;
        this.tags.map(tag => {
          template += `<span class="tag tag_colored">${tag}</span>`;
        });
        template += `</div>`;
      }
      template += `</div>`;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

    //Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    //Modal content
    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

    //CloseBtn
    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
    this.modalCloseBtn.innerHTML = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M12.4239 10.5173L20.6009 2.34005C21.1331 1.80815 21.1331 0.94815 20.6009 0.416255C20.069 -0.11564 19.209 -0.11564 18.6771 0.416255L10.4999 8.59349L2.3229 0.416255C1.79076 -0.11564 0.931004 -0.11564 0.399108 0.416255C-0.133036 0.94815 -0.133036 1.80815 0.399108 2.34005L8.5761 10.5173L0.399108 18.6945C-0.133036 19.2264 -0.133036 20.0864 0.399108 20.6183C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6183L10.4999 12.4411L18.6771 20.6183C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6183C21.1331 20.0864 21.1331 19.2264 20.6009 18.6945L12.4239 10.5173Z" fill="#2F281E"/>\n' + '</svg>';
    this.setContent(content);
    this.appendModalElements();

    //Bind events
    this.bindEvents();

    //Open modal
    this.openModal();
  }
  createDomNode(node, element) {
    node = document.createElement(element);
    for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classes[_key - 2] = arguments[_key];
    }
    node.classList.add(...classes);
    return node;
  }
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

const data = [{
  id: 1,
  title: 'Increasing Prosperity With Positive Thinking',
  urlToImage: 'images/strategies/1.jpg',
  tags: ['Art', 'Design'],
  content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
  date: '01.01.2020'
}, {
  id: 2,
  title: 'Motivation Is The First Step To Success',
  urlToImage: 'images/strategies/2.jpg',
  tags: ['Culture'],
  content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
  date: '01.01.2020'
}, {
  id: 3,
  title: 'Success Steps For Your Personal Or Business Life',
  urlToImage: 'images/strategies/3.jpg',
  tags: ['Culture', 'Design', 'Art'],
  content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
  date: '01.01.2020'
}];
window.onload = function () {
  //Render articles
  if (data) {
    renderArticlesToDom();
  }

  //Tags
  addTagsClickHandler();

  //generate base modal from modal class
  addToolsClickHandler();
};
const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', event => {
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
  });
};
const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  console.log(tags);
  tags.forEach(tag => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};
const selectClickedTag = clickedTag => {
  clickedTag.classList.add('tag_selected');
  clickedTag.classList.remove('tag_bordered');
};
const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.remove('strategy_hidden');
  });
};
const filterStrategyBySelectedTag = selectedTag => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.tag').forEach(tag => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy_hidden');
      }
    });
  });
};
const renderArticlesToDom = () => {
  let strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach(article => {
    strategiesWrapper.append(article.generateArticle());
  });
  addStrategyClickHandler();
};
const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector('.strategy-wrapper');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
};
const generateArticles = data => {
  let articles = [];
  data.forEach(article => {
    articles.push(new _js_Article_js__WEBPACK_IMPORTED_MODULE_0__.Article(article));
  });
  return articles;
};
const addToolsClickHandler = () => {
  document.querySelector('.tools__button .button').addEventListener('click', () => {
    generateToolsModal();
  });
};
const generateToolsModal = () => {
  renderModalWindow('Test');
};
const renderModalWindow = content => {
  let modal = new _js_Modal_js__WEBPACK_IMPORTED_MODULE_1__.Modal('tools-modal');
  modal.buildModal(content);
};
const addStrategyClickHandler = () => {
  document.querySelector('.strategy-wrapper').addEventListener('click', e => {
    if (e.target.closest('.strategy')) {
      let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
      console.log(clickedStrategyId);
      let clickedStrategyData = getClickedData(clickedStrategyId);
      renderArticleModalWindow(clickedStrategyData);
    }
  });
};
const getClickedData = id => {
  return data.find(article => article.id == id);
};
const renderArticleModalWindow = article => {
  let modal = new _js_ArticleModal_js__WEBPACK_IMPORTED_MODULE_2__.ArticleModal('article-modal', article);
  modal.renderModal();
};
//test git
})();

/******/ })()
;
//# sourceMappingURL=script.js.map