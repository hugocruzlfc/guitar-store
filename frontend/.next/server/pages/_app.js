/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/normalize.css */ \"./styles/normalize.css\");\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: carrito , 1: setCarrito  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleGetLocalStorage();\n    }, []);\n    const handleGetLocalStorage = async ()=>{\n        const carritoLocalStorage = await JSON.parse(localStorage.getItem(\"carrito\"));\n        setCarrito(carritoLocalStorage);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    }, [\n        carrito\n    ]);\n    const handleSetCarrito = (newProducto)=>{\n        if (carrito.some((producto)=>producto.id === newProducto.id)) {\n            const carritoUpdated = carrito.map((producto)=>{\n                if (producto.id === newProducto.id) {\n                    producto.productCount = newProducto.productCount;\n                }\n                return producto;\n            });\n            setCarrito(carritoUpdated);\n        } else {\n            setCarrito([\n                ...carrito,\n                newProducto\n            ]);\n        }\n    };\n    const updateProductCount = (newProducto)=>{\n        const carritoUpdated = carrito.map((producto)=>{\n            if (producto.id === newProducto.id) {\n                producto.productCount = newProducto.productCount;\n            }\n            return producto;\n        });\n        setCarrito(carritoUpdated);\n    };\n    const deleteProduct = (id)=>{\n        const carritoUpdated = carrito.filter((producto)=>producto.id !== id);\n        setCarrito(carritoUpdated);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        carrito: carrito,\n        setCarrito: handleSetCarrito,\n        updateProductCount: updateProductCount,\n        deleteProduct: deleteProduct\n    }, void 0, false, {\n        fileName: \"/Users/hugocruz/Study/Nextjs/guitar-store/frontend/pages/_app.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ1g7QUFDRjtBQUUvQixTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUUxQ0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RPLHFCQUFxQixFQUFFLENBQUM7SUFDMUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTUEscUJBQXFCLEdBQUcsVUFBWTtRQUN4QyxNQUFNQyxtQkFBbUIsR0FBRyxNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FDMUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUNoQztRQUNETixVQUFVLENBQUNFLG1CQUFtQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEUixnREFBUyxDQUFDLElBQU07UUFDZFcsWUFBWSxDQUFDRSxPQUFPLENBQUMsU0FBUyxFQUFFSixJQUFJLENBQUNLLFNBQVMsQ0FBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDLEVBQUU7UUFBQ0EsT0FBTztLQUFDLENBQUMsQ0FBQztJQUVkLE1BQU1VLGdCQUFnQixHQUFHLENBQUNDLFdBQVcsR0FBSztRQUN4QyxJQUFJWCxPQUFPLENBQUNZLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUtBLFFBQVEsQ0FBQ0MsRUFBRSxLQUFLSCxXQUFXLENBQUNHLEVBQUUsQ0FBQyxFQUFFO1lBQzlELE1BQU1DLGNBQWMsR0FBR2YsT0FBTyxDQUFDZ0IsR0FBRyxDQUFDLENBQUNILFFBQVEsR0FBSztnQkFDL0MsSUFBSUEsUUFBUSxDQUFDQyxFQUFFLEtBQUtILFdBQVcsQ0FBQ0csRUFBRSxFQUFFO29CQUNsQ0QsUUFBUSxDQUFDSSxZQUFZLEdBQUdOLFdBQVcsQ0FBQ00sWUFBWSxDQUFDO2dCQUNuRCxDQUFDO2dCQUNELE9BQU9KLFFBQVEsQ0FBQztZQUNsQixDQUFDLENBQUM7WUFDRlosVUFBVSxDQUFDYyxjQUFjLENBQUMsQ0FBQztRQUM3QixPQUFPO1lBQ0xkLFVBQVUsQ0FBQzttQkFBSUQsT0FBTztnQkFBRVcsV0FBVzthQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU1PLGtCQUFrQixHQUFHLENBQUNQLFdBQVcsR0FBSztRQUMxQyxNQUFNSSxjQUFjLEdBQUdmLE9BQU8sQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDSCxRQUFRLEdBQUs7WUFDL0MsSUFBSUEsUUFBUSxDQUFDQyxFQUFFLEtBQUtILFdBQVcsQ0FBQ0csRUFBRSxFQUFFO2dCQUNsQ0QsUUFBUSxDQUFDSSxZQUFZLEdBQUdOLFdBQVcsQ0FBQ00sWUFBWSxDQUFDO1lBQ25ELENBQUM7WUFDRCxPQUFPSixRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDO1FBQ0ZaLFVBQVUsQ0FBQ2MsY0FBYyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU1JLGFBQWEsR0FBRyxDQUFDTCxFQUFFLEdBQUs7UUFDNUIsTUFBTUMsY0FBYyxHQUFHZixPQUFPLENBQUNvQixNQUFNLENBQUMsQ0FBQ1AsUUFBUSxHQUFLQSxRQUFRLENBQUNDLEVBQUUsS0FBS0EsRUFBRSxDQUFDO1FBQ3ZFYixVQUFVLENBQUNjLGNBQWMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQkFDRSw4REFBQ2pCLFNBQVM7UUFDUCxHQUFHQyxTQUFTO1FBQ2JDLE9BQU8sRUFBRUEsT0FBTztRQUNoQkMsVUFBVSxFQUFFUyxnQkFBZ0I7UUFDNUJRLGtCQUFrQixFQUFFQSxrQkFBa0I7UUFDdENDLGFBQWEsRUFBRUEsYUFBYTs7Ozs7WUFDNUIsQ0FDRjtBQUNKLENBQUM7QUFFRCxpRUFBZXRCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtjYXJyaXRvLCBzZXRDYXJyaXRvXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUdldExvY2FsU3RvcmFnZSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlR2V0TG9jYWxTdG9yYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNhcnJpdG9Mb2NhbFN0b3JhZ2UgPSBhd2FpdCBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJyaXRvXCIpXG4gICAgKTtcbiAgICBzZXRDYXJyaXRvKGNhcnJpdG9Mb2NhbFN0b3JhZ2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJyaXRvXCIsIEpTT04uc3RyaW5naWZ5KGNhcnJpdG8pKTtcbiAgfSwgW2NhcnJpdG9dKTtcblxuICBjb25zdCBoYW5kbGVTZXRDYXJyaXRvID0gKG5ld1Byb2R1Y3RvKSA9PiB7XG4gICAgaWYgKGNhcnJpdG8uc29tZSgocHJvZHVjdG8pID0+IHByb2R1Y3RvLmlkID09PSBuZXdQcm9kdWN0by5pZCkpIHtcbiAgICAgIGNvbnN0IGNhcnJpdG9VcGRhdGVkID0gY2Fycml0by5tYXAoKHByb2R1Y3RvKSA9PiB7XG4gICAgICAgIGlmIChwcm9kdWN0by5pZCA9PT0gbmV3UHJvZHVjdG8uaWQpIHtcbiAgICAgICAgICBwcm9kdWN0by5wcm9kdWN0Q291bnQgPSBuZXdQcm9kdWN0by5wcm9kdWN0Q291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2R1Y3RvO1xuICAgICAgfSk7XG4gICAgICBzZXRDYXJyaXRvKGNhcnJpdG9VcGRhdGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q2Fycml0byhbLi4uY2Fycml0bywgbmV3UHJvZHVjdG9dKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvZHVjdENvdW50ID0gKG5ld1Byb2R1Y3RvKSA9PiB7XG4gICAgY29uc3QgY2Fycml0b1VwZGF0ZWQgPSBjYXJyaXRvLm1hcCgocHJvZHVjdG8pID0+IHtcbiAgICAgIGlmIChwcm9kdWN0by5pZCA9PT0gbmV3UHJvZHVjdG8uaWQpIHtcbiAgICAgICAgcHJvZHVjdG8ucHJvZHVjdENvdW50ID0gbmV3UHJvZHVjdG8ucHJvZHVjdENvdW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2R1Y3RvO1xuICAgIH0pO1xuICAgIHNldENhcnJpdG8oY2Fycml0b1VwZGF0ZWQpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjYXJyaXRvVXBkYXRlZCA9IGNhcnJpdG8uZmlsdGVyKChwcm9kdWN0bykgPT4gcHJvZHVjdG8uaWQgIT09IGlkKTtcbiAgICBzZXRDYXJyaXRvKGNhcnJpdG9VcGRhdGVkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICBjYXJyaXRvPXtjYXJyaXRvfVxuICAgICAgc2V0Q2Fycml0bz17aGFuZGxlU2V0Q2Fycml0b31cbiAgICAgIHVwZGF0ZVByb2R1Y3RDb3VudD17dXBkYXRlUHJvZHVjdENvdW50fVxuICAgICAgZGVsZXRlUHJvZHVjdD17ZGVsZXRlUHJvZHVjdH1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2Fycml0byIsInNldENhcnJpdG8iLCJoYW5kbGVHZXRMb2NhbFN0b3JhZ2UiLCJjYXJyaXRvTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoYW5kbGVTZXRDYXJyaXRvIiwibmV3UHJvZHVjdG8iLCJzb21lIiwicHJvZHVjdG8iLCJpZCIsImNhcnJpdG9VcGRhdGVkIiwibWFwIiwicHJvZHVjdENvdW50IiwidXBkYXRlUHJvZHVjdENvdW50IiwiZGVsZXRlUHJvZHVjdCIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/normalize.css":
/*!******************************!*\
  !*** ./styles/normalize.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();