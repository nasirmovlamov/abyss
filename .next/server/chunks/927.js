exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 2708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JA": () => (/* binding */ GET_USER),
/* harmony export */   "ym": () => (/* binding */ LOGIN),
/* harmony export */   "Nz": () => (/* binding */ REGISTER),
/* harmony export */   "Nv": () => (/* binding */ LOGOUT),
/* harmony export */   "rv": () => (/* binding */ FORGET_PASSWORD),
/* harmony export */   "yx": () => (/* binding */ GET_SINGLE_QUESTION),
/* harmony export */   "Nm": () => (/* binding */ VOTE_QUESTION),
/* harmony export */   "td": () => (/* binding */ UN_VOTE_QUESTION),
/* harmony export */   "C0": () => (/* binding */ VOTE_ANSWER),
/* harmony export */   "r$": () => (/* binding */ UN_VOTE_ANSWER),
/* harmony export */   "CN": () => (/* binding */ GET_ANSWERS),
/* harmony export */   "Vo": () => (/* binding */ ADD_ANSWER),
/* harmony export */   "Qp": () => (/* binding */ GET_QUESTION_COMMENTS),
/* harmony export */   "Sd": () => (/* binding */ GET_ANSWER_COMMENTS),
/* harmony export */   "Bq": () => (/* binding */ ADD_ANSWER_COMMENTS),
/* harmony export */   "zf": () => (/* binding */ ADD_QUESTION_COMMENTS),
/* harmony export */   "b7": () => (/* binding */ CHECK_CHAT),
/* harmony export */   "XS": () => (/* binding */ OPEN_CHATBOX),
/* harmony export */   "Dk": () => (/* binding */ OPEN_ROOM_MESSAGES),
/* harmony export */   "eR": () => (/* binding */ CHECK_ROOM),
/* harmony export */   "hh": () => (/* binding */ SEND_MESSAGE_TO_ROOM),
/* harmony export */   "JO": () => (/* binding */ LOAD_MESSAGES_TO_ROOM),
/* harmony export */   "$K": () => (/* binding */ ADD_FILE)
/* harmony export */ });
const GET_USER = 'GET_USER';
const LOGIN = 'USERS_LOGIN';
const REGISTER = 'USERS_REGISTER';
const LOGOUT = 'USERS_LOGOUT';
const FORGET_PASSWORD = 'USERS_FORGET_PASSWORD';
const GET_SINGLE_QUESTION = 'GET_SINGLE_QUESTION';
const VOTE_QUESTION = 'VOTE_QUESTION';
const UN_VOTE_QUESTION = 'UN_VOTE_QUESTION';
const VOTE_ANSWER = 'VOTE_ANSWER';
const UN_VOTE_ANSWER = 'UN_VOTE_ANSWER';
const GET_ANSWERS = 'GET_ANSWERS';
const ADD_ANSWER = 'ADD_ANSWERS';
const GET_QUESTION_COMMENTS = 'GET_QUESTION_COMMENTS';
const GET_ANSWER_COMMENTS = 'GET_ANSWER_COMMENTS';
const ADD_ANSWER_COMMENTS = 'ADD_ANSWER_COMMENTS';
const ADD_QUESTION_COMMENTS = 'ADD_QUESTION_COMMENTS';
const CHECK_CHAT = 'CHECK_CHAT';
const OPEN_CHATBOX = 'OPEN_CHATBOX';
const OPEN_ROOM_MESSAGES = 'OPEN_ROOM_MESSAGES';
const CHECK_ROOM = 'CHECK_ROOM';
const SEND_MESSAGE_TO_ROOM = 'SEND_MESSAGE_TO_ROOM';
const LOAD_MESSAGES_TO_ROOM = 'LOAD_MESSAGES_TO_ROOM';
const ADD_FILE = 'ADD_FILE';

/***/ }),

/***/ 8760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qH": () => (/* binding */ chat_rooms),
  "wt": () => (/* binding */ closeChat),
  "ZP": () => (/* binding */ feature_ChatBoxSlice),
  "hS": () => (/* binding */ is_chatbox_opened),
  "WB": () => (/* binding */ openChat),
  "Cp": () => (/* binding */ opened_chat_room_id),
  "LF": () => (/* binding */ setRoomId)
});

