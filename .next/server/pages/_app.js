"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./app/feature/AppSlice.ts + 1 modules
var AppSlice = __webpack_require__(704);
// EXTERNAL MODULE: ./app/feature/UserSlice.ts + 2 modules
var UserSlice = __webpack_require__(6565);
// EXTERNAL MODULE: ./app/store/hooks.ts
var hooks = __webpack_require__(6293);
// EXTERNAL MODULE: ./app/thunks/AuthThunk.ts + 1 modules
var AuthThunk = __webpack_require__(8756);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/components/styled-elements/Footer.style.ts

const FooterStyle = external_styled_components_default().footer.withConfig({
  displayName: "Footerstyle__FooterStyle",
  componentId: "sc-z84iw-0"
})(["display:flex;width:100%;height:300px;background-color:rgb(3,39,40);justify-content:center;align-items:center;padding-top:10px;padding-bottom:10px;margin:0px;flex-direction:column;row-gap:20px;justify-content:space-around;"]);
const FooterRow = external_styled_components_default().div.withConfig({
  displayName: "Footerstyle__FooterRow",
  componentId: "sc-z84iw-1"
})(["display:flex;justify-content:center;padding-left:25px;padding-right:25px;flex-wrap:wrap;row-gap:45px;column-gap:55px;align-items:center;"]);
const FooterColumn = external_styled_components_default().div.withConfig({
  displayName: "Footerstyle__FooterColumn",
  componentId: "sc-z84iw-2"
})(["display:flex;flex-direction:column;row-gap:25px;"]);
const FooterElement = external_styled_components_default().p.withConfig({
  displayName: "Footerstyle__FooterElement",
  componentId: "sc-z84iw-3"
})(["font-size:18px;color:white;"]);
;// CONCATENATED MODULE: ./components/Footer.tsx






function Footer({}) {
  const dispatch = (0,hooks/* useAppDispatch */.T)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterStyle, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterRow, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FooterColumn, {
        children: /*#__PURE__*/jsx_runtime_.jsx(FooterElement, {
          children: "Terms of "
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterColumn, {
        children: /*#__PURE__*/jsx_runtime_.jsx(FooterElement, {
          children: "Privacy Policy"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterColumn, {
        children: /*#__PURE__*/jsx_runtime_.jsx(FooterElement, {
          children: "About Us"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterColumn, {
        children: /*#__PURE__*/jsx_runtime_.jsx(FooterElement, {
          children: "Careers"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterColumn, {
        children: /*#__PURE__*/jsx_runtime_.jsx(FooterElement, {
          children: "Support"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterColumn, {
        children: /*#__PURE__*/jsx_runtime_.jsx(FooterElement, {
          children: "Community"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterRow, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterRow, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(FooterElement, {
          children: "\xA9 All rights reserved 2021"
        }), /*#__PURE__*/jsx_runtime_.jsx(FooterElement, {
          children: "Abyss"
        })]
      })
    })]
  });
}

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Modals/ForgetPasswordModal.tsx







function ForgetPasswordModal({}) {
  const dispatch = (0,hooks/* useAppDispatch */.T)();
  const allModals = (0,hooks/* useAppSelector */.C)(UserSlice/* user_modals */.PQ);
  const loginForm = (0,hooks/* useAppSelector */.C)(UserSlice/* login_form */.W7);
  const forgetPassErrors = (0,hooks/* useAppSelector */.C)(UserSlice/* forget_Password_Errors */.Jd);

  const formSubmit = async e => {
    e.preventDefault();
    dispatch(AuthThunk/* forgetPasswordThunk */.Ih(loginForm.email));
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      width: "100vw",
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      background: "rgba(0,0,0,0.5)",
      left: 0,
      top: 0,
      zIndex: 4
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      style: {
        background: "rgba(255,255,255,0.7)",
        padding: "25px",
        borderRadius: "20px"
      },
      onSubmit: formSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'flex-end',
          marginTop: "0px",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('forgetPassword')),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer"
          },
          children: "X"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Forget Password"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          style: {
            width: "150px",
            marginBottom: "10px",
            alignSelf: "flex-start"
          },
          htmlFor: "",
          children: "email"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "email",
          name: "email",
          value: loginForm.email,
          onChange: e => dispatch((0,UserSlice/* login_Form_OnChange */.CJ)(e))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          rowGap: "5px",
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          children: "Send Code"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('login')),
          children: "Go back"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: forgetPassErrors !== null && forgetPassErrors.attempt !== undefined && /*#__PURE__*/jsx_runtime_.jsx("label", {
          children: forgetPassErrors.attempt
        })
      })]
    })
  });
}

/* harmony default export */ const Modals_ForgetPasswordModal = (ForgetPasswordModal);
;// CONCATENATED MODULE: ./components/Modals/LoginModal.tsx







function LoginModal({}) {
  const dispatch = (0,hooks/* useAppDispatch */.T)();
  const loginErrors = (0,hooks/* useAppSelector */.C)(UserSlice/* login_errors */.cc);
  const allModals = (0,hooks/* useAppSelector */.C)(UserSlice/* user_modals */.PQ);
  const loginForm = (0,hooks/* useAppSelector */.C)(UserSlice/* login_form */.W7);

  const formSubmit = async e => {
    e.preventDefault();
    dispatch(AuthThunk/* userLogin */.n$(loginForm));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    style: {
      background: "rgba(255,255,255,0.7)",
      padding: "25px",
      borderRadius: "20px",
      pointerEvents: "all"
    },
    onSubmit: formSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'flex-end',
        marginTop: "0px",
        marginBottom: "10px"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('login')),
        style: {
          background: "none",
          border: "none",
          cursor: "pointer"
        },
        children: "X"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        marginTop: "20px",
        marginBottom: "10px"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Login"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        marginTop: "20px",
        marginBottom: "10px"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        style: {
          width: "150px",
          marginBottom: "10px",
          alignSelf: "flex-start"
        },
        htmlFor: "",
        children: "email"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "email",
        name: "email",
        value: loginForm.email,
        onChange: e => dispatch((0,UserSlice/* login_Form_OnChange */.CJ)({
          name: e.target.name,
          value: e.target.value
        }))
      }), loginErrors.email !== undefined && loginErrors.email.map((error, index) => /*#__PURE__*/jsx_runtime_.jsx("label", {
        style: {
          color: "red",
          fontSize: "12px",
          marginTop: "10px",
          marginBottom: "10px"
        },
        children: error
      }, index))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        marginTop: "20px",
        marginBottom: "10px"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        style: {
          width: "150px",
          marginBottom: "10px",
          alignSelf: "flex-start"
        },
        htmlFor: "",
        children: "password"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "password",
        name: "password",
        value: loginForm.password,
        onChange: e => dispatch((0,UserSlice/* login_Form_OnChange */.CJ)({
          name: e.target.name,
          value: e.target.value
        }))
      }), loginErrors.password !== undefined && loginErrors.password.map((error, index) => /*#__PURE__*/jsx_runtime_.jsx("label", {
        style: {
          color: "red",
          fontSize: "12px",
          marginTop: "10px",
          marginBottom: "10px"
        },
        children: error
      }, index))]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        marginTop: "20px",
        marginBottom: "0px"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "Submit"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        marginTop: "5px",
        marginBottom: "10px"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        style: {
          color: "red",
          fontSize: "12px",
          marginTop: "5px",
          marginBottom: "5px"
        },
        onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('forgetPassword')),
        children: "Forget Password"
      })
    })]
  });
}

/* harmony default export */ const Modals_LoginModal = (LoginModal);
;// CONCATENATED MODULE: ./components/Modals/RegisterModal.tsx







