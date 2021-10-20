"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ feature_AppSlice),
  "q1": () => (/* binding */ page_overflowy),
  "Qf": () => (/* binding */ set_overflowy)
});

// UNUSED EXPORTS: AppSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./app/store/states/AuthState.ts
var AuthState = __webpack_require__(5586);
// EXTERNAL MODULE: ./app/store/states/QuestionState.ts
var QuestionState = __webpack_require__(2426);
;// CONCATENATED MODULE: ./app/store/states/AppState.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const APP_STATE = {
  AUTH_STATE: _objectSpread({}, AuthState/* AUTH_STATE */.J),
  QUESTION_STATE: _objectSpread({}, QuestionState/* QUESTION_STATE */.o),
  PAGE_OVERFLOWY: "scroll",
  CommentsSection: {
    id: null,
    comments: [],
    isShown: false
  }
};
;// CONCATENATED MODULE: ./app/feature/AppSlice.ts


const AppSlice = (0,toolkit_.createSlice)({
  name: 'app-slice',
  initialState: APP_STATE,
  reducers: {
    set_overflowy(state, {
      payload
    }) {
      state.PAGE_OVERFLOWY = payload;
    } // addNewAnswer(state, {payload}) {
    //   if(state.singleQuestionData !== null)
    //   {
    //     const newAnswer:ANSWER_INTERFACE = payload
    //     state.singleQuestionData.answers =  [...state.singleQuestionData.answers , newAnswer]
    //     state.singleQuestionData.answer_count += 1
    //   }
    // },


  },
  extraReducers: builder => {// //GET SINGLE QUESTION Reducers
    // builder.addCase(getSingleQuestion.fulfilled, (state, {payload}) => {
    //   state.singleQuestionData = payload.data
    //   state.status = 'idle'
    // }),
    // builder.addCase(getSingleQuestion.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(getSingleQuestion.rejected, (state, action) => {
    //   state.status = 'failed'
    // })  
    // //VOTE QUESTION Reducers
    // builder.addCase(voteQuestion.fulfilled, (state, {payload}) => {
    //   state.status = 'idle'
    //   if(state.singleQuestionData !== null)
    //   {
    //     state.singleQuestionData.user_votes = payload.data
    //     state.singleQuestionData.upvote += 1
    //   }
    // }),
    // builder.addCase(voteQuestion.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(voteQuestion.rejected, (state, {payload}) => {
    //   state.status = 'failed'
    //   autoErrorToaster(payload)
    // })  
    // //UN VOTE QUESTION Reducers
    // builder.addCase(unVoteQuestion.fulfilled, (state, {payload}) => {
    //   state.status = 'idle'
    //   if(state.singleQuestionData !== null)
    //   {
    //     state.singleQuestionData.user_votes = null
    //     state.singleQuestionData.upvote -= 1
    //   }
    // }),
    // builder.addCase(unVoteQuestion.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(unVoteQuestion.rejected, (state, {payload}) => {
    //   state.status = 'failed'
    //   autoErrorToaster(payload)
    // }) 
    // //VOTE ANSWER Reducers
    // builder.addCase(voteAnswer.fulfilled, (state, {payload}) => {
    //   state.status = 'idle'
    //   if(state.singleQuestionData !== null)
    //   {
    //     for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
    //       if(state.singleQuestionData.answers[i].id === payload.data.answer_id)
    //       {
    //         state.singleQuestionData.answers[i].user_votes = payload.data
    //       } 
    //     }
    //   }
    // }),
    // builder.addCase(voteAnswer.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(voteAnswer.rejected, (state, {payload}) => {
    //   state.status = 'failed'
    //   autoErrorToaster(payload)
    // })  
    // //UN VOTE ANSWER Reducers
    // builder.addCase(unVoteAnswer.fulfilled, (state, {payload}) => {
    //   state.status = 'idle'
    //   if(state.singleQuestionData !== null)
    //   {
    //     for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
    //       if(state.singleQuestionData.answers[i].id === payload)
    //       {
    //         state.singleQuestionData.answers[i].user_votes = null
    //       } 
    //     }
    //   }
    // }),
    // builder.addCase(unVoteAnswer.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(unVoteAnswer.rejected, (state, {payload}) => {
    //   state.status = 'failed'
    //   autoErrorToaster(payload)
    // }) 
  }
}); // action