// UNUSED EXPORTS: ChatBoxSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./components/Notify/AutoErrorToaster.ts
var AutoErrorToaster = __webpack_require__(133);
;// CONCATENATED MODULE: ./app/store/states/ChatBoxState.ts
const ChatBoxState = {
  status: "loading",
  isChatBoxOpened: false,
  openedChatRoomId: null,
  rooms: {}
};
// EXTERNAL MODULE: ./app/thunks/ChatBoxThunks.ts
var ChatBoxThunks = __webpack_require__(5896);
;// CONCATENATED MODULE: ./app/feature/ChatBoxSlice.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ChatBoxSlice = (0,toolkit_.createSlice)({
  name: 'chatbox-slice',
  initialState: ChatBoxState,
  reducers: {
    openChat(state, {
      payload
    }) {
      state.isChatBoxOpened = true;
    },

    closeChat(state, {
      payload
    }) {
      state.isChatBoxOpened = false;
    },

    setRoomId(state, {
      payload
    }) {
      state.openedChatRoomId = payload;
    }

  },
  extraReducers: builder => {
    // CHECK USER CHAT
    builder.addCase(ChatBoxThunks/* checkRoomChat.fulfilled */.m$.fulfilled, (state, {
      payload
    }) => {
      if (state.rooms[payload.data.id].messages.length === 0) {
        state.rooms[payload.data.id].messages = [...state.rooms[payload.data.id].messages, ...payload.data.messages];
      }
    }), builder.addCase(ChatBoxThunks/* checkRoomChat.pending */.m$.pending, (state, {
      payload
    }) => {}), builder.addCase(ChatBoxThunks/* checkRoomChat.rejected */.m$.rejected, (state, action) => {}); // CHECK ROOM

    builder.addCase(ChatBoxThunks/* checkChat.fulfilled */.tW.fulfilled, (state, {
      payload
    }) => {}), builder.addCase(ChatBoxThunks/* checkChat.pending */.tW.pending, (state, {
      payload
    }) => {}), builder.addCase(ChatBoxThunks/* checkChat.rejected */.tW.rejected, (state, action) => {}); // CHECK ROOM

    builder.addCase(ChatBoxThunks/* sendMessageToRoom.fulfilled */.Tv.fulfilled, (state, {
      payload
    }) => {
      state.rooms[state.openedChatRoomId].messages = [...state.rooms[state.openedChatRoomId].messages, payload.data];
    }), builder.addCase(ChatBoxThunks/* sendMessageToRoom.pending */.Tv.pending, (state, {
      payload
    }) => {}), builder.addCase(ChatBoxThunks/* sendMessageToRoom.rejected */.Tv.rejected, (state, action) => {
      (0,AutoErrorToaster/* autoErrorToaster */.K)(action.payload);
    }); // LOAD MESSAGES ROOM

    builder.addCase(ChatBoxThunks/* loadArchieveMessages.fulfilled */.Fs.fulfilled, (state, {
      payload
    }) => {
      console.log(payload.data); // console.log(state.rooms[state.openedChatRoomId!].messages)

      state.rooms[state.openedChatRoomId].messages = [...payload.data, ...state.rooms[state.openedChatRoomId].messages];
    }), builder.addCase(ChatBoxThunks/* loadArchieveMessages.pending */.Fs.pending, (state, {
      payload
    }) => {}), builder.addCase(ChatBoxThunks/* loadArchieveMessages.rejected */.Fs.rejected, (state, action) => {
      console.log(action.payload); // autoErrorToaster(action.payload)
    }); // OPEN USER CHATBOX

    builder.addCase(ChatBoxThunks/* openRooms.fulfilled */.LL.fulfilled, (state, {
      payload
    }) => {
      state.status = 'idle';

      for (let i = 0; i < payload.data.length; i++) {
        state.rooms = _objectSpread(_objectSpread({}, state.rooms), {}, {
          [payload.data[i].id]: payload.data[i]
        });
      }

      state.isChatBoxOpened = true;
    }), builder.addCase(ChatBoxThunks/* openRooms.pending */.LL.pending, (state, {
      payload
    }) => {
      state.status = 'loading';
    }), builder.addCase(ChatBoxThunks/* openRooms.rejected */.LL.rejected, (state, action) => {
      state.status = 'failed';
      state.rooms = {};
      (0,AutoErrorToaster/* autoErrorToaster */.K)(action.payload);
    });
  }
}); // action

