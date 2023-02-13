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
    //tags
    if (data) {
        renderArticlesToDom()
    }
    addTagsClickHandler();

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1Asa0JBQWtCLHNDQUFzQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRFQUE0RSxpQkFBaUI7O0FBRTdGO0FBQ0E7QUFDQSxxRUFBcUUsV0FBVzs7QUFFaEY7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLElBQUk7QUFDckUsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0EsV0FBVyxRQUFROztBQUV3Qjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbURBQU87QUFDL0IsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0bHkvLi9qcy9BcnRpY2xlLmpzIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9kdWN0bHkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3RseS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2R1Y3RseS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3IoeyBpZCwgdGl0bGUsIHVybFRvSW1hZ2UsIHRhZ3MsIC4uLnJlc3QgfSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy51cmxUb0ltYWdlID0gdXJsVG9JbWFnZTtcbiAgICAgICAgdGhpcy50YWdzID0gdGFncztcbiAgICB9XG4gICAgLy9BcnRpY2xlIGdlbmVyYXRvclxuICAgIGdlbmVyYXRlQXJ0aWNsZSgpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XG4gICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICBhcnRpY2xlLmNsYXNzTmFtZSA9ICdzdHJhdGVneSBibG9jay1zaGFkb3dlZCc7XG4gICAgICAgIGFydGljbGUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGhpcy5pZCk7XG5cbiAgICAgICAgdGhpcy51cmxUb0ltYWdlICYmICh0ZW1wbGF0ZSArPSBgPGltZyBjbGFzcz1cInN0cmF0ZWd5X19pbWFnZVwiIHNyYz0ke3RoaXMudXJsVG9JbWFnZX0gYWx0PVwic3RyYXRlZ3lcIj5gKVxuXG4gICAgICAgIGlmICh0aGlzLnRpdGxlIHx8IHRoaXMudGFncykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDxkaXYgY2xhc3M9XCJzdHJhdGVneV9fY29udGVudFwiPmBcbiAgICAgICAgICAgIHRoaXMudGl0bGUgJiYgKHRlbXBsYXRlICs9IGA8aDMgY2xhc3M9XCJzdHJhdGVneV9fbmFtZVwiPiR7dGhpcy50aXRsZX08L2gzPmApXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRhZ3Mpe1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8ZGl2IGNsYXNzPVwic3RyYXRlZ3lfX3RhZ3MgdGFnc1wiPmBcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8c3BhbiBjbGFzcz1cInRhZyB0YWdfY29sb3JlZFwiPiR7dGFnfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPC9kaXY+YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPC9kaXY+YFxuICAgICAgICB9XG4gICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIHJldHVybiBhcnRpY2xlO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLy8gaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuLy8gaW1wb3J0IGpzZG9tIGZyb20gXCJqc2RvbVwiO1xuLy8gY29uc3QgeyBKU0RPTSB9ID0ganNkb207XG5cbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi4vanMvQXJ0aWNsZS5qc1wiO1xuXG4vLyBjb25zdCBmaWxlUGF0aCA9IFwiLi4vaW5kZXguaHRtbFwiO1xuLy8gY29uc3QgaHRtbCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGYtOFwiKTtcbi8vIGNvbnN0IGRvbSA9IG5ldyBKU0RPTShodG1sKTtcbi8vIGdsb2JhbC53aW5kb3cgPSBkb20ud2luZG93O1xuLy8gZ2xvYmFsLmRvY3VtZW50ID0gZG9tLndpbmRvdy5kb2N1bWVudDtcblxuXG5cblxuY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogJ0luY3JlYXNpbmcgUHJvc3Blcml0eSBXaXRoIFBvc2l0aXZlIFRoaW5raW5nJyxcbiAgICAgICAgdXJsVG9JbWFnZTogJ2ltYWdlcy9zdHJhdGVnaWVzLzEuanBnJyxcbiAgICAgICAgdGFnczogWydBcnQnLCAnRGVzaWduJ10sXG4gICAgICAgIGNvbnRlbnQ6ICdLbm93aW5nIHlvdXJzZWxmIGlzIHRoZSBmaXJzdCwgYW5kIGEgdmVyeSBjcml0aWNhbCBzdGVwIGluIHRoZSBwcm9jZXNzIG9mIHBsYW5uaW5nIHlvdXIgZnV0dXJlLiBIb3cgY2FuIHlvdSBmaWd1cmUgb3V0IHdoYXQgeW91IHdhbnQgdG8gZG8gd2l0aCB5b3VyIGxpZmUgaWYgeW91IGRvbuKAmXQga25vdzogV2hhdCBhbSBJIGdvaW5nIHRvIGRvIHdpdGggdGhlICByZXN0IG9mIG15IGxpZmU/IFdoYXQgaXMgbXkgZHJlYW0gam9iPyBXaGF0IGRvIEkgZW5qb3kgZG9pbmc/IFdoYXTigJlzIG15IHBhc3Npb24/IFdoYXQga2luZCBvZiBjYXJlZXIgZml0cyBteSBwZXJzb25hbGl0eT8nLFxuICAgICAgICBkYXRlOiAnMDEuMDEuMjAyMCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiAnTW90aXZhdGlvbiBJcyBUaGUgRmlyc3QgU3RlcCBUbyBTdWNjZXNzJyxcbiAgICAgICAgdXJsVG9JbWFnZTogJ2ltYWdlcy9zdHJhdGVnaWVzLzIuanBnJyxcbiAgICAgICAgdGFnczogWydDdWx0dXJlJ10sXG4gICAgICAgIGNvbnRlbnQ6ICdLbm93aW5nIHlvdXJzZWxmIGlzIHRoZSBmaXJzdCwgYW5kIGEgdmVyeSBjcml0aWNhbCBzdGVwIGluIHRoZSBwcm9jZXNzIG9mIHBsYW5uaW5nIHlvdXIgZnV0dXJlLiBIb3cgY2FuIHlvdSBmaWd1cmUgb3V0IHdoYXQgeW91IHdhbnQgdG8gZG8gd2l0aCB5b3VyIGxpZmUgaWYgeW91IGRvbuKAmXQga25vdzogV2hhdCBhbSBJIGdvaW5nIHRvIGRvIHdpdGggdGhlICByZXN0IG9mIG15IGxpZmU/IFdoYXQgaXMgbXkgZHJlYW0gam9iPyBXaGF0IGRvIEkgZW5qb3kgZG9pbmc/IFdoYXTigJlzIG15IHBhc3Npb24/IFdoYXQga2luZCBvZiBjYXJlZXIgZml0cyBteSBwZXJzb25hbGl0eT8nLFxuICAgICAgICBkYXRlOiAnMDEuMDEuMjAyMCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiAnU3VjY2VzcyBTdGVwcyBGb3IgWW91ciBQZXJzb25hbCBPciBCdXNpbmVzcyBMaWZlJyxcbiAgICAgICAgdXJsVG9JbWFnZTogJ2ltYWdlcy9zdHJhdGVnaWVzLzMuanBnJyxcbiAgICAgICAgdGFnczogWydDdWx0dXJlJywgJ0Rlc2lnbicsICdBcnQnXSxcbiAgICAgICAgY29udGVudDogJ0tub3dpbmcgeW91cnNlbGYgaXMgdGhlIGZpcnN0LCBhbmQgYSB2ZXJ5IGNyaXRpY2FsIHN0ZXAgaW4gdGhlIHByb2Nlc3Mgb2YgcGxhbm5pbmcgeW91ciBmdXR1cmUuIEhvdyBjYW4geW91IGZpZ3VyZSBvdXQgd2hhdCB5b3Ugd2FudCB0byBkbyB3aXRoIHlvdXIgbGlmZSBpZiB5b3UgZG9u4oCZdCBrbm93OiBXaGF0IGFtIEkgZ29pbmcgdG8gZG8gd2l0aCB0aGUgIHJlc3Qgb2YgbXkgbGlmZT8gV2hhdCBpcyBteSBkcmVhbSBqb2I/IFdoYXQgZG8gSSBlbmpveSBkb2luZz8gV2hhdOKAmXMgbXkgcGFzc2lvbj8gV2hhdCBraW5kIG9mIGNhcmVlciBmaXRzIG15IHBlcnNvbmFsaXR5PycsXG4gICAgICAgIGRhdGU6ICcwMS4wMS4yMDIwJ1xuICAgIH1cbl07XG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3RhZ3NcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICByZW5kZXJBcnRpY2xlc1RvRG9tKClcbiAgICB9XG4gICAgYWRkVGFnc0NsaWNrSGFuZGxlcigpO1xuXG59XG5jb25zdCBhZGRUYWdzQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJhdGVnaWVzX190YWdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhZycpKSB7XG4gICAgICAgICAgICBsZXQgY2xpY2tlZFRhZyA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkVGFncygpO1xuICAgICAgICAgICAgc2VsZWN0Q2xpY2tlZFRhZyhjbGlja2VkVGFnKTtcbiAgICAgICAgICAgIGlmIChjbGlja2VkVGFnLmlubmVyVGV4dCA9PT0gJ0FsbCcpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxsU3RyYXRlZ2llcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJTdHJhdGVneUJ5U2VsZWN0ZWRUYWcoY2xpY2tlZFRhZy5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cbmNvbnN0IHJlbW92ZVNlbGVjdGVkVGFncyA9ICgpID0+IHtcbiAgICBsZXQgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdHJhdGVnaWVzX190YWdzIC50YWcnKTtcbiAgICBjb25zb2xlLmxvZyh0YWdzKTtcbiAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgdGFnLmNsYXNzTGlzdC5yZW1vdmUoJ3RhZ19zZWxlY3RlZCcpO1xuICAgICAgICB0YWcuY2xhc3NMaXN0LmFkZCgndGFnX2JvcmRlcmVkJyk7XG4gICAgfSlcbn07XG5cbmNvbnN0IHNlbGVjdENsaWNrZWRUYWcgPSAoY2xpY2tlZFRhZykgPT4ge1xuICAgIGNsaWNrZWRUYWcuY2xhc3NMaXN0LmFkZCgndGFnX3NlbGVjdGVkJyk7XG4gICAgY2xpY2tlZFRhZy5jbGFzc0xpc3QucmVtb3ZlKCd0YWdfYm9yZGVyZWQnKTtcbn07XG5jb25zdCBzaG93QWxsU3RyYXRlZ2llcyA9ICgpID0+IHtcbiAgICBsZXQgc3RyYXRlZ2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdHJhdGVneS13cmFwcGVyIC5zdHJhdGVneScpO1xuICAgIHN0cmF0ZWdpZXMuZm9yRWFjaChzdHJhdGVneSA9PiB7XG4gICAgICAgIHN0cmF0ZWd5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmF0ZWd5X2hpZGRlbicpO1xuXG4gICAgfSlcbn07XG5jb25zdCBmaWx0ZXJTdHJhdGVneUJ5U2VsZWN0ZWRUYWcgPSAoc2VsZWN0ZWRUYWcpID0+IHtcbiAgICBsZXQgc3RyYXRlZ2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdHJhdGVneS13cmFwcGVyIC5zdHJhdGVneScpO1xuICAgIHN0cmF0ZWdpZXMuZm9yRWFjaChzdHJhdGVneSA9PiB7XG4gICAgICAgIHN0cmF0ZWd5LmNsYXNzTGlzdC5hZGQoJ3N0cmF0ZWd5X2hpZGRlbicpO1xuICAgICAgICBzdHJhdGVneS5xdWVyeVNlbGVjdG9yQWxsKCcudGFnJykuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWcuaW5uZXJUZXh0ID09PSBzZWxlY3RlZFRhZykge1xuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJhdGVneV9oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0pXG59O1xuY29uc3QgcmVuZGVyQXJ0aWNsZXNUb0RvbSA9ICgpID0+IHtcbiAgbGV0IHN0cmF0ZWdpZXNXcmFwcGVyID0gZ2V0U3RyYXRlZ2llc1dyYXBwZXIoKTtcbiAgZ2VuZXJhdGVBcnRpY2xlcyhkYXRhKS5mb3JFYWNoKGFydGljbGUgPT4ge1xuICAgICAgICAgIHN0cmF0ZWdpZXNXcmFwcGVyLmFwcGVuZChhcnRpY2xlLmdlbmVyYXRlQXJ0aWNsZSgpKTtcbiAgICAgIH0pO1xufVxuY29uc3QgZ2V0U3RyYXRlZ2llc1dyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHN0cmF0ZWdpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyYXRlZ3ktd3JhcHBlcicpO1xuICBzdHJhdGVnaWVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICByZXR1cm4gc3RyYXRlZ2llc0NvbnRhaW5lcjtcbn1cblxuY29uc3QgZ2VuZXJhdGVBcnRpY2xlcyA9IChkYXRhKSA9PiB7XG4gIGxldCBhcnRpY2xlcyA9IFtdO1xuICBkYXRhLmZvckVhY2goYXJ0aWNsZSA9PiB7XG4gICAgICBhcnRpY2xlcy5wdXNoKG5ldyBBcnRpY2xlKGFydGljbGUpKVxuICB9KTtcbiAgcmV0dXJuIGFydGljbGVzO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9