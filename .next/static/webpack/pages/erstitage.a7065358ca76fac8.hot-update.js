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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ErstiTage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_timetable_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-timetable-events */ \"./node_modules/react-timetable-events/dist/index.es.js\");\n\n\n\nvar theactualtime;\nvar time = __webpack_require__(/*! node-get-time */ \"./node_modules/node-get-time/index.js\");\nfunction ErstiTage() {\n    var str = time.now();\n    var strsplit = str.split(\":\");\n    theactualtime = strsplit[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        style: {\n                            fontSize: \"45px\"\n                        },\n                        children: [\n                            \"Die \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \" Ersti-Tage\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        style: {\n                            fontSize: \"35px\",\n                            marginLeft: \"-100px\",\n                            marginTop: \"50px\"\n                        },\n                        children: \"Der Terminplan:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),\n                        style: {\n                            backgroundColor: theactualtime > 10 && theactualtime < 17 ? \"blue\" : \"none\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                                style: {\n                                    width: \"100%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Vortrag\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"bold\",\n                                            marginTop: \"10px\"\n                                        },\n                                        children: \"10-12 Uhr\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                                style: {\n                                    width: \"100%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Vortrag\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"bold\",\n                                            marginTop: \"10px\"\n                                        },\n                                        children: \"10-12 Uhr\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                                style: {\n                                    width: \"100%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Vortrag\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"bold\",\n                                            marginTop: \"10px\"\n                                        },\n                                        children: \"10-12 Uhr\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                                style: {\n                                    width: \"100%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Vortrag\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: \"bold\",\n                                            marginTop: \"10px\"\n                                        },\n                                        children: \"10-12 Uhr\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://goo.gl/maps/f3L6jyN1gMcCiaW58\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Aktuelle Location\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Hier sind wir gerade!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://www.vwi-kassel.de/wp/\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/vwi_logo.webp\",\n                        alt: \"VWI Logo\",\n                        style: {\n                            width: \"80%\",\n                            maxWidth: \"250px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lukas\\\\OneDrive\\\\Ablage\\\\-Programieren\\\\ErstiPage\\\\erstitage\\\\pages\\\\erstitage.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = ErstiTage;\nvar _c;\n$RefreshReg$(_c, \"ErstiTage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsU0FBTzs7Ozs7NENBQUs7a0RBQ2hCLDhEQUFDQyxHQUFDO3dDQUFDWCxLQUFLLEVBQUU7NENBQUNZLFVBQVUsRUFBQyxNQUFNOzRDQUFFUixTQUFTLEVBQUMsTUFBTTt5Q0FBQztrREFBRSxXQUFTOzs7Ozs0Q0FBSTs7Ozs7O29DQUM1RDs7Ozs7OzRCQUdBO2tDQUdOLDhEQUFDVixLQUFHO3dCQUFDQyxTQUFTLEVBQUVYLHFFQUFXO2tDQUN6Qiw0RUFBQ2tCLEdBQUM7NEJBQUNLLElBQUksRUFBQyx1Q0FBdUM7NEJBQUNaLFNBQVMsRUFBRVgscUVBQVc7OzhDQUNwRSw4REFBQzBCLElBQUU7OENBQUMsbUJBQWlCOzs7Ozt3Q0FBSzs4Q0FDMUIsOERBQUNDLEdBQUM7OENBQUMsdUJBQXFCOzs7Ozt3Q0FBSTs7Ozs7O2dDQUMxQjs7Ozs7NEJBRUE7Ozs7OztvQkFFRDswQkFFUCw4REFBQ0UsUUFBTTtnQkFBQ2xCLFNBQVMsRUFBRVgsdUVBQWE7MEJBQzlCLDRFQUFDa0IsR0FBQztvQkFDQUssSUFBSSxFQUFDLCtCQUErQjtvQkFDcENPLE1BQU0sRUFBQyxRQUFRO29CQUNmQyxHQUFHLEVBQUMscUJBQXFCOzhCQUd2Qiw0RUFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLGdCQUFnQjt3QkFBQ0MsR0FBRyxFQUFDLFVBQVU7d0JBQUNsQixLQUFLLEVBQUU7NEJBQUNTLEtBQUssRUFBQyxLQUFLOzRCQUFFVSxRQUFRLEVBQUMsT0FBTzt5QkFBQzs7Ozs7NEJBQUc7Ozs7O3dCQUVsRjs7Ozs7b0JBQ0c7Ozs7OztZQUNMLENBQ1A7QUFDSCxDQUFDO0FBbEV1QjlCLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJzdGl0YWdlLmpzeD85ODVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IFRpbWV0YWJsZSBmcm9tICdyZWFjdC10aW1ldGFibGUtZXZlbnRzJ1xyXG5sZXQgdGhlYWN0dWFsdGltZVxyXG5jb25zdCB0aW1lID0gcmVxdWlyZSgnbm9kZS1nZXQtdGltZScpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnN0aVRhZ2UoKSB7XHJcbiAgXHJcbiAgICAgICAgbGV0IHN0ciA9IHRpbWUubm93KClcclxuICAgICAgICBsZXQgc3Ryc3BsaXQgPSBzdHIuc3BsaXQoXCI6XCIpXHJcbiAgICAgICAgdGhlYWN0dWFsdGltZSA9IHN0cnNwbGl0WzBdXHJcblxyXG4gICAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgXHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHN0eWxlPXt7Zm9udFNpemU6XCI0NXB4XCJ9fT5cclxuICAgICAgICAgIERpZSA8YT4gRXJzdGktVGFnZTwvYT5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gc3R5bGU9e3tmb250U2l6ZTpcIjM1cHhcIiwgbWFyZ2luTGVmdDpcIi0xMDBweFwiLCBtYXJnaW5Ub3A6XCI1MHB4XCJ9fT5cclxuICAgICAgICAgIERlciBUZXJtaW5wbGFuOlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhlYWN0dWFsdGltZSA+IDEwICYmIHRoZWFjdHVhbHRpbWUgPCAxNyA/IFwiYmx1ZVwiIDogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9mM0w2anlOMWdNY0NpYVc1OFwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSA+XHJcbiAgICAgICAgICAgIDxoMj5Wb3J0cmFnPC9oMj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5Ub3A6XCIxMHB4XCJ9fT4xMC0xMiBVaHI8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9mM0w2anlOMWdNY0NpYVc1OFwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSA+XHJcbiAgICAgICAgICAgIDxoMj5Wb3J0cmFnPC9oMj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5Ub3A6XCIxMHB4XCJ9fT4xMC0xMiBVaHI8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvZjNMNmp5TjFnTWNDaWFXNThcIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gPlxyXG4gICAgICAgICAgICA8aDI+Vm9ydHJhZzwvaDI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDpcImJvbGRcIiwgbWFyZ2luVG9wOlwiMTBweFwifX0+MTAtMTIgVWhyPC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2YzTDZqeU4xZ01jQ2lhVzU4XCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19ID5cclxuICAgICAgICAgICAgPGgyPlZvcnRyYWc8L2gyPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCIsIG1hcmdpblRvcDpcIjEwcHhcIn19PjEwLTEyIFVocjwvcD5cclxuICAgICAgICAgIDwvYT5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzL2YzTDZqeU4xZ01jQ2lhVzU4XCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICA8aDI+QWt0dWVsbGUgTG9jYXRpb248L2gyPlxyXG4gICAgICAgICAgICA8cD5IaWVyIHNpbmQgd2lyIGdlcmFkZSE8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy52d2kta2Fzc2VsLmRlL3dwL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvdndpX2xvZ28ud2VicFwiIGFsdD1cIlZXSSBMb2dvXCIgc3R5bGU9e3t3aWR0aDpcIjgwJVwiLCBtYXhXaWR0aDpcIjI1MHB4XCJ9fS8+XHJcbiAgICAgXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiVGltZXRhYmxlIiwidGhlYWN0dWFsdGltZSIsInRpbWUiLCJyZXF1aXJlIiwiRXJzdGlUYWdlIiwic3RyIiwibm93Iiwic3Ryc3BsaXQiLCJzcGxpdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJoMSIsInRpdGxlIiwic3R5bGUiLCJmb250U2l6ZSIsImEiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiZ3JpZCIsImJhY2tncm91bmRDb2xvciIsImhyZWYiLCJjYXJkIiwid2lkdGgiLCJoMiIsInAiLCJmb250V2VpZ2h0IiwiZm9vdGVyIiwidGFyZ2V0IiwicmVsIiwiaW1nIiwic3JjIiwiYWx0IiwibWF4V2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/erstitage.jsx\n"));

/***/ })

});