const {
  openChat,
  closeChat,
  setRoomId
} = ChatBoxSlice.actions; // data

const is_chatbox_opened = state => state.chatBoxReducer.isChatBoxOpened;
const chat_rooms = state => state.chatBoxReducer.rooms;
const opened_chat_room_id = state => state.chatBoxReducer.openedChatRoomId;
/* harmony default export */ const feature_ChatBoxSlice = (ChatBoxSlice.reducer);

/***/ }),

/***/ 183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Um": () => (/* binding */ changePositionOfFilters),
  "YG": () => (/* binding */ changeToStayInFocus),
  "ZP": () => (/* binding */ feature_PageFiltersSlice),
  "St": () => (/* binding */ is_focused),
  "Eq": () => (/* binding */ stay_in_focus)
});

// UNUSED EXPORTS: PageFiltersSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
;// CONCATENATED MODULE: ./app/store/states/PageFiltersState.ts
const PAGE_FILTERS_STATE = {
  isShown: true,
  stayInFocus: true
};
;// CONCATENATED MODULE: ./app/feature/PageFiltersSlice.ts


const PageFiltersSlice = (0,toolkit_.createSlice)({
  name: 'app-slice',
  initialState: PAGE_FILTERS_STATE,
  reducers: {
    changePositionOfFilters(state, action) {
      state.isShown = !action.payload;
    },

    changeToStayInFocus(state, action) {
      state.stayInFocus = !action.payload;
    }

  },
  extraReducers: builder => {//ADD NEW ANSWER to Question Reducers
    // builder.addCase(addAnswer.fulfilled, (state, {payload}) => {
    //     successToast("top-right" ,payload.message)
    //     state.answersData.topAnswers.answers = [  payload.data , ...state.answersData.topAnswers.answers ]
    // }),
    // builder.addCase(addAnswer.pending, (state, {payload}) => {
    // }),
    // builder.addCase(addAnswer.rejected, (state, {payload}) => {
    //   autoErrorToaster(payload)
    // })  
  }
}); // action

const {
  changePositionOfFilters,
  changeToStayInFocus
} = PageFiltersSlice.actions; // data

const is_focused = state => state.pageFiltersReducer.isShown;
const stay_in_focus = state => state.pageFiltersReducer.stayInFocus;
/* harmony default export */ const feature_PageFiltersSlice = (PageFiltersSlice.reducer);

/***/ }),

/***/ 6565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nE": () => (/* binding */ changeModalAction),
  "ZP": () => (/* binding */ feature_UserSlice),
  "Jd": () => (/* binding */ forget_Password_Errors),
  "iN": () => (/* binding */ is_Logged),
  "XV": () => (/* binding */ is_loading),
  "CJ": () => (/* binding */ login_Form_OnChange),
  "cc": () => (/* binding */ login_errors),
  "W7": () => (/* binding */ login_form),
  "ZH": () => (/* binding */ register_Form_OnChange),
  "Gr": () => (/* binding */ register_errors),
  "$s": () => (/* binding */ register_form),
  "gu": () => (/* binding */ user_data),
  "PQ": () => (/* binding */ user_modals),
  "RA": () => (/* binding */ user_status),
  "Rp": () => (/* binding */ user_status_not_logged)
});

