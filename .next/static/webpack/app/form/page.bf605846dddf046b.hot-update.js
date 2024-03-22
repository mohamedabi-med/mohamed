"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/form/page",{

/***/ "(app-pages-browser)/./app/form/page.tsx":
/*!***************************!*\
  !*** ./app/form/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"(app-pages-browser)/./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/database */ \"(app-pages-browser)/./node_modules/firebase/compat/database/dist/esm/index.esm.js\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/label */ \"(app-pages-browser)/./app/components/ui/label.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/input */ \"(app-pages-browser)/./app/components/ui/input.tsx\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./utils/cn.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfirebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp({\n    databaseURL: \"https://worldwebsolutions-79b54-default-rtdb.europe-west1.firebasedatabase.app/\"\n});\nconst ContactForm = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        subject: \"\",\n        email: \"\",\n        phone: \"\",\n        message: \"\"\n    });\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = async ()=>{\n        try {\n            const db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].database();\n            await db.ref(\"messages\").push(formData); // Pushing the form data to Firebase\n            setFormData({\n                name: \"\",\n                subject: \"\",\n                email: \"\",\n                phone: \"\",\n                message: \"\"\n            });\n            console.log(\"Form data submitted successfully!\");\n        } catch (error) {\n            console.error(\"Error submitting form data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-10 flex flex-col-reverse md:flex-row mb-15 pb-10 bg-base-200 text-base-content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full md:w-1/2 pr-0 md:pr-4 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold text-white-900 mb-4\",\n                        children: \"Contact Us Now!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold text-gray-400 mb-8\",\n                        children: \"What are you waiting for? No matter what you need, we will help you with it. All you need to do is reach out to us!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelInputContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"name\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                name: \"name\",\n                                value: formData.name,\n                                onChange: handleInputChange,\n                                placeholder: \"Your Name\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelInputContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"subject\",\n                                children: \"Subject\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                name: \"subject\",\n                                value: formData.subject,\n                                onChange: handleInputChange,\n                                placeholder: \"Subject of your message\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelInputContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"email\",\n                                children: \"Email Address\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleInputChange,\n                                placeholder: \"Your Email Address\",\n                                type: \"email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelInputContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"phone\",\n                                children: \"Phone\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                name: \"phone\",\n                                value: formData.phone,\n                                onChange: handleInputChange,\n                                placeholder: \"Your Phone Number\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelInputContainer, {\n                        className: \"mb-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"message\",\n                                children: \"Message\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                name: \"message\",\n                                value: formData.message,\n                                onChange: handleInputChange,\n                                placeholder: \"Your Message\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50\",\n                        onClick: handleSubmit,\n                        children: \"Send The Message\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full md:w-1/2 pl-0 md:pl-4 relative overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full absolute top-0 left-0 bg-black opacity-60 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-full h-full object-cover rounded-lg\",\n                        src: \"learnen3.webp\",\n                        alt: \"worldwebSolutions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContactForm, \"yuO4rtT+SSMLmLqlnawcQ70eonQ=\");\n_c = ContactForm;\nconst LabelInputContainer = (param)=>{\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_6__.cn)(\"flex flex-col space-y-2 w-full\", className),\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mohamed abi\\\\Desktop\\\\WorldWeb solutions Website\\\\my-nextjs-app\\\\WorldWebSolutions\\\\mohamedabi-med.github.io\\\\app\\\\form\\\\page.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = LabelInputContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c, _c1;\n$RefreshReg$(_c, \"ContactForm\");\n$RefreshReg$(_c1, \"LabelInputContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNVO3dCQUFJVixXQUFVO3dCQUF3Q1csS0FBSTt3QkFBZ0JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RjtHQTFFTWpDO0tBQUFBO0FBNEVOLE1BQU13QixzQkFBc0I7UUFBQyxFQUMzQlUsUUFBUSxFQUNSYixTQUFTLEVBSVY7SUFDQyxxQkFDRSw4REFBQ0Q7UUFBSUMsV0FBV3hCLDZDQUFFQSxDQUFDLGtDQUFrQ3dCO2tCQUNsRGE7Ozs7OztBQUdQO01BWk1WO0FBY04sK0RBQWV4QixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9mb3JtL3BhZ2UudHN4PzFjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2RhdGFiYXNlJztcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9sYWJlbFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2lucHV0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvdXRpbHMvY25cIjtcclxuaW1wb3J0IHtcclxuICBJY29uQnJhbmRHaXRodWIsXHJcbiAgSWNvbkJyYW5kR29vZ2xlLFxyXG4gIEljb25CcmFuZE9ubHlmYW5zLFxyXG59IGZyb20gXCJAdGFibGVyL2ljb25zLXJlYWN0XCI7XHJcblxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vd29ybGR3ZWJzb2x1dGlvbnMtNzliNTQtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC8nLFxyXG4gIC8vIFlvdXIgb3RoZXIgRmlyZWJhc2UgY29uZmlnIGhlcmVcclxufSk7XHJcblxyXG5pbnRlcmZhY2UgRm9ybURhdGEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdWJqZWN0OiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwaG9uZTogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oe1xyXG4gICAgbmFtZTogJycsXHJcbiAgICBzdWJqZWN0OiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBob25lOiAnJyxcclxuICAgIG1lc3NhZ2U6ICcnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgIGF3YWl0IGRiLnJlZignbWVzc2FnZXMnKS5wdXNoKGZvcm1EYXRhKTsgLy8gUHVzaGluZyB0aGUgZm9ybSBkYXRhIHRvIEZpcmViYXNlXHJcbiAgICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBzdWJqZWN0OiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnRm9ybSBkYXRhIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIGZvcm0gZGF0YTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS0xMCBmbGV4IGZsZXgtY29sLXJldmVyc2UgbWQ6ZmxleC1yb3cgbWItMTUgcGItMTAgYmctYmFzZS0yMDAgdGV4dC1iYXNlLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcHItMCBtZDpwci00IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlLTkwMCBtYi00XCI+Q29udGFjdCBVcyBOb3chPC9oMT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS00MDAgbWItOFwiPldoYXQgYXJlIHlvdSB3YWl0aW5nIGZvcj8gTm8gbWF0dGVyIHdoYXQgeW91IG5lZWQsIHdlIHdpbGwgaGVscCB5b3Ugd2l0aCBpdC4gQWxsIHlvdSBuZWVkIHRvIGRvIGlzIHJlYWNoIG91dCB0byB1cyE8L2gyPlxyXG5cclxuICAgICAgICA8TGFiZWxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0IG5hbWU9XCJuYW1lXCIgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPC9MYWJlbElucHV0Q29udGFpbmVyPlxyXG4gICAgICAgIDxMYWJlbElucHV0Q29udGFpbmVyPlxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJzdWJqZWN0XCI+U3ViamVjdDwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgbmFtZT1cInN1YmplY3RcIiB2YWx1ZT17Zm9ybURhdGEuc3ViamVjdH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBwbGFjZWhvbGRlcj1cIlN1YmplY3Qgb2YgeW91ciBtZXNzYWdlXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgIDwvTGFiZWxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICA8TGFiZWxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybURhdGEuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIiB0eXBlPVwiZW1haWxcIiAvPlxyXG4gICAgICAgIDwvTGFiZWxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICA8TGFiZWxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZTwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgbmFtZT1cInBob25lXCIgdmFsdWU9e2Zvcm1EYXRhLnBob25lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiWW91ciBQaG9uZSBOdW1iZXJcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPC9MYWJlbElucHV0Q29udGFpbmVyPlxyXG4gICAgICAgIHsvKiA8TGFiZWxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0IG5hbWU9XCJtZXNzYWdlXCIgdmFsdWU9e2Zvcm1EYXRhLm1lc3NhZ2V9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPC9MYWJlbElucHV0Q29udGFpbmVyPiAqL31cclxuICAgICAgICA8TGFiZWxJbnB1dENvbnRhaW5lciBjbGFzc05hbWU9J21iLTEyJz5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0IG5hbWU9XCJtZXNzYWdlXCIgdmFsdWU9e2Zvcm1EYXRhLm1lc3NhZ2V9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPC9MYWJlbElucHV0Q29udGFpbmVyPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGgtMTIgYW5pbWF0ZS1zaGltbWVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLVtsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCMwMDAxMDMsNDUlLCMxZTI2MzEsNTUlLCMwMDAxMDMpXSBiZy1bbGVuZ3RoOjIwMCVfMTAwJV0gcHgtNiBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTQwMCB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctc2xhdGUtNDAwIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtc2xhdGUtNTBcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlNlbmQgVGhlIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBwbC0wIG1kOnBsLTQgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHRvcC0wIGxlZnQtMCBiZy1ibGFjayBvcGFjaXR5LTYwIFwiPjwvZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiIHNyYz1cImxlYXJuZW4zLndlYnBcIiBhbHQ9XCJ3b3JsZHdlYlNvbHV0aW9uc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTGFiZWxJbnB1dENvbnRhaW5lciA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgdy1mdWxsXCIsIGNsYXNzTmFtZSl9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZmlyZWJhc2UiLCJMYWJlbCIsIklucHV0IiwiY24iLCJpbml0aWFsaXplQXBwIiwiZGF0YWJhc2VVUkwiLCJDb250YWN0Rm9ybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwic3ViamVjdCIsImVtYWlsIiwicGhvbmUiLCJtZXNzYWdlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJkYiIsImRhdGFiYXNlIiwicmVmIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJMYWJlbElucHV0Q29udGFpbmVyIiwiaHRtbEZvciIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/form/page.tsx\n"));

/***/ })

});