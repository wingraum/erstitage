"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/erstitage",{

/***/ "./pages/erstitage.jsx":
/*!*****************************!*\
  !*** ./pages/erstitage.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ErstiTage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_timetable_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-timetable-events */ \"./node_modules/react-timetable-events/dist/index.es.js\");\n\n\n\nvar theactualtime;\nvar time = __webpack_require__(/*! node-get-time */ \"./node_modules/node-get-time/index.js\");\nfunction ErstiTage() {\n    var acutalTime = function acutalTime() {\n        var str = time.now();\n        str.split(\":\");\n        console.log(str);\n        theactualtime = str[0];\n        alert(theactualtime);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        style: {\n                            fontSize: \"45px\"\n                        },\n                        children: [\n                            \"Die \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \" Ersti-Tage\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        style: {\n                            fontSize: \"35px\",\n                            marginLeft: \"-100px\",\n                            marginTop: \"50px\"\n                        },\n                        children: \"Der Terminplan:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return acutalTime();\n                        },\n                        children: \"time\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                                style: {\n                                    width: \"100%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Vortrag\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"bold\",\n                                            marginTop: \"10px\"\n                                        },\n                                        children: \"10-12 Uhr\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                                style: {\n                                    width: \"100%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Vortrag\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"bold\",\n                                            marginTop: \"10px\"\n                                        },\n                                        children: \"10-12 Uhr\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                                style: {\n                                    width: \"100%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Vortrag\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"bold\",\n                                            marginTop: \"10px\"\n                                        },\n                                        children: \"10-12 Uhr\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                                style: {\n                                    width: \"100%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Vortrag\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"bold\",\n                                            marginTop: \"10px\"\n                                        },\n                                        children: \"10-12 Uhr\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Aktuelle Location\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Hier sind wir gerade!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://www.vwi-kassel.de/wp/\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/vwi_logo.webp\",\n                        alt: \"VWI Logo\",\n                        style: {\n                            width: \"80%\",\n                            maxWidth: \"250px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = ErstiTage;\nvar _c;\n$RefreshReg$(_c, \"ErstiTage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWQscUVBQVc7Z0NBQUVtQixLQUFLLEVBQUU7b0NBQUNVLEtBQUssRUFBQyxNQUFNO2lDQUFDOztrREFDM0YsOERBQUNDLElBQUU7a0RBQUMsU0FBTzs7Ozs7NENBQUs7a0RBQ2hCLDhEQUFDQyxHQUFDO3dDQUFDWixLQUFLLEVBQUU7NENBQUNhLFVBQVUsRUFBQyxNQUFNOzRDQUFFVCxTQUFTLEVBQUMsTUFBTTt5Q0FBQztrREFBRSxXQUFTOzs7Ozs0Q0FBSTs7Ozs7O29DQUM1RDs7Ozs7OzRCQUdBO2tDQUdOLDhEQUFDVixLQUFHO3dCQUFDQyxTQUFTLEVBQUVkLHFFQUFXO2tDQUN6Qiw0RUFBQ3FCLEdBQUM7NEJBQUNNLElBQUksRUFBQyx1Q0FBdUM7NEJBQUNiLFNBQVMsRUFBRWQscUVBQVc7OzhDQUNwRSw4REFBQzhCLElBQUU7OENBQUMsbUJBQWlCOzs7Ozt3Q0FBSzs4Q0FDMUIsOERBQUNDLEdBQUM7OENBQUMsdUJBQXFCOzs7Ozt3Q0FBSTs7Ozs7O2dDQUMxQjs7Ozs7NEJBRUE7Ozs7OztvQkFFRDswQkFFUCw4REFBQ0UsUUFBTTtnQkFBQ25CLFNBQVMsRUFBRWQsdUVBQWE7MEJBQzlCLDRFQUFDcUIsR0FBQztvQkFDQU0sSUFBSSxFQUFDLCtCQUErQjtvQkFDcENPLE1BQU0sRUFBQyxRQUFRO29CQUNmQyxHQUFHLEVBQUMscUJBQXFCOzhCQUd2Qiw0RUFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLGdCQUFnQjt3QkFBQ0MsR0FBRyxFQUFDLFVBQVU7d0JBQUNuQixLQUFLLEVBQUU7NEJBQUNVLEtBQUssRUFBQyxLQUFLOzRCQUFFVSxRQUFRLEVBQUMsT0FBTzt5QkFBQzs7Ozs7NEJBQUc7Ozs7O3dCQUVsRjs7Ozs7b0JBQ0c7Ozs7OztZQUNMLENBQ1A7QUFDSCxDQUFDO0FBcEV1QmxDLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJzdGl0YWdlLmpzeD85ODVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IFRpbWV0YWJsZSBmcm9tICdyZWFjdC10aW1ldGFibGUtZXZlbnRzJ1xyXG5sZXQgdGhlYWN0dWFsdGltZVxyXG5jb25zdCB0aW1lID0gcmVxdWlyZSgnbm9kZS1nZXQtdGltZScpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnN0aVRhZ2UoKSB7XHJcbiAgICBmdW5jdGlvbiBhY3V0YWxUaW1lKCl7XHJcbiAgICAgICAgbGV0IHN0ciA9IHRpbWUubm93KClcclxuICAgICAgICBzdHIuc3BsaXQoXCI6XCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKVxyXG4gICAgICAgIHRoZWFjdHVhbHRpbWUgPSBzdHJbMF1cclxuICAgIGFsZXJ0KHRoZWFjdHVhbHRpbWUpXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgXHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHN0eWxlPXt7Zm9udFNpemU6XCI0NXB4XCJ9fT5cclxuICAgICAgICAgIERpZSA8YT4gRXJzdGktVGFnZTwvYT5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gc3R5bGU9e3tmb250U2l6ZTpcIjM1cHhcIiwgbWFyZ2luTGVmdDpcIi0xMDBweFwiLCBtYXJnaW5Ub3A6XCI1MHB4XCJ9fT5cclxuICAgICAgICAgIERlciBUZXJtaW5wbGFuOlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+YWN1dGFsVGltZSgpfT50aW1lPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2YzTDZqeU4xZ01jQ2lhVzU4XCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19ID5cclxuICAgICAgICAgICAgPGgyPlZvcnRyYWc8L2gyPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCIsIG1hcmdpblRvcDpcIjEwcHhcIn19PjEwLTEyIFVocjwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2YzTDZqeU4xZ01jQ2lhVzU4XCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19ID5cclxuICAgICAgICAgICAgPGgyPlZvcnRyYWc8L2gyPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCIsIG1hcmdpblRvcDpcIjEwcHhcIn19PjEwLTEyIFVocjwvcD5cclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9mM0w2anlOMWdNY0NpYVc1OFwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSA+XHJcbiAgICAgICAgICAgIDxoMj5Wb3J0cmFnPC9oMj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5Ub3A6XCIxMHB4XCJ9fT4xMC0xMiBVaHI8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZjNMNmp5TjFnTWNDaWFXNThcIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gPlxyXG4gICAgICAgICAgICA8aDI+Vm9ydHJhZzwvaDI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDpcImJvbGRcIiwgbWFyZ2luVG9wOlwiMTBweFwifX0+MTAtMTIgVWhyPC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZjNMNmp5TjFnTWNDaWFXNThcIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgIDxoMj5Ba3R1ZWxsZSBMb2NhdGlvbjwvaDI+XHJcbiAgICAgICAgICAgIDxwPkhpZXIgc2luZCB3aXIgZ2VyYWRlITwvcD5cclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnZ3aS1rYXNzZWwuZGUvd3AvXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi92d2lfbG9nby53ZWJwXCIgYWx0PVwiVldJIExvZ29cIiBzdHlsZT17e3dpZHRoOlwiODAlXCIsIG1heFdpZHRoOlwiMjUwcHhcIn19Lz5cclxuICAgICBcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJUaW1ldGFibGUiLCJ0aGVhY3R1YWx0aW1lIiwidGltZSIsInJlcXVpcmUiLCJFcnN0aVRhZ2UiLCJhY3V0YWxUaW1lIiwic3RyIiwibm93Iiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwiaDEiLCJ0aXRsZSIsInN0eWxlIiwiZm9udFNpemUiLCJhIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJncmlkIiwiaHJlZiIsImNhcmQiLCJ3aWR0aCIsImgyIiwicCIsImZvbnRXZWlnaHQiLCJmb290ZXIiLCJ0YXJnZXQiLCJyZWwiLCJpbWciLCJzcmMiLCJhbHQiLCJtYXhXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/erstitage.jsx\n"));

/***/ })

});