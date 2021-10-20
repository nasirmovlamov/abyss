"use strict";
exports.id = 747;
exports.ids = [747];
exports.modules = {

/***/ 2302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ForumPageTabs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/components/styled-elements/PageTabs.style.ts

const TabsContainer = external_styled_components_default().div.withConfig({
  displayName: "PageTabsstyle__TabsContainer",
  componentId: "sc-1p47wa8-0"
})(["box-sizing:border-box;width:100%;display:flex;flex-direction:column;row-gap:15px;border-radius:6px;margin-top:0px;"]);
const TabText = external_styled_components_default().p.withConfig({
  displayName: "PageTabsstyle__TabText",
  componentId: "sc-1p47wa8-1"
})(["display:flex;padding:0px 20px 0px 20px;height:50.08px;align-items:center;color:#63696c;transition:0.4s;"]);
const Line = external_styled_components_default().div.withConfig({
  displayName: "PageTabsstyle__Line",
  componentId: "sc-1p47wa8-2"
})(["width:0px;opacity:1;height:2px;background-color:#00090e;transition:0.4s;"]);
const TabTagsAndResults = external_styled_components_default().div.withConfig({
  displayName: "PageTabsstyle__TabTagsAndResults",
  componentId: "sc-1p47wa8-3"
})(["display:flex;justify-content:space-between;"]);
const TabResults = external_styled_components_default().p.withConfig({
  displayName: "PageTabsstyle__TabResults",
  componentId: "sc-1p47wa8-4"
})(["display:flex;justify-content:center;align-items:center;color:#62686b;font-size:20px;margin-left:30px;font-family:r;"]);
const TabTagsCont = external_styled_components_default().div.withConfig({
  displayName: "PageTabsstyle__TabTagsCont",
  componentId: "sc-1p47wa8-5"
})(["display:flex;align-self:flex-end;background-color:#FFFFFF;border-radius:10px;column-gap:10px;padding:3px;padding-left:3px;height:35px;"]);
const TabTags = external_styled_components_default().button.withConfig({
  displayName: "PageTabsstyle__TabTags",
  componentId: "sc-1p47wa8-6"
})(["display:flex;justify-content:center;align-items:center;padding:5px 10px;border:1px solid transparent;border-radius:10px;cursor:pointer;background-color:transparent;transition:0.4s;border:1px solid ", ";background-color:", ";color:", ";font-size:14px;font-family:r;&:hover{background-color:rgb(229,240,244);color:#136393;}"], props => props.tagFocus ? "white" : "transparent", props => props.tagFocus ? " rgb(229,240,244)" : "transparent", props => props.tagFocus ? "#136393" : "#8EA1A3");
const Tabs = external_styled_components_default().div.withConfig({
  displayName: "PageTabsstyle__Tabs",
  componentId: "sc-1p47wa8-7"
})(["display:flex;background-color:", ";border-radius:10px;padding-left:10px;box-shadow:0px 1px 1px rgba(99,105,108,0.61),inset 0px 0px 0px rgba(99,105,108,0.61);height:54px;align-items:flex-end;overflow:hidden;"], ({
  theme
}) => theme.pageTabs.contBG);
const TabButtonsCont = external_styled_components_default().div.withConfig({
  displayName: "PageTabsstyle__TabButtonsCont",
  componentId: "sc-1p47wa8-8"
})(["display:flex;padding-left:10px;height:100%;align-items:flex-end;overflow:hidden;&:hover{", "{transform:translateY(1.3px);width:80%;}", "{color:#63696c;}}"], Line, TabText);
const TabButton = external_styled_components_default().button.withConfig({
  displayName: "PageTabsstyle__TabButton",
  componentId: "sc-1p47wa8-9"
})(["display:flex;justify-content:space-between;border:none;font-size:14px;background-color:transparent;color:#63696c;cursor:pointer;font-weight:600;align-items:center;flex-direction:column;padding:0px;height:100%;box-sizing:border-box;div{height:", ";width:", ";}p{color:", ";}&:hover{", "{transform:translateY(1.3px);width:80%;}", "{color:#63696c;}}&:hover{&:hover ", "{opacity:1;width:100%;height:2px;transform:translateY(0px);}&:hover ", "{color:#00090e;}}"], props => props.tabFocus ? "2px" : "0px", props => props.tabFocus && '100%', ({
  theme,
  tabFocus
}) => tabFocus ? theme.pageTabs.focusedColor : theme.pageTabs.nonfocusedColor, Line, TabText, Line, TabText);
;// CONCATENATED MODULE: ./components/ForumPageTabs.tsx






function PageTabs({}) {
  const router = (0,router_.useRouter)();
  const {
    selectedTab,
    selectedTag
  } = router.query;

  const tabQuery = (tab = "default", tag = "default") => {
    if (tab !== "default") {
      router.push({
        pathname: router.pathname,
        query: {
          selectedTab: tab,
          selectedTag: selectedTag
        }
      });
    } else if (tag !== "default") {
      router.push({
        pathname: router.pathname,
        query: {
          selectedTab: selectedTab,
          selectedTag: tag
        }
      });
    } else {}
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TabsContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Tabs, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TabButtonsCont, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TabButton, {
          id: "tab1",
          tabFocus: selectedTab === "Info" ? true : false,
          name: "tab",
          onClick: () => tabQuery("Info", "default"),
          children: [/*#__PURE__*/jsx_runtime_.jsx(TabText, {
            children: "Requests"
          }), /*#__PURE__*/jsx_runtime_.jsx(Line, {})]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TabButton, {
          id: "tab2",
          tabFocus: selectedTab === "Clip" ? true : false,
          name: "tab",
          onClick: () => tabQuery("Clip", "default"),
          children: [/*#__PURE__*/jsx_runtime_.jsx(TabText, {
            children: "Questions"
          }), /*#__PURE__*/jsx_runtime_.jsx(Line, {})]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TabButton, {
          id: "tab3",
          tabFocus: selectedTab === "Forum" ? true : false,
          name: "tab",
          onClick: () => tabQuery("Forum", "default"),
          children: [/*#__PURE__*/jsx_runtime_.jsx(TabText, {
            children: "Discussions"
          }), /*#__PURE__*/jsx_runtime_.jsx(Line, {})]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TabTagsAndResults, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TabResults, {
        children: "7,903 results"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TabTagsCont, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(TabTags, {
          name: "tag",
          tagFocus: selectedTag === "Newes" ? true : false,
          onClick: () => tabQuery("default", "Newes"),
          children: "Newes"
        }), /*#__PURE__*/jsx_runtime_.jsx(TabTags, {
          name: "tag",
          tagFocus: selectedTag === "Most Visited" ? true : false,
          onClick: () => tabQuery("default", "Most Visited"),
          children: "Most Visited"
        }), /*#__PURE__*/jsx_runtime_.jsx(TabTags, {
          name: "tag",
          tagFocus: selectedTag === "Most Helpful" ? true : false,
          onClick: () => tabQuery("default", "Most Helpful"),
          children: "Most Helpful"
        }), /*#__PURE__*/jsx_runtime_.jsx(TabTags, {
          name: "tag",
          tagFocus: selectedTag === "Recently" ? true : false,
          onClick: () => tabQuery("default", "Recently"),
          children: "Recently"
        })]
      })]
    })]
  });
}

/* harmony default export */ const ForumPageTabs = (PageTabs);

/***/ }),

/***/ 8518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sL": () => (/* binding */ ForumPage),
/* harmony export */   "Yn": () => (/* binding */ StorePage)
/* harmony export */ });
/* unused harmony export SingleProductPage */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ForumPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Pagesstyle__ForumPage",
  componentId: "sc-14pe3dm-0"
})(["width:808px;min-height:1600px;display:flex;flex-direction:column;margin:auto;align-items:center;row-gap:14px;"]);
const StorePage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().main.withConfig({
  displayName: "Pagesstyle__StorePage",
  componentId: "sc-14pe3dm-1"
})(["width:808px;min-height:1600px;display:flex;flex-direction:column;margin:auto;align-items:center;row-gap:15px;"]);
const SingleProductPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Pagesstyle__SingleProductPage",
  componentId: "sc-14pe3dm-2"
})(["width:100%;column-gap:20px;justify-content:space-between;box-sizing:border-box;display:flex;row-gap:20px;"]);

/***/ })

};
;