// UNUSED EXPORTS: UserSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./app/thunks/AuthThunk.ts + 1 modules
var AuthThunk = __webpack_require__(8756);
;// CONCATENATED MODULE: ./logic/getKeyValue.ts
const getKeyValue = (obj, key) => obj[key];
// EXTERNAL MODULE: ./app/store/states/AuthState.ts
var AuthState = __webpack_require__(5586);
// EXTERNAL MODULE: ./components/Notify/AutoSuccessToast.ts
var AutoSuccessToast = __webpack_require__(3336);
// EXTERNAL MODULE: ./components/Notify/AutoErrorToaster.ts
var AutoErrorToaster = __webpack_require__(133);
;// CONCATENATED MODULE: ./helpers/token/TokenHandle.ts
var accessToken = null;
const getAccessToken = () => {
  return accessToken;
};
const setAccessToken = token => {
  accessToken = token;

  if (token !== null) {
    localStorage.setItem('token', token);
  }
};
;// CONCATENATED MODULE: ./app/feature/UserSlice.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const UserSlice = (0,toolkit_.createSlice)({
  name: 'user-slice',
  initialState: AuthState/* AUTH_STATE */.J,
  reducers: {
    changeModalAction(state, action) {
      state.user_errors = AuthState/* user_errors_data */.q;

      for (const [key, value] of Object.entries(state.userModals)) {
        if (key !== action.payload) {
          state.userModals = _objectSpread(_objectSpread({}, state.userModals), {}, {
            [key]: false
          });
        }
      }

      state.userModals = _objectSpread(_objectSpread({}, state.userModals), {}, {
        [action.payload]: !getKeyValue(state.userModals, action.payload)
      });
    },

    user_status_not_logged(state, action) {
      state.user_status = action.payload;
    },

    register_Form_OnChange(state, action) {
      state.forms.registerForm = _objectSpread(_objectSpread({}, state.forms.registerForm), {}, {
        [action.payload.name]: action.payload.value
      });
    },

    login_Form_OnChange(state, action) {
      state.forms.loginForm = _objectSpread(_objectSpread({}, state.forms.loginForm), {}, {
        [action.payload.name]: action.payload.value
      });
    }

  },
  extraReducers: builder => {
    //Check User Reducers
    builder.addCase(AuthThunk/* userCheck.fulfilled */.F1.fulfilled, (state, {
      payload
    }) => {
      state.user = payload.data.data;
      state.user_status = 'logged';
      state.loggedIn = true;
    }), builder.addCase(AuthThunk/* userCheck.pending */.F1.pending, (state, {
      payload
    }) => {
      state.user_status = 'loading';
    }), builder.addCase(AuthThunk/* userCheck.rejected */.F1.rejected, (state, {
      payload
    }) => {
      state.user_status = 'not-logged';
      state.loggedIn = false;
      state.user = null;
      setAccessToken(null);
      localStorage.removeItem('token');
    }), // Logout
    builder.addCase(AuthThunk/* userLogout.fulfilled */.Kv.fulfilled, (state, {
      payload
    }) => {
      state.status = 'idle';
      state.loggedIn = false;
      state.user = null;
      setAccessToken(null);
      (0,AutoSuccessToast/* autoSuccessToaster */.l)(payload.message);
    }), builder.addCase(AuthThunk/* userLogout.pending */.Kv.pending, (state, {
      payload
    }) => {}), builder.addCase(AuthThunk/* userLogout.rejected */.Kv.rejected, (state, {
      payload
    }) => {
      state.status = 'failed';
      state.loggedIn = false;
      state.user = null;
    }), //Login Reducers
    builder.addCase(AuthThunk/* userLogin.fulfilled */.n$.fulfilled, (state, {
      payload
    }) => {
      setAccessToken(payload.data.access_token);
      state.user = payload.data.user;
      state.loggedIn = true;
      state.status = 'idle';
      (0,AutoSuccessToast/* autoSuccessToaster */.l)(payload.message);
      state.userModals = _objectSpread(_objectSpread({}, state.userModals), {}, {
        'login': false
      });
    }), builder.addCase(AuthThunk/* userLogin.pending */.n$.pending, (state, {
      payload
    }) => {
      state.status = 'loading';
    }), builder.addCase(AuthThunk/* userLogin.rejected */.n$.rejected, (state, action) => {
      state.status = 'failed';
      state.loggedIn = false;

      if (action.payload) {
        state.user_errors.loginErrors.errors = action.payload.errors;
        state.user_errors.loginErrors.message = action.payload.message;
        state.user = null;
        (0,AutoErrorToaster/* autoErrorToaster */.K)(action.payload);
      }
    }); //Register Reducers

    builder.addCase(AuthThunk/* userRegister.fulfilled */.N$.fulfilled, (state, {
      payload
    }) => {
      setAccessToken(payload.data.access_token);
      state.loggedIn = true;
      state.status = 'idle';
      state.user = payload.data.user;
      (0,AutoSuccessToast/* autoSuccessToaster */.l)(payload.message);
      state.userModals = _objectSpread(_objectSpread({}, state.userModals), {}, {
        'register': false
      });
    }), builder.addCase(AuthThunk/* userRegister.pending */.N$.pending, (state, {
      payload
    }) => {
      state.status = 'loading';
    }), builder.addCase(AuthThunk/* userRegister.rejected */.N$.rejected, (state, action) => {
      state.status = 'failed';
      state.loggedIn = false;

      if (action.payload) {
        state.user_errors.registerErrors = action.payload;
        state.user = null;
        (0,AutoErrorToaster/* autoErrorToaster */.K)(action.payload);
      }
    }); //Forget Password Reducers

    builder.addCase(AuthThunk/* forgetPasswordThunk.fulfilled */.Ih.fulfilled, (state, {
      payload
    }) => {
      state.userModals = _objectSpread(_objectSpread({}, state.userModals), {}, {
        'forgetPassword': false,
        'isEmailSend': true
      });
      state.status = 'idle';
    }), builder.addCase(AuthThunk/* forgetPasswordThunk.pending */.Ih.pending, (state, {
      payload
    }) => {
      state.status = 'loading';
    }), builder.addCase(AuthThunk/* forgetPasswordThunk.rejected */.Ih.rejected, (state, action) => {
      state.status = 'failed';
      state.loggedIn = false;
      (0,AutoErrorToaster/* autoErrorToaster */.K)(action.payload);
    });
  }
}); // action

