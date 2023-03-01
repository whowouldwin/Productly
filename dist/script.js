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
var _excluded = ["id", "title", "urlToImage", "tags"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Article = /*#__PURE__*/function () {
  function Article(_ref) {
    var id = _ref.id,
      title = _ref.title,
      urlToImage = _ref.urlToImage,
      tags = _ref.tags,
      rest = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, Article);
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
  }
  //Article generator
  _createClass(Article, [{
    key: "generateArticle",
    value: function generateArticle() {
      var template = '';
      var article = document.createElement('article');
      article.className = 'strategy block-shadowed';
      article.setAttribute('data-id', this.id);
      this.urlToImage && (template += "<img class=\"strategy__image\" src=".concat(this.urlToImage, " alt=\"strategy\">"));
      if (this.title || this.tags) {
        template += "<div class=\"strategy__content\">";
        this.title && (template += "<h3 class=\"strategy__name\">".concat(this.title, "</h3>"));
        if (this.tags) {
          template += "<div class=\"strategy__tags tags\">";
          this.tags.map(function (tag) {
            template += "<span class=\"tag tag_colored\">".concat(tag, "</span>");
          });
          template += "</div>";
        }
        template += "</div>";
      }
      article.innerHTML = template;
      return article;
    }
  }]);
  return Article;
}();

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ArticleModal = /*#__PURE__*/function (_Modal) {
  _inherits(ArticleModal, _Modal);
  var _super = _createSuper(ArticleModal);
  function ArticleModal(classes, _ref) {
    var _this;
    var id = _ref.id,
      title = _ref.title,
      urlToImage = _ref.urlToImage,
      tags = _ref.tags,
      content = _ref.content,
      date = _ref.date;
    _classCallCheck(this, ArticleModal);
    _this = _super.call(this, classes);
    _this.id = id;
    _this.title = title;
    _this.urlToImage = urlToImage;
    _this.tags = tags;
    _this.content = content;
    _this.date = date;
    return _this;
  }

  //Article modal generator
  _createClass(ArticleModal, [{
    key: "generateContent",
    value: function generateContent() {
      var template = '';
      var article = document.createElement('div');
      article.className = 'article-modal__content';
      this.urlToImage && (template += "<img class=\"strategy__image\" src=".concat(this.urlToImage, " alt=\"strategy\">"));
      if (this.title || this.tags || this.content || this.date) {
        template += "<div class=\"strategy__content\">";
        this.date && (template += "<p class=\"strategy__date\">".concat(this.date, "</p>"));
        this.title && (template += "<h3 class=\"strategy__name\">".concat(this.title, "</h3>"));
        this.content && (template += "<p class=\"strategy__text\">".concat(this.content, "</p>"));
        if (this.tags) {
          template += "<div class=\"strategy__tags tags\">";
          this.tags.map(function (tag) {
            template += "<span class=\"tag tag_colored\">".concat(tag, "</span>");
          });
          template += "</div>";
        }
        template += "</div>";
      }
      article.innerHTML = template;
      return article;
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      var content = this.generateContent();
      _get(_getPrototypeOf(ArticleModal.prototype), "buildModal", this).call(this, content);
    }
  }]);
  return ArticleModal;
}(_Modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal);

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Modal = /*#__PURE__*/function () {
  function Modal(classes) {
    _classCallCheck(this, Modal);
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }
  _createClass(Modal, [{
    key: "buildModal",
    value: function buildModal(content) {
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
  }, {
    key: "createDomNode",
    value: function createDomNode(node, element) {
      var _node$classList;
      node = document.createElement(element);
      for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        classes[_key - 2] = arguments[_key];
      }
      (_node$classList = node.classList).add.apply(_node$classList, classes);
      return node;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      if (typeof content === 'string') {
        this.modalContent.innerHTML = content;
      } else {
        this.modalContent.innerHTML = '';
        this.modalContent.appendChild(content);
      }
    }
  }, {
    key: "appendModalElements",
    value: function appendModalElements() {
      this.modal.append(this.modalCloseBtn);
      this.modal.append(this.modalContent);
      this.overlay.append(this.modal);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.modalCloseBtn.addEventListener('click', this.closeModal);
      this.overlay.addEventListener('click', this.closeModal);
    }
  }, {
    key: "openModal",
    value: function openModal() {
      console.log('Test openModal');
      document.body.append(this.overlay);
    }
  }, {
    key: "closeModal",
    value: function closeModal(e) {
      var overlay = document.querySelector('.overlay');
      if (overlay) {
        var classes = e.target.classList;
        if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
          overlay.remove();
        }
      }
    }
  }]);
  return Modal;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/icons/play.svg */ "./images/icons/play.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/icons/cursor.svg */ "./images/icons/cursor.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/icons/curve.svg */ "./images/icons/curve.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/icons/heart.svg */ "./images/icons/heart.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/icons/clock.svg */ "./images/icons/clock.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/contact-us/tel.svg */ "./images/contact-us/tel.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/contact-us/mail.svg */ "./images/contact-us/mail.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/tools/Bg.png */ "./images/tools/Bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\nsection, main, footer, header, article {\n  display: block; }\n\n* {\n  box-sizing: border-box; }\n\n.logo-path, .footer-navigation__links a, .navigation__link {\n  transition: all .3s ease-out; }\n\nbody, .button {\n  font-family: 'Open Sans', Verdana, sans-serif; }\n\nh1, .link-button, .footer-navigation__links, .promo__text {\n  font-family: 'Poppins', Verdana, sans-serif; }\n\n.modal::-webkit-scrollbar {\n  width: 5px; }\n\n.modal::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 1px grey; }\n\n.modal::-webkit-scrollbar-thumb {\n  background: violet;\n  border-radius: 10px; }\n\n/*font-family: 'Open Sans', sans-serif;*/\n/*font-family: 'Poppins', sans-serif;*/\nhtml {\n  font-size: 10px; }\n\nbody {\n  font-size: 1.6rem;\n  line-height: 2.6rem;\n  font-weight: normal;\n  font-style: normal; }\n\nh1 {\n  font-size: 4.4rem;\n  line-height: 5.4rem;\n  font-weight: bold;\n  font-style: normal; }\n  @media (max-width: 414px) {\n    h1 {\n      font-size: 3.2rem;\n      line-height: 4.2rem;\n      font-weight: bold;\n      font-style: normal; } }\n\nh2 {\n  font-size: 3.4rem;\n  line-height: 4.6rem;\n  font-weight: bold;\n  font-style: normal; }\n  @media (max-width: 414px) {\n    h2 {\n      font-size: 2.4rem;\n      line-height: 3.3rem;\n      font-weight: bold;\n      font-style: normal; } }\n\nh3 {\n  font-size: 2.4rem;\n  line-height: 3.4rem;\n  font-weight: bold;\n  font-style: normal; }\n  @media (max-width: 414px) {\n    h3 {\n      font-size: 2.1rem;\n      line-height: 3.1rem;\n      font-weight: bold;\n      font-style: normal; } }\n\nh4 {\n  font-size: 2.2rem;\n  line-height: 3rem;\n  font-weight: 600;\n  font-style: normal; }\n  @media (max-width: 768px) {\n    h4 {\n      font-size: 2rem;\n      line-height: 3rem;\n      font-weight: bold;\n      font-style: normal; } }\n\nh5 {\n  font-size: 1.6rem;\n  line-height: 2.6rem;\n  font-weight: bold;\n  font-style: normal; }\n\n.block-shadowed {\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  flex-direction: column; }\n  @media (max-width: 768px) {\n    .block-shadowed {\n      overflow: hidden;\n      width: 45%; } }\n\n/*# sourceMappingURL=style.css.map */\n.button {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  padding: 11px 25px 13px;\n  transition: all .3s;\n  border-radius: 4px;\n  cursor: pointer; }\n  .button_bordered {\n    background: #FFFFFF;\n    border: 1px solid #D7D7D7;\n    color: #544837; }\n    .button_bordered:hover {\n      background: #BCD0E5;\n      border-color: #BCD0E5; }\n  .button_colored {\n    background: #FF9900;\n    color: #FFFFFF;\n    border: 1px solid #FF9900; }\n    .button_colored:hover {\n      background-color: #FF7549;\n      border-color: #FF7549; }\n\n.link-button {\n  color: #FF9900;\n  display: inline-flex;\n  align-items: center; }\n\n.link-button__text {\n  margin-left: 9px; }\n\n.logo {\n  display: flex;\n  align-items: center; }\n\n@media (max-width: 414px) {\n  .logo-object {\n    width: 160px; } }\n\n.logo-svg:hover .logo-path {\n  fill: #FF9900; }\n\n.ico {\n  cursor: pointer;\n  display: inline-block; }\n\n.ico_play {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 18px;\n  height: 19px; }\n\n.icon-squire {\n  display: inline-flex;\n  width: 50px;\n  height: 50px;\n  border-radius: 19px;\n  align-items: center;\n  justify-content: center; }\n  .icon-squire_yellow {\n    background-color: #FAB005; }\n  .icon-squire_lilium {\n    background-color: #7752BE; }\n  .icon-squire_red {\n    background-color: #F03E3D; }\n  .icon-squire_blue {\n    background-color: #4DADF7; }\n\n.ico-arrow {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  width: 12px;\n  height: 17px; }\n\n.ico-snake {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  width: 18px;\n  height: 14px; }\n\n.ico-heart {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  width: 17px;\n  height: 15px; }\n\n.ico-clock {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  width: 15px;\n  height: 17px; }\n\n.ico-phone {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  width: 13px;\n  height: 13px; }\n\n.ico-mail {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  width: 11px;\n  height: 8px; }\n\n.icon-round {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center; }\n  .icon-round_white {\n    background-color: #FFFFFF; }\n\n.icon-round {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center; }\n  .icon-round_white {\n    background-color: #FFFFFF; }\n\n.ico_phone {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  width: 13px;\n  height: 13px; }\n\n.ico_mail {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  width: 11px;\n  height: 8px; }\n\n.tags {\n  display: flex; }\n  .tags > * {\n    margin-right: 7px; }\n\n.tag {\n  padding: 0 14px;\n  border-radius: 90px;\n  cursor: pointer;\n  font-size: 1.3rem;\n  line-height: 2.8rem;\n  font-weight: 400;\n  font-style: normal; }\n  .tag_selected {\n    background-color: #FF9900;\n    color: #FFFFFF; }\n  .tag_bordered {\n    border: 1px solid #D7D7D7; }\n  .tag_colored {\n    background-color: #F5F5F5; }\n\n.hamburger::before, .hamburger::after, .hamburger__line {\n  display: inline-block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  background: #173A56;\n  border-radius: 5px;\n  height: 3px; }\n\n.hamburger {\n  display: none;\n  position: relative;\n  width: 31px;\n  height: 25px;\n  margin-right: 37px; }\n  @media (max-width: 768px) {\n    .hamburger {\n      display: inline-block; } }\n  .hamburger::before {\n    top: 0;\n    left: 0; }\n  .hamburger::after {\n    bottom: 0;\n    left: 0; }\n\n.hamburger__line {\n  top: calc(50% - 1.5px); }\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(80, 80, 80, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.modal {\n  position: relative;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  width: 675px;\n  min-height: 120px;\n  max-height: 90%;\n  overflow: auto; }\n  @media (max-width: 768px) {\n    .modal {\n      width: 90%; } }\n\n.modal__close-icon {\n  position: absolute;\n  top: 30px;\n  right: 26px;\n  cursor: pointer; }\n  .modal__close-icon svg {\n    pointer-events: none; }\n\n.wrapper {\n  max-width: 1197px;\n  margin: auto; }\n  @media (max-width: 1197px) {\n    .wrapper {\n      padding: 0 46px; } }\n  @media (max-width: 414px) {\n    .wrapper {\n      padding: 0 21px; } }\n\n.header {\n  background: #FFFFFF;\n  padding: 15px 0 17px 0;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05); }\n\n.header__wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  @media (max-width: 768px) {\n    .header__wrapper {\n      padding-left: 24px; } }\n\n.header__logo-line {\n  display: flex;\n  align-items: center; }\n\n.header__buttons > .button {\n  margin-left: 14px; }\n  @media (max-width: 414px) {\n    .header__buttons > .button {\n      display: none; } }\n\n.header__buttons > .button:first-child {\n  margin-left: 0px; }\n\n.layout-4-column {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .layout-4-column > * {\n    flex-basis: 21%; }\n\n.layout-3-column {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .layout-3-column > * {\n    flex-basis: 30%; }\n  .layout-3-column:after {\n    content: '';\n    width: 30%;\n    display: block; }\n\n.layout-2-column {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .layout-2-column > * {\n    flex-basis: 48%; }\n\n.footer {\n  padding: 60px 0 70px; }\n  @media (max-width: 414px) {\n    .footer {\n      padding: 31px 0; } }\n\n.footer__wrapper {\n  display: flex; }\n  @media (max-width: 768px) {\n    .footer__wrapper {\n      flex-direction: column; } }\n\n.footer-navigation {\n  flex-grow: 1;\n  padding-left: 152px; }\n  @media (max-width: 768px) {\n    .footer-navigation {\n      padding-left: 0;\n      margin-top: 34px; } }\n  @media (max-width: 414px) {\n    .footer-navigation {\n      flex-direction: column; } }\n\n.footer-navigation__title {\n  margin: 0 0 15px; }\n\n.footer-navigation__links {\n  list-style: none;\n  padding-left: 0px; }\n  .footer-navigation__links a {\n    color: #544837;\n    font-size: 1.6rem;\n    line-height: 3.5rem;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none; }\n    .footer-navigation__links a:hover {\n      color: #FF9900; }\n\n.contact-us {\n  background-color: #FFEEE1;\n  padding: 62px 0px; }\n  @media (max-width: 768px) {\n    .contact-us {\n      text-align: center; } }\n\n.contact-us__content {\n  max-width: 520px; }\n  @media (max-width: 768px) {\n    .contact-us__content {\n      max-width: 100%;\n      margin-bottom: 52px; } }\n\n.contact-us__form input, .contact-us__form textarea {\n  border: 1px solid #FFFFFF;\n  background-color: #FFFFFF;\n  padding: 10px 21px;\n  border-radius: 5px; }\n  .contact-us__form input:focus, .contact-us__form textarea:focus {\n    border: #FF9900;\n    outline: none; }\n\n.contact-us__form textarea {\n  resize: none;\n  width: 100%;\n  height: 160px; }\n\n.contact-us__line {\n  margin-bottom: 19px; }\n  @media (max-width: 414px) {\n    .contact-us__line {\n      flex-direction: column;\n      margin-bottom: 0; }\n      .contact-us__line > * {\n        margin-bottom: 19px; } }\n\n.contact-us__button > * {\n  min-width: 117px; }\n\n@media (max-width: 414px) {\n  .contact-us__button {\n    margin-top: 24px; } }\n\n.contact-us__link {\n  margin: 0 0 19px;\n  display: flex;\n  align-items: center;\n  font-size: 2.5rem;\n  line-height: 2.6rem;\n  font-weight: normal;\n  font-style: normal; }\n  @media (max-width: 768px) {\n    .contact-us__link {\n      justify-content: center; } }\n  .contact-us__link a {\n    margin-left: 11px;\n    color: #544837;\n    text-decoration: none; }\n  .contact-us__link:hover a {\n    text-decoration: underline; }\n\n@media (max-width: 768px) {\n  .contact-us-container {\n    flex-direction: column; } }\n\n.promo__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  @media (max-width: 414px) {\n    .promo__wrapper {\n      flex-direction: column-reverse; } }\n\n.promo {\n  padding: 30px 0;\n  overflow: hidden; }\n\n.promo__title {\n  margin: 0 0 30px; }\n\n.promo__text {\n  max-width: 487px;\n  margin: 0 0 45px;\n  font-size: 1.8rem;\n  line-height: 2.8rem;\n  font-weight: normal;\n  font-style: normal; }\n  @media (max-width: 768px) {\n    .promo__text {\n      width: 360px; } }\n  @media (max-width: 414px) {\n    .promo__text {\n      width: auto; } }\n\n.promo__content {\n  padding-right: 65px; }\n  @media (max-width: 768px) {\n    .promo__content {\n      padding-right: 0; } }\n  @media (max-width: 414px) {\n    .promo__content {\n      text-align: center; } }\n\n.promo__buttons {\n  display: flex;\n  align-items: center; }\n  .promo__buttons > * {\n    margin-right: 44px; }\n    .promo__buttons > *:last-child {\n      margin-right: 0; }\n  @media (max-width: 414px) {\n    .promo__buttons {\n      flex-direction: column; }\n      .promo__buttons > * {\n        margin-right: 0;\n        margin-bottom: 26px; }\n        .promo__buttons > *:last-child {\n          margin-bottom: 0; } }\n\n@media (max-width: 414px) {\n  .promo__image {\n    max-width: 100%;\n    margin-bottom: 16px; } }\n\n.navigation {\n  display: flex;\n  font-size: 1.5rem;\n  line-height: 2.8rem; }\n\n.navigation__link {\n  list-style: none;\n  padding: 0 10px;\n  cursor: pointer; }\n  .navigation__link:hover {\n    color: #FF9900; }\n\n@media (max-width: 768px) {\n  .header__navigation {\n    display: none; } }\n\n.tools__wrapper {\n  padding-bottom: 90px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  background-size: 100%; }\n\n@media (max-width: 768px) {\n  .tool-container {\n    flex-wrap: wrap; }\n    .tool-container .tool {\n      flex-basis: 43%;\n      text-align: center; } }\n\n@media (max-width: 414px) {\n  .tool-container {\n    flex-wrap: wrap; }\n    .tool-container .tool {\n      flex-basis: 100%;\n      text-align: center;\n      margin-bottom: 47px; } }\n\n.tools__title {\n  max-width: 462px;\n  margin: auto;\n  text-align: center;\n  margin-bottom: 70px; }\n\n.tool__icon {\n  margin-bottom: 30px; }\n\n.tool__title {\n  margin: 0 0 26px; }\n\n.tools__button {\n  margin-top: 60px;\n  text-align: center; }\n  @media (max-width: 414px) {\n    .tools__button {\n      margin-top: 0; } }\n\n.strategies {\n  padding: 30px 0; }\n  @media (max-width: 768px) {\n    .strategies {\n      text-align: center; } }\n\n.strategies__title {\n  margin: 0 0 14px; }\n\n.strategies__description {\n  margin: 0 0 24px; }\n\n.strategies__tags {\n  margin-bottom: 31px; }\n  @media (max-width: 768px) {\n    .strategies__tags {\n      justify-content: center; } }\n\n.strategy-wrapper > * {\n  margin-bottom: 30px; }\n  @media (max-width: 768px) {\n    .strategy-wrapper > * {\n      width: 48%;\n      flex-basis: 48%; } }\n  @media (max-width: 414px) {\n    .strategy-wrapper > * {\n      flex-basis: 100%; } }\n\n.strategy__content {\n  padding: 24px 33px 26px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column; }\n\n.strategy__name {\n  margin: 0 0 29px;\n  text-align: left;\n  flex-grow: 1; }\n\n.strategy {\n  cursor: pointer;\n  display: flex;\n  position: relative;\n  flex-direction: column; }\n  .strategy_hidden {\n    display: none; }\n  @media (max-width: 768px) {\n    .strategy {\n      overflow: hidden; } }\n\n.article-modal__content .strategy__image {\n  width: 100%; }\n  @media (max-width: 768px) {\n    .article-modal__content .strategy__image {\n      position: static; } }\n\n.article-modal__content .strategy__date {\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  font-weight: normal;\n  font-style: normal;\n  margin: 0 0 5px; }\n\n.article-modal__content .strategy__name {\n  margin-bottom: 10px; }\n\n.article-modal__content .strategy__text {\n  margin: 0 0 12px; }\n\n.employee {\n  display: flex;\n  padding: 35px;\n  position: relative;\n  width: calc(30% - $image-gap); }\n\n.employee__container {\n  padding-right: 32px; }\n\n.employee__name {\n  margin: 0; }\n\n.employee__title {\n  font-size: 1.4rem;\n  line-height: 1.4rem;\n  font-weight: 400;\n  font-style: normal;\n  margin: 0; }\n\n.employee__contact {\n  font-size: 1.4rem;\n  line-height: 1.4rem;\n  font-weight: 400;\n  font-style: normal;\n  color: #1943EF;\n  text-decoration: none; }\n  .employee__contact:hover {\n    text-decoration: underline; }\n\n.employee__photo {\n  width: 98px;\n  height: 98px;\n  position: absolute;\n  border-radius: 50%;\n  top: 20px;\n  right: -32px;\n  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15); }\n\n.about-us {\n  padding: 30px 0px 100px; }\n\n.about-us__title {\n  margin: 0 0 14px; }\n\n.about-us__description {\n  margin: 0 0 45px; }\n\n.about-us__description {\n  margin: 0 0 45px; }\n", "",{"version":3,"sources":["webpack://./src/sass/base/_normalize.scss","webpack://./src/sass/style.scss","webpack://./src/sass/abstract/_placeholders.scss","webpack://./src/sass/base/_base.scss","webpack://./src/sass/abstract/_mixins.scss","webpack://./src/sass/base/_buttons.scss","webpack://./src/sass/abstract/_constants.scss","webpack://./src/sass/base/_logo.scss","webpack://./src/sass/base/_icons.scss","webpack://./src/sass/base/_tags.scss","webpack://./src/sass/base/_humburger.scss","webpack://./src/sass/base/_modal.scss","webpack://./src/sass/layouts/_wrapper.scss","webpack://./src/sass/layouts/_header.scss","webpack://./src/sass/layouts/_columns.scss","webpack://./src/sass/layouts/_footer.scss","webpack://./src/sass/components/_contact-us.scss","webpack://./src/sass/components/_promo.scss","webpack://./src/sass/components/_navigation.scss","webpack://./src/sass/components/_tools.scss","webpack://./src/sass/components/_strategies.scss","webpack://./src/sass/components/_about-us.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\nsection, main, footer, header, article {\n  display: block;\n}\n* {\n  box-sizing: border-box;\n}","@import \"base/normalize\";\n\n@import \"abstract/constants\";\n@import \"abstract/mixins\";\n@import \"abstract/placeholders\";\n\n@import \"base/base\";\n@import \"base/buttons\";\n@import \"base/logo\";\n@import \"base/icons\";\n@import \"base/tags\";\n@import \"base/humburger\";\n@import \"base/modal\";\n\n@import \"layouts/wrapper\";\n@import \"layouts/header\";\n@import \"layouts/columns\";\n@import \"layouts/footer\";\n\n@import \"components/contact-us\";\n@import \"components/promo\";\n@import \"components/navigation\";\n@import \"components/tools\";\n@import \"components/strategies\";\n@import \"components/about-us\";","%transition {\n  transition: all .3s ease-out;\n}\n%font-prim {\n  font-family: 'Open Sans', Verdana, sans-serif;\n}\n%font-add {\n  font-family: 'Poppins', Verdana, sans-serif;\n}\n\n//scroll for Chrome\n%custom-scroll {\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 1px grey;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: violet;\n    border-radius: 10px;\n  }\n}","/*font-family: 'Open Sans', sans-serif;*/\n/*font-family: 'Poppins', sans-serif;*/\nhtml {\n  font-size: 10px;\n}\nbody {\n  @extend %font-prim;\n  @include font($size: 1.6rem, $height: 2.6rem, $weight: normal);\n}\nh1 {\n  @extend %font-add;\n  @include font($size: 4.4rem, $height: 5.4rem);\n  @include media-mobile {\n    @include font($height: 4.2rem, $size: 3.2rem);\n  }\n}\nh2 {\n  @include font($size: 3.4rem, $height: 4.6rem);\n  @include media-mobile{\n    @include font($height: 3.3rem, $size: 2.4rem);\n  }\n\n}\nh3 {\n  @include font($size: 2.4rem, $height: 3.4rem);\n  @include media-mobile{\n    @include font($height: 3.1rem, $size: 2.1rem);\n  }\n}\nh4 {\n  @include font($size: 2.2rem, $height: 3rem, $weight: 600);\n  @include media-tablet {\n    @include font($height: 3.0rem, $size: 2.0rem);\n  }\n}\nh5 {\n  @include font($size: 1.6rem, $height: 2.6rem);\n}\n.block-shadowed {\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  flex-direction: column;\n  @include media-tablet {\n    overflow: hidden;\n    width: 45%;\n  }\n}\n\n/*# sourceMappingURL=style.css.map */\n","@mixin font($size, $height: $size, $weight: bold, $style: normal) {\n  font-size: $size;\n  line-height: $height;\n  font-weight: $weight;\n  font-style: $style;\n}\n\n@mixin columns($width) {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  //All direct descendants of the parent element\n  >* {\n    flex-basis: $width;\n  }\n\n}\n@mixin  media-laptop {\n  @media (max-width: $content-width) {\n    @content;\n  }\n}\n@mixin  media-tablet{\n  @media (max-width: $tablet-width) {\n    @content;\n  }\n}\n@mixin  media-mobile {\n  @media (max-width: $mobile-big-width) {\n    @content;\n  }\n}\n@mixin  media-mobilesmall {\n  @media (max-width: $mobile-small-width) {\n    @content;\n  }\n}",".button {\n  @extend %font-prim;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  padding: 11px 25px 13px;\n  transition: all .3s;\n  border-radius: 4px;\n  cursor: pointer;\n  &_bordered {\n    background: $color-light;\n    border: 1px solid $color-boarder;\n    color: $color-text;\n    &:hover {\n      background: $color-hovered;\n      border-color: $color-hovered;\n    }\n  }\n  &_colored {\n    background: $color-primary;\n    color: $color-light;\n    border: 1px solid $color-primary;\n    &:hover {\n      background-color: $color-additional;\n      border-color: $color-additional;\n    }\n  }\n}\n.link-button {\n  color: $color-primary;\n  @extend %font-add;\n  display: inline-flex;\n  align-items: center;\n\n}\n.link-button__text {\n  margin-left: 9px;\n}","$color-primary: #FF9900;\n$color-additional: #FF7549;\n$color-background: #FFEEE1;\n$color-link: #1943EF;\n$color-tag: #F5F5F5;\n$color-text: #544837;\n$color-heading: #2F281E;\n$color-boarder: #D7D7D7;\n$color-hovered: #BCD0E5;\n$color-light: #FFFFFF;\n\n$color-violet: #7752BE;\n$color-yellow: #FAB005;\n$color-red: #F03E3D;\n$color-blue: #4DADF7;\n$color-hamburger: #173A56;\n$color-overlay: rgba(80, 80, 80, 0.4);;\n\n$content-width: 1197px;\n$tablet-width: 768px;\n$mobile-big-width: 414px;\n$mobile-small-width: 320px;\n",".logo {\n  display: flex;\n  align-items: center;\n\n}\n.logo-object {\n  @include media-mobile {\n    width: 160px;\n  }\n}\n\n.logo-path {\n  @extend %transition;\n}\n\n.logo-svg:hover {\n  .logo-path {\n    fill: $color-primary;\n  }\n}",".ico {\n  cursor: pointer;\n  display: inline-block;\n}\n.ico_play {\n  //background-image: url(\"../../images/icons/play.svg\");\n  background-image: url(\"../../images/icons/play.svg\");\n  //compatible for EE, link with svg file\n  width: 18px;\n  height: 19px;\n}\n.icon-squire {\n  display: inline-flex;\n  width: 50px;\n  height: 50px;\n  border-radius: 19px;\n  align-items: center;\n  justify-content: center;\n  &_yellow {\n    background-color: $color-yellow;\n  }\n  &_lilium {\n    background-color: $color-violet;\n  }\n  &_red {\n    background-color: $color-red;\n  }\n  &_blue {\n    background-color: $color-blue;\n  }\n}\n.ico-arrow {\n  background-image: url(\"../../images/icons/cursor.svg\");\n  //compatible for EE, link with svg file\n  width: 12px;\n  height: 17px;\n}\n.ico-snake {\n  background-image: url(\"../../images/icons/curve.svg\");\n  //compatible for EE, link with svg file\n  width: 18px;\n  height: 14px;\n}\n.ico-heart {\n  background-image: url(\"../../images/icons/heart.svg\");\n  //compatible for EE, link with svg file\n  width: 17px;\n  height: 15px;\n}\n.ico-clock {\n  background-image: url(\"../../images/icons/clock.svg\");\n  //compatible for EE, link with svg file\n  width: 15px;\n  height: 17px;\n}\n.ico-phone {\n  background-image: url(\"../../images/contact-us/tel.svg\");\n  //compatible for EE, link with svg file\n  width: 13px;\n  height: 13px;\n}\n.ico-mail {\n  background-image: url(\"../../images/contact-us/mail.svg\");\n  //compatible for EE, link with svg file\n  width: 11px;\n  height: 8px;\n}\n.icon-round {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  &_white {\n    background-color: $color-light;\n  }\n}\n.icon-round {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  &_white {\n    background-color: $color-light;\n  }\n}\n.ico_phone {\n  background-image: url(\"../../images/contact-us/tel.svg\");\n  width: 13px;\n  height: 13px;\n}\n\n.ico_mail {\n  background-image: url(\"../../images/contact-us/mail.svg\");\n  width: 11px;\n  height: 8px;\n}",".tags {\n  display: flex; //Stretches the element in height\n  >* {\n    margin-right: 7px;\n  }\n}\n.tag {\n  padding: 0 14px;\n  border-radius: 90px;\n  cursor: pointer;\n  @include font($size: 1.3rem, $height: 2.8rem, $weight: 400);\n  &_selected {\n    background-color: $color-primary;\n    color: $color-light;\n  }\n  &_bordered{\n    border: 1px solid $color-boarder;\n  }\n  &_colored {\n    background-color: $color-tag;\n  }\n}","%hamburger-line {\n  display: inline-block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  background: $color-hamburger;\n  border-radius: 5px;\n  height: 3px;\n}\n.hamburger {\n  display: none;\n  position: relative;\n  width: 31px;\n  height: 25px;\n  margin-right: 37px;\n  @include media-tablet {\n    display: inline-block;\n  }\n  &::before {\n    @extend %hamburger-line;\n    top: 0;\n    left: 0;\n  }\n  &::after{\n    @extend %hamburger-line;\n    bottom: 0;\n    left: 0;\n  }\n}\n.hamburger__line {\n  @extend %hamburger-line;\n  top: calc(50% - 1.5px);\n}",".overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: $color-overlay;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  position: relative;\n  border-radius: 10px;\n  background-color: $color-light;\n  width: 675px;\n  min-height: 120px;\n  max-height: 90%;\n  overflow: auto;\n  @extend %custom-scroll;\n  @include media-tablet {\n    width: 90%;\n  }\n}\n.modal__close-icon {\n  position: absolute;\n  top: 30px;\n  right: 26px;\n  cursor: pointer;\n  svg {\n    pointer-events: none;\n  }\n}\n\n\n\n",".wrapper {\n  max-width: $content-width;\n  margin: auto;\n  @include media-laptop {\n    padding: 0 46px;\n  }\n  @include media-mobile {\n    padding: 0 21px;\n  }\n}\n",".header {\n  background: $color-light;\n  padding: 15px 0 17px 0;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.header__wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @include media-tablet {\n    padding-left: 24px;\n  }\n}\n.header__logo-line {\n  display: flex;\n  align-items: center;\n}\n.header__buttons>.button {\n  margin-left: 14px;\n  @include media-mobile {\n    display: none;\n  }\n}\n.header__buttons>.button:first-child {\n  margin-left: 0px;\n}\n\n",".layout-4-column {\n  @include columns($width: 21%);\n}\n.layout-3-column {\n  @include columns($width: 30%);\n  &:after {\n    content: '';\n    width: 30%;\n    display: block;\n  }\n}\n.layout-2-column {\n  @include columns($width: 48%)\n}\n",".footer {\n  padding: 60px 0 70px;\n  @include media-mobile {\n    padding: 31px 0;\n  }\n}\n.footer__wrapper {\n  display: flex;\n  @include media-tablet {\n    flex-direction: column;\n  }\n}\n.footer-navigation {\n  flex-grow: 1;\n  padding-left: 152px;\n  @include media-tablet {\n    padding-left: 0;\n    margin-top: 34px;\n  }\n  @include media-mobile {\n    flex-direction: column;\n  }\n}\n.footer-navigation__title {\n  margin: 0 0 15px;\n}\n.footer-navigation__links {\n  @extend  %font-add;\n  list-style: none;\n  padding-left: 0px;\n\n  a {\n    color: $color-text;\n    @extend %transition;\n    @include font($size: 1.6rem, $height: 3.5rem, $weight: normal);\n    text-decoration: none;\n    &:hover {\n      color: $color-primary;\n    }\n  }\n}",".contact-us {\n  background-color: $color-background;\n  padding: 62px 0px;\n  @include media-tablet {\n    text-align: center;\n  }\n}\n.contact-us__content {\n  max-width: 520px;\n  @include media-tablet {\n    max-width: 100%;\n    margin-bottom: 52px;\n  }\n}\n.contact-us__form {\n  input, textarea {\n    border: 1px solid $color-light;\n    background-color: $color-light;\n    padding: 10px 21px;\n    border-radius: 5px;\n    &:focus {\n      border: $color-primary;\n      outline: none;\n    }\n  }\n  textarea {\n    resize: none;\n    width: 100%;\n    height: 160px;\n  }\n}\n.contact-us__line {\n  margin-bottom: 19px;\n  @include  media-mobile {\n    flex-direction: column;\n    margin-bottom: 0;\n    >* {\n      margin-bottom: 19px;\n    }\n  }\n}\n.contact-us__button {\n  >* {\n    min-width: 117px;\n  }\n  @include media-mobile {\n    margin-top: 24px;\n  }\n}\n.contact-us__link {\n  margin: 0 0 19px;\n  display: flex;\n  align-items: center;\n  @include font($size: 2.5rem, $height: 2.6rem, $weight: normal);\n  @include media-tablet {\n    justify-content: center;\n  }\n  a {\n    margin-left: 11px;\n    color: $color-text;\n    text-decoration: none;\n  }\n  &:hover {\n    a {\n      text-decoration: underline;\n    }\n  }\n}\n.contact-us-container {\n  @include media-tablet {\n    flex-direction: column;\n  }\n}",".promo__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @include  media-mobile {\n    flex-direction: column-reverse;\n  }\n}\n.promo {\n  padding: 30px 0;\n  overflow: hidden;\n}\n.promo__title {\n  margin: 0 0 30px;\n}\n.promo__text {\n  max-width: 487px;\n  margin: 0 0 45px;\n  @extend %font-add;\n  @include font($size: 1.8rem, $height: 2.8rem, $weight: normal);\n  @include media-tablet {\n    width: 360px;\n  }\n  @include media-mobile {\n    width: auto;\n  }\n}\n.promo__content {\n  padding-right: 65px;\n  @include media-tablet {\n    padding-right: 0;\n  }\n  @include media-mobile {\n    text-align: center;\n  }\n}\n.promo__buttons {\n  display: flex;\n  align-items: center;\n  >* {\n    margin-right: 44px;\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n  @include media-mobile {\n    flex-direction: column;\n    >* {\n      margin-right: 0;\n      margin-bottom: 26px;\n      &:last-child {\n        margin-bottom: 0;\n      }\n\n    }\n  }\n}\n.promo__image {\n  @include media-mobile {\n    max-width: 100%;\n    margin-bottom: 16px;\n  }\n}",".navigation {\n  display: flex;\n  font-size: 1.5rem;\n  line-height: 2.8rem;\n}\n.navigation__link {\n  list-style: none;\n  padding: 0 10px;\n  cursor: pointer;\n  @extend %transition;\n  &:hover {\n    color: $color-primary;\n  }\n}\n.header__navigation {\n  @include media-tablet{\n    display: none;\n  }\n}",".tools__wrapper {\n  padding-bottom: 90px;\n  background-image: url(\"../../images/tools/Bg.png\");\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  background-size: 100%;\n}\n.tool-container {\n  @include media-tablet {\n    flex-wrap: wrap;\n    .tool {\n      flex-basis: 43%;\n      text-align: center;\n    }\n  }\n  @include media-mobile{\n    flex-wrap: wrap;\n    .tool {\n      flex-basis: 100%;\n      text-align: center;\n      margin-bottom: 47px;\n    }\n  }\n}\n.tools__title{\n  max-width: 462px;\n  margin: auto;\n  text-align: center;\n  margin-bottom: 70px;\n}\n\n.tool__icon {\n  margin-bottom: 30px;\n}\n.tool__title {\n  margin: 0 0 26px;\n}\n.tools__button {\n  margin-top: 60px;\n  text-align: center;\n  @include media-mobile{\n    margin-top: 0;\n  }\n}\n",".strategies {\n  padding: 30px 0;\n  @include media-tablet {\n    text-align: center;\n  }\n}\n.strategies__title {\n  margin: 0 0 14px;\n}\n.strategies__description {\n  margin: 0 0 24px;\n}\n.strategies__tags {\n  margin-bottom: 31px;\n  @include media-tablet {\n    justify-content: center;\n  }\n}\n.strategy-wrapper {\n  >* {\n    margin-bottom: 30px;\n    @include media-tablet {\n      width: 48%;\n      flex-basis: 48%;\n    }\n    @include media-mobile {\n      flex-basis: 100%;\n    }\n  }\n}\n.strategy__content {\n  padding: 24px 33px 26px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n\n}\n.strategy__name {\n  margin: 0 0 29px;\n  text-align: left;\n  flex-grow: 1;\n}\n.strategy {\n  cursor: pointer;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  &_hidden {\n    display: none;\n  }\n  @include media-tablet {\n    overflow: hidden;\n  }\n}\n.article-modal__content {\n  .strategy__image {\n    width: 100%;\n    @include media-tablet {\n      position: static;\n    }\n  }\n  .strategy__date {\n    @include font ($size: 1.3rem, $weight: normal);\n    margin: 0 0 5px;\n  }\n  .strategy__name {\n    margin-bottom: 10px;\n  }\n  .strategy__text {\n    margin: 0 0 12px;\n  }\n}","$image-gap: 32px;\n\n.employee {\n  display: flex;\n  padding: 35px;\n  position: relative;\n  width: calc(30% - $image-gap);\n}\n.employee__container {\n  padding-right: $image-gap;\n}\n.employee__name {\n  margin: 0;\n}\n.employee__title {\n  @include font($size: 1.4rem, $weight: 400);\n  margin: 0;\n}\n.employee__contact {\n  @include font($size: 1.4rem, $weight: 400);\n  color: $color-link;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n}\n.employee__photo {\n  width: 98px;\n  height: 98px;\n  position: absolute;\n  border-radius: 50%;\n  top: 20px;\n  right: -$image-gap;\n  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);\n}\n.about-us {\n  padding: 30px 0px 100px;\n}\n.about-us__title {\n  margin: 0 0 14px;\n}\n.about-us__description {\n  margin: 0 0 45px;\n}\n\n.about-us__description {\n  margin: 0 0 45px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./images/contact-us/mail.svg":
/*!************************************!*\
  !*** ./images/contact-us/mail.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3722123d1b2572d54e8d.svg";

/***/ }),

