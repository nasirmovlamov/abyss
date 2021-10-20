"use strict";
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hy": () => (/* binding */ changeForumTabActive),
/* harmony export */   "oB": () => (/* binding */ page_tabs),
/* harmony export */   "v6": () => (/* binding */ forum_tabs),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports PageTabsSlice, changeProductTabActive */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  page_tabs: {
    forumTabs: [{
      tabName: "Answers",
      link: "answersCont",
      id: 0,
      isActive: true
    }, {
      tabName: "Products",
      link: "productsCont",
      id: 1,
      isActive: false
    }],
    productTabs: [{
      tabName: "Code",
      link: "codeCont",
      id: 2,
      isActive: true
    }, {
      tabName: "Info",
      link: "requirementsCont",
      id: 3,
      isActive: false
    }, {
      tabName: "Forum",
      link: "forumCont",
      id: 4,
      isActive: false
    }, {
      tabName: "Clips",
      link: "clipCont",
      id: 5,
      isActive: false
    }]
  }
};
const PageTabsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'PageTabs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeForumTabActive: (state, {
      payload
    }) => {
      state.page_tabs.forumTabs = payload;
    },
    changeProductTabActive: (state, action) => {
      state.page_tabs.productTabs[action.payload.id].isActive = action.payload.isActive;
    }
  }
});
const {
  changeForumTabActive,
  changeProductTabActive
} = PageTabsSlice.actions; // The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.PageTabs.value)`

const page_tabs = state => state.tabsReducer.page_tabs;
const forum_tabs = state => state.tabsReducer.page_tabs.forumTabs; // We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageTabsSlice.reducer);

/***/ }),

/***/ 1555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ forumWordRegex),
/* harmony export */   "q": () => (/* binding */ storeWordRegex)
/* harmony export */ });
const forumWordRegex = /forum+/;
const storeWordRegex = /store+/;

/***/ })

};
;