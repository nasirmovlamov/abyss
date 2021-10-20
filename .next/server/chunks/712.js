"use strict";
exports.id = 712;
exports.ids = [712];
exports.modules = {

/***/ 9795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ChatBox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./app/feature/UserSlice.ts + 2 modules
var UserSlice = __webpack_require__(6565);
// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__(2889);
// EXTERNAL MODULE: ./app/feature/ChatBoxSlice.ts + 1 modules
var ChatBoxSlice = __webpack_require__(8760);
// EXTERNAL MODULE: ./app/store/hooks.ts
var hooks = __webpack_require__(6293);
// EXTERNAL MODULE: ./app/thunks/ChatBoxThunks.ts
var ChatBoxThunks = __webpack_require__(5896);
;// CONCATENATED MODULE: ./logic/chatBoxLogic.ts
const getRooms = rooms => {
  return Object.keys(rooms).map(id => rooms[id]);
};
const getLastMessageId = (rooms, id) => {
  if (rooms[id].messages.length > 0) {
    return rooms[id].messages[rooms[id].messages.length - 1].id;
  }
};
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/components/styled-elements/ChatBox.style.ts

const ChatWindow = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatWindow",
  componentId: "sc-1o1l047-0"
})(["width:300px;height:500px;display:flex;flex-direction:column;background-color:lightgray;position:sticky;top:100px;box-shadow:5px 10px #888888;"]);
const ChatNav = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatNav",
  componentId: "sc-1o1l047-1"
})(["height:30px;display:flex;justify-content:space-between;align-items:center;width:100%;border:2px solid blue;background-color:green;padding:5px;"]);
const ChatNavName = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatNavName",
  componentId: "sc-1o1l047-2"
})(["text-align:center;display:flex;align-items:center;padding:0px;margin:0px;color:white;"]);
const CloseChatBox = external_styled_components_default().button.withConfig({
  displayName: "ChatBoxstyle__CloseChatBox",
  componentId: "sc-1o1l047-3"
})(["padding:0px;margin:0px;"]);
const ChatMain = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatMain",
  componentId: "sc-1o1l047-4"
})(["width:100%;display:flex;"]);
const ChatRooms = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatRooms",
  componentId: "sc-1o1l047-5"
})(["width:120px;"]);
const ChatMessagesTab = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatMessagesTab",
  componentId: "sc-1o1l047-6"
})(["width:200px;height:200px;display:flex;flex-direction:column;display:flex;"]);
const ChatMessages = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatMessages",
  componentId: "sc-1o1l047-7"
})(["width:200px;height:200px;overflow-y:scroll;display:flex;flex-direction:column;row-gap:5px;"]);
const ChatMessagesFix = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatMessagesFix",
  componentId: "sc-1o1l047-8"
})(["flex:1 1 auto;"]);
const ChatRoom = external_styled_components_default().button.withConfig({
  displayName: "ChatBoxstyle__ChatRoom",
  componentId: "sc-1o1l047-9"
})(["height:30px;background-color:green;color:white;border:none;border:1px solid white;box-sizing:border-box;padding-left:10px;padding-right:10px;white-space:nowrap;width:100px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;outline:none;"]);
const ChatMessage = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatMessage",
  componentId: "sc-1o1l047-10"
})(["width:auto;height:20px;background-color:green;border-radius:10px;padding:4px;height:30px;background-color:gray;color:white;align-self:", ";background-color:", ";"], ({
  isMe
}) => isMe ? "flex-end" : "flex-start", ({
  isMe
}) => isMe ? "green" : "light-green");
const ChatSendMessage = external_styled_components_default().div.withConfig({
  displayName: "ChatBoxstyle__ChatSendMessage",
  componentId: "sc-1o1l047-11"
})(["display:flex;input{width:100%;}"]);
;// CONCATENATED MODULE: ./components/ChatBox.tsx




/* eslint-disable react-hooks/exhaustive-deps */