const {
  set_overflowy
} = AppSlice.actions; // data

const page_overflowy = state => state.appReducer.PAGE_OVERFLOWY;
/* harmony default export */ const feature_AppSlice = (AppSlice.reducer);

/***/ }),

/***/ 5339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V4": () => (/* binding */ closeComments),
  "G_": () => (/* binding */ comments),
  "td": () => (/* binding */ comments_status),
  "d7": () => (/* binding */ comments_types),
  "ZP": () => (/* binding */ feature_CommentsSlice),
  "I": () => (/* binding */ is_answer),
  "R4": () => (/* binding */ is_comment_opened),
  "JM": () => (/* binding */ is_question),
  "Q8": () => (/* binding */ showComments)
});

// UNUSED EXPORTS: CommentsSlice, comments_errors

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./components/Notify/AutoErrorToaster.ts
var AutoErrorToaster = __webpack_require__(133);
// EXTERNAL MODULE: ./components/Notify/AutoSuccessToast.ts
var AutoSuccessToast = __webpack_require__(3336);
;// CONCATENATED MODULE: ./app/store/states/CommentState.ts
const CommentsState = {
  comments: [],
  commentsType: null,
  commentsStatus: "idle",
  isCommentOpened: false,
  isAnswer: null,
  isQuestion: null,
  commentsErrors: {
    email: [],
    content: [],
    token: []
  }
};
// EXTERNAL MODULE: ./app/thunks/CommentsThunk.ts
var CommentsThunk = __webpack_require__(3550);
;// CONCATENATED MODULE: ./app/feature/CommentsSlice.ts





