"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,500;0,600;0,700;1,200;1,400;1,500;1,700&family=Roboto+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&family=Space+Mono&family=Titillium+Web:ital,wght@0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,500;0,600;0,700;1,200;1,400;1,500;1,700&family=Rajdhani:wght@300;400;500;600;700&family=Roboto+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&family=Space+Mono&family=Titillium+Web:ital,wght@0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Rajdhani', sans-serif;\r\n  color: var(--text-color);\r\n}\r\n\r\n:root {\r\n  --background-color: #03001c;\r\n  --text-color: #5b8fb9;\r\n  --secondary-color: #c147e9;\r\n}\r\n\r\nbody {\r\n  background-color: var(--background-color);\r\n}\r\n\r\nh2 {\r\n  font-size: 3rem;\r\n}\r\n\r\n#main-section {\r\n  width: 65%;\r\n  margin: 2rem auto;\r\n  padding: 2rem;\r\n  border-radius: 15px;\r\n}\r\n\r\nheader h1 {\r\n  font-size: 5rem;\r\n  animation: headerRightToLeft 1.7s ease-in-out forwards;\r\n}\r\n\r\n.my-btn {\r\n  color: black;\r\n  font-weight: 500;\r\n  background-color: var(--text-color);\r\n  border-radius: 12px;\r\n  width: 6rem;\r\n  height: 3rem;\r\n}\r\n\r\n.my-btn:hover {\r\n  background-color: var(--secondary-color);\r\n  color: #fff;\r\n  transition: all 0.5s ease-out;\r\n}\r\n\r\n#refresh-button {\r\n  animation: rotate 2s linear infinite forwards;\r\n}\r\n\r\n.score-section {\r\n  animation: slideLeftToRight 1s ease-in-out forwards;\r\n}\r\n\r\n.add-score-section {\r\n  animation: slideRightToLeft 1s ease-in-out forwards;\r\n}\r\n\r\n.add-score-section input {\r\n  background-color: rgb(91, 143, 185, 0.5);\r\n  color: white;\r\n  cursor: pointer;\r\n  outline: none; /* Remove default outline */\r\n  border: none;\r\n  box-shadow: 0 0 0 2px var(--secondary-color);\r\n  border-radius: 16px;\r\n  padding: 10px;\r\n  width: 60%;\r\n}\r\n\r\n.score-board {\r\n  border: 1px solid var(--secondary-color);\r\n  border-radius: 12px;\r\n  padding-left: 0;\r\n  overflow: hidden;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.score-board li {\r\n  color: var(--text-color);\r\n  padding: 1rem;\r\n  list-style: none;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.score-board li:hover {\r\n  font-size: 1.7rem;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.score-board li:nth-child(even) {\r\n  background-color: rgba(193, 71, 233, 0.4);\r\n}\r\n\r\n.score-board li:nth-child(odd) {\r\n  background-color: rgba(193, 71, 233, 0.3);\r\n}\r\n\r\n.score-board li:nth-child(even):hover {\r\n  background-color: rgba(193, 71, 233, 0.5);\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.score-board li:nth-child(odd):hover {\r\n  background-color: rgba(193, 71, 233, 0.6);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n#add-score-title {\r\n  margin-left: 15px;\r\n}\r\n\r\n.add-score-section input:focus {\r\n  outline: 2px solid #2f58cd;\r\n}\r\n\r\n.add-score-section input:hover {\r\n  background-color: rgb(91, 143, 185, 0.2);\r\n}\r\n\r\n::placeholder {\r\n  color: #fff;\r\n  font-size: 18px;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n.error-text {\r\n  opacity: 0;\r\n  display: none;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: rgb(183, 13, 13);\r\n}\r\n\r\n.show-error {\r\n  animation: fade 0.7s ease-in-out forwards;\r\n  margin: 10px 0;\r\n  display: block;\r\n}\r\n\r\n@keyframes slideLeftToRight {\r\n  0% {\r\n    transform: translateX(-100%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes slideRightToLeft {\r\n  0% {\r\n    transform: translateX(100%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes headerRightToLeft {\r\n  0% {\r\n    transform: translateX(100%);\r\n    color: var(--text-color);\r\n  }\r\n\r\n  70% {\r\n    color: var(--background-color);\r\n  }\r\n\r\n  90% {\r\n    color: var(--secondary-color);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    color: var(--secondary-color);\r\n  }\r\n}\r\n\r\n@keyframes fade {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotate {\r\n  0% {\r\n    transform: rotate(15deg);\r\n  }\r\n\r\n  25% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  50% {\r\n    transform: rotate(-15deg);\r\n  }\r\n\r\n  75% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(15deg);\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_createNewScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createNewScore.js */ \"./src/modules/createNewScore.js\");\n/* harmony import */ var _modules_getScore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getScore.js */ \"./src/modules/getScore.js\");\n/* harmony import */ var _modules_loadRecentScores_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loadRecentScores.js */ \"./src/modules/loadRecentScores.js\");\n/* harmony import */ var _modules_checkFormError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkFormError.js */ \"./src/modules/checkFormError.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst refreshBtn = document.getElementById('refresh-button');\r\nconst submitBtn = document.getElementById('submit-button');\r\nconst userNameInput = document.getElementById('user');\r\nconst userScoreInput = document.getElementById('score');\r\nconst errorMessage = document.getElementById('error-message');\r\n// const completedSentence = document.getElementById('completed-sentence');\r\n\r\nsubmitBtn.addEventListener('click', async () => {\r\n  const userName = userNameInput.value.trim();\r\n  const userScore = userScoreInput.value.trim();\r\n  const status = (0,_modules_checkFormError_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(userName, userScore);\r\n  errorMessage.classList.toggle('show-error', !status);\r\n  (0,_modules_createNewScore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userName, userScore);\r\n  userNameInput.value = '';\r\n  userScoreInput.value = '';\r\n});\r\n\r\nrefreshBtn.addEventListener('click', async () => {\r\n  const gameDatas = await (0,_modules_getScore_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_loadRecentScores_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(gameDatas);\r\n});\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkFormError.js":
/*!***************************************!*\
  !*** ./src/modules/checkFormError.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkFormError = (userName, userScore) => (!!((userName && userScore)));\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkFormError);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/checkFormError.js?");

/***/ }),

