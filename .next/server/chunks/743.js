"use strict";
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 3743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SinglePageTabs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./app/feature/PageTabsSlice.ts
var PageTabsSlice = __webpack_require__(273);
// EXTERNAL MODULE: ./app/store/hooks.ts
var hooks = __webpack_require__(6293);
// EXTERNAL MODULE: ./logic/regex/NavbarRegex.ts
var NavbarRegex = __webpack_require__(1555);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/components/styled-elements/SinglePageTabs.styled.ts

const SingleTabsContainer = external_styled_components_default().div.withConfig({
  displayName: "SinglePageTabsstyled__SingleTabsContainer",
  componentId: "sc-1c8xv12-0"
})(["box-sizing:border-box;width:100%;display:flex;flex-direction:column;align-items:flex-start;row-gap:10px;padding-top:10px;padding-right:51px;margin-top:10px;position:sticky;top:56px;transition:0.5s top;padding-bottom:0px;z-index:999;border-radius:10px;background-color:#ffffff;&:hover{}"]);
const SingleTabText = external_styled_components_default().span.withConfig({
  displayName: "SinglePageTabsstyled__SingleTabText",
  componentId: "sc-1c8xv12-1"
})(["display:flex;padding:12px 20px 0px 20px;transition:0.2s;"]);
const SingleLine = external_styled_components_default().div.withConfig({
  displayName: "SinglePageTabsstyled__SingleLine",
  componentId: "sc-1c8xv12-2"
})(["width:100%;opacity:0;height:2px;background-color:#00090e;transition:0.2s;align-self:center;"]);
const SingleTabTagsCont = external_styled_components_default().div.withConfig({
  displayName: "SinglePageTabsstyled__SingleTabTagsCont",
  componentId: "sc-1c8xv12-3"
})(["display:flex;align-self:flex-end;"]);
const SingleTabTags = external_styled_components_default().button.withConfig({
  displayName: "SinglePageTabsstyled__SingleTabTags",
  componentId: "sc-1c8xv12-4"
})(["display:flex;justify-content:center;align-items:center;padding:10px;color:#8EA1A3;border:1px solid transparent;border-radius:20px;cursor:pointer;background-color:transparent;transition:0.4s;border:1px solid ", ";"], props => props.tagFocus ? "white" : "transparent");
const SingleTabs = external_styled_components_default().div.withConfig({
  displayName: "SinglePageTabsstyled__SingleTabs",
  componentId: "sc-1c8xv12-5"
})(["display:flex;height:40px;&:hover ", "{transform:scale(0.8);background-color:gray;}&:hover ", "{color:gray;}"], SingleLine, SingleTabText);
const SingleTabButton = external_styled_components_default().button.withConfig({
  displayName: "SinglePageTabsstyled__SingleTabButton",
  componentId: "sc-1c8xv12-6"
})(["     display:flex;border:none;font-size:18px;background-color:transparent;color:#8EA1A3;cursor:pointer;font-weight:600;align-items:center;flex-direction:column;justify-content:space-between;padding:0px;box-sizing:border-box;text-decoration:none;div{opacity:", ";width:", ";transform:scale(1);}span{color:", ";}&:hover{", "{color:black;opacity:1;}span{color:#00090e;}div{opacity:1  !important;width:100% !important;transform:scale(1) !important;color:#63696c;background-color:black !important;}}"], props => props.tabActive && '1', props => props.tabActive && '100% ', props => props.tabActive ? "#00090e" : "#63696c", SingleTabText);
// EXTERNAL MODULE: ./components/NavLink.tsx
var NavLink = __webpack_require__(7456);
;// CONCATENATED MODULE: ./components/SinglePageTabs.tsx










function SinglePageTabs({}) {
  const pageTabs = (0,hooks/* useAppSelector */.C)(PageTabsSlice/* page_tabs */.oB);
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(SingleTabsContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(SingleTabs, {
      children: NavbarRegex/* forumWordRegex.test */.h.test(router.pathname) && pageTabs.forumTabs.map(tabs => /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
        href: `#${tabs.link}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SingleTabButton, {
          tabActive: tabs.isActive,
          children: [/*#__PURE__*/jsx_runtime_.jsx(SingleTabText, {
            children: tabs.tabName
          }), /*#__PURE__*/jsx_runtime_.jsx(SingleLine, {})]
        })
      }, tabs.id)) || NavbarRegex/* storeWordRegex.test */.q.test(router.pathname) && pageTabs.productTabs.map(tabs => /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
        href: `#${tabs.link}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SingleTabButton, {
          tabActive: tabs.isActive,
          children: [/*#__PURE__*/jsx_runtime_.jsx(SingleTabText, {
            children: tabs.tabName
          }), /*#__PURE__*/jsx_runtime_.jsx(SingleLine, {})]
        })
      }, tabs.id))
    })
  });
}

/* harmony default export */ const components_SinglePageTabs = (SinglePageTabs);

/***/ })

};
;