/***/ "./images/contact-us/tel.svg":
/*!***********************************!*\
  !*** ./images/contact-us/tel.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e95b843cc733aadff58.svg";

/***/ }),

/***/ "./images/icons/clock.svg":
/*!********************************!*\
  !*** ./images/icons/clock.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05cdec0a87b50386bee3.svg";

/***/ }),

/***/ "./images/icons/cursor.svg":
/*!*********************************!*\
  !*** ./images/icons/cursor.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d2c7a86fdbf28c08205.svg";

/***/ }),

/***/ "./images/icons/curve.svg":
/*!********************************!*\
  !*** ./images/icons/curve.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13a2d7562c1781c268a6.svg";

/***/ }),

/***/ "./images/icons/heart.svg":
/*!********************************!*\
  !*** ./images/icons/heart.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96a2931eb835bca8ab8a.svg";

/***/ }),

/***/ "./images/icons/play.svg":
/*!*******************************!*\
  !*** ./images/icons/play.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11c48a63b9e3975fb86b.svg";

/***/ }),

/***/ "./images/tools/Bg.png":
/*!*****************************!*\
  !*** ./images/tools/Bg.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4c6fe6e217c49f6bee0.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
// import fs from "fs";
// import jsdom from "jsdom";
// const { JSDOM } = jsdom;






// const filePath = "../index.html";
// const html = fs.readFileSync(filePath, "utf-8");
// const dom = new JSDOM(html);
// global.window = dom.window;
// global.document = dom.window.document;

var data = [{
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
var addTagsClickHandler = function addTagsClickHandler() {
  document.querySelector('.strategies__tags').addEventListener('click', function (event) {
    if (event.target.classList.contains('tag')) {
      var clickedTag = event.target;
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
var removeSelectedTags = function removeSelectedTags() {
  var tags = document.querySelectorAll('.strategies__tags .tag');
  console.log(tags);
  tags.forEach(function (tag) {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};
var selectClickedTag = function selectClickedTag(clickedTag) {
  clickedTag.classList.add('tag_selected');
  clickedTag.classList.remove('tag_bordered');
};
var showAllStrategies = function showAllStrategies() {
  var strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(function (strategy) {
    strategy.classList.remove('strategy_hidden');
  });
};
var filterStrategyBySelectedTag = function filterStrategyBySelectedTag(selectedTag) {
  var strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(function (strategy) {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.tag').forEach(function (tag) {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy_hidden');
      }
    });
  });
};
var renderArticlesToDom = function renderArticlesToDom() {
  var strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach(function (article) {
    strategiesWrapper.append(article.generateArticle());
  });
  addStrategyClickHandler();
};
var getStrategiesWrapper = function getStrategiesWrapper() {
  var strategiesContainer = document.querySelector('.strategy-wrapper');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
};
var generateArticles = function generateArticles(data) {
  var articles = [];
  data.forEach(function (article) {
    articles.push(new _js_Article_js__WEBPACK_IMPORTED_MODULE_0__.Article(article));
  });
  return articles;
};
var addToolsClickHandler = function addToolsClickHandler() {
  document.querySelector('.tools__button .button').addEventListener('click', function () {
    generateToolsModal();
  });
};
var generateToolsModal = function generateToolsModal() {
  renderModalWindow('Test');
};
var renderModalWindow = function renderModalWindow(content) {
  var modal = new _js_Modal_js__WEBPACK_IMPORTED_MODULE_1__.Modal('tools-modal');
  modal.buildModal(content);
};
var addStrategyClickHandler = function addStrategyClickHandler() {
  document.querySelector('.strategy-wrapper').addEventListener('click', function (e) {
    if (e.target.closest('.strategy')) {
      var clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
      console.log(clickedStrategyId);
      var clickedStrategyData = getClickedData(clickedStrategyId);
      renderArticleModalWindow(clickedStrategyData);
    }
  });
};
var getClickedData = function getClickedData(id) {
  return data.find(function (article) {
    return article.id == id;
  });
};
var renderArticleModalWindow = function renderArticleModalWindow(article) {
  var modal = new _js_ArticleModal_js__WEBPACK_IMPORTED_MODULE_2__.ArticleModal('article-modal', article);
  modal.renderModal();
};
//test git
})();

/******/ })()
;
//# sourceMappingURL=script.js.map