const {
  changeModalAction
} = UserSlice.actions;
const {
  login_Form_OnChange
} = UserSlice.actions;
const {
  register_Form_OnChange
} = UserSlice.actions;
const {
  user_status_not_logged
} = UserSlice.actions; // data

const register_errors = state => state.userReducer.user_errors.registerErrors.errors;
const login_errors = state => state.userReducer.user_errors.loginErrors.errors;
const forget_Password_Errors = state => state.userReducer.user_errors.forgetPasswordErrors.errors;
const user_data = state => state.userReducer.user;
const user_modals = state => state.userReducer.userModals;
const login_form = state => state.userReducer.forms.loginForm;
const register_form = state => state.userReducer.forms.registerForm;
const is_Logged = state => state.userReducer.loggedIn;
const is_loading = state => state.userReducer.status;
const user_status = state => state.userReducer.user_status;
/* harmony default export */ const feature_UserSlice = (UserSlice.reducer);

/***/ }),

/***/ 6293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useAppDispatch),
/* harmony export */   "C": () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ 5586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ user_errors_data),
/* harmony export */   "J": () => (/* binding */ AUTH_STATE)
/* harmony export */ });
const user_errors_data = {
  registerErrors: {
    errors: {
      email: [],
      password: [],
      name: []
    },
    message: ""
  },
  loginErrors: {
    errors: {
      email: [],
      password: []
    },
    message: ""
  },
  forgetPasswordErrors: {
    errors: {
      attempt: []
    },
    message: ""
  }
};
const AUTH_STATE = {
  user: null,
  status: 'loading',
  user_status: "loading",
  loggedIn: null,
  message: null,
  userModals: {
    login: false,
    register: false,
    forgetPassword: false,
    isEmailSend: false,
    questionCreate: false,
    productCreate: false,
    discussionCreate: false,
    iterationCreate: false
  },
  forms: {
    registerForm: {
      email: "",
      name: "",
      password: ""
    },
    loginForm: {
      email: "",
      password: ""
    }
  },
  user_errors: user_errors_data
};