const CommentsSlice = (0,toolkit_.createSlice)({
  name: 'comments-slice',
  initialState: CommentsState,
  reducers: {
    showComments(state, {
      payload
    }) {
      state.isCommentOpened = true;

      if (payload) {
        const {
          id,
          type,
          showComments,
          title,
          user,
          isQuestion,
          isAnswer
        } = payload;
        state.commentsType = {
          id: id,
          type: type,
          showComments: showComments,
          title: title,
          user: user
        };
        state.isCommentOpened = true;
        state.isQuestion = isQuestion;
        state.isAnswer = isAnswer;
      } else {
        state.commentsType = payload;
        document.body.setAttribute("style", "overflow-y: scroll");
      }
    },

    closeComments(state, {
      payload
    }) {
      console.log(state.isQuestion);
      console.log(state.commentsType);

      if (state.isQuestion) {
        var _document$querySelect;

        (_document$querySelect = document.querySelector(`#question${state.commentsType.id}`)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.setAttribute("style", "z-index: 1 !important;position:inherit;");
      } else if (state.isAnswer) {
        var _document$querySelect2;

        (_document$querySelect2 = document.querySelector(`#answer${state.commentsType.id}`)) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.setAttribute("style", "z-index: 1 !important;position:inherit;");
      } else {}

      document.body.setAttribute("style", "overflow-y: scroll");
      state.commentsType = null;
      state.isCommentOpened = false;
    }

  },
  extraReducers: builder => {
    //GET QUESTION COMMETS Reducers
    builder.addCase(CommentsThunk/* getQuestionComments.fulfilled */.xO.fulfilled, (state, {
      payload
    }) => {
      state.comments = payload.data;
      state.commentsStatus = 'idle';
    }), builder.addCase(CommentsThunk/* getQuestionComments.pending */.xO.pending, (state, {
      payload
    }) => {
      state.commentsStatus = 'loading';
    }), builder.addCase(CommentsThunk/* getQuestionComments.rejected */.xO.rejected, (state, action) => {
      state.commentsStatus = 'idle';

      if (action.payload) {
        state.commentsErrors = action.payload.errors;
      } else {
        state.commentsErrors = action.errors;
      }
    }), //GET ANSWER COMMETS Reducers
    builder.addCase(CommentsThunk/* getAnswerComments.fulfilled */.$1.fulfilled, (state, {
      payload
    }) => {
      state.comments = payload.data;
      state.commentsStatus = 'idle';
    }), builder.addCase(CommentsThunk/* getAnswerComments.pending */.$1.pending, (state, {
      payload
    }) => {
      state.commentsStatus = 'loading';
    }), builder.addCase(CommentsThunk/* getAnswerComments.rejected */.$1.rejected, (state, action) => {
      state.commentsStatus = 'idle';

      if (action.payload) {
        state.commentsErrors = action.payload.errors;
      } else {
        state.commentsErrors = action.errors;
      }
    }), //ADD QUESTION COMMETS Reducers
    builder.addCase(CommentsThunk/* addQuestionComment.fulfilled */.av.fulfilled, (state, {
      payload
    }) => {
      state.comments = [...state.comments, payload.data];
      (0,AutoSuccessToast/* autoSuccessToaster */.l)(payload.message);
    }), builder.addCase(CommentsThunk/* addQuestionComment.pending */.av.pending, (state, {
      payload
    }) => {}), builder.addCase(CommentsThunk/* addQuestionComment.rejected */.av.rejected, (state, action) => {
      (0,AutoErrorToaster/* autoErrorToaster */.K)(action.payload);
    }), //ADD ANSWER COMMETS Reducers
    builder.addCase(CommentsThunk/* addAnswerComment.fulfilled */._8.fulfilled, (state, {
      payload
    }) => {
      state.comments = [...state.comments, payload.data];
      (0,AutoSuccessToast/* autoSuccessToaster */.l)(payload.message);
    }), builder.addCase(CommentsThunk/* addAnswerComment.pending */._8.pending, (state, {
      payload
    }) => {}), builder.addCase(CommentsThunk/* addAnswerComment.rejected */._8.rejected, (state, action) => {
      (0,AutoErrorToaster/* autoErrorToaster */.K)(action.payload);
    });
  }
}); // action

const {
  showComments,
  closeComments
} = CommentsSlice.actions; // data

const comments_errors = state => state.commentsReducer.commentsErrors;
const comments = state => state.commentsReducer.comments;
const comments_types = state => state.commentsReducer.commentsType;
const is_comment_opened = state => state.commentsReducer.isCommentOpened;
const is_question = state => state.commentsReducer.isQuestion;
const is_answer = state => state.commentsReducer.isAnswer;
const comments_status = state => state.commentsReducer.commentsStatus;
/* harmony default export */ const feature_CommentsSlice = (CommentsSlice.reducer);

/***/ }),

/***/ 8569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XZ": () => (/* binding */ single_question_data),
/* harmony export */   "Wy": () => (/* binding */ single_question_status),
/* harmony export */   "Im": () => (/* binding */ submitted_answer),
/* harmony export */   "q3": () => (/* binding */ down_answers),
/* harmony export */   "Qm": () => (/* binding */ top_answers),
/* harmony export */   "OE": () => (/* binding */ top_answers_status),
/* harmony export */   "v5": () => (/* binding */ down_answers_status),
/* harmony export */   "L7": () => (/* binding */ top_page),
/* harmony export */   "Gv": () => (/* binding */ down_page),
/* harmony export */   "s": () => (/* binding */ total_page),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports QuestionSlice, changeTopAnswersStatus, changeDownAnswersStatus */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3369);
/* harmony import */ var _components_Notify_AutoErrorToaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(133);
/* harmony import */ var _store_states_QuestionState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2426);
/* harmony import */ var _components_Notify_SuccessToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(592);






const QuestionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'app-slice',
  initialState: _store_states_QuestionState__WEBPACK_IMPORTED_MODULE_3__/* .QUESTION_STATE */ .o,
  reducers: {
    changeTopAnswersStatus(state, action) {
      state.answersData.topAnswers.status = action.payload.status;
    },

    changeDownAnswersStatus(state, action) {
      state.answersData.downAnswers.status = action.payload.status;
    }

  },
  extraReducers: builder => {
    //GET SINGLE QUESTION Reducers
    builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .getSingleQuestion.fulfilled */ .iM.fulfilled, (state, {
      payload
    }) => {
      state.singleQuestionData = payload.data;
      state.singleQuestionData.status = 'idle';
    }), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .getSingleQuestion.pending */ .iM.pending, (state, {
      payload
    }) => {
      state.singleQuestionData.status = 'loading';
    }), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .getSingleQuestion.rejected */ .iM.rejected, (state, action) => {
      state.singleQuestionData.status = 'failed';
    }); //GET  QUESTION ANSWERS Reducers

    builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .getAnswers.fulfilled */ .X2.fulfilled, (state, {
      payload
    }) => {
      const topAnswers = state.answersData.topAnswers;
      const downAnswers = state.answersData.downAnswers;

      if (payload === null) {} else {
        if (payload.next) {
          topAnswers.answers = [...topAnswers.answers, ...payload.data.data];

          if (state.answersData.topPage === 1) {
            state.answersData.downPage = payload.data.meta.last_page;
            state.answersData.totalPage = payload.data.meta.total;
          }

          state.answersData.topPage = state.answersData.topPage + 1;

          if (topAnswers.answers.length + downAnswers.answers.length - state.answersData.submittedAnswer.length === state.answersData.totalPage && state.answersData.topPage > 1) {
            topAnswers.status = 'idle';
            downAnswers.status = 'idle';
          }
        } else {
          downAnswers.answers = [...payload.data.data, ...downAnswers.answers];
          state.answersData.downPage = state.answersData.downPage - 1;

          if (downAnswers.answers.length + topAnswers.answers.length === state.answersData.totalPage) {
            downAnswers.status = 'idle';
            topAnswers.status = 'idle';
          }
        }
      }
    }), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .getAnswers.pending */ .X2.pending, (state, {
      payload
    }) => {
      state.answersData.topAnswers.status = 'loading';
    }), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .getAnswers.rejected */ .X2.rejected, (state, action) => {
      state.answersData.topAnswers.answers = [...state.answersData.topAnswers.answers];
      state.answersData.topAnswers.status = 'failed';
    }); //ADD NEW ANSWER to Question Reducers

    builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .addAnswer.fulfilled */ .oe.fulfilled, (state, {
      payload
    }) => {
      (0,_components_Notify_SuccessToast__WEBPACK_IMPORTED_MODULE_4__/* .successToast */ .Q)("top-right", payload.message);
      state.answersData.topAnswers.answers = [payload.data, ...state.answersData.topAnswers.answers];
    }), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .addAnswer.pending */ .oe.pending, (state, {
      payload
    }) => {}), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .addAnswer.rejected */ .oe.rejected, (state, {
      payload
    }) => {
      (0,_components_Notify_AutoErrorToaster__WEBPACK_IMPORTED_MODULE_2__/* .autoErrorToaster */ .K)(payload);
    }); //VOTE QUESTION Reducers

    builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .voteQuestion.fulfilled */ .Is.fulfilled, (state, {
      payload
    }) => {
      if (state.singleQuestionData !== null) {
        state.singleQuestionData.user_votes = payload.data;
        state.singleQuestionData.upvote += 1;
      }

      (0,_components_Notify_SuccessToast__WEBPACK_IMPORTED_MODULE_4__/* .successToast */ .Q)("top-right", payload.message);
    }), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .voteQuestion.pending */ .Is.pending, (state, {
      payload
    }) => {}), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .voteQuestion.rejected */ .Is.rejected, (state, {
      payload
    }) => {
      (0,_components_Notify_AutoErrorToaster__WEBPACK_IMPORTED_MODULE_2__/* .autoErrorToaster */ .K)(payload);
    }); //UN VOTE QUESTION Reducers

    builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .unVoteQuestion.fulfilled */ .rA.fulfilled, (state, {
      payload
    }) => {
      if (state.singleQuestionData !== null) {
        state.singleQuestionData.user_votes = null;
        state.singleQuestionData.upvote -= 1;
      }

      (0,_components_Notify_SuccessToast__WEBPACK_IMPORTED_MODULE_4__/* .successToast */ .Q)("top-right", payload.message);
    }), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .unVoteQuestion.pending */ .rA.pending, (state, {
      payload
    }) => {}), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .unVoteQuestion.rejected */ .rA.rejected, (state, {
      payload
    }) => {
      (0,_components_Notify_AutoErrorToaster__WEBPACK_IMPORTED_MODULE_2__/* .autoErrorToaster */ .K)(payload);
    }); //VOTE ANSWER Reducers

    builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .voteAnswer.fulfilled */ .ad.fulfilled, (state, {
      payload
    }) => {
      if (payload.direction === "bottom") {
        for (let i = 0; i < state.answersData.downAnswers.answers.length; i++) {
          if (state.answersData.downAnswers.answers[i].id === payload.data.data.answer_id) {
            state.answersData.downAnswers.answers[i].user_votes = payload.data.data;
          }
        }
      } else if (payload.direction === "top") {
        for (let i = 0; i < state.answersData.topAnswers.answers.length; i++) {
          if (state.answersData.topAnswers.answers[i].id === payload.data.data.answer_id) {
            state.answersData.topAnswers.answers[i].user_votes = payload.data.data;
          }
        }
      } else if (payload.direction === "new-submitted") {
        for (let i = 0; i < state.answersData.submittedAnswer.length; i++) {
          if (state.answersData.submittedAnswer[i].id === payload.data.data.answer_id) {
            state.answersData.submittedAnswer[i].user_votes = payload.data.data;
          }
        }
      }

      (0,_components_Notify_SuccessToast__WEBPACK_IMPORTED_MODULE_4__/* .successToast */ .Q)("top-right", payload.data.message);
    }), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .voteAnswer.pending */ .ad.pending, (state, {
      payload
    }) => {}), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .voteAnswer.rejected */ .ad.rejected, (state, {
      payload
    }) => {
      (0,_components_Notify_AutoErrorToaster__WEBPACK_IMPORTED_MODULE_2__/* .autoErrorToaster */ .K)(payload);
    }); //UN VOTE ANSWER Reducers

    builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .unVoteAnswer.fulfilled */ .s1.fulfilled, (state, {
      payload
    }) => {
      if (payload.direction === "bottom") {
        for (let i = 0; i < state.answersData.downAnswers.answers.length; i++) {
          if (state.answersData.downAnswers.answers[i].id === payload.id) {
            state.answersData.downAnswers.answers[i].user_votes = null;
          }
        }
      } else if (payload.direction === "top") {
        for (let i = 0; i < state.answersData.topAnswers.answers.length; i++) {
          if (state.answersData.topAnswers.answers[i].id === payload.id) {
            state.answersData.topAnswers.answers[i].user_votes = null;
          }
        }
      } else if (payload.direction === "new-submitted") {
        for (let i = 0; i < state.answersData.topAnswers.answers.length; i++) {
          if (state.answersData.submittedAnswer[i].id === payload.data.data.answer_id) {
            state.answersData.submittedAnswer[i].user_votes = null;
          }
        }
      } else {}

      (0,_components_Notify_SuccessToast__WEBPACK_IMPORTED_MODULE_4__/* .successToast */ .Q)("top-right", payload.data.message);
    }), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .unVoteAnswer.pending */ .s1.pending, (state, {
      payload
    }) => {}), builder.addCase(_thunks_QuestionThunk__WEBPACK_IMPORTED_MODULE_1__/* .unVoteAnswer.rejected */ .s1.rejected, (state, {
      payload
    }) => {
      (0,_components_Notify_AutoErrorToaster__WEBPACK_IMPORTED_MODULE_2__/* .autoErrorToaster */ .K)(payload);
    });
  }
}); // action