function RegisterModal({}) {
  const dispatch = (0,hooks/* useAppDispatch */.T)();
  const registerErrors = (0,hooks/* useAppSelector */.C)(UserSlice/* register_errors */.Gr);
  const allModals = (0,hooks/* useAppSelector */.C)(UserSlice/* user_modals */.PQ);
  const registerForm = (0,hooks/* useAppSelector */.C)(UserSlice/* register_form */.$s);

  const formSubmit = e => {
    e.preventDefault();

    try {
      dispatch(AuthThunk/* userRegister */.N$(registerForm));
    } catch (error) {}
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      width: "100vw",
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      background: "rgba(0,0,0,0.5)",
      left: 0,
      top: 0,
      zIndex: 5
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      style: {
        background: "rgba(255,255,255,0.7)",
        padding: "25px",
        borderRadius: "20px"
      },
      onSubmit: formSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'flex-end',
          marginTop: "0px",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('register')),
          type: "button",
          style: {
            background: "none",
            border: "none",
            cursor: "pointer"
          },
          children: "X"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Register "
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          style: {
            width: "150px",
            marginBottom: "10px",
            alignSelf: "flex-start"
          },
          htmlFor: "",
          children: "username"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          name: "name",
          value: registerForm.name,
          onChange: e => dispatch((0,UserSlice/* register_Form_OnChange */.ZH)({
            name: e.target.name,
            value: e.target.value
          }))
        }), registerErrors.name !== undefined && registerErrors.name.map((error, index) => /*#__PURE__*/jsx_runtime_.jsx("label", {
          style: {
            color: "red",
            fontSize: "12px",
            marginTop: "10px",
            marginBottom: "10px"
          },
          children: error
        }, index))]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          style: {
            width: "150px",
            marginBottom: "10px",
            alignSelf: "flex-start"
          },
          htmlFor: "",
          children: "email"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          name: "email",
          value: registerForm.email,
          onChange: e => dispatch((0,UserSlice/* register_Form_OnChange */.ZH)({
            name: e.target.name,
            value: e.target.value
          }))
        }), registerErrors.email !== undefined && registerErrors.email.map((error, index) => /*#__PURE__*/jsx_runtime_.jsx("label", {
          style: {
            color: "red",
            fontSize: "12px",
            marginTop: "10px",
            marginBottom: "10px"
          },
          children: error
        }, index))]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          style: {
            width: "150px",
            marginBottom: "10px",
            alignSelf: "flex-start"
          },
          htmlFor: "",
          children: "password"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          name: "password",
          value: registerForm.password,
          onChange: e => dispatch((0,UserSlice/* register_Form_OnChange */.ZH)({
            name: e.target.name,
            value: e.target.value
          }))
        }), registerErrors.password !== undefined && registerErrors.password.map((error, index) => /*#__PURE__*/jsx_runtime_.jsx("label", {
          style: {
            color: "red",
            fontSize: "12px",
            marginTop: "10px",
            marginBottom: "10px"
          },
          children: error
        }, index))]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: "100%",
          display: 'flex',
          justifyContent: 'center',
          marginTop: "20px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          children: "Submit"
        })
      })]
    })
  });
}

/* harmony default export */ const Modals_RegisterModal = (RegisterModal);
;// CONCATENATED MODULE: ./components/Modals/IsEmailSendModal.tsx






function IsEmailSendModal({}) {
  const dispatch = (0,hooks/* useAppDispatch */.T)();
  const allModals = (0,hooks/* useAppSelector */.C)(UserSlice/* user_modals */.PQ);
  const loginForm = (0,hooks/* useAppSelector */.C)(UserSlice/* login_form */.W7);
  const errors = (0,hooks/* useAppSelector */.C)(UserSlice/* forget_Password_Errors */.Jd);

  const formSubmit = async e => {
    e.preventDefault(); // dispatch(authThunk.forgetPasswordThunk({email:loginForm.email}))
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      width: "100vw",
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      background: "rgba(0,0,0,0.5)",
      left: 0,
      top: 0,
      zIndex: 4
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      style: {
        background: "rgba(255,255,255,0.7)",
        padding: "25px",
        borderRadius: "20px"
      },
      onSubmit: formSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Email has been sent"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          style: {
            width: "150px",
            marginBottom: "10px",
            alignSelf: "flex-start"
          },
          htmlFor: "",
          children: "email"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          disabled: true,
          type: "email",
          name: "email",
          value: loginForm.email,
          onChange: e => dispatch((0,UserSlice/* login_Form_OnChange */.CJ)(e))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          rowGap: "5px",
          marginTop: "20px",
          marginBottom: "10px"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "submit",
          children: "Send Again"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('forgetPassword')),
          children: "Go back"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          marginTop: "20px",
          marginBottom: "10px"
        }
      })]
    })
  });
}

/* harmony default export */ const Modals_IsEmailSendModal = (IsEmailSendModal);
// EXTERNAL MODULE: ./helpers/api/BaseInstance.ts
var BaseInstance = __webpack_require__(4301);
// EXTERNAL MODULE: ./styles/components/styled-elements/CreateQuestionModal.style.ts
var CreateQuestionModal_style = __webpack_require__(7664);
// EXTERNAL MODULE: ./components/MyEditor.tsx
var MyEditor = __webpack_require__(4519);
// EXTERNAL MODULE: ./components/Notify/AutoErrorToaster.ts
var AutoErrorToaster = __webpack_require__(133);
// EXTERNAL MODULE: ./components/Notify/AutoSuccessToast.ts
var AutoSuccessToast = __webpack_require__(3336);
;// CONCATENATED MODULE: ./components/Modals/CreateQuestionModal.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function CreateQuestionModal({}) {
  const {
    0: questionValue,
    1: setQuestionValue
  } = (0,external_react_.useState)({
    title: "",
    content: ""
  });
  const {
    0: tags,
    1: settags
  } = (0,external_react_.useState)([]);
  const {
    0: category,
    1: setCategory
  } = (0,external_react_.useState)("1");
  const dispatch = (0,hooks/* useAppDispatch */.T)();

  const questionChange = e => {
    setQuestionValue(_objectSpread(_objectSpread({}, questionValue), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const createTag = event => {
    if (event.code === "Space") {
      settags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const sendCreateQuestionModal = async e => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("category_id", category);
      formData.append("title", questionValue.title);
      formData.append("content", questionValue.content);
      formData.append("tags", JSON.stringify(tags));
      const resp = await BaseInstance/* BASE_API_INSTANCE.post */.D.post("/forum/create", formData);
      (0,AutoSuccessToast/* autoSuccessToaster */.l)(resp.data.message);
      console.log(resp.data.message);
      dispatch((0,UserSlice/* changeModalAction */.nE)('questionCreate'));
    } catch (error) {
      (0,AutoErrorToaster/* autoErrorToaster */.K)(error.response.data);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(CreateQuestionModal_style/* QuestionCreateModal */.Qr, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* QuestionCreateForm */.z7, {
      onSubmit: sendCreateQuestionModal,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'flex-end',
          marginTop: "0px",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('questionCreate')),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer"
          },
          children: "X"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "title",
          children: "Title"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          onChange: questionChange,
          value: questionValue.title,
          type: "text",
          name: "title"
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "title",
          children: "validate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "Content"
        }), /*#__PURE__*/jsx_runtime_.jsx(MyEditor/* default */.Z, {
          content: questionValue,
          onChange: code => setQuestionValue(code)
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "validate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "Category"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          onChange: e => setCategory(e.target.value),
          name: "category",
          id: "",
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            children: "Test"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "2",
            children: "Test2"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "validate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "title",
          children: "Tags"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "tags d-f ",
          children: [tags.map((tag, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: tag
          }, index)), /*#__PURE__*/jsx_runtime_.jsx("input", {
            onKeyDown: createTag,
            type: "text",
            name: "tags"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "Post"
      })]
    })
  });
}

/* harmony default export */ const Modals_CreateQuestionModal = (CreateQuestionModal);
;// CONCATENATED MODULE: ./components/Modals/ModalCont.tsx


function ModalCont({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      width: "100vw",
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      background: "rgba(0,0,0,0.5)",
      left: 0,
      top: 0,
      zIndex: 999
    },
    children: children
  });
}
;// CONCATENATED MODULE: ./styles/components/styled-elements/CreateProductModal.style.ts

