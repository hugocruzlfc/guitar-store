"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/normalize.css */ \"./styles/normalize.css\");\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), carrito = ref[0], setCarrito = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        handleGetLocalStorage();\n    }, []);\n    var handleGetLocalStorage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var carritoLocalStorage;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            JSON.parse(localStorage.getItem(\"carrito\"))\n                        ];\n                    case 1:\n                        carritoLocalStorage = _state.sent();\n                        setCarrito(carritoLocalStorage);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleGetLocalStorage() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    }, [\n        carrito\n    ]);\n    var handleSetCarrito = function(newProducto) {\n        if (carrito.some(function(producto) {\n            return producto.id === newProducto.id;\n        })) {\n            var carritoUpdated = carrito.map(function(producto) {\n                if (producto.id === newProducto.id) {\n                    producto.productCount = newProducto.productCount;\n                }\n                return producto;\n            });\n            setCarrito(carritoUpdated);\n        } else {\n            setCarrito((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(carrito).concat([\n                newProducto\n            ]));\n        }\n    };\n    var updateProductCount = function(newProducto) {\n        var carritoUpdated = carrito.map(function(producto) {\n            if (producto.id === newProducto.id) {\n                producto.productCount = newProducto.productCount;\n            }\n            return producto;\n        });\n        setCarrito(carritoUpdated);\n    };\n    var deleteProduct = function(id) {\n        var carritoUpdated = carrito.filter(function(producto) {\n            return producto.id !== id;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, pageProps), {\n        carrito: carrito,\n        setCarrito: handleSetCarrito,\n        updateProductCount: updateProductCount,\n        deleteProduct: deleteProduct\n    }), void 0, false, {\n        fileName: \"/Users/hugocruz/Study/Nextjs/guitar-store/frontend/pages/_app.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"7vVO+MPe3Y2IDacHRwt2MQF/mfo=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsRUFBRUEsYUFBYTs7Ozs7WUFDNUIsQ0FDRjtBQUNKLENBQUM7R0F2RFF0QixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUF5RGQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2NhcnJpdG8sIHNldENhcnJpdG9dID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlR2V0TG9jYWxTdG9yYWdlKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVHZXRMb2NhbFN0b3JhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2Fycml0b0xvY2FsU3RvcmFnZSA9IGF3YWl0IEpTT04ucGFyc2UoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnJpdG9cIilcbiAgICApO1xuICAgIHNldENhcnJpdG8oY2Fycml0b0xvY2FsU3RvcmFnZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnJpdG9cIiwgSlNPTi5zdHJpbmdpZnkoY2Fycml0bykpO1xuICB9LCBbY2Fycml0b10pO1xuXG4gIGNvbnN0IGhhbmRsZVNldENhcnJpdG8gPSAobmV3UHJvZHVjdG8pID0+IHtcbiAgICBpZiAoY2Fycml0by5zb21lKChwcm9kdWN0bykgPT4gcHJvZHVjdG8uaWQgPT09IG5ld1Byb2R1Y3RvLmlkKSkge1xuICAgICAgY29uc3QgY2Fycml0b1VwZGF0ZWQgPSBjYXJyaXRvLm1hcCgocHJvZHVjdG8pID0+IHtcbiAgICAgICAgaWYgKHByb2R1Y3RvLmlkID09PSBuZXdQcm9kdWN0by5pZCkge1xuICAgICAgICAgIHByb2R1Y3RvLnByb2R1Y3RDb3VudCA9IG5ld1Byb2R1Y3RvLnByb2R1Y3RDb3VudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvZHVjdG87XG4gICAgICB9KTtcbiAgICAgIHNldENhcnJpdG8oY2Fycml0b1VwZGF0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDYXJyaXRvKFsuLi5jYXJyaXRvLCBuZXdQcm9kdWN0b10pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9kdWN0Q291bnQgPSAobmV3UHJvZHVjdG8pID0+IHtcbiAgICBjb25zdCBjYXJyaXRvVXBkYXRlZCA9IGNhcnJpdG8ubWFwKChwcm9kdWN0bykgPT4ge1xuICAgICAgaWYgKHByb2R1Y3RvLmlkID09PSBuZXdQcm9kdWN0by5pZCkge1xuICAgICAgICBwcm9kdWN0by5wcm9kdWN0Q291bnQgPSBuZXdQcm9kdWN0by5wcm9kdWN0Q291bnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZHVjdG87XG4gICAgfSk7XG4gICAgc2V0Q2Fycml0byhjYXJyaXRvVXBkYXRlZCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvZHVjdCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGNhcnJpdG9VcGRhdGVkID0gY2Fycml0by5maWx0ZXIoKHByb2R1Y3RvKSA9PiBwcm9kdWN0by5pZCAhPT0gaWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudFxuICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgIGNhcnJpdG89e2NhcnJpdG99XG4gICAgICBzZXRDYXJyaXRvPXtoYW5kbGVTZXRDYXJyaXRvfVxuICAgICAgdXBkYXRlUHJvZHVjdENvdW50PXt1cGRhdGVQcm9kdWN0Q291bnR9XG4gICAgICBkZWxldGVQcm9kdWN0PXtkZWxldGVQcm9kdWN0fVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjYXJyaXRvIiwic2V0Q2Fycml0byIsImhhbmRsZUdldExvY2FsU3RvcmFnZSIsImNhcnJpdG9Mb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZVNldENhcnJpdG8iLCJuZXdQcm9kdWN0byIsInNvbWUiLCJwcm9kdWN0byIsImlkIiwiY2Fycml0b1VwZGF0ZWQiLCJtYXAiLCJwcm9kdWN0Q291bnQiLCJ1cGRhdGVQcm9kdWN0Q291bnQiLCJkZWxldGVQcm9kdWN0IiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});