const {
  changeTopAnswersStatus
} = QuestionSlice.actions;
const {
  changeDownAnswersStatus
} = QuestionSlice.actions; // data

const single_question_data = state => state.questionReducer.singleQuestionData;
const single_question_status = state => state.questionReducer.singleQuestionData.status;
const submitted_answer = state => state.questionReducer.answersData.submittedAnswer;
const down_answers = state => state.questionReducer.answersData.downAnswers.answers;
const top_answers = state => state.questionReducer.answersData.topAnswers.answers;
const top_answers_status = state => state.questionReducer.answersData.topAnswers.status;
const down_answers_status = state => state.questionReducer.answersData.downAnswers.status;
const top_page = state => state.questionReducer.answersData.topPage;
const down_page = state => state.questionReducer.answersData.downPage;
const total_page = state => state.questionReducer.answersData.totalPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionSlice.reducer);

/***/ }),

/***/ 2426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ QUESTION_STATE)
/* harmony export */ });
const QUESTION_STATE = {
  singleQuestionData: {
    status: "loading",
    id: 0,
    answer_count: 0,
    category: {
      id: 0,
      name: "",
      slug: "",
      sort: 0
    },
    closed_at: null,
    comment_count: 0,
    content: "",
    created_at: "",
    last_active_at: "",
    upvote: 0,
    slug: "",
    tags: "",
    title: "",
    updated_at: "",
    user: {
      id: 0,
      email: "",
      name: ""
    },
    user_votes: null,
    view_count: 0
  },
  answersData: {
    topPage: 1,
    downPage: 0,
    totalPage: 0,
    submittedAnswer: [],
    topAnswers: {
      status: "loading",
      answers: []
    },
    downAnswers: {
      status: "loading",
      answers: []
    }
  },
  status: "loading"
};

