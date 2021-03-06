"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateextensions"]("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mixins_Error_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/Error.vue */ \"./src/mixins/Error.vue\");\n/* harmony import */ var _mixins_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/Spinner.vue */ \"./src/mixins/Spinner.vue\");\n/* harmony import */ var _mixins_ModalForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/ModalForm.vue */ \"./src/mixins/ModalForm.vue\");\n/* harmony import */ var _mixins_ModalItem_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/ModalItem.vue */ \"./src/mixins/ModalItem.vue\");\n/* harmony import */ var _components_List_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/List.vue */ \"./src/components/List.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    Error: _mixins_Error_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Spinner: _mixins_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    List: _components_List_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ModalForm: _mixins_ModalForm_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    ModalItem: _mixins_ModalItem_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      apiURL: globals.apiURL,\n      acl: globals.acl,\n      loading: false,\n      error: false,\n      items: false,\n      article_content: false\n    };\n  },\n  created: function created() {\n    this.loadLists();\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    var that = this;\n    EventBus.$on('modal-content--get', function (data) {\n      console.log(data);\n\n      if (!data.article_id) {\n        return false;\n      }\n\n      _this.loading = true;\n      var that = _this;\n      axios.get(_this.apiURL + '/getArticle/' + data.article_id).then(function (response) {\n        if (response.data) {\n          if (!response.data.error) {\n            that.article_content = response.data;\n          } else {\n            that.error = '' + response.data.msg;\n          }\n        } else {\n          that.error = 'Fehler beim Laden. 01';\n        }\n      })[\"catch\"](function () {\n        that.error = 'Fehler beim Laden. 02';\n      })[\"finally\"](function () {\n        // always executed\n        that.loading = false;\n      });\n    });\n  },\n  methods: {\n    loadLists: function loadLists() {\n      this.loading = true;\n      var that = this;\n      axios.get(this.apiURL + '/getArticles').then(function (response) {\n        if (response.data) {\n          if (!response.data.error) {\n            that.items = response.data;\n          } else {\n            that.error = '' + response.data.msg;\n          }\n        } else {\n          that.error = 'Fehler beim Laden. 01';\n        }\n      })[\"catch\"](function () {\n        that.error = 'Fehler beim Laden. 02';\n      })[\"finally\"](function () {\n        // always executed\n        that.loading = false;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://extensions/./src/App.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"Error\", { attrs: { error: _vm.error } }),\n      _vm._v(\" \"),\n      _c(\"Spinner\", { attrs: { loading: _vm.loading } }),\n      _vm._v(\" \"),\n      _c(\"List\", { attrs: { items: _vm.items } }),\n      _vm._v(\" \"),\n      _c(\"ModalItem\", { attrs: { content: _vm.article_content } }),\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://extensions/./src/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9e3435ca45584ce7eb7b")
/******/ })();
/******/ 
/******/ }
);