function ChatBox({}) {
  const [inViewRefChatLoaderCont, inViewChatLoaderCont] = (0,external_react_intersection_observer_.useInView)();
  const messagesEndRef = (0,external_react_.useRef)(null);
  const messagesBoxRef = (0,external_react_.useRef)(null);
  const userData = (0,hooks/* useAppSelector */.C)(UserSlice/* user_data */.gu);
  const dispatch = (0,hooks/* useAppDispatch */.T)();
  const chatRooms = (0,hooks/* useAppSelector */.C)(ChatBoxSlice/* chat_rooms */.qH);
  const openedChatRoomId = (0,hooks/* useAppSelector */.C)(ChatBoxSlice/* opened_chat_room_id */.Cp);
  const {
    0: userMessage,
    1: setuserMessage
  } = (0,external_react_.useState)("");

  const closeChatBox = () => {
    dispatch((0,ChatBoxSlice/* closeChat */.wt)(""));
  };

  (0,external_react_.useEffect)(() => {
    if (Object.keys(chatRooms).length === 0) {
      dispatch((0,ChatBoxThunks/* openRooms */.LL)());
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    if (openedChatRoomId) {
      console.log("scroll");
      scrollToBottom();
    }
  }, [openedChatRoomId]);
  (0,external_react_.useEffect)(() => {
    console.log(inViewChatLoaderCont);

    if (inViewChatLoaderCont && openedChatRoomId !== null && chatRooms[openedChatRoomId].messages.length > 0) {
      console.log("salam " + inViewChatLoaderCont);
      dispatch((0,ChatBoxThunks/* loadArchieveMessages */.Fs)({
        roomId: chatRooms[openedChatRoomId].id,
        lastMessageId: chatRooms[openedChatRoomId].messages[0].id
      }));
    }
  }, [inViewChatLoaderCont]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      block: 'nearest',
      inline: 'start'
    });
  };

  const changeRoomId = id => {
    dispatch((0,ChatBoxSlice/* setRoomId */.LF)(id));

    if (chatRooms[id].messages.length === 0) {
      dispatch((0,ChatBoxThunks/* checkRoomChat */.m$)(chatRooms[id].opponent_user.id));
    }

    if (openedChatRoomId !== null && openedChatRoomId !== id) {
      scrollToBottom();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ChatWindow, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ChatNav, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ChatNavName, {
        children: userData.name
      }), "  ", /*#__PURE__*/jsx_runtime_.jsx(CloseChatBox, {
        onClick: closeChatBox,
        children: "X"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ChatMain, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ChatRooms, {
        children: getRooms(chatRooms).map(room => /*#__PURE__*/jsx_runtime_.jsx(ChatRoom, {
          onClick: () => changeRoomId(room.id),
          children: room.opponent_user.name
        }, room.id))
      }), /*#__PURE__*/jsx_runtime_.jsx(ChatMessagesTab, {
        children: openedChatRoomId !== null && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ChatMessages, {
            ref: messagesBoxRef,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              ref: inViewRefChatLoaderCont,
              children: "loader"
            }), /*#__PURE__*/jsx_runtime_.jsx(ChatMessagesFix, {}), chatRooms[openedChatRoomId].messages.map(message => /*#__PURE__*/jsx_runtime_.jsx(ChatMessage, {
              isMe: userData.id === message.user.id,
              children: message.content
            }, message.id)), /*#__PURE__*/jsx_runtime_.jsx("div", {
              ref: messagesEndRef
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ChatSendMessage, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              value: userMessage,
              onChange: e => setuserMessage(e.target.value),
              type: "text",
              placeholder: "Type your message here..."
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => dispatch((0,ChatBoxThunks/* sendMessageToRoom */.Tv)({
                roomId: openedChatRoomId,
                content: userMessage
              })),
              children: "Send"
            })]
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ 8081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_Page_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2483);




function MainPartOfPage({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_pages_Page_styled__WEBPACK_IMPORTED_MODULE_2__/* .MainPartOfPageStyle */ .Bo, {
    children: children
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPartOfPage);

/***/ }),

/***/ 7991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SidePartOfPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./app/feature/ChatBoxSlice.ts + 1 modules
var ChatBoxSlice = __webpack_require__(8760);
// EXTERNAL MODULE: ./app/store/hooks.ts
var hooks = __webpack_require__(6293);
// EXTERNAL MODULE: ./styles/pages/Page.styled.ts
var Page_styled = __webpack_require__(2483);
// EXTERNAL MODULE: ./components/ChatBox.tsx + 2 modules
var ChatBox = __webpack_require__(9795);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/components/PageFilters.style.ts

const FilterContStyle = external_styled_components_default().div.withConfig({
  displayName: "PageFiltersstyle__FilterContStyle",
  componentId: "sc-73d4q0-0"
})(["display:flex;flex-direction:column;width:195px;height:403px;box-sizing:border-box;z-index:2;overflow:hidden;position:sticky;top:90px;"]);
const FilterCont = external_styled_components_default().div.withConfig({
  displayName: "PageFiltersstyle__FilterCont",
  componentId: "sc-73d4q0-1"
})(["display:flex;flex-direction:column;background-color:white;padding:11px 16px;border-radius:20px;box-shadow:0px 1px 1px rgba(99,105,108,0.61),inset 0px 0px 0px rgba(99,105,108,0.61);width:100%;height:100%;row-gap:10px;transform:", ";transform:", ";transition:0.5s;"], ({
  stayInFocus
}) => stayInFocus ? "translateX(0px) !important" : "translateX(200px)", ({
  isFocused
}) => isFocused ? "translateX(0px)" : "translateX(200px)");
const PinButton = external_styled_components_default().button.withConfig({
  displayName: "PageFiltersstyle__PinButton",
  componentId: "sc-73d4q0-2"
})(["position:absolute;top:0px;right:0px;margin-right:10px;margin-top:10px;color:", ";color:", ";padding:3px;background-color:transparent;border:1px solid gray;border-radius:5px;"], ({
  isFocused
}) => isFocused ? "black" : "gray", ({
  stayInFocus
}) => stayInFocus ? "black !important" : "gray");
const SubjectCont = external_styled_components_default().div.withConfig({
  displayName: "PageFiltersstyle__SubjectCont",
  componentId: "sc-73d4q0-3"
})(["display:flex;flex-direction:column;width:100%;row-gap:5px;display:flex;flex-direction:column;"]);
const SubjectTitle = external_styled_components_default().h5.withConfig({
  displayName: "PageFiltersstyle__SubjectTitle",
  componentId: "sc-73d4q0-4"
})(["display:flex;flex-direction:column;width:100%;row-gap:10px;font-size:18px;display:flex;flex-direction:column;color:#474D51;"]);
const SubjectContent = external_styled_components_default().div.withConfig({
  displayName: "PageFiltersstyle__SubjectContent",
  componentId: "sc-73d4q0-5"
})(["display:flex;flex-direction:column;width:100%;display:flex;flex-direction:column;color:#474D51;"]);
const Subjects = external_styled_components_default().button.withConfig({
  displayName: "PageFiltersstyle__Subjects",
  componentId: "sc-73d4q0-6"
})(["display:flex;height:21px;border:none;background-color:transparent;flex-direction:column;width:100%;row-gap:5px;font-size:15px;display:flex;flex-direction:column;"]);
const FilterTagCont = external_styled_components_default().div.withConfig({
  displayName: "PageFiltersstyle__FilterTagCont",
  componentId: "sc-73d4q0-7"
})(["display:flex;flex-direction:column;width:100%;row-gap:10px;display:flex;flex-direction:column;"]);
const FilterTagTitle = external_styled_components_default().h5.withConfig({
  displayName: "PageFiltersstyle__FilterTagTitle",
  componentId: "sc-73d4q0-8"
})(["display:flex;flex-direction:column;width:100%;row-gap:10px;font-size:18px;display:flex;flex-direction:column;color:#474D51;"]);
const FilterTagContent = external_styled_components_default().div.withConfig({
  displayName: "PageFiltersstyle__FilterTagContent",
  componentId: "sc-73d4q0-9"
})(["display:flex;flex-direction:column;width:100%;font-size:15px;display:flex;flex-direction:column;color:#474D51;"]);
const FilterTags = external_styled_components_default().button.withConfig({
  displayName: "PageFiltersstyle__FilterTags",
  componentId: "sc-73d4q0-10"
})(["display:flex;flex-direction:column;width:100%;row-gap:5px;font-size:15px;display:flex;height:22px;border:none;background-color:transparent;flex-direction:column;"]);
const FilterLanguageCont = external_styled_components_default().div.withConfig({
  displayName: "PageFiltersstyle__FilterLanguageCont",
  componentId: "sc-73d4q0-11"
})(["display:flex;flex-direction:column;width:100%;row-gap:10px;display:flex;flex-direction:column;"]);
const FilterLanguageTitle = external_styled_components_default().h5.withConfig({
  displayName: "PageFiltersstyle__FilterLanguageTitle",
  componentId: "sc-73d4q0-12"
})(["display:flex;flex-direction:column;width:100%;row-gap:10px;font-size:18px;display:flex;flex-direction:column;color:#474D51;"]);
const FilterLanguageContent = external_styled_components_default().div.withConfig({
  displayName: "PageFiltersstyle__FilterLanguageContent",
  componentId: "sc-73d4q0-13"
})(["display:flex;flex-direction:column;width:100%;font-size:15px;display:flex;flex-direction:column;color:#474D51;"]);
const FilterLanguages = external_styled_components_default().button.withConfig({
  displayName: "PageFiltersstyle__FilterLanguages",
  componentId: "sc-73d4q0-14"
})(["display:flex;flex-direction:column;width:100%;height:22px;border:none;background-color:transparent;font-size:15px;display:flex;flex-direction:column;"]);
// EXTERNAL MODULE: ./app/feature/PageFiltersSlice.ts + 1 modules
var PageFiltersSlice = __webpack_require__(183);
;// CONCATENATED MODULE: ./components/PageFilters.tsx









function PageFilters({}) {
  const isFocused = (0,hooks/* useAppSelector */.C)(PageFiltersSlice/* is_focused */.St);
  const stayInFocus = (0,hooks/* useAppSelector */.C)(PageFiltersSlice/* stay_in_focus */.Eq);
  const dispach = (0,hooks/* useAppDispatch */.T)();
  const filterBlockRef = (0,external_react_.useRef)(null);

  const pinFilters = () => {
    dispach((0,PageFiltersSlice/* changeToStayInFocus */.YG)(stayInFocus));
  };

  const handleMouseOver = () => {
    if (!stayInFocus) {
      dispach((0,PageFiltersSlice/* changePositionOfFilters */.Um)(false));
    }
  };

  const handleMouseLeave = () => {
    if (!stayInFocus) {
      dispach((0,PageFiltersSlice/* changePositionOfFilters */.Um)(true));
    }
  };

  const handleStayInFocus = () => {};

  return /*#__PURE__*/jsx_runtime_.jsx(FilterContStyle, {
    onMouseEnter: handleMouseOver,
    onMouseLeave: handleMouseLeave,
    ref: filterBlockRef,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterCont, {
      stayInFocus: stayInFocus,
      isFocused: isFocused,
      children: [/*#__PURE__*/jsx_runtime_.jsx(PinButton, {
        stayInFocus: stayInFocus,
        isFocused: isFocused,
        onClick: pinFilters,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          icon: free_solid_svg_icons_.faThumbtack
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SubjectCont, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(SubjectTitle, {
          children: "Subject"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SubjectContent, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Subjects, {
            children: "java principles"
          }), /*#__PURE__*/jsx_runtime_.jsx(Subjects, {
            children: "memory"
          }), /*#__PURE__*/jsx_runtime_.jsx(Subjects, {
            children: "performance"
          }), /*#__PURE__*/jsx_runtime_.jsx(Subjects, {
            children: "cpu-architecture"
          }), /*#__PURE__*/jsx_runtime_.jsx(Subjects, {
            children: "arrays"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterTagCont, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(FilterTagTitle, {
          children: "Subject"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterTagContent, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(FilterTags, {
            children: "java principles"
          }), /*#__PURE__*/jsx_runtime_.jsx(FilterTags, {
            children: "memory"
          }), /*#__PURE__*/jsx_runtime_.jsx(FilterTags, {
            children: "performance"
          }), /*#__PURE__*/jsx_runtime_.jsx(FilterTags, {
            children: "cpu-architecture"
          }), /*#__PURE__*/jsx_runtime_.jsx(FilterTags, {
            children: "arrays"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterLanguageCont, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(FilterLanguageTitle, {
          children: "Language"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterLanguageContent, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(FilterLanguages, {
            children: "java"
          }), /*#__PURE__*/jsx_runtime_.jsx(FilterLanguages, {
            children: "javascript"
          }), /*#__PURE__*/jsx_runtime_.jsx(FilterLanguages, {
            children: "c++"
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ const components_PageFilters = (PageFilters);
;// CONCATENATED MODULE: ./components/SidePartOfPage.tsx









function SidePartOfPage({
  children,
  side
}) {
  const isChatBoxOpened = (0,hooks/* useAppSelector */.C)(ChatBoxSlice/* is_chatbox_opened */.hS);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Page_styled/* SidePartOfPageStyle */.uz, {
    children: [children, side === "left" && /*#__PURE__*/jsx_runtime_.jsx(components_PageFilters, {}), side === "right" && isChatBoxOpened && /*#__PURE__*/jsx_runtime_.jsx(ChatBox/* default */.Z, {})]
  });
}

/* harmony default export */ const components_SidePartOfPage = (SidePartOfPage);

/***/ }),

/***/ 2483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bo": () => (/* binding */ MainPartOfPageStyle),
/* harmony export */   "uz": () => (/* binding */ SidePartOfPageStyle),
/* harmony export */   "UA": () => (/* binding */ PageDefaultStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainPartOfPageStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Pagestyled__MainPartOfPageStyle",
  componentId: "sc-1c4wvfo-0"
})(["width:808px;padding-top:74px;display:flex;justify-content:center;"]);
const SidePartOfPageStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().aside.withConfig({
  displayName: "Pagestyled__SidePartOfPageStyle",
  componentId: "sc-1c4wvfo-1"
})(["width:400px;box-sizing:border-box;padding-top:25px;display:flex;padding-top:115px;justify-content:center;minHeight:100vh;"]);
const PageDefaultStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().main.withConfig({
  displayName: "Pagestyled__PageDefaultStyle",
  componentId: "sc-1c4wvfo-2"
})(["display:flex;flex-wrap:wrap;column-gap:20px;align-items:stretch;"]);

/***/ })

};
;