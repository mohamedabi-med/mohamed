"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/review/page",{

/***/ "(app-pages-browser)/./app/review/page.tsx":
/*!*****************************!*\
  !*** ./app/review/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"(app-pages-browser)/./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/database */ \"(app-pages-browser)/./node_modules/firebase/compat/database/dist/esm/index.esm.js\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/label */ \"(app-pages-browser)/./app/components/ui/label.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/input */ \"(app-pages-browser)/./app/components/ui/input.tsx\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./utils/cn.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfirebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp({\n    databaseURL: \"https://worldwebsolutions-79b54-default-rtdb.europe-west1.firebasedatabase.app/\"\n});\nconst ReviewForm = ()=>{\n    _s();\n    const [reviewData, setReviewData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        review: \"\"\n    });\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setReviewData({\n            ...reviewData,\n            [name]: value\n        });\n    };\n    const handleSubmit = async ()=>{\n        try {\n            const db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].database();\n            await db.ref(\"reviews\").push(reviewData); // Pushing the review data to Firebase\n            setReviewData({\n                name: \"\",\n                email: \"\",\n                review: \"\"\n            });\n            console.log(\"Review data submitted successfully!\");\n        } catch (error) {\n            console.error(\"Error submitting review data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col-reverse md:flex-row  pb-10 bg-base-200 text-base-content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full md:w-1/2 pr-0 md:pr-4 relative bg-base-200 text-base-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold text-white-900 mb-4 bg-base-200 text-base-content\",\n                        children: \"Contact Us Now!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold text-gray-400 mb-8 bg-base-200 \",\n                        children: \"What are you waiting for? No matter what you need, we will help you with it. All you need to do is reach out to us!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelInputContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"name\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                name: \"name\",\n                                value: reviewData.name,\n                                onChange: handleInputChange,\n                                placeholder: \"Your Name\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelInputContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"email\",\n                                children: \"Email Address\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                name: \"email\",\n                                value: reviewData.email,\n                                onChange: handleInputChange,\n                                placeholder: \"Your Email Address\",\n                                type: \"email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelInputContainer, {\n                        className: \"mb-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"review\",\n                                children: \"Review\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                name: \"review\",\n                                value: reviewData.review,\n                                onChange: handleInputChange,\n                                placeholder: \"Your Review\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50\",\n                        onClick: handleSubmit,\n                        children: \"Submit Review\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full md:w-1/2 pl-0 md:pl-4 relative overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full absolute top-0 left-0 bg-black opacity-60 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-full h-full object-cover rounded-lg\",\n                        src: \"review.jpeg\",\n                        alt: \"worldwebSolutions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReviewForm, \"3YKOYzf/h6hZErn10uJV2Potd0Q=\");\n_c = ReviewForm;\nconst LabelInputContainer = (param)=>{\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_6__.cn)(\"flex flex-col space-y-2 w-full\", className),\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\review\\\\page.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = LabelInputContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewForm);\nvar _c, _c1;\n$RefreshReg$(_c, \"ReviewForm\");\n$RefreshReg$(_c1, \"LabelInputContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZXZpZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDd0M7QUFDRztBQUNUO0FBQ2E7QUFDQTtBQUNmO0FBRWhDRSwyREFBUUEsQ0FBQ0ksYUFBYSxDQUFDO0lBQ3JCQyxhQUFhO0FBRWY7QUFRQSxNQUFNQyxhQUFhOztJQUNqQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQWE7UUFDdkRVLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO0lBQ1Y7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTSxFQUFFSixJQUFJLEVBQUVLLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQ2hDUCxjQUFjO1lBQ1osR0FBR0QsVUFBVTtZQUNiLENBQUNFLEtBQUssRUFBRUs7UUFDVjtJQUNGO0lBRUEsTUFBTUUsZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTUMsS0FBS2pCLDJEQUFRQSxDQUFDa0IsUUFBUTtZQUM1QixNQUFNRCxHQUFHRSxHQUFHLENBQUMsV0FBV0MsSUFBSSxDQUFDYixhQUFhLHNDQUFzQztZQUNoRkMsY0FBYztnQkFDWkMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsUUFBUTtZQUNWO1lBQ0FVLFFBQVFDLEdBQUcsQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsaUNBQWlDQTtRQUNqRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF1RTs7Ozs7O2tDQUNyRiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQXdEOzs7Ozs7a0NBRXhFLDhEQUFDRzs7MENBQ0MsOERBQUMzQix1REFBS0E7Z0NBQUM0QixTQUFROzBDQUFPOzs7Ozs7MENBQ3RCLDhEQUFDM0IsdURBQUtBO2dDQUFDTyxNQUFLO2dDQUFPSyxPQUFPUCxXQUFXRSxJQUFJO2dDQUFFcUIsVUFBVWxCO2dDQUFtQm1CLGFBQVk7Z0NBQVlDLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FFdkcsOERBQUNKOzswQ0FDQyw4REFBQzNCLHVEQUFLQTtnQ0FBQzRCLFNBQVE7MENBQVE7Ozs7OzswQ0FDdkIsOERBQUMzQix1REFBS0E7Z0NBQUNPLE1BQUs7Z0NBQVFLLE9BQU9QLFdBQVdHLEtBQUs7Z0NBQUVvQixVQUFVbEI7Z0NBQW1CbUIsYUFBWTtnQ0FBcUJDLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FFbEgsOERBQUNKO3dCQUFvQkgsV0FBVTs7MENBQzdCLDhEQUFDeEIsdURBQUtBO2dDQUFDNEIsU0FBUTswQ0FBUzs7Ozs7OzBDQUN4Qiw4REFBQzNCLHVEQUFLQTtnQ0FBQ08sTUFBSztnQ0FBU0ssT0FBT1AsV0FBV0ksTUFBTTtnQ0FBRW1CLFVBQVVsQjtnQ0FBbUJtQixhQUFZO2dDQUFjQyxNQUFLOzs7Ozs7Ozs7Ozs7a0NBRzdHLDhEQUFDQzt3QkFBT1IsV0FBVTt3QkFBMlVTLFNBQVNsQjtrQ0FBYzs7Ozs7Ozs7Ozs7OzBCQUd0WCw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDVTt3QkFBSVYsV0FBVTt3QkFBd0NXLEtBQUk7d0JBQWNDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyRjtHQTFETS9CO0tBQUFBO0FBNEROLE1BQU1zQixzQkFBc0I7UUFBQyxFQUMzQlUsUUFBUSxFQUNSYixTQUFTLEVBSVY7SUFDQyxxQkFDRSw4REFBQ0Q7UUFBSUMsV0FBV3RCLDZDQUFFQSxDQUFDLGtDQUFrQ3NCO2tCQUNsRGE7Ozs7OztBQUdQO01BWk1WO0FBY04sK0RBQWV0QixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9yZXZpZXcvcGFnZS50c3g/NWFkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2xhYmVsXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC91dGlscy9jblwiO1xyXG5cclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL3dvcmxkd2Vic29sdXRpb25zLTc5YjU0LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvJyxcclxuICAvLyBZb3VyIG90aGVyIEZpcmViYXNlIGNvbmZpZyBoZXJlXHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIFJldmlld0RhdGEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHJldmlldzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBSZXZpZXdGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyZXZpZXdEYXRhLCBzZXRSZXZpZXdEYXRhXSA9IHVzZVN0YXRlPFJldmlld0RhdGE+KHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcmV2aWV3OiAnJ1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0UmV2aWV3RGF0YSh7XHJcbiAgICAgIC4uLnJldmlld0RhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgYXdhaXQgZGIucmVmKCdyZXZpZXdzJykucHVzaChyZXZpZXdEYXRhKTsgLy8gUHVzaGluZyB0aGUgcmV2aWV3IGRhdGEgdG8gRmlyZWJhc2VcclxuICAgICAgc2V0UmV2aWV3RGF0YSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHJldmlldzogJydcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZXZpZXcgZGF0YSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyByZXZpZXcgZGF0YTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMCBmbGV4IGZsZXgtY29sLXJldmVyc2UgbWQ6ZmxleC1yb3cgIHBiLTEwIGJnLWJhc2UtMjAwIHRleHQtYmFzZS1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcHItMCBtZDpwci00IHJlbGF0aXZlIGJnLWJhc2UtMjAwIHRleHQtYmFzZS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUtOTAwIG1iLTQgYmctYmFzZS0yMDAgdGV4dC1iYXNlLWNvbnRlbnRcIj5Db250YWN0IFVzIE5vdyE8L2gxPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwIG1iLTggYmctYmFzZS0yMDAgXCI+V2hhdCBhcmUgeW91IHdhaXRpbmcgZm9yPyBObyBtYXR0ZXIgd2hhdCB5b3UgbmVlZCwgd2Ugd2lsbCBoZWxwIHlvdSB3aXRoIGl0LiBBbGwgeW91IG5lZWQgdG8gZG8gaXMgcmVhY2ggb3V0IHRvIHVzITwvaDI+XHJcblxyXG4gICAgICAgIDxMYWJlbElucHV0Q29udGFpbmVyPlxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgbmFtZT1cIm5hbWVcIiB2YWx1ZT17cmV2aWV3RGF0YS5uYW1lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgIDwvTGFiZWxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICA8TGFiZWxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwiZW1haWxcIiB2YWx1ZT17cmV2aWV3RGF0YS5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgPC9MYWJlbElucHV0Q29udGFpbmVyPlxyXG4gICAgICAgIDxMYWJlbElucHV0Q29udGFpbmVyIGNsYXNzTmFtZT0nbWItMTInPlxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJyZXZpZXdcIj5SZXZpZXc8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0IG5hbWU9XCJyZXZpZXdcIiB2YWx1ZT17cmV2aWV3RGF0YS5yZXZpZXd9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcGxhY2Vob2xkZXI9XCJZb3VyIFJldmlld1wiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICA8L0xhYmVsSW5wdXRDb250YWluZXI+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaC0xMiBhbmltYXRlLXNoaW1tZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgYmctW2xpbmVhci1ncmFkaWVudCgxMTBkZWcsIzAwMDEwMyw0NSUsIzFlMjYzMSw1NSUsIzAwMDEwMyldIGJnLVtsZW5ndGg6MjAwJV8xMDAlXSBweC02IGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNDAwIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1zbGF0ZS00MDAgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1zbGF0ZS01MFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0IFJldmlldzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIHBsLTAgbWQ6cGwtNCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGJnLWJsYWNrIG9wYWNpdHktNjAgXCI+PC9kaXY+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkLWxnXCIgc3JjPVwicmV2aWV3LmpwZWdcIiBhbHQ9XCJ3b3JsZHdlYlNvbHV0aW9uc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTGFiZWxJbnB1dENvbnRhaW5lciA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgdy1mdWxsXCIsIGNsYXNzTmFtZSl9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3Rm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmaXJlYmFzZSIsIkxhYmVsIiwiSW5wdXQiLCJjbiIsImluaXRpYWxpemVBcHAiLCJkYXRhYmFzZVVSTCIsIlJldmlld0Zvcm0iLCJyZXZpZXdEYXRhIiwic2V0UmV2aWV3RGF0YSIsIm5hbWUiLCJlbWFpbCIsInJldmlldyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwiZGIiLCJkYXRhYmFzZSIsInJlZiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiTGFiZWxJbnB1dENvbnRhaW5lciIsImh0bWxGb3IiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/review/page.tsx\n"));

/***/ })

});