/***/ }),

/***/ 3550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xO": () => (/* binding */ getQuestionComments),
/* harmony export */   "$1": () => (/* binding */ getAnswerComments),
/* harmony export */   "av": () => (/* binding */ addQuestionComment),
/* harmony export */   "_8": () => (/* binding */ addAnswerComment)
/* harmony export */ });
/* harmony import */ var _constants_AppContants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2708);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4301);



const getQuestionComments = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .GET_QUESTION_COMMENTS */ .Qp, async (id, {
  rejectWithValue
}) => {
  try {
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.get */ .D.get(`/forum/${id}/thread/getcomment`);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const getAnswerComments = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .GET_ANSWER_COMMENTS */ .Sd, async (id, {
  rejectWithValue
}) => {
  try {
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.get */ .D.get(`/forum/${id}/answer/getcomment`);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const addQuestionComment = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .ADD_QUESTION_COMMENTS */ .zf, async (comment, {
  rejectWithValue
}) => {
  try {
    const formdata = new FormData();
    formdata.append('content', comment.content);
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.post */ .D.post(`/forum/${comment.parent_id}/thread/comment`, formdata);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const addAnswerComment = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .ADD_ANSWER_COMMENTS */ .Bq, async (comment, {
  rejectWithValue
}) => {
  try {
    const formdata = new FormData();
    formdata.append('content', comment.content);
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.post */ .D.post(`/forum/${comment.parent_id}/answer/comment`, formdata);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

/***/ }),

/***/ 3369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iM": () => (/* binding */ getSingleQuestion),
/* harmony export */   "X2": () => (/* binding */ getAnswers),
/* harmony export */   "oe": () => (/* binding */ addAnswer),
/* harmony export */   "Is": () => (/* binding */ voteQuestion),
/* harmony export */   "rA": () => (/* binding */ unVoteQuestion),
/* harmony export */   "ad": () => (/* binding */ voteAnswer),
/* harmony export */   "s1": () => (/* binding */ unVoteAnswer)
/* harmony export */ });
/* harmony import */ var _constants_AppContants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2708);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4301);



const getSingleQuestion = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .GET_SINGLE_QUESTION */ .yx, async (url, {
  rejectWithValue
}) => {
  try {
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.get */ .D.get(`${url}`);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const getAnswers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .GET_ANSWERS */ .CN, async (data, {
  rejectWithValue
}) => {
  try {
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.get */ .D.get(`/forum/${data.questionId}/answer/loadanswers?page=${data.page}`);

    if (data.direction === 'next') {
      return {
        data: resp.data,
        next: true
      };
    } else if (data.direction === 'previous') {
      return {
        data: resp.data,
        next: false
      };
    }

    return null;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const addAnswer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .ADD_ANSWER */ .Vo, async (data, {
  rejectWithValue
}) => {
  try {
    const formData = new FormData();
    formData.append('content', data.content);
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.post */ .D.post(`/forum/${data.questionId}/answer/submit`, formData);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const voteQuestion = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .VOTE_QUESTION */ .Nm, async (vote, {
  rejectWithValue
}) => {
  try {
    const formData = new FormData();
    formData.append("type", vote.type);
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.post */ .D.post(`/forum/${vote.id}/thread/vote`, formData);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const unVoteQuestion = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .UN_VOTE_QUESTION */ .td, async (vote, {
  rejectWithValue
}) => {
  try {
    const formData = new FormData();
    formData.append("type", vote.type);
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.post */ .D.post(`/forum/${vote.id}/thread/unvote`, formData);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const voteAnswer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .VOTE_ANSWER */ .C0, async (vote, {
  rejectWithValue
}) => {
  try {
    const formData = new FormData();
    formData.append("type", vote.type);
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.post */ .D.post(`/forum/${vote.id}/answer/vote`, formData);
    return {
      data: resp.data,
      direction: vote.direction
    };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const unVoteAnswer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(_constants_AppContants__WEBPACK_IMPORTED_MODULE_2__/* .UN_VOTE_ANSWER */ .r$, async (vote, {
  rejectWithValue
}) => {
  try {
    const formData = new FormData();
    formData.append("type", vote.type);
    const resp = await _helpers_api_BaseInstance__WEBPACK_IMPORTED_MODULE_1__/* .BASE_API_INSTANCE.post */ .D.post(`/forum/${vote.id}/answer/unvote`, formData);
    return {
      data: resp.data,
      direction: vote.direction,
      id: vote.id
    };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

/***/ }),

/***/ 4519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_quilljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6199);
/* harmony import */ var react_quilljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quilljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6872);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_3__);









function MyEditor({
  content,
  onChange
}) {
  highlight_js__WEBPACK_IMPORTED_MODULE_3___default().configure({
    languages: ['javascript', 'ruby', 'python', 'rust']
  });
  const theme = 'snow';
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    highlight_js__WEBPACK_IMPORTED_MODULE_3___default().highlightAll();
  }, []);
  const modules = {
    toolbar: [[{
      'header': [1, 2, false]
    }], ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'], [{
      'list': 'ordered'
    }, {
      'list': 'bullet'
    }, {
      'indent': '-1'
    }, {
      'indent': '+1'
    }], ['link', 'image'], ['clean']],
    syntax: {
      highlight: code => highlight_js__WEBPACK_IMPORTED_MODULE_3___default().highlightAuto(code).value
    }
  };
  const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'list', 'bullet', 'indent', 'link', 'image'];
  const {
    quill,
    quillRef
  } = (0,react_quilljs__WEBPACK_IMPORTED_MODULE_2__.useQuill)({
    modules,
    formats
  });
  const {
    0: editor_theme,
    1: seteditor_theme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('black');
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        onChange(quill.root.innerHTML);
        let qlSyntaxes = document.querySelectorAll('.ql-syntax');

        for (let index = 0; index < qlSyntaxes.length; index++) {
          qlSyntaxes[index].setAttribute('style', `background-color: ${editor_theme}`);
        }
      });
    }
  }, [quill, editor_theme]);

  const handleChange = event => {
    seteditor_theme(event.target.value);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let qlSyntaxes = document.querySelectorAll('.ql-syntax');

    for (let index = 0; index < qlSyntaxes.length; index++) {
      qlSyntaxes[index].setAttribute('style', `background-color: ${editor_theme}`);
    }
  }, [editor_theme]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
      value: editor_theme,
      onChange: handleChange,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
        value: "red",
        children: "red"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
        value: "green",
        children: "green"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
        value: "blue",
        children: "blue"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
        value: "black",
        children: "black"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      style: {
        width: "100%",
        minHeight: "100"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: quillRef
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyEditor);

/***/ }),

/***/ 6373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZL": () => (/* binding */ GlobalStyle),
/* harmony export */   "LW": () => (/* binding */ ThemeToggler),
/* harmony export */   "Ys": () => (/* binding */ Relativer),
/* harmony export */   "kN": () => (/* binding */ ToggleElement),
/* harmony export */   "zg": () => (/* binding */ TogglerButton),
/* harmony export */   "nN": () => (/* binding */ SkeletonBox)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["body{background-color:", ";overflow-y:scroll;::-webkit-scrollbar{width:10px;}::-webkit-scrollbar-track{background:#f1f1f1;}::-webkit-scrollbar-thumb{background:#888;}::-webkit-scrollbar-thumb:hover{background:#555;}}*{box-sizing:border-box;}"], ({
  theme
}) => theme.body);
const ThemeToggler = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Globalstyle__ThemeToggler",
  componentId: "sc-1t1xegy-0"
})(["position:fixed;width:70px;height:35px;border:1px solid white;padding:0px;margin:0px;border-radius:20px;background-color:black;background-color:", ";border:1px solid ", ";transition:0.5s;right:10px;top:90px;cursor:pointer;z-index:77;"], ({
  theme
}) => theme.themeTogglerCont, ({
  theme
}) => theme.themeTogglerContBorder);
const Relativer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Globalstyle__Relativer",
  componentId: "sc-1t1xegy-1"
})(["position:relative;display:flex;justify-content:space-between;"]);
const ToggleElement = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Globalstyle__ToggleElement",
  componentId: "sc-1t1xegy-2"
})(["display:flex;justify-content:center;align-items:center;width:34px;height:34px;"]);
const TogglerButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Globalstyle__TogglerButton",
  componentId: "sc-1t1xegy-3"
})(["display:flex;justify-content:center;align-items:center;width:35px;margin-top:-1px;height:33px;background-color:black;border:1px solid gray;border-radius:50%;position:absolute;transform:", ";background-color:", ";cursor:pointer;transition:0.3s;"], ({
  theme
}) => `translateX(${theme.toggleTheme})`, ({
  theme
}) => theme.toggleThemeColor);
const SkeletonBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Globalstyle__SkeletonBox",
  componentId: "sc-1t1xegy-4"
})(["width:", ";height:", ";border-radius:", ";"], ({
  width
}) => width, ({
  height
}) => height, ({
  borderRadius
}) => `${borderRadius}`);

/***/ })

};
;