/***/ }),

/***/ 8756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ih": () => (/* binding */ forgetPasswordThunk),
  "F1": () => (/* binding */ userCheck),
  "n$": () => (/* binding */ userLogin),
  "Kv": () => (/* binding */ userLogout),
  "N$": () => (/* binding */ userRegister)
});

// EXTERNAL MODULE: ./app/constants/AppContants.ts
var AppContants = __webpack_require__(2708);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./helpers/api/BaseInstance.ts
var BaseInstance = __webpack_require__(4301);
;// CONCATENATED MODULE: ./helpers/urls/URLS.ts
const PREFIXE = {
  AUTH: '/auth'
};
const URL = {
  HOME: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  REGISTER: '/register',
  CHECK_USER: '/user',
  ABOUT: '/about',
  PASSWORD_RESET: '/password/create/'
};
;// CONCATENATED MODULE: ./app/thunks/AuthThunk.ts




const userCheck = (0,toolkit_.createAsyncThunk)(AppContants/* GET_USER */.JA, async (token, {
  rejectWithValue
}) => {
  try {
    const data = await BaseInstance/* BASE_API_INSTANCE.get */.D.get(URL.CHECK_USER);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const forgetPasswordThunk = (0,toolkit_.createAsyncThunk)(AppContants/* FORGET_PASSWORD */.rv, async (email, {
  rejectWithValue
}) => {
  try {
    const resp = await BaseInstance/* BASE_API_INSTANCE.post */.D.post(URL.PASSWORD_RESET, {
      email: email
    });
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const userLogout = (0,toolkit_.createAsyncThunk)(AppContants/* LOGOUT */.Nv, async (token, {
  rejectWithValue
}) => {
  try {
    const resp = await BaseInstance/* BASE_API_INSTANCE.get */.D.get(URL.LOGOUT);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const userLogin = (0,toolkit_.createAsyncThunk)(AppContants/* LOGIN */.ym, async (user, {
  rejectWithValue
}) => {
  try {
    const login_form = new FormData();
    login_form.append("email", user.email);
    login_form.append("password", user.password);
    const data = await BaseInstance/* BASE_API_INSTANCE.post */.D.post(URL.LOGIN, login_form);
    return data.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const userRegister = (0,toolkit_.createAsyncThunk)(AppContants/* REGISTER */.Nz, async (user, {
  rejectWithValue
}) => {
  try {
    const login_form = new FormData();
    login_form.append("name", user.name);
    login_form.append("email", user.email);
    login_form.append("password", user.password);
    const resp = await BaseInstance/* BASE_API_INSTANCE.post */.D.post(URL.REGISTER, login_form);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

/***/ }),

/***/ 5896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tW": () => (/* binding */ checkChat),
/* harmony export */   "LL": () => (/* binding */ openRooms),
/* harmony export */   "m$": () => (/* binding */ checkRoomChat),
/* harmony export */   "Tv": () => (/* binding */ sendMessageToRoom),
/* harmony export */   "Fs": () => (/* binding */ loadArchieveMessages)
/* harmony export */ });
/* unused harmony export reqRoomMessages */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4301);
/* harmony import */ var _constants_AppContants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2708);



const checkChat = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .CHECK_CHAT */ .b7, async (user_id, {
  rejectWithValue
}) => {
  try {
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.get */ .D.get(`/chat/${user_id}//getcomment`);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const openRooms = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .OPEN_CHATBOX */ .XS, async (_, {
  rejectWithValue
}) => {
  try {
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.get */ .D.get(`/chat`);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const reqRoomMessages = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .OPEN_ROOM_MESSAGES */ .Dk, async ({
  roomId,
  lastMessageId
}, {
  rejectWithValue
}) => {
  try {
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.get */ .D.get(`/chat/${roomId}/${lastMessageId}/load`);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const checkRoomChat = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .CHECK_ROOM */ .eR, async (opponentID, {
  rejectWithValue
}) => {
  try {
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.get */ .D.get(`/chat/${opponentID}/check`);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const sendMessageToRoom = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .SEND_MESSAGE_TO_ROOM */ .hh, async ({
  roomId,
  content
}, {
  rejectWithValue
}) => {
  try {
    const formData = new FormData();
    formData.append('content', content);
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.post */ .D.post(`/chat/${roomId}/send`, formData);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const loadArchieveMessages = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_MESSAGES_TO_ROOM */ .JO, async ({
  roomId,
  lastMessageId
}, {
  rejectWithValue
}) => {
  try {
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.get */ .D.get(`/chat/${roomId}/${lastMessageId}/load`);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

/***/ }),

/***/ 7456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const NavLink = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: props.href,
    passHref: true,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ autoErrorToaster)
/* harmony export */ });
/* harmony import */ var _ErrorToasts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1158);

const autoErrorToaster = error => {
  const errors = error.errors;
  const keys = Object.keys(error.errors);

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < errors[keys[i]].length; j++) {
      (0,_ErrorToasts__WEBPACK_IMPORTED_MODULE_0__/* .errorToastFunc */ .v)('top-right', errors[keys[i]][j]);
    }
  }
};

/***/ }),

/***/ 3336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ autoSuccessToaster)
/* harmony export */ });
/* harmony import */ var _SuccessToast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(592);

const autoSuccessToaster = message => {
  (0,_SuccessToast__WEBPACK_IMPORTED_MODULE_0__/* .successToast */ .Q)('top-right', message);
};

/***/ }),

/***/ 1158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ errorToastFunc),
/* harmony export */   "o": () => (/* binding */ loginError)
/* harmony export */ });
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_0__);

//ERROR TOASTERS
const errorToastFunc = (side, message) => {
  react_hot_toast__WEBPACK_IMPORTED_MODULE_0___default()(message, {
    position: side || "top-right",
    // Styling
    style: {
      background: "red",
      padding: "10px",
      transition: "5s",
      color: "white"
    },
    className: '',
    // Custom Icon
    icon: '❌',
    // Change colors of success/error/loading icon
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite'
    }
  });
}; //Login TOASTER

const loginError = () => {
  react_hot_toast__WEBPACK_IMPORTED_MODULE_0___default()("Login your account", {
    position: "top-right",
    // Styling
    style: {
      background: "red",
      padding: "10px",
      transition: "5s",
      color: "white"
    },
    className: '',
    // Custom Icon
    icon: '❌',
    // Change colors of success/error/loading icon
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite'
    }
  });
};

