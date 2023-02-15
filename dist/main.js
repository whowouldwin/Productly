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
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay_modal');

        //Modal
        this.modal = this.createDomNode(this.modal, 'div', this.classes );

        //Modal content
        this.modalContent = this.createDomNode(this.modalContent,'div', 'modal__content')

        //CloseBtn
        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn,'span', 'modal__close-icon');
        this.modalCloseBtn.innerHTML = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M12.4239 10.5173L20.6009 2.34005C21.1331 1.80815 21.1331 0.94815 20.6009 0.416255C20.069 -0.11564 19.209 -0.11564 18.6771 0.416255L10.4999 8.59349L2.3229 0.416255C1.79076 -0.11564 0.931004 -0.11564 0.399108 0.416255C-0.133036 0.94815 -0.133036 1.80815 0.399108 2.34005L8.5761 10.5173L0.399108 18.6945C-0.133036 19.2264 -0.133036 20.0864 0.399108 20.6183C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6183L10.4999 12.4411L18.6771 20.6183C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6183C21.1331 20.0864 21.1331 19.2264 20.6009 18.6945L12.4239 10.5173Z" fill="#2F281E"/>\n' +
            '</svg>'
        this.setContent(content);
        this.appendModalElements();

        console.log(this.modal);

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
    debugger;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1Asa0JBQWtCLHNDQUFzQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRFQUE0RSxpQkFBaUI7O0FBRTdGO0FBQ0E7QUFDQSxxRUFBcUUsV0FBVzs7QUFFaEY7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLElBQUk7QUFDckUsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7O0FBRXdCO0FBQ0o7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFPO0FBQy9CLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFLO0FBQ3ZCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0bHkvLi9qcy9BcnRpY2xlLmpzIiwid2VicGFjazovL3Byb2R1Y3RseS8uL2pzL01vZGFsLmpzIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0bHkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2R1Y3RseS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3IoeyBpZCwgdGl0bGUsIHVybFRvSW1hZ2UsIHRhZ3MsIC4uLnJlc3QgfSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy51cmxUb0ltYWdlID0gdXJsVG9JbWFnZTtcbiAgICAgICAgdGhpcy50YWdzID0gdGFncztcbiAgICB9XG4gICAgLy9BcnRpY2xlIGdlbmVyYXRvclxuICAgIGdlbmVyYXRlQXJ0aWNsZSgpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XG4gICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICBhcnRpY2xlLmNsYXNzTmFtZSA9ICdzdHJhdGVneSBibG9jay1zaGFkb3dlZCc7XG4gICAgICAgIGFydGljbGUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGhpcy5pZCk7XG5cbiAgICAgICAgdGhpcy51cmxUb0ltYWdlICYmICh0ZW1wbGF0ZSArPSBgPGltZyBjbGFzcz1cInN0cmF0ZWd5X19pbWFnZVwiIHNyYz0ke3RoaXMudXJsVG9JbWFnZX0gYWx0PVwic3RyYXRlZ3lcIj5gKVxuXG4gICAgICAgIGlmICh0aGlzLnRpdGxlIHx8IHRoaXMudGFncykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxkaXYgY2xhc3M9XCJzdHJhdGVneV9fY29udGVudFwiPmBcbiAgICAgICAgICAgIHRoaXMudGl0bGUgJiYgKHRlbXBsYXRlICs9IGA8aDMgY2xhc3M9XCJzdHJhdGVneV9fbmFtZVwiPiR7dGhpcy50aXRsZX08L2gzPmApXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRhZ3Mpe1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8ZGl2IGNsYXNzPVwic3RyYXRlZ3lfX3RhZ3MgdGFnc1wiPmBcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8c3BhbiBjbGFzcz1cInRhZyB0YWdfY29sb3JlZFwiPiR7dGFnfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPC9kaXY+YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPC9kaXY+YFxuICAgICAgICB9XG4gICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIHJldHVybiBhcnRpY2xlO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzZXMpIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcbiAgICAgICAgdGhpcy5tb2RhbCA9ICcnO1xuICAgICAgICB0aGlzLm1vZGFsQ29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLm1vZGFsQ2xvc2VCdG4gPSAnJztcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gJyc7XG4gICAgfVxuXG4gICAgYnVpbGRNb2RhbChjb250ZW50KSB7XG4gICAgICAgIC8vT3ZlcmxheVxuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmNyZWF0ZURvbU5vZGUodGhpcy5vdmVybGF5LCAnZGl2JywgJ292ZXJsYXlfbW9kYWwnKTtcblxuICAgICAgICAvL01vZGFsXG4gICAgICAgIHRoaXMubW9kYWwgPSB0aGlzLmNyZWF0ZURvbU5vZGUodGhpcy5tb2RhbCwgJ2RpdicsIHRoaXMuY2xhc3NlcyApO1xuXG4gICAgICAgIC8vTW9kYWwgY29udGVudFxuICAgICAgICB0aGlzLm1vZGFsQ29udGVudCA9IHRoaXMuY3JlYXRlRG9tTm9kZSh0aGlzLm1vZGFsQ29udGVudCwnZGl2JywgJ21vZGFsX19jb250ZW50JylcblxuICAgICAgICAvL0Nsb3NlQnRuXG4gICAgICAgIHRoaXMubW9kYWxDbG9zZUJ0biA9IHRoaXMuY3JlYXRlRG9tTm9kZSh0aGlzLm1vZGFsQ2xvc2VCdG4sJ3NwYW4nLCAnbW9kYWxfX2Nsb3NlLWljb24nKTtcbiAgICAgICAgdGhpcy5tb2RhbENsb3NlQnRuLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjFcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjEgMjJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cXG4nICtcbiAgICAgICAgICAgICc8cGF0aCBkPVwiTTEyLjQyMzkgMTAuNTE3M0wyMC42MDA5IDIuMzQwMDVDMjEuMTMzMSAxLjgwODE1IDIxLjEzMzEgMC45NDgxNSAyMC42MDA5IDAuNDE2MjU1QzIwLjA2OSAtMC4xMTU2NCAxOS4yMDkgLTAuMTE1NjQgMTguNjc3MSAwLjQxNjI1NUwxMC40OTk5IDguNTkzNDlMMi4zMjI5IDAuNDE2MjU1QzEuNzkwNzYgLTAuMTE1NjQgMC45MzEwMDQgLTAuMTE1NjQgMC4zOTkxMDggMC40MTYyNTVDLTAuMTMzMDM2IDAuOTQ4MTUgLTAuMTMzMDM2IDEuODA4MTUgMC4zOTkxMDggMi4zNDAwNUw4LjU3NjEgMTAuNTE3M0wwLjM5OTEwOCAxOC42OTQ1Qy0wLjEzMzAzNiAxOS4yMjY0IC0wLjEzMzAzNiAyMC4wODY0IDAuMzk5MTA4IDIwLjYxODNDMC42NjQxODQgMjAuODgzNiAxLjAxMjcyIDIxLjAxNjkgMS4zNjEgMjEuMDE2OUMxLjcwOTI5IDIxLjAxNjkgMi4wNTc1OCAyMC44ODM2IDIuMzIyOSAyMC42MTgzTDEwLjQ5OTkgMTIuNDQxMUwxOC42NzcxIDIwLjYxODNDMTguOTQyNSAyMC44ODM2IDE5LjI5MDcgMjEuMDE2OSAxOS42MzkgMjEuMDE2OUMxOS45ODczIDIxLjAxNjkgMjAuMzM1NiAyMC44ODM2IDIwLjYwMDkgMjAuNjE4M0MyMS4xMzMxIDIwLjA4NjQgMjEuMTMzMSAxOS4yMjY0IDIwLjYwMDkgMTguNjk0NUwxMi40MjM5IDEwLjUxNzNaXCIgZmlsbD1cIiMyRjI4MUVcIi8+XFxuJyArXG4gICAgICAgICAgICAnPC9zdmc+J1xuICAgICAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgICAgIHRoaXMuYXBwZW5kTW9kYWxFbGVtZW50cygpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kYWwpO1xuXG4gICAgfVxuXG4gICAgY3JlYXRlRG9tTm9kZShub2RlLCBlbGVtZW50LCAuLi5jbGFzc2VzKSB7XG4gICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMubW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZE1vZGFsRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuYXBwZW5kKHRoaXMubW9kYWxDbG9zZUJ0bik7XG4gICAgICAgIHRoaXMubW9kYWwuYXBwZW5kKHRoaXMubW9kYWxDb250ZW50KTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFwcGVuZCh0aGlzLm1vZGFsKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8vIGltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbi8vIGltcG9ydCBqc2RvbSBmcm9tIFwianNkb21cIjtcbi8vIGNvbnN0IHsgSlNET00gfSA9IGpzZG9tO1xuXG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4uL2pzL0FydGljbGUuanNcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uL2pzL01vZGFsLmpzXCI7XG5cbi8vIGNvbnN0IGZpbGVQYXRoID0gXCIuLi9pbmRleC5odG1sXCI7XG4vLyBjb25zdCBodG1sID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0Zi04XCIpO1xuLy8gY29uc3QgZG9tID0gbmV3IEpTRE9NKGh0bWwpO1xuLy8gZ2xvYmFsLndpbmRvdyA9IGRvbS53aW5kb3c7XG4vLyBnbG9iYWwuZG9jdW1lbnQgPSBkb20ud2luZG93LmRvY3VtZW50O1xuXG5cblxuXG5jb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiAnSW5jcmVhc2luZyBQcm9zcGVyaXR5IFdpdGggUG9zaXRpdmUgVGhpbmtpbmcnLFxuICAgICAgICB1cmxUb0ltYWdlOiAnaW1hZ2VzL3N0cmF0ZWdpZXMvMS5qcGcnLFxuICAgICAgICB0YWdzOiBbJ0FydCcsICdEZXNpZ24nXSxcbiAgICAgICAgY29udGVudDogJ0tub3dpbmcgeW91cnNlbGYgaXMgdGhlIGZpcnN0LCBhbmQgYSB2ZXJ5IGNyaXRpY2FsIHN0ZXAgaW4gdGhlIHByb2Nlc3Mgb2YgcGxhbm5pbmcgeW91ciBmdXR1cmUuIEhvdyBjYW4geW91IGZpZ3VyZSBvdXQgd2hhdCB5b3Ugd2FudCB0byBkbyB3aXRoIHlvdXIgbGlmZSBpZiB5b3UgZG9u4oCZdCBrbm93OiBXaGF0IGFtIEkgZ29pbmcgdG8gZG8gd2l0aCB0aGUgIHJlc3Qgb2YgbXkgbGlmZT8gV2hhdCBpcyBteSBkcmVhbSBqb2I/IFdoYXQgZG8gSSBlbmpveSBkb2luZz8gV2hhdOKAmXMgbXkgcGFzc2lvbj8gV2hhdCBraW5kIG9mIGNhcmVlciBmaXRzIG15IHBlcnNvbmFsaXR5PycsXG4gICAgICAgIGRhdGU6ICcwMS4wMS4yMDIwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6ICdNb3RpdmF0aW9uIElzIFRoZSBGaXJzdCBTdGVwIFRvIFN1Y2Nlc3MnLFxuICAgICAgICB1cmxUb0ltYWdlOiAnaW1hZ2VzL3N0cmF0ZWdpZXMvMi5qcGcnLFxuICAgICAgICB0YWdzOiBbJ0N1bHR1cmUnXSxcbiAgICAgICAgY29udGVudDogJ0tub3dpbmcgeW91cnNlbGYgaXMgdGhlIGZpcnN0LCBhbmQgYSB2ZXJ5IGNyaXRpY2FsIHN0ZXAgaW4gdGhlIHByb2Nlc3Mgb2YgcGxhbm5pbmcgeW91ciBmdXR1cmUuIEhvdyBjYW4geW91IGZpZ3VyZSBvdXQgd2hhdCB5b3Ugd2FudCB0byBkbyB3aXRoIHlvdXIgbGlmZSBpZiB5b3UgZG9u4oCZdCBrbm93OiBXaGF0IGFtIEkgZ29pbmcgdG8gZG8gd2l0aCB0aGUgIHJlc3Qgb2YgbXkgbGlmZT8gV2hhdCBpcyBteSBkcmVhbSBqb2I/IFdoYXQgZG8gSSBlbmpveSBkb2luZz8gV2hhdOKAmXMgbXkgcGFzc2lvbj8gV2hhdCBraW5kIG9mIGNhcmVlciBmaXRzIG15IHBlcnNvbmFsaXR5PycsXG4gICAgICAgIGRhdGU6ICcwMS4wMS4yMDIwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdGl0bGU6ICdTdWNjZXNzIFN0ZXBzIEZvciBZb3VyIFBlcnNvbmFsIE9yIEJ1c2luZXNzIExpZmUnLFxuICAgICAgICB1cmxUb0ltYWdlOiAnaW1hZ2VzL3N0cmF0ZWdpZXMvMy5qcGcnLFxuICAgICAgICB0YWdzOiBbJ0N1bHR1cmUnLCAnRGVzaWduJywgJ0FydCddLFxuICAgICAgICBjb250ZW50OiAnS25vd2luZyB5b3Vyc2VsZiBpcyB0aGUgZmlyc3QsIGFuZCBhIHZlcnkgY3JpdGljYWwgc3RlcCBpbiB0aGUgcHJvY2VzcyBvZiBwbGFubmluZyB5b3VyIGZ1dHVyZS4gSG93IGNhbiB5b3UgZmlndXJlIG91dCB3aGF0IHlvdSB3YW50IHRvIGRvIHdpdGggeW91ciBsaWZlIGlmIHlvdSBkb27igJl0IGtub3c6IFdoYXQgYW0gSSBnb2luZyB0byBkbyB3aXRoIHRoZSAgcmVzdCBvZiBteSBsaWZlPyBXaGF0IGlzIG15IGRyZWFtIGpvYj8gV2hhdCBkbyBJIGVuam95IGRvaW5nPyBXaGF04oCZcyBteSBwYXNzaW9uPyBXaGF0IGtpbmQgb2YgY2FyZWVyIGZpdHMgbXkgcGVyc29uYWxpdHk/JyxcbiAgICAgICAgZGF0ZTogJzAxLjAxLjIwMjAnXG4gICAgfVxuXTtcblxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vUmVuZGVyIGFydGljbGVzXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmVuZGVyQXJ0aWNsZXNUb0RvbSgpXG4gICAgfVxuXG4gICAgLy9UYWdzXG4gICAgYWRkVGFnc0NsaWNrSGFuZGxlcigpO1xuXG4gICAgLy9nZW5lcmF0ZSBiYXNlIG1vZGFsIGZyb20gbW9kYWwgY2xhc3NcbiAgICBhZGRUb29sc0NsaWNrSGFuZGxlcigpO1xuXG5cbn1cbmNvbnN0IGFkZFRhZ3NDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmF0ZWdpZXNfX3RhZ3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFnJykpIHtcbiAgICAgICAgICAgIGxldCBjbGlja2VkVGFnID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRUYWdzKCk7XG4gICAgICAgICAgICBzZWxlY3RDbGlja2VkVGFnKGNsaWNrZWRUYWcpO1xuICAgICAgICAgICAgaWYgKGNsaWNrZWRUYWcuaW5uZXJUZXh0ID09PSAnQWxsJykge1xuICAgICAgICAgICAgICAgIHNob3dBbGxTdHJhdGVnaWVzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbHRlclN0cmF0ZWd5QnlTZWxlY3RlZFRhZyhjbGlja2VkVGFnLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuY29uc3QgcmVtb3ZlU2VsZWN0ZWRUYWdzID0gKCkgPT4ge1xuICAgIGxldCB0YWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0cmF0ZWdpZXNfX3RhZ3MgLnRhZycpO1xuICAgIGNvbnNvbGUubG9nKHRhZ3MpO1xuICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICB0YWcuY2xhc3NMaXN0LnJlbW92ZSgndGFnX3NlbGVjdGVkJyk7XG4gICAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWdfYm9yZGVyZWQnKTtcbiAgICB9KVxufTtcblxuY29uc3Qgc2VsZWN0Q2xpY2tlZFRhZyA9IChjbGlja2VkVGFnKSA9PiB7XG4gICAgY2xpY2tlZFRhZy5jbGFzc0xpc3QuYWRkKCd0YWdfc2VsZWN0ZWQnKTtcbiAgICBjbGlja2VkVGFnLmNsYXNzTGlzdC5yZW1vdmUoJ3RhZ19ib3JkZXJlZCcpO1xufTtcbmNvbnN0IHNob3dBbGxTdHJhdGVnaWVzID0gKCkgPT4ge1xuICAgIGxldCBzdHJhdGVnaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0cmF0ZWd5LXdyYXBwZXIgLnN0cmF0ZWd5Jyk7XG4gICAgc3RyYXRlZ2llcy5mb3JFYWNoKHN0cmF0ZWd5ID0+IHtcbiAgICAgICAgc3RyYXRlZ3kuY2xhc3NMaXN0LnJlbW92ZSgnc3RyYXRlZ3lfaGlkZGVuJyk7XG5cbiAgICB9KVxufTtcbmNvbnN0IGZpbHRlclN0cmF0ZWd5QnlTZWxlY3RlZFRhZyA9IChzZWxlY3RlZFRhZykgPT4ge1xuICAgIGxldCBzdHJhdGVnaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0cmF0ZWd5LXdyYXBwZXIgLnN0cmF0ZWd5Jyk7XG4gICAgc3RyYXRlZ2llcy5mb3JFYWNoKHN0cmF0ZWd5ID0+IHtcbiAgICAgICAgc3RyYXRlZ3kuY2xhc3NMaXN0LmFkZCgnc3RyYXRlZ3lfaGlkZGVuJyk7XG4gICAgICAgIHN0cmF0ZWd5LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWcnKS5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhZy5pbm5lclRleHQgPT09IHNlbGVjdGVkVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmF0ZWd5X2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSlcbn07XG5jb25zdCByZW5kZXJBcnRpY2xlc1RvRG9tID0gKCkgPT4ge1xuICBsZXQgc3RyYXRlZ2llc1dyYXBwZXIgPSBnZXRTdHJhdGVnaWVzV3JhcHBlcigpO1xuICBnZW5lcmF0ZUFydGljbGVzKGRhdGEpLmZvckVhY2goYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgc3RyYXRlZ2llc1dyYXBwZXIuYXBwZW5kKGFydGljbGUuZ2VuZXJhdGVBcnRpY2xlKCkpO1xuICAgICAgfSk7XG59XG5jb25zdCBnZXRTdHJhdGVnaWVzV3JhcHBlciA9ICgpID0+IHtcbiAgY29uc3Qgc3RyYXRlZ2llc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJhdGVneS13cmFwcGVyJyk7XG4gIHN0cmF0ZWdpZXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHJldHVybiBzdHJhdGVnaWVzQ29udGFpbmVyO1xufVxuXG5jb25zdCBnZW5lcmF0ZUFydGljbGVzID0gKGRhdGEpID0+IHtcbiAgbGV0IGFydGljbGVzID0gW107XG4gIGRhdGEuZm9yRWFjaChhcnRpY2xlID0+IHtcbiAgICAgIGFydGljbGVzLnB1c2gobmV3IEFydGljbGUoYXJ0aWNsZSkpXG4gIH0pO1xuICByZXR1cm4gYXJ0aWNsZXM7XG59XG5cbmNvbnN0IGFkZFRvb2xzQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9vbHNfX2J1dHRvbiAuYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2VuZXJhdGVUb29sc01vZGFsKCk7XG4gIH0pXG59XG5cbmNvbnN0IGdlbmVyYXRlVG9vbHNNb2RhbCA9ICgpID0+IHtcbiAgICByZW5kZXJNb2RhbFdpbmRvdygnVGVzdCcpO1xufVxuY29uc3QgcmVuZGVyTW9kYWxXaW5kb3cgPSAoY29udGVudCkgPT4ge1xuICBsZXQgbW9kYWwgPSBuZXcgTW9kYWwoJ3Rvb2xzLW1vZGFsJyk7XG4gIG1vZGFsLmJ1aWxkTW9kYWwoY29udGVudCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=