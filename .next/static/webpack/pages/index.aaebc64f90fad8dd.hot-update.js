"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/enterpriseCard/styles.ts":
/*!*************************************************!*\
  !*** ./src/components/enterpriseCard/styles.ts ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContainerHome\": function() { return /* binding */ ContainerHome; },\n/* harmony export */   \"ContentHome\": function() { return /* binding */ ContentHome; },\n/* harmony export */   \"BoxNameEnterprise\": function() { return /* binding */ BoxNameEnterprise; },\n/* harmony export */   \"ContentStatus\": function() { return /* binding */ ContentStatus; },\n/* harmony export */   \"ContainerOptions\": function() { return /* binding */ ContainerOptions; },\n/* harmony export */   \"ContentOptions\": function() { return /* binding */ ContentOptions; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    padding-top: 2rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 80%;\\n    min-height: 8rem;\\n    background: #FFFFFF;\\n    border-radius: 8px;\\n    display: flex;\\n    flex-wrap: wrap;\\n    align-items: center;\\n    justify-content: space-between;\\n    padding: 2rem 3.4rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: flex-start;\\n\\n    margin-bottom: 1rem;\\n\\n    span {\\n        font-family: Inter, sans-serif;\\n        font-weight: 700;\\n        font-size: 1.3rem;\\n        color: #302E45;\\n        margin-right: 1.2rem;\\n        margin-bottom: 0.75rem;\\n    }\\n\\n    p {\\n        font-size: 0.75rem;\\n        margin-top: 0.75rem;\\n        color: #6D6C7B;\\n    }\\n\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    div {\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        height: 25px;\\n        width: fit-content;\\n        padding: 5px 15px;\\n        border: 1px solid #BBB8D9;\\n        border-radius: 25px;\\n\\n        font-family: Inter, sans-serif;\\n        font-weight: 400;\\n        font-size: 0.8rem;\\n        color: #302E45;\\n\\n        & + div {\\n            margin-left: 15px;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    justify-content: flex-end;\\n    margin-top: 1rem;\\n\\n    img {\\n        cursor: pointer;\\n        transition: filter 0.2s;\\n\\n        &:hover {\\n            filter: brightness(0.8);\\n        }\\n\\n        & + img {\\n            margin-left: 0.75rem;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nvar ContainerHome = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar ContentHome = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar BoxNameEnterprise = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar ContentStatus = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar ContainerOptions = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\nvar ContentOptions = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lbnRlcnByaXNlQ2FyZC9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7Ozs7Ozs7Ozs7Ozs7UUFFRSxDQUt4Qzs7Ozs7Ozs7O1FBRXNDLENBVXRDOzs7Ozs7Ozs7UUFFNEMsQ0F1QnhDOzs7Ozs7Ozs7UUFFb0MsQ0F5QnhDOzs7Ozs7Ozs7UUFFMkMsQ0FHM0M7Ozs7Ozs7OztRQUV5QyxDQWlCekM7Ozs7Ozs7QUE3Rk8sR0FBSyxDQUFDQyxhQUFhLEdBQUdELDZEQUFVO0FBT2hDLEdBQUssQ0FBQ0csV0FBVyxHQUFHSCw2REFBVTtBQVk5QixHQUFLLENBQUNJLGlCQUFpQixHQUFHSiw2REFBVTtBQXlCcEMsR0FBSyxDQUFDSyxhQUFhLEdBQUdMLDZEQUFVO0FBMkJoQyxHQUFLLENBQUNNLGdCQUFnQixHQUFHTiw2REFBVTtBQUtuQyxHQUFLLENBQUNPLGNBQWMsR0FBR1AsNkRBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZW50ZXJwcmlzZUNhcmQvc3R5bGVzLnRzPzI1MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lckhvbWUgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRIb21lID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtaW4taGVpZ2h0OiA4cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMnJlbSAzLjRyZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hOYW1lRW50ZXJwcmlzZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICMzMDJFNDU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC43NXJlbTtcclxuICAgICAgICBjb2xvcjogIzZENkM3QjtcclxuICAgIH1cclxuXHJcbiAgICBgXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFN0YXR1cyA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0JCQjhEOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cclxuICAgICAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBjb2xvcjogIzMwMkU0NTtcclxuXHJcbiAgICAgICAgJiArIGRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lck9wdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50T3B0aW9ucyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgKyBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVySG9tZSIsImRpdiIsIkNvbnRlbnRIb21lIiwiQm94TmFtZUVudGVycHJpc2UiLCJDb250ZW50U3RhdHVzIiwiQ29udGFpbmVyT3B0aW9ucyIsIkNvbnRlbnRPcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/enterpriseCard/styles.ts\n");

/***/ })

});