/***/ }),

/***/ 592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ successToast)
/* harmony export */ });
/* unused harmony export loginSuccess */
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_0__);

//ERROR TOASTERS
const successToast = (side, message) => {
  react_hot_toast__WEBPACK_IMPORTED_MODULE_0___default()(message, {
    position: side || "top-right",
    // Styling
    style: {
      background: "green",
      padding: "10px",
      transition: "5s",
      color: "white"
    },
    className: '',
    // Custom Icon
    icon: '✅',
    // Change colors of success/error/loading icon
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite'
    }
  });
}; //Login TOASTER

const loginSuccess = () => {
  toast("You logged successfully!", {
    position: "top-right",
    // Styling
    style: {
      background: "green",
      padding: "10px",
      transition: "5s",
      color: "white"
    },
    className: '',
    // Custom Icon
    icon: '✅',
    // Change colors of success/error/loading icon
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite'
    }
  });
};

/***/ }),

/***/ 4301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ BASE_API_INSTANCE)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urls_BASE_URL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9293);


const BASE_API_INSTANCE = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'https://api.abysshub.com/api'
}); // Request interceptor for API calls

BASE_API_INSTANCE.interceptors.request.use(async config => {
  const accessToken = await localStorage.getItem("token");
  config.headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  config.baseURL = _urls_BASE_URL__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_URL */ .M;

  if (accessToken !== null && accessToken !== "") {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
}, error => {
  Promise.reject(error);
});

/***/ }),

/***/ 9293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ BASE_API_URL)
/* harmony export */ });
/* unused harmony export BASE_URL */
const BASE_URL = "https://api.abysshub.com/";
const BASE_API_URL = `${BASE_URL}api`;

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;