const ProductCreateModal = external_styled_components_default().div.withConfig({
  displayName: "CreateProductModalstyle__ProductCreateModal",
  componentId: "sc-19shg54-0"
})(["display:flex;justify-content:center;width:100%;height:100vh;left:0;top:0;z-index:999999;position:fixed;background-color:rgba(0,0,0,0.8);"]);
const ProductCreateForm = external_styled_components_default().div.withConfig({
  displayName: "CreateProductModalstyle__ProductCreateForm",
  componentId: "sc-19shg54-1"
})(["display:flex;background-color:lightblue;padding:20px;flex-direction:column;border-radius:10px;width:1200px;overflow-y:auto;height:auto;"]);
const ProductLabelCont = external_styled_components_default().div.withConfig({
  displayName: "CreateProductModalstyle__ProductLabelCont",
  componentId: "sc-19shg54-2"
})(["display:flex;flex-direction:column;row-gap:10px;border:1px dashed black;margin-top:20px;"]);
;// CONCATENATED MODULE: external "react-beautiful-dnd"
const external_react_beautiful_dnd_namespaceObject = require("react-beautiful-dnd");
;// CONCATENATED MODULE: ./logic/createProduct.ts
const getClips = sections => {
  let index = sections.findIndex(section => section.isClips.status);
  return sections[index];
};
const getClipsIndex = sections => {
  let index = sections.findIndex(section => section.isClips.status);
  return index;
};
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
;// CONCATENATED MODULE: ./app/store/states/CreateProductState.ts
const CreateProductState = {
  sections_product: [{
    id: 1,
    label_key: "Description",
    label_value: "",
    isEditor: true,
    isClips: {
      status: false,
      clips: []
    }
  }, {
    id: 2,
    label_key: "Description",
    label_value: "",
    isEditor: true,
    isClips: {
      status: false,
      clips: []
    }
  }, {
    id: 3,
    label_key: "Clips",
    label_value: "",
    isEditor: false,
    isClips: {
      status: true,
      clips: []
    }
  }]
};
// EXTERNAL MODULE: ./app/constants/AppContants.ts
var AppContants = __webpack_require__(2708);
;// CONCATENATED MODULE: ./logic/convertBase64.ts
const convertAnyFileBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = error => {
      reject(error);
    };
  });
};
;// CONCATENATED MODULE: ./app/thunks/CreateProductThunk.ts



const addFile = (0,toolkit_.createAsyncThunk)(AppContants/* ADD_FILE */.$K, async (file, {
  rejectWithValue
}) => {
  try {
    let base64 = await convertAnyFileBase64(file);
    return {
      base64: base64,
      alt: file.name
    };
  } catch (error) {
    return null;
  }
});
;// CONCATENATED MODULE: ./app/feature/CreateProductSlice.ts




const CreateProductSlice = (0,toolkit_.createSlice)({
  name: 'create-product-slice',
  initialState: CreateProductState,
  reducers: {
    updateKey(state, {
      payload
    }) {
      state.sections_product[payload.index].label_key = payload.content;
    },

    updateLabel(state, {
      payload
    }) {
      state.sections_product[payload.index].label_value = payload.content;
    },

    updateSectionsOrder(state, {
      payload
    }) {
      state.sections_product = payload;
    },

    addNewSection(state, _) {
      state.sections_product.push({
        id: Date.now(),
        label_key: "Header",
        label_value: "",
        isEditor: true,
        isClips: {
          status: false,
          clips: []
        }
      });
    },

    deleteSection(state, {
      payload
    }) {
      let newArray = [...state.sections_product];
      newArray.splice(payload.index, 1);
      state.sections_product = newArray;
    },

    deleteClip(state, {
      payload
    }) {
      state.sections_product[getClipsIndex(state.sections_product)].isClips.clips.splice(payload.index, 1);
    },

    changeClipPosition(state, {
      payload
    }) {
      state.sections_product[getClipsIndex(state.sections_product)].isClips.clips = payload;
    }

  },
  extraReducers: builder => {
    // ADD CLIP
    builder.addCase(addFile.fulfilled, (state, {
      payload
    }) => {
      console.log(payload);
      state.sections_product[getClipsIndex(state.sections_product)].isClips.clips.push({
        id: Date.now(),
        src: payload.base64,
        alt: payload.alt
      });
    }), builder.addCase(addFile.pending, (state, {
      payload
    }) => {}), builder.addCase(addFile.rejected, (state, action) => {});
  }
}); //function for find clip
// action

const {
  updateKey,
  updateLabel,
  addNewSection,
  updateSectionsOrder,
  deleteSection,
  deleteClip,
  changeClipPosition
} = CreateProductSlice.actions; // data

const sections_product = state => state.createProductReducer.sections_product;
/* harmony default export */ const feature_CreateProductSlice = (CreateProductSlice.reducer);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
;// CONCATENATED MODULE: external "@uiw/react-codemirror"
const react_codemirror_namespaceObject = require("@uiw/react-codemirror");
var react_codemirror_default = /*#__PURE__*/__webpack_require__.n(react_codemirror_namespaceObject);
;// CONCATENATED MODULE: external "@codemirror/lang-javascript"
const lang_javascript_namespaceObject = require("@codemirror/lang-javascript");
;// CONCATENATED MODULE: ./components/Modals/CreateProductModal.tsx



function CreateProductModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CreateProductModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CreateProductModal_ownKeys(Object(source), true).forEach(function (key) { CreateProductModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CreateProductModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CreateProductModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function CreateProductModal({}) {
  const sectionsProduct = (0,hooks/* useAppSelector */.C)(sections_product);
  const dispatch = (0,hooks/* useAppDispatch */.T)();
  const {
    0: productCode,
    1: setproductCode
  } = (0,external_react_.useState)();

  function handleOnDragEnd(result) {
    console.log(result);

    if (result.source.droppableId === 'main') {
      if (!result.destination) return;
      console.log(result);
      const items = Array.from(sectionsProduct);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      dispatch(updateSectionsOrder(items));
    } else if (result.destination.droppableId === 'main-clip') {
      if (!result.destination) return;
      const items = Array.from(sectionsProduct[getClipsIndex(sectionsProduct)].isClips.clips);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index - 1, 0, reorderedItem);
      console.log(items);
      dispatch(changeClipPosition(items));
    } else if (result.source.droppableId === 'clips') {
      if (result.source.draggableId === "main-clip-drg-id") {
        if (!result.destination) return;
        const items = Array.from(sectionsProduct[getClipsIndex(sectionsProduct)].isClips.clips);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        dispatch(changeClipPosition(items));
      }

      if (!result.destination) return;
      const items = Array.from(sectionsProduct[getClipsIndex(sectionsProduct)].isClips.clips);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      dispatch(changeClipPosition(items));
    }
  }

  const addNewBlock = () => {
    dispatch(addNewSection(null));
    return null;
  };

  const deleteBlock = index => {
    console.log(index);
    dispatch(deleteSection(index));
  };

  (0,external_react_.useEffect)(() => {// console.log(sectionsProduct)
  }, [sectionsProduct]);

  const getCodefromfile = file => {
    const reader = new FileReader();
    let textFile = /text.*/;

    if (file.type.match(textFile)) {
      reader.onload = function (event) {
        setproductCode(event.target.result);
      };
    } else {
      alert("IT IS NOT TEXT FILE");
    }

    reader.readAsText(file);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(ProductCreateModal, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductCreateForm, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'flex-end',
          marginTop: "0px",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('productCreate')),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer"
          },
          children: "X"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        children: ["get code from file ", /*#__PURE__*/jsx_runtime_.jsx("input", {
          value: "",
          type: "file",
          placeholder: "add Image",
          onChange: e => getCodefromfile(e.target.files[0])
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((react_codemirror_default()), {
        value: productCode,
        height: "200px",
        extensions: [(0,lang_javascript_namespaceObject.javascript)({
          jsx: true
        })],
        onChange: (value, viewUpdate) => {
          setproductCode(value);
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          userSelect: "none",
          padding: 16,
          margin: "0 0 8px 0",
          backgroundColor: "#263B4A",
          color: "white",
          height: "auto"
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductLabelCont, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            style: {
              marginRight: "10px",
              color: "gray"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faRulerVertical
            }), " block"]
          }), sectionsProduct[0].isEditor && /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            value: sectionsProduct[0].label_key
          }), sectionsProduct[0].isEditor && /*#__PURE__*/jsx_runtime_.jsx(MyEditor/* default */.Z, {
            content: sectionsProduct[0].label_value,
            onChange: content => dispatch(updateLabel({
              index: 0,
              content: content
            }))
          }), sectionsProduct[0].isEditor && /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "title",
            children: "validate"
          })]
        })
      }, 0), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          userSelect: "none",
          padding: 16,
          margin: "0 0 8px 0",
          backgroundColor: "#263B4A",
          color: "white",
          height: "auto"
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductLabelCont, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            style: {
              marginRight: "10px",
              color: "gray"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faRulerVertical
            }), "block"]
          }), sectionsProduct[1].isEditor && /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            value: sectionsProduct[1].label_key
          }), sectionsProduct[1].isEditor && /*#__PURE__*/jsx_runtime_.jsx(MyEditor/* default */.Z, {
            content: sectionsProduct[1].label_value,
            onChange: content => dispatch(updateLabel({
              index: 1,
              content: content
            }))
          }), sectionsProduct[1].isEditor && /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "title",
            children: "validate"
          })]
        })
      }, 1), /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.DragDropContext, {
        onDragEnd: handleOnDragEnd,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Droppable, {
          droppableId: "main",
          children: (provided, snapshot) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", CreateProductModal_objectSpread(CreateProductModal_objectSpread({
            style: {
              background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
              padding: 4,
              width: "100%"
            }
          }, provided.droppableProps), {}, {
            ref: provided.innerRef,
            children: [sectionsProduct.map(({
              id,
              label_key,
              label_value,
              isEditor,
              isClips
            }, index) => {
              if (index > 1) {
                return /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Draggable, {
                  draggableId: id.toString(),
                  index: index,
                  children: (provided, snapshot) => /*#__PURE__*/jsx_runtime_.jsx("div", CreateProductModal_objectSpread(CreateProductModal_objectSpread({
                    ref: provided.innerRef
                  }, provided.draggableProps), {}, {
                    style: CreateProductModal_objectSpread({
                      userSelect: "none",
                      padding: 16,
                      margin: "0 0 8px 0",
                      minHeight: "50px",
                      backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                      color: "white"
                    }, provided.draggableProps.style),
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductLabelCont, {
                      children: [isEditor && /*#__PURE__*/jsx_runtime_.jsx("button", {
                        disabled: id === 1 || id === 2 || id === 3,
                        type: "button",
                        onClick: () => dispatch(deleteSection({
                          index: index
                        })),
                        children: "x"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", CreateProductModal_objectSpread(CreateProductModal_objectSpread({}, provided.dragHandleProps), {}, {
                        style: {
                          marginRight: "10px",
                          color: "black"
                        },
                        children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faRulerVertical
                        }), "block"]
                      })), isClips.status && /*#__PURE__*/jsx_runtime_.jsx("input", {
                        type: "text",
                        disabled: true,
                        value: label_key
                      }), isEditor && /*#__PURE__*/jsx_runtime_.jsx("input", {
                        type: "text",
                        value: label_key,
                        onChange: e => dispatch(updateKey({
                          index: index,
                          content: e.target.value
                        }))
                      }), isEditor && /*#__PURE__*/jsx_runtime_.jsx(MyEditor/* default */.Z, {
                        content: label_value,
                        onChange: content => dispatch(updateLabel({
                          index: index,
                          content: content
                        }))
                      }), isEditor && /*#__PURE__*/jsx_runtime_.jsx("label", {
                        htmlFor: "title",
                        children: "validate"
                      }), isClips.status && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "column"
                        },
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          style: {
                            width: '100%',
                            minHeight: '450px',
                            display: 'flex'
                          },
                          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                            style: {
                              width: "100%",
                              backgroundColor: snapshot.draggingOver ? "lightred" : "green"
                            },
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              style: CreateProductModal_objectSpread({
                                userSelect: "none",
                                padding: 16,
                                margin: "0 0 8px 0",
                                backgroundColor: snapshot.isDragging ? "red" : "pink",
                                color: "white",
                                width: "100%"
                              }, provided.draggableProps.style),
                              children: [isClips.clips[0] && /*#__PURE__*/jsx_runtime_.jsx("img", {
                                width: "100%",
                                className: "imgPreview",
                                id: "imgPreview",
                                src: isClips.clips[0].src,
                                alt: ""
                              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: () => dispatch(deleteClip(index)),
                                children: "delete img"
                              })]
                            })
                          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Droppable, {
                            droppableId: "clips",
                            type: `clips`,
                            children: (provided, snapshot) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", CreateProductModal_objectSpread(CreateProductModal_objectSpread({
                              style: {
                                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                                padding: 4,
                                width: "500px"
                              }
                            }, provided.droppableProps), {}, {
                              ref: provided.innerRef,
                              children: [isClips.clips.map(({
                                id,
                                src
                              }, index) => {
                                return /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Draggable, {
                                  draggableId: id.toString(),
                                  index: index,
                                  children: (provided, snapshot) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", CreateProductModal_objectSpread(CreateProductModal_objectSpread({
                                    ref: provided.innerRef
                                  }, provided.draggableProps), {}, {
                                    style: CreateProductModal_objectSpread({
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                                      color: "white"
                                    }, provided.draggableProps.style),
                                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                                      className: "imgPreview",
                                      id: "imgPreview",
                                      src: src,
                                      width: "auto",
                                      height: "100px",
                                      alt: ""
                                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", CreateProductModal_objectSpread(CreateProductModal_objectSpread({
                                      style: {
                                        marginRight: "10px",
                                        color: "black"
                                      }
                                    }, provided.dragHandleProps), {}, {
                                      children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        icon: free_solid_svg_icons_.faRulerVertical
                                      }), "block"]
                                    })), id, /*#__PURE__*/jsx_runtime_.jsx("button", {
                                      type: "button",
                                      onClick: () => dispatch(deleteClip({
                                        index: index
                                      })),
                                      children: "delete img"
                                    })]
                                  }))
                                }, id);
                              }), provided.placeholder]
                            }))
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                            onChangeCapture: e => dispatch(addFile(e.target.files[0])),
                            value: "",
                            type: "file",
                            placeholder: "add Image"
                          })
                        })]
                      })]
                    })
                  }), id)
                }, id);
              } else {
                return /*#__PURE__*/jsx_runtime_.jsx("div", {});
              }
            }), provided.placeholder]
          }), "77")
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        onClick: addNewBlock,
        disabled: sectionsProduct.length > 7,
        children: "add new block"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "Post"
      })]
    })
  });
}

/* harmony default export */ const Modals_CreateProductModal = (CreateProductModal);
;// CONCATENATED MODULE: ./components/Modals/CreateDiscussionModal.tsx



function CreateDiscussionModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CreateDiscussionModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CreateDiscussionModal_ownKeys(Object(source), true).forEach(function (key) { CreateDiscussionModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CreateDiscussionModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CreateDiscussionModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function CreateDiscussionModal({}) {
  const {
    0: questionValue,
    1: setQuestionValue
  } = (0,external_react_.useState)({
    title: "",
    content: ""
  });
  const {
    0: tags,
    1: settags
  } = (0,external_react_.useState)([]);
  const {
    0: category,
    1: setCategory
  } = (0,external_react_.useState)("1");
  const dispatch = (0,hooks/* useAppDispatch */.T)();

  const questionChange = e => {
    setQuestionValue(CreateDiscussionModal_objectSpread(CreateDiscussionModal_objectSpread({}, questionValue), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const createTag = event => {
    if (event.code === "Space") {
      settags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const sendCreateQuestionModal = async e => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("category_id", category);
      formData.append("title", questionValue.title);
      formData.append("content", questionValue.content);
      formData.append("tags", JSON.stringify(tags));
      const resp = await BaseInstance/* BASE_API_INSTANCE.post */.D.post("/forum/create", formData);
      (0,AutoSuccessToast/* autoSuccessToaster */.l)(resp.data.message);
    } catch (error) {
      (0,AutoErrorToaster/* autoErrorToaster */.K)(error.response.data);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(CreateQuestionModal_style/* QuestionCreateModal */.Qr, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* QuestionCreateForm */.z7, {
      onSubmit: sendCreateQuestionModal,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'flex-end',
          marginTop: "0px",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('discussionCreate')),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer"
          },
          children: "X"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "title",
          children: "Dicussion Title"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          onChange: questionChange,
          value: questionValue.title,
          type: "text",
          name: "title"
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "title",
          children: "validate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "Dicussion Content"
        }), /*#__PURE__*/jsx_runtime_.jsx(MyEditor/* default */.Z, {
          content: questionValue,
          onChange: code => setQuestionValue(code)
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "validate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "Category"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          onChange: e => setCategory(e.target.value),
          name: "category",
          id: "",
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            children: "Test"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "2",
            children: "Test2"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "validate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "title",
          children: "Tags"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "tags d-f ",
          children: [tags.map((tag, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: tag
          }, index)), /*#__PURE__*/jsx_runtime_.jsx("input", {
            onKeyDown: createTag,
            type: "text",
            name: "tags"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "Post"
      })]
    })
  });
}

/* harmony default export */ const Modals_CreateDiscussionModal = (CreateDiscussionModal);
;// CONCATENATED MODULE: ./components/Modals/CreateIterationModal.tsx



function CreateIterationModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CreateIterationModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CreateIterationModal_ownKeys(Object(source), true).forEach(function (key) { CreateIterationModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CreateIterationModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CreateIterationModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function CreateIterationModal({}) {
  const {
    0: questionValue,
    1: setQuestionValue
  } = (0,external_react_.useState)({
    title: "",
    content: ""
  });
  const {
    0: tags,
    1: settags
  } = (0,external_react_.useState)([]);
  const {
    0: category,
    1: setCategory
  } = (0,external_react_.useState)("1");
  const dispatch = (0,hooks/* useAppDispatch */.T)();

  const questionChange = e => {
    setQuestionValue(CreateIterationModal_objectSpread(CreateIterationModal_objectSpread({}, questionValue), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const createTag = event => {
    if (event.code === "Space") {
      settags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const sendCreateQuestionModal = async e => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("category_id", category);
      formData.append("title", questionValue.title);
      formData.append("content", questionValue.content);
      formData.append("tags", JSON.stringify(tags));
      const resp = await BaseInstance/* BASE_API_INSTANCE.post */.D.post("/forum/create", formData);
      (0,AutoSuccessToast/* autoSuccessToaster */.l)(resp.data.message);
    } catch (error) {
      (0,AutoErrorToaster/* autoErrorToaster */.K)(error.response.data);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(CreateQuestionModal_style/* QuestionCreateModal */.Qr, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* QuestionCreateForm */.z7, {
      onSubmit: sendCreateQuestionModal,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          alignItems: 'flex-end',
          marginTop: "0px",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)('iterationCreate')),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer"
          },
          children: "X"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "title",
          children: "iteration Title"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          onChange: questionChange,
          value: questionValue.title,
          type: "text",
          name: "title"
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "title",
          children: "validate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateQuestionModal_style/* LabelCont */.K3, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "iteration Content"
        }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {}), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "content",
          children: "validate"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "Post"
      })]
    })
  });
}