/***/ "./src/modules/createNewScore.js":
/*!***************************************!*\
  !*** ./src/modules/createNewScore.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getGameId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getGameId.js */ \"./src/modules/getGameId.js\");\n/* harmony import */ var _returnGameId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnGameId.js */ \"./src/modules/returnGameId.js\");\n\n\n\nconst createNewScore = async (user, score) => {\n  const id = await (0,_getGameId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const gameId = (0,_returnGameId_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;\n  const newScore = {\n    user,\n    score,\n  };\n  const requestOptions = {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify(newScore),\n  };\n\n  try {\n    const response = await fetch(url, requestOptions);\n    const data = await response.json();\n    return data.result;\n  } catch (err) {\n    console.log(err);\n    throw err;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewScore);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/createNewScore.js?");

/***/ }),

/***/ "./src/modules/getGameId.js":
/*!**********************************!*\
  !*** ./src/modules/getGameId.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _returnGameId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnGameId.js */ \"./src/modules/returnGameId.js\");\n\n\nconst getGameId = async () => {\n  if (_returnGameId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    return _returnGameId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\n  const gameName = {\n    name: 'My cool new game',\n  };\n  const requestOptions = {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify(gameName),\n  };\n\n  try {\n    const response = await fetch(url, requestOptions);\n    const data = await response.json();\n    const gameIdStr = data.result;\n    const regex = /Game with ID: ([A-Za-z0-9]+)/;\n    const match = gameIdStr.match(regex);\n    const gameId = match[1];\n    return gameId;\n  } catch (err) {\n    console.log(err);\n    throw err;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGameId);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/getGameId.js?");

/***/ }),

/***/ "./src/modules/getScore.js":
/*!*********************************!*\
  !*** ./src/modules/getScore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getGameId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getGameId.js */ \"./src/modules/getGameId.js\");\n\n\nconst getScore = async () => {\n  const gameId = await (0,_getGameId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, { method: 'GET' });\n  const data = await response.json();\n  return data.result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getScore);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/getScore.js?");

/***/ }),

/***/ "./src/modules/loadRecentScores.js":
/*!*****************************************!*\
  !*** ./src/modules/loadRecentScores.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sortScores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortScores.js */ \"./src/modules/sortScores.js\");\n\n\nconst scoreBoard = document.querySelector('.score-board');\nconst loadRecentScores = (gameDatas) => {\n  scoreBoard.innerHTML = '';\n  const sortedData = (0,_sortScores_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(gameDatas);\n  sortedData.forEach((gameData) => {\n    scoreBoard.innerHTML += `<li>${gameData.user} : ${gameData.score}</li>`;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRecentScores);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/loadRecentScores.js?");

/***/ }),

/***/ "./src/modules/returnGameId.js":
/*!*************************************!*\
  !*** ./src/modules/returnGameId.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst returnGameId = (id) => {\n  const gameId = id;\n  return gameId;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (returnGameId);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/returnGameId.js?");

/***/ }),

/***/ "./src/modules/sortScores.js":
/*!***********************************!*\
  !*** ./src/modules/sortScores.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sortScores = (gameDatas) => {\n  const updatedData = [...gameDatas];\n  return updatedData.sort((a, b) => b.score - a.score);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortScores);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/sortScores.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);