/* harmony default export */ const Modals_CreateIterationModal = (CreateIterationModal);
;// CONCATENATED MODULE: ./components/Modals/Modals.tsx
















function Modals({}) {
  const allModals = (0,hooks/* useAppSelector */.C)(UserSlice/* user_modals */.PQ);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [allModals.login && /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalCont, {
      children: [" ", /*#__PURE__*/jsx_runtime_.jsx(Modals_LoginModal, {})]
    }), allModals.register && /*#__PURE__*/jsx_runtime_.jsx(ModalCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Modals_RegisterModal, {})
    }), allModals.forgetPassword && /*#__PURE__*/jsx_runtime_.jsx(ModalCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Modals_ForgetPasswordModal, {})
    }), allModals.isEmailSend && /*#__PURE__*/jsx_runtime_.jsx(ModalCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Modals_IsEmailSendModal, {})
    }), allModals.questionCreate && /*#__PURE__*/jsx_runtime_.jsx(ModalCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Modals_CreateQuestionModal, {})
    }), allModals.productCreate && /*#__PURE__*/jsx_runtime_.jsx(ModalCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Modals_CreateProductModal, {})
    }), allModals.discussionCreate && /*#__PURE__*/jsx_runtime_.jsx(ModalCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Modals_CreateDiscussionModal, {})
    }), allModals.iterationCreate && /*#__PURE__*/jsx_runtime_.jsx(ModalCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Modals_CreateIterationModal, {})
    })]
  });
}

/* harmony default export */ const Modals_Modals = (Modals);
;// CONCATENATED MODULE: ./styles/components/styled-elements/Navbar.style.ts

// color = (isLogged) ? "red" : "gray"
const Nav = external_styled_components_default().nav.withConfig({
  displayName: "Navbarstyle__Nav",
  componentId: "sc-1qobt64-0"
})(["display:flex;justify-content:space-between;align-items:center;padding-left:25px;padding-right:20px;padding-top:7px;padding-bottom:10px;border-bottom:1px solid ", ";background-color:", ";margin:0px;position:sticky;top:0px;height:60px;z-index:999;"], ({
  theme
}) => theme.navbar.navBorder, ({
  theme
}) => theme.backgroundMain);
const Light = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__Light",
  componentId: "sc-1qobt64-1"
})(["width:7px;height:7px;position:absolute;background-color:#FFFFFF;border-radius:50%;z-index:2;left:24.4px;top:9.4px;opacity:0.1;transition:0.2s;filter:blur(1px);"]);
const LightShadow = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__LightShadow",
  componentId: "sc-1qobt64-2"
})(["width:15px;height:15px;position:absolute;background-color:#FFFFFF;border-radius:50%;transition:0.2s;stroke-width:0;opacity:0;z-index:2;fill:#FFFFFF;stroke:#8c8c8c;stroke-width:0;filter:blur(5px);left:19.4px;top:5.5px;"]);
const LightShadow2 = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__LightShadow2",
  componentId: "sc-1qobt64-3"
})([""]);
const Logo = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__Logo",
  componentId: "sc-1qobt64-4"
})(["display:flex;justify-content:center;align-items:center;position:relative;&:hover ", "{opacity:0.38;}&:hover ", "{opacity:0.169;}&:hover ", "{opacity:1;}img{width:80px;z-index:1;height:48px;}"], LightShadow, LightShadow2, Light);
const LogoText = external_styled_components_default().p.withConfig({
  displayName: "Navbarstyle__LogoText",
  componentId: "sc-1qobt64-5"
})(["font-size:45px;color:", ";"], ({
  theme
}) => theme.navbar.navLogoText);
const Line = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__Line",
  componentId: "sc-1qobt64-6"
})(["width:10px;opacity:0;height:2px;border-radius:100px;position:absolute;bottom:0px;transition:0.3s;background-color:", ";"], ({
  theme
}) => theme.navbar.navLinksHovered);
const LinkStyle = external_styled_components_default().a.withConfig({
  displayName: "Navbarstyle__LinkStyle",
  componentId: "sc-1qobt64-7"
})(["display:flex;justify-content:center;align-items:center;letter-spacing:1px;font-weight:600;cursor:pointer;color:", ";transition:0.3s;"], ({
  theme
}) => theme.navbar.navLinks);
const LiStyle = external_styled_components_default().li.withConfig({
  displayName: "Navbarstyle__LiStyle",
  componentId: "sc-1qobt64-8"
})(["display:flex;justify-content:center;align-items:center;height:50px;padding-bottom:3px;column-gap:40px;font-size:18px;width:195px;letter-spacing:1px;font-weight:600;position:relative;div{opacity:", ";width:", ";}a{font-family:s;color:", ";}&:hover{cursor:pointer;div{opacity:1 !important;width:120px;transform:scale(1) !important;}a{color:", " !important;}}"], props => props.focus ? '1' : '0', props => props.focus ? '120px' : '0px', props => props.focus ? props.theme.navbar.navLinksHovered : props.theme.navbar.navLinks, ({
  theme
}) => theme.navbar.navLinksHovered);
const LinksStyle = external_styled_components_default().ul.withConfig({
  displayName: "Navbarstyle__LinksStyle",
  componentId: "sc-1qobt64-9"
})(["display:flex;align-items:flex-end;height:60px;width:680px;&:hover ", "{opacity:0.2;transform:scale(0.8);", "}&:hover{a{color:", "}}"], Line, ({
  theme
}) => theme.navbar.navLinks, ({
  theme
}) => theme.navbar.navLinks);
const ImageStyle1 = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__ImageStyle1",
  componentId: "sc-1qobt64-10"
})(["display:flex;justify-content:center;align-items:center;"]);
const ImageStyle2 = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__ImageStyle2",
  componentId: "sc-1qobt64-11"
})(["display:flex;position:absolute;opacity:0;transition:0.15s;cursor:pointer;"]);
const PersonName = external_styled_components_default().label.withConfig({
  displayName: "Navbarstyle__PersonName",
  componentId: "sc-1qobt64-12"
})(["display:flex;justify-content:center;align-items:center;margin-right:15px;color:", ";cursor:pointer;margin-top:1px;"], ({
  theme
}) => theme.navbar.navLinks);
const LoginButton = external_styled_components_default().button.withConfig({
  displayName: "Navbarstyle__LoginButton",
  componentId: "sc-1qobt64-13"
})(["display:flex;justify-content:center;align-items:center;cursor:pointer;width:100px;height:60px;border:none;background-color:transparent;filter:", ";img{width:50px;height:30px;}"], ({
  theme
}) => `invert(${theme.navbar.navLogin})`);
const RegisterButton = external_styled_components_default().button.withConfig({
  displayName: "Navbarstyle__RegisterButton",
  componentId: "sc-1qobt64-14"
})(["display:flex;justify-content:center;align-items:center;cursor:pointer;width:100px;height:60px;border:none;background-color:transparent;filter:", ";img{width:50px;height:40px;}"], ({
  theme
}) => `invert(${theme.navbar.navRegister})`);
const Enterance = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__Enterance",
  componentId: "sc-1qobt64-15"
})(["display:flex;justify-content:center;align-items:center;"]);
const Logged = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__Logged",
  componentId: "sc-1qobt64-16"
})(["display:flex;align-items:center;position:relative;&:hover ", ",&:hover ", "{opacity:1;color:", ";}"], ImageStyle2, PersonName, ({
  theme
}) => theme.navbar.navLinksHovered);
const Logout = external_styled_components_default().button.withConfig({
  displayName: "Navbarstyle__Logout",
  componentId: "sc-1qobt64-17"
})(["display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;cursor:pointer;transition:0.2s;font-size:16px;color:white;&:hover{color:", ";}&:focus{outline:none;}"], ({
  theme
}) => theme.navbar.navLinksHovered);
const Guest = external_styled_components_default().div.withConfig({
  displayName: "Navbarstyle__Guest",
  componentId: "sc-1qobt64-18"
})(["display:flex;justify-content:center;align-items:center;"]);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/static/img/light-person.png
/* harmony default export */ const light_person = ({"src":"/_next/static/image/public/static/img/light-person.eff4e2f709a5bf2a791b0809da1c54c8.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAVElEQVR42mNABmfPn1cCYQZ08P//f2YQ/enz5yMgDBdDB1evX18OwiiC9+4/YAbR12/e9Pv06dN/EL5+44YfRO4+wpSKxka+I8ePZ4FwWX09H0wcACi2M76A27sZAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/static/img/login.svg
/* harmony default export */ const login = ({"src":"/_next/static/image/public/static/img/login.7092d51a6924fb09457094c885096022.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./public/static/img/register-icon.svg
/* harmony default export */ const register_icon = ({"src":"/_next/static/image/public/static/img/register-icon.4925cbb4fe1eeb58c91896d08fc4adce.svg","height":200,"width":200});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/NavLink.tsx
var NavLink = __webpack_require__(7456);
// EXTERNAL MODULE: ./logic/regex/NavbarRegex.ts
var NavbarRegex = __webpack_require__(1555);
;// CONCATENATED MODULE: ./components/Navbar.tsx
















function Navbar({}) {
  const router = (0,router_.useRouter)();
  const {
    pathname
  } = router;
  const dispatch = (0,hooks/* useAppDispatch */.T)();
  const userModals = (0,hooks/* useAppSelector */.C)(UserSlice/* user_modals */.PQ);
  const userData = (0,hooks/* useAppSelector */.C)(UserSlice/* user_data */.gu);
  const isLogged = (0,hooks/* useAppSelector */.C)(UserSlice/* is_Logged */.iN);
  const isLoading = (0,hooks/* useAppSelector */.C)(UserSlice/* is_loading */.XV);
  const {
    0: navView,
    1: setnavView
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    loginChecker(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  const pathChecker = path => {
    if (pathname === "/forum") {
      return true;
    } else if (pathname === "/store") {
      return true;
    } else if (pathname === "/pedi") {
      return true;
    } else {
      return false;
    }
  };

  const exit = async () => {
    await dispatch((0,AuthThunk/* userLogout */.Kv)()); // window.location.reload() 
  };

  const loginChecker = () => {
    if (!isLogged) {
      const view = /*#__PURE__*/(0,jsx_runtime_.jsxs)(Guest, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LoginButton, {
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)("login")),
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: login,
            alt: "login"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(RegisterButton, {
          onClick: () => dispatch((0,UserSlice/* changeModalAction */.nE)("register")),
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: register_icon,
            alt: "register"
          })
        })]
      });

      setnavView(view);
      return "";
    } else if (userData !== null) {
      const view = /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Logged, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ImageStyle1, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              width: "70px",
              height: "40px",
              src: light_person,
              alt: "person icon"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(PersonName, {
            children: userData.name
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Logout, {
          onClick: exit,
          children: "exit"
        })]
      });

      setnavView(view);
      return "";
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Nav, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
      href: "/",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Logo, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/static/img/main-logo.svg",
          alt: "Abyss logo",
          width: 100,
          height: 49
        }), /*#__PURE__*/jsx_runtime_.jsx(Light, {}), /*#__PURE__*/jsx_runtime_.jsx(LightShadow, {}), /*#__PURE__*/jsx_runtime_.jsx(LightShadow2, {}), /*#__PURE__*/jsx_runtime_.jsx(LogoText, {
          children: "abyss"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinksStyle, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
        href: "/store",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LiStyle, {
          focus: pathname === "/store" ? true : false,
          children: [/*#__PURE__*/jsx_runtime_.jsx(LinkStyle, {
            children: "Store"
          }), /*#__PURE__*/jsx_runtime_.jsx(Line, {})]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
        href: "/forum?selectedTab=Info&selectedTag=Newes",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LiStyle, {
          focus: NavbarRegex/* forumWordRegex.test */.h.test(pathname) ? true : false,
          children: [/*#__PURE__*/jsx_runtime_.jsx(LinkStyle, {
            children: "Community"
          }), /*#__PURE__*/jsx_runtime_.jsx(Line, {})]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
        href: "/pedi",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LiStyle, {
          focus: pathname === "/pedi" ? true : false,
          children: [/*#__PURE__*/jsx_runtime_.jsx(LinkStyle, {
            children: "Pedia"
          }), /*#__PURE__*/jsx_runtime_.jsx(Line, {})]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Enterance, {
      children: navView
    })]
  });
}

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: external "react-use-scroll-direction"
const external_react_use_scroll_direction_namespaceObject = require("react-use-scroll-direction");
;// CONCATENATED MODULE: ./styles/components/styled-elements/SearchBox.style.ts

const SearchBoxContainer = external_styled_components_default().div.withConfig({
  displayName: "SearchBoxstyle__SearchBoxContainer",
  componentId: "sc-ns93u1-0"
})(["display:flex;column-gap:20px;padding-top:", ";height:", ";transition:0.01s;margin-left:auto;margin-right:auto;width:100%;z-index:2;pointer-events:none;transition:0.4s;"], props => props.path === "/" ? "20vh" : "0vh", props => props.path === "/" ? "70vh" : "auto");
const SearchBoxThunkAndCont = external_styled_components_default().div.withConfig({
  displayName: "SearchBoxstyle__SearchBoxThunkAndCont",
  componentId: "sc-ns93u1-1"
})(["display:flex;flex-direction:column;justify-content:space-between;transform:", ";width:808px;position:sticky;transition:0.5s;z-index:100;"], ({
  direction
}) => direction === "up" ? "translateY(0px)" : "translateY(-51px)");
const SearchBoxThunk = external_styled_components_default().button.withConfig({
  displayName: "SearchBoxstyle__SearchBoxThunk",
  componentId: "sc-ns93u1-2"
})(["display:flex;flex-direction:column;color:black;pointer-events:all;border:none;background-color:#00090e;color:gray;width:200px;text-align:center;display:flex;align-items:center;align-self:center;justify-content:center;height:16px;border-radius:0px 0px 5px 5px;transform:", ";pointer-events:", ";transition:0.2s;"], ({
  direction
}) => direction === "down" ? "translateY(0px)" : "translateY(-20px)", ({
  direction
}) => direction === "down" ? "all" : "none");
const SearchBoxStyle = external_styled_components_default().div.withConfig({
  displayName: "SearchBoxstyle__SearchBoxStyle",
  componentId: "sc-ns93u1-3"
})(["display:flex;pointer-events:all;background-color:black;width:808px;transform:translateX(0px);height:", ";color:white;border-radius:5px;border-radius:30px 30px 30px 30px;border:none;box-shadow:0px 1px 1px rgba(99,105,108,0.61),inset 0px 0px 0px rgba(99,105,108,0.61);transition:0.4s;background-color:white;align-items:flex-start;justify-content:space-between;box-sizing:border-box;z-index:9999;transform-origin:top;transition:0.5s;"], props => props.path === "/" ? "65px" : "50px");
const SearchBoxPage = external_styled_components_default().div.withConfig({
  displayName: "SearchBoxstyle__SearchBoxPage",
  componentId: "sc-ns93u1-4"
})(["width:100px;height:100%;display:flex;justify-content:center;align-items:center;padding-left:10px;background-color:white;color:#474D51;font-family:r;border-radius:30px 0px 0px 30px;flex:0 0 100px;"]);
const SearchInput = external_styled_components_default().input.withConfig({
  displayName: "SearchBoxstyle__SearchInput",
  componentId: "sc-ns93u1-5"
})(["border-radius:", ";height:100%;padding-left:40px;border:none;color:black;width:100%;z-index:3;&:focus{outline:none;}&::placeholder{color:#d9dadb;}"], props => props.path === "/" ? "0px 30px 30px 0px" : "inherit");
const SearchCont = external_styled_components_default().div.withConfig({
  displayName: "SearchBoxstyle__SearchCont",
  componentId: "sc-ns93u1-6"
})(["width:100%;justify-self:stretch;height:100%;display:flex;align-items:center;border-left:1px solid #E5E6E6;position:relative;svg{z-index:4;color:white;position:absolute;margin-left:10px;color:#d9dadb;}input{}"]);
const SearchNav = external_styled_components_default().div.withConfig({
  displayName: "SearchBoxstyle__SearchNav",
  componentId: "sc-ns93u1-7"
})(["position:absolute;display:flex;flex-direction:column;border-left:1px solid #E5E6E6;border-right:1px solid #E5E6E6;background-color:white;z-index:1;transition:0.5s;border:1px solid gray;border-top:1px solid lightgray;width:", ";align-self:flex-end;margin:0px;padding:0px;border:0px;"], props => props.path === "/" ? "95%" : "100%");
const SearchNavQuery = external_styled_components_default().button.withConfig({
  displayName: "SearchBoxstyle__SearchNavQuery",
  componentId: "sc-ns93u1-8"
})(["display:flex;padding:4px 10px;align-items:center;background-color:white;border:none;svg{z-index:4;color:white;position:absolute;margin-left:0px;color:#d9dadb;}span{height:100%;padding-left:30px;border:none;color:lightgray;}"]);
const AddQuesitionCont = external_styled_components_default().button.withConfig({
  displayName: "SearchBoxstyle__AddQuesitionCont",
  componentId: "sc-ns93u1-9"
})(["width:100px;flex:0 0 100px;height:100%;display:flex;justify-content:center;align-items:center;background-color:#00578b;color:white;border:none;font-size:15px;font-family:s;border-radius:0px 30px 30px 0px;"]);
;// CONCATENATED MODULE: ./components/SearchBox.tsx













function SearchBox({}) {
  const router = (0,router_.useRouter)();
  const {
    0: pagePath,
    1: setpagePath
  } = (0,external_react_.useState)("");
  const searchBoxRef = (0,external_react_.useRef)(null);
  const searchContRef = (0,external_react_.useRef)(null);
  const searchInputRef = (0,external_react_.useRef)(null);
  const searchNavRef = (0,external_react_.useRef)(null);
  const dispatch = (0,hooks/* useAppDispatch */.T)();
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,external_react_.useState)("");

  const changeSearchValue = e => {
    setSearchValue(e);
    searchNavRef.current.style.top = router.asPath === "/" ? `65px` : "51px";

    if (router.pathname === '/') {
      searchNavRef.current.style.top = `66px`;
    }
  };

  (0,external_react_.useEffect)(() => {
    if (router.isReady) {
      setpagePath(pagePathDetector(router.asPath));

      if (router.asPath !== '/') {
        searchBoxRef.current.setAttribute("style", "position:fixed;");
        searchInputRef.current.focus();
      }
    }
  }, [router]);
  const {
    0: direction,
    1: setDirection
  } = (0,external_react_.useState)('up');
  const {
    isScrollingUp,
    isScrollingDown
  } = (0,external_react_use_scroll_direction_namespaceObject.useScrollDirection)();
  (0,external_react_.useEffect)(() => {
    if (router.asPath !== '/') {
      isScrollingDown && setDirection('down');
    }
  }, [isScrollingDown, router.asPath]);

  const searchSizechange = event => {
    if (router.pathname === '/') {
      if (event === 'focus') {
        searchContRef.current.style.paddingTop = `1vh`;
        searchNavRef.current.style.top = `65px`;
        return 0;
      }

      if (event === 'blur') {
        searchContRef.current.style.paddingTop = `20vh`;
        searchNavRef.current.style.top = `0px`;
      }
    }

    if (event === 'blur') {
      searchNavRef.current.style.top = `0px`;
      return 0;
    }
  };

  const pagePathDetector = pathname => {
    if (pathname === "/") {
      return "Home";
    } else if (NavbarRegex/* forumWordRegex.test */.h.test(pathname)) {
      return "Library";
    } else if (NavbarRegex/* storeWordRegex.test */.q.test(pathname)) {
      return "Store";
    } else {
      return "";
    }
  };

  const SearchContDesign = {
    paddingTop: pagePath === "Home" ? "20vh" : "0vh"
  };

  const handleAddClick = () => {
    console.log(router.asPath);

    if (NavbarRegex/* forumWordRegex.test */.h.test(router.asPath)) {
      dispatch((0,UserSlice/* changeModalAction */.nE)("questionCreate"));
    } else if (NavbarRegex/* storeWordRegex.test */.q.test(router.asPath)) {
      dispatch((0,UserSlice/* changeModalAction */.nE)("productCreate"));
    } else {}
  };

  return /*#__PURE__*/jsx_runtime_.jsx(SearchBoxContainer, {
    ref: searchContRef,
    path: router.asPath,
    style: SearchContDesign,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: "400px"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: "808px"
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchBoxThunkAndCont, {
          ref: searchBoxRef,
          direction: direction,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchBoxStyle, {
            path: router.asPath,
            direction: direction,
            children: [/*#__PURE__*/jsx_runtime_.jsx(SearchBoxPage, {
              children: pagePath
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchCont, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faSearch
              }), /*#__PURE__*/jsx_runtime_.jsx(SearchInput, {
                value: searchValue,
                onChange: e => changeSearchValue(e.target.value),
                path: router.asPath,
                placeholder: "Search...",
                ref: searchInputRef,
                onFocus: () => searchSizechange('focus'),
                onBlur: () => searchSizechange('blur'),
                type: "text"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchNav, {
                path: router.asPath,
                ref: searchNavRef,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchNavQuery, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                    icon: free_solid_svg_icons_.faSearch
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "react"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchNavQuery, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                    icon: free_solid_svg_icons_.faSearch
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "react"
                  })]
                })]
              })]
            }), pagePath !== "Home" && /*#__PURE__*/jsx_runtime_.jsx(AddQuesitionCont, {
              onClick: handleAddClick,
              children: "ADD"
            })]
          }), pagePath !== "Home" && /*#__PURE__*/jsx_runtime_.jsx(SearchBoxThunk, {
            onMouseMove: () => setDirection("up"),
            direction: direction,
            children: " \u2022  \u2022 \u2022"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: "400px"
        }
      })]
    })
  });
}

/* harmony default export */ const components_SearchBox = (SearchBox);
// EXTERNAL MODULE: ./app/feature/ChatBoxSlice.ts + 1 modules
var ChatBoxSlice = __webpack_require__(8760);
;// CONCATENATED MODULE: ./components/Layout.tsx




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const Layout = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const dispatch = (0,hooks/* useAppDispatch */.T)();
  const userStatus = (0,hooks/* useAppSelector */.C)(UserSlice/* user_status */.RA);
  const pageOverflowY = (0,hooks/* useAppSelector */.C)(AppSlice/* page_overflowy */.q1);
  const userData = (0,hooks/* useAppSelector */.C)(UserSlice/* user_data */.gu);
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem('token') !== null) {
      dispatch((0,AuthThunk/* userCheck */.F1)());
    } else {
      dispatch((0,UserSlice/* user_status_not_logged */.Rp)("not-logged"));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  const openUserChat = () => {
    dispatch((0,ChatBoxSlice/* openChat */.WB)(""));
  };

  if (userStatus === "logged" || userStatus === "not-logged") {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          width: "100%",
          minHeight: "100vh",
          backgroundImage: "url(/public/static/img/default-vector-background.png)"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(components_SearchBox, {}), children, userData !== null && /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          style: {
            position: "fixed",
            right: "0px",
            bottom: "0px"
          },
          onClick: openUserChat,
          children: "Chat"
        }), /*#__PURE__*/jsx_runtime_.jsx(Modals_Modals, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
      }), pageOverflowY === "hidden" && /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: "fixed",
          width: "100%",
          height: "100vh",
          right: "0px",
          top: "0px",
          zIndex: 999,
          backgroundColor: "rgba(0,0,0,0.5)"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            width: "100%",
            height: "59.4px",
            backgroundColor: "#00090e"
          }
        })
      }), pageOverflowY === "hidden" && /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: "10px",
          height: "100vh",
          background: "white",
          right: "0px",
          zIndex: 9999999,
          backgroundColor: "transparent"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            width: "100%",
            height: "59.4px",
            backgroundColor: "#00090e"
          }
        })
      })]
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};

/* harmony default export */ const components_Layout = (Layout);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./app/feature/PageTabsSlice.ts
var PageTabsSlice = __webpack_require__(273);
// EXTERNAL MODULE: ./app/feature/QuestionSlice.ts
var QuestionSlice = __webpack_require__(8569);
// EXTERNAL MODULE: ./app/feature/CommentsSlice.ts + 1 modules
var CommentsSlice = __webpack_require__(5339);
;// CONCATENATED MODULE: ./app/store/states/SearchBoxState.ts
const SEARCHBOX_STATE = {
  isFocused: false,
  searchBoxData: null
};
;// CONCATENATED MODULE: ./app/feature/SearchBoxSlice.ts


const SearchBoxSlice = (0,toolkit_.createSlice)({
  name: 'app-slice',
  initialState: SEARCHBOX_STATE,
  reducers: {// changeTopAnswersStatus(state, action) {
    //     state.answersData.topAnswers.status = action.payload.status
    // },
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
// export const {changeDownAnswersStatus} = QuestionSlice.actions;
// data

const searchbox_data = state => state.searchBoxReducer.searchBoxData;
/* harmony default export */ const feature_SearchBoxSlice = (SearchBoxSlice.reducer);
// EXTERNAL MODULE: ./app/feature/PageFiltersSlice.ts + 1 modules
var PageFiltersSlice = __webpack_require__(183);
;// CONCATENATED MODULE: ./app/store/store.ts










const reducer = {
  appReducer: AppSlice/* default */.ZP,
  userReducer: UserSlice/* default */.ZP,
  questionReducer: QuestionSlice/* default */.ZP,
  commentsReducer: CommentsSlice/* default */.ZP,
  tabsReducer: PageTabsSlice/* default */.ZP,
  chatBoxReducer: ChatBoxSlice/* default */.ZP,
  searchBoxReducer: feature_SearchBoxSlice,
  pageFiltersReducer: PageFiltersSlice/* default */.ZP,
  createProductReducer: feature_CreateProductSlice
};
const store = (0,toolkit_.configureStore)({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
}); // Infer the `RootState` and `AppDispatch` types from the store itself
// EXTERNAL MODULE: ./styles/global/styled-utils/Global.style.ts
var Global_style = __webpack_require__(6373);
;// CONCATENATED MODULE: ./styles/global/styled-utils/styling-elements/Theme.style.ts
const lightTheme = {
  body: '#F2F2F3',
  text: '#363537',
  toggleBorder: '#FFF',
  toggleTheme: "0px",
  toggleThemeColor: "#00090E",
  themeTogglerCont: "#FFFFFF",
  themeTogglerContBorder: "black",
  backgroundMain: "#00090e",
  navbar: {
    navBackground: "#FFFFFF",
    navLogoText: "#f2f2f3",
    navBorder: "#ADB9B9",
    navLinks: "#9ea1a3",
    navLinksHovered: "#f2f2f3",
    navPersonName: "#032728",
    navLogin: "0",
    navRegister: "0",
    navLogout: "#000000"
  },
  pageTabs: {
    contBG: "#ffffff",
    border: "gray",
    nonfocusedColor: "#63696c",
    focusedColor: "#00090e",
    hover: {
      border: "lightgray"
    }
  }
};
const darkTheme = {
  body: '#00090E',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  logoWord: "576769",
  toggleTheme: "31px",
  toggleThemeColor: "#00090E",
  themeTogglerCont: "#00090E",
  themeTogglerContBorder: "00090E",
  backgroundMain: "#00090e",
  navbar: {
    navBackground: "#00090E",
    navLogoText: "#4C5B5F",
    navBorder: "#49585C",
    navLinks: "#879B9D",
    navLinksHovered: "#D5FFFF",
    navPersonName: "#879B9D",
    navLogin: "1",
    navRegister: "1",
    navLogout: "#FFFFFF"
  },
  pageTabs: {
    contBG: "#11191e",
    border: "gray",
    hover: {
      border: "lightgray"
    }
  }
};
;// CONCATENATED MODULE: ./components/ThemeSwitcher.tsx





function ThemeSwitcher({
  setTheme,
  theme
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Global_style/* ThemeToggler */.LW, {
    onClick: () => setTheme(theme),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Global_style/* Relativer */.Ys, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Global_style/* TogglerButton */.zg, {}), /*#__PURE__*/jsx_runtime_.jsx(Global_style/* ToggleElement */.kN, {
        children: "\uD83C\uDF1C"
      }), /*#__PURE__*/jsx_runtime_.jsx(Global_style/* ToggleElement */.kN, {
        children: "\uD83C\uDF1E "
      })]
    })
  });
}

/* harmony default export */ const components_ThemeSwitcher = (ThemeSwitcher);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
;// CONCATENATED MODULE: ./pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps
}) {
  const {
    0: theme,
    1: settheme
  } = (0,external_react_.useState)("dark");
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem('theme') !== null) {
      let theme = "";

      if (localStorage.getItem('theme') === "light") {
        theme = "light";
      } else {
        theme = "dark";
      }

      settheme(theme);
    } else {
      settheme("light");
    } // console.log("%cDont try stupid things which you heard from uncle toms or etc!","font-size: 30px; color: red; -webkit-text-stroke:1px black; font-weight: bold;")

  }, []);

  const changeTheme = theme => {
    if (theme === "light") {
      settheme("dark");
      localStorage.setItem('theme', "dark");
    } else {
      settheme("light");
      localStorage.setItem('theme', "light");
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      display: "flex"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: store,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
        theme: theme === "light" ? lightTheme : darkTheme || localStorage.getItem('theme') !== null ? darkTheme : lightTheme,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_hot_toast_.Toaster, {}), /*#__PURE__*/jsx_runtime_.jsx(Global_style/* GlobalStyle */.ZL, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Layout, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_ThemeSwitcher, {
              theme: theme,
              setTheme: changeTheme
            }), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
          })]
        })
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 7664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qr": () => (/* binding */ QuestionCreateModal),
/* harmony export */   "z7": () => (/* binding */ QuestionCreateForm),
/* harmony export */   "K3": () => (/* binding */ LabelCont)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const QuestionCreateModal = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CreateQuestionModalstyle__QuestionCreateModal",
  componentId: "sc-bxhoie-0"
})(["display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;left:0;top:0;z-index:50;position:fixed;background-color:rgba(0,0,0,0.8);"]);
const QuestionCreateForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "CreateQuestionModalstyle__QuestionCreateForm",
  componentId: "sc-bxhoie-1"
})(["background-color:gray;display:flex;flex-direction:column;row-gap:10px;padding:20px;border-radius:10px;"]);
const LabelCont = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CreateQuestionModalstyle__LabelCont",
  componentId: "sc-bxhoie-2"
})(["display:flex;flex-direction:column;row-gap:10px;"]);

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6139:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6872:
/***/ ((module) => {

module.exports = require("highlight.js");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6533:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 6199:
/***/ ((module) => {

module.exports = require("react-quilljs");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,675,927,304,984], () => (__webpack_exec__(2914)));
module.exports = __webpack_exports__;

})();