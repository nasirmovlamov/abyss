"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{9795:function(e,i,n){n.d(i,{Z:function(){return j}});var t=n(5893),o=n(4387),l=n(6459),s=n(7294),r=n(6565),d=n(131),a=n(8760),c=n(6293),p=n(5896),x=n(9163),f=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatWindow",componentId:"sc-1o1l047-0"})(["width:300px;height:500px;display:flex;flex-direction:column;background-color:lightgray;position:sticky;top:100px;box-shadow:5px 10px #888888;"]),u=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatNav",componentId:"sc-1o1l047-1"})(["height:30px;display:flex;justify-content:space-between;align-items:center;width:100%;border:2px solid blue;background-color:green;padding:5px;"]),g=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatNavName",componentId:"sc-1o1l047-2"})(["text-align:center;display:flex;align-items:center;padding:0px;margin:0px;color:white;"]),h=x.ZP.button.withConfig({displayName:"ChatBoxstyle__CloseChatBox",componentId:"sc-1o1l047-3"})(["padding:0px;margin:0px;"]),m=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatMain",componentId:"sc-1o1l047-4"})(["width:100%;display:flex;"]),y=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatRooms",componentId:"sc-1o1l047-5"})(["width:120px;"]),w=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatMessagesTab",componentId:"sc-1o1l047-6"})(["width:200px;height:200px;display:flex;flex-direction:column;display:flex;"]),b=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatMessages",componentId:"sc-1o1l047-7"})(["width:200px;height:200px;overflow-y:scroll;display:flex;flex-direction:column;row-gap:5px;"]),C=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatMessagesFix",componentId:"sc-1o1l047-8"})(["flex:1 1 auto;"]),_=x.ZP.button.withConfig({displayName:"ChatBoxstyle__ChatRoom",componentId:"sc-1o1l047-9"})(["height:30px;background-color:green;color:white;border:none;border:1px solid white;box-sizing:border-box;padding-left:10px;padding-right:10px;white-space:nowrap;width:100px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;outline:none;"]),P=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatMessage",componentId:"sc-1o1l047-10"})(["width:auto;height:20px;background-color:green;border-radius:10px;padding:4px;height:30px;background-color:gray;color:white;align-self:",";background-color:",";"],(function(e){return e.isMe?"flex-end":"flex-start"}),(function(e){return e.isMe?"green":"light-green"})),v=x.ZP.div.withConfig({displayName:"ChatBoxstyle__ChatSendMessage",componentId:"sc-1o1l047-11"})(["display:flex;input{width:100%;}"]);function j(e){(0,l.Z)(e);var i=(0,d.YD)(),n=(0,o.Z)(i,2),x=n[0],j=n[1],I=(0,s.useRef)(null),F=(0,s.useRef)(null),Z=(0,c.C)(r.gu),N=(0,c.T)(),k=(0,c.C)(a.qH),z=(0,c.C)(a.Cp),Q=(0,s.useState)(""),B=Q[0],q=Q[1];(0,s.useEffect)((function(){0===Object.keys(k).length&&N((0,p.LL)())}),[]),(0,s.useEffect)((function(){z&&(console.log("scroll"),T())}),[z]),(0,s.useEffect)((function(){console.log(j),j&&null!==z&&k[z].messages.length>0&&(console.log("salam "+j),N((0,p.Fs)({roomId:k[z].id,lastMessageId:k[z].messages[0].id})))}),[j]);var S,T=function(){I.current.scrollIntoView({block:"nearest",inline:"start"})};return(0,t.jsxs)(f,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(g,{children:Z.name}),"  ",(0,t.jsx)(h,{onClick:function(){N((0,a.wt)(""))},children:"X"})]}),(0,t.jsxs)(m,{children:[(0,t.jsx)(y,{children:(S=k,Object.keys(S).map((function(e){return S[e]}))).map((function(e){return(0,t.jsx)(_,{onClick:function(){return i=e.id,N((0,a.LF)(i)),0===k[i].messages.length&&N((0,p.m$)(k[i].opponent_user.id)),void(null!==z&&z!==i&&T());var i},children:e.opponent_user.name},e.id)}))}),(0,t.jsx)(w,{children:null!==z&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b,{ref:F,children:[(0,t.jsx)("div",{ref:x,children:"loader"}),(0,t.jsx)(C,{}),k[z].messages.map((function(e){return(0,t.jsx)(P,{isMe:Z.id===e.user.id,children:e.content},e.id)})),(0,t.jsx)("div",{ref:I})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)("input",{value:B,onChange:function(e){return q(e.target.value)},type:"text",placeholder:"Type your message here..."}),(0,t.jsx)("button",{onClick:function(){return N((0,p.Tv)({roomId:z,content:B}))},children:"Send"})]})]})})]})]})}},8081:function(e,i,n){var t=n(5893),o=(n(7294),n(2483));i.Z=function(e){var i=e.children;return(0,t.jsx)(o.Bo,{children:i})}},7991:function(e,i,n){n.d(i,{Z:function(){return k}});var t=n(5893),o=n(7294),l=n(8760),s=n(6293),r=n(2483),d=n(9795),a=n(6459),c=n(9398),p=n(7625),x=n(9163),f=x.ZP.div.withConfig({displayName:"PageFiltersstyle__FilterContStyle",componentId:"sc-73d4q0-0"})(["display:flex;flex-direction:column;width:195px;height:403px;box-sizing:border-box;z-index:2;overflow:hidden;position:sticky;top:90px;"]),u=x.ZP.div.withConfig({displayName:"PageFiltersstyle__FilterCont",componentId:"sc-73d4q0-1"})(["display:flex;flex-direction:column;background-color:white;padding:11px 16px;border-radius:20px;box-shadow:0px 1px 1px rgba(99,105,108,0.61),inset 0px 0px 0px rgba(99,105,108,0.61);width:100%;height:100%;row-gap:10px;transform:",";transform:",";transition:0.5s;"],(function(e){return e.stayInFocus?"translateX(0px) !important":"translateX(200px)"}),(function(e){return e.isFocused?"translateX(0px)":"translateX(200px)"})),g=x.ZP.button.withConfig({displayName:"PageFiltersstyle__PinButton",componentId:"sc-73d4q0-2"})(["position:absolute;top:0px;right:0px;margin-right:10px;margin-top:10px;color:",";color:",";padding:3px;background-color:transparent;border:1px solid gray;border-radius:5px;"],(function(e){return e.isFocused?"black":"gray"}),(function(e){return e.stayInFocus?"black !important":"gray"})),h=x.ZP.div.withConfig({displayName:"PageFiltersstyle__SubjectCont",componentId:"sc-73d4q0-3"})(["display:flex;flex-direction:column;width:100%;row-gap:5px;display:flex;flex-direction:column;"]),m=x.ZP.h5.withConfig({displayName:"PageFiltersstyle__SubjectTitle",componentId:"sc-73d4q0-4"})(["display:flex;flex-direction:column;width:100%;row-gap:10px;font-size:18px;display:flex;flex-direction:column;color:#474D51;"]),y=x.ZP.div.withConfig({displayName:"PageFiltersstyle__SubjectContent",componentId:"sc-73d4q0-5"})(["display:flex;flex-direction:column;width:100%;display:flex;flex-direction:column;color:#474D51;"]),w=x.ZP.button.withConfig({displayName:"PageFiltersstyle__Subjects",componentId:"sc-73d4q0-6"})(["display:flex;height:21px;border:none;background-color:transparent;flex-direction:column;width:100%;row-gap:5px;font-size:15px;display:flex;flex-direction:column;"]),b=x.ZP.div.withConfig({displayName:"PageFiltersstyle__FilterTagCont",componentId:"sc-73d4q0-7"})(["display:flex;flex-direction:column;width:100%;row-gap:10px;display:flex;flex-direction:column;"]),C=x.ZP.h5.withConfig({displayName:"PageFiltersstyle__FilterTagTitle",componentId:"sc-73d4q0-8"})(["display:flex;flex-direction:column;width:100%;row-gap:10px;font-size:18px;display:flex;flex-direction:column;color:#474D51;"]),_=x.ZP.div.withConfig({displayName:"PageFiltersstyle__FilterTagContent",componentId:"sc-73d4q0-9"})(["display:flex;flex-direction:column;width:100%;font-size:15px;display:flex;flex-direction:column;color:#474D51;"]),P=x.ZP.button.withConfig({displayName:"PageFiltersstyle__FilterTags",componentId:"sc-73d4q0-10"})(["display:flex;flex-direction:column;width:100%;row-gap:5px;font-size:15px;display:flex;height:22px;border:none;background-color:transparent;flex-direction:column;"]),v=x.ZP.div.withConfig({displayName:"PageFiltersstyle__FilterLanguageCont",componentId:"sc-73d4q0-11"})(["display:flex;flex-direction:column;width:100%;row-gap:10px;display:flex;flex-direction:column;"]),j=x.ZP.h5.withConfig({displayName:"PageFiltersstyle__FilterLanguageTitle",componentId:"sc-73d4q0-12"})(["display:flex;flex-direction:column;width:100%;row-gap:10px;font-size:18px;display:flex;flex-direction:column;color:#474D51;"]),I=x.ZP.div.withConfig({displayName:"PageFiltersstyle__FilterLanguageContent",componentId:"sc-73d4q0-13"})(["display:flex;flex-direction:column;width:100%;font-size:15px;display:flex;flex-direction:column;color:#474D51;"]),F=x.ZP.button.withConfig({displayName:"PageFiltersstyle__FilterLanguages",componentId:"sc-73d4q0-14"})(["display:flex;flex-direction:column;width:100%;height:22px;border:none;background-color:transparent;font-size:15px;display:flex;flex-direction:column;"]),Z=n(183);var N=function(e){(0,a.Z)(e);var i=(0,s.C)(Z.St),n=(0,s.C)(Z.Eq),l=(0,s.T)(),r=(0,o.useRef)(null);return(0,t.jsx)(f,{onMouseEnter:function(){n||l((0,Z.Um)(!1))},onMouseLeave:function(){n||l((0,Z.Um)(!0))},ref:r,children:(0,t.jsxs)(u,{stayInFocus:n,isFocused:i,children:[(0,t.jsx)(g,{stayInFocus:n,isFocused:i,onClick:function(){l((0,Z.YG)(n))},children:(0,t.jsx)(p.G,{icon:c.RP7})}),(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{children:"Subject"}),(0,t.jsxs)(y,{children:[(0,t.jsx)(w,{children:"java principles"}),(0,t.jsx)(w,{children:"memory"}),(0,t.jsx)(w,{children:"performance"}),(0,t.jsx)(w,{children:"cpu-architecture"}),(0,t.jsx)(w,{children:"arrays"})]})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(C,{children:"Subject"}),(0,t.jsxs)(_,{children:[(0,t.jsx)(P,{children:"java principles"}),(0,t.jsx)(P,{children:"memory"}),(0,t.jsx)(P,{children:"performance"}),(0,t.jsx)(P,{children:"cpu-architecture"}),(0,t.jsx)(P,{children:"arrays"})]})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(j,{children:"Language"}),(0,t.jsxs)(I,{children:[(0,t.jsx)(F,{children:"java"}),(0,t.jsx)(F,{children:"javascript"}),(0,t.jsx)(F,{children:"c++"})]})]})]})})};var k=function(e){var i=e.children,n=e.side,o=(0,s.C)(l.hS);return(0,t.jsxs)(r.uz,{children:[i,"left"===n&&(0,t.jsx)(N,{}),"right"===n&&o&&(0,t.jsx)(d.Z,{})]})}},5109:function(e,i,n){n.d(i,{M_:function(){return o},G1:function(){return l},qE:function(){return s},VG:function(){return r},$6:function(){return d},Dx:function(){return a},VY:function(){return c},CB:function(){return p},PE:function(){return x},$G:function(){return f},u:function(){return u},wq:function(){return g},xs:function(){return h},Hp:function(){return m},v6:function(){return y},mF:function(){return w},fb:function(){return b},xv:function(){return C},vj:function(){return _},vZ:function(){return P},S:function(){return v},Ec:function(){return j},j$:function(){return I},QB:function(){return F}});var t=n(9163),o=t.ZP.div.withConfig({displayName:"FormQuestionstyle__FormQuestionCont",componentId:"sc-163lxxi-0"})(["display:flex;width:810px;padding-top:15px;padding-bottom:8px;padding-left:20px;padding-right:44px;box-sizing:border-box;background-color:",";border-radius:6px;column-gap:22px;border-radius:10px;background-color:#ffffff;box-shadow:0px 1px 1px rgba(99,105,108,0.61),inset 0px 0px 0px rgba(99,105,108,0.61);justify-content:space-between;height:125px;align-items:center;"],(function(e){return e.theme.pageTabs.contBG})),l=t.ZP.div.withConfig({displayName:"FormQuestionstyle__PersonCont",componentId:"sc-163lxxi-1"})(["display:flex;flex-direction:column;width:61px;height:93px;"]),s=t.ZP.img.withConfig({displayName:"FormQuestionstyle__Avatar",componentId:"sc-163lxxi-2"})(["width:61px;height:61px;border-radius:50%;object-fit:cover;"]),r=t.ZP.span.withConfig({displayName:"FormQuestionstyle__Name",componentId:"sc-163lxxi-3"})(["font-size:12px;margin-top:6px;display:flex;color:#00090e;opacity:0.62;width:100%;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;"]),d=t.ZP.div.withConfig({displayName:"FormQuestionstyle__TextCont",componentId:"sc-163lxxi-4"})(["display:flex;flex-direction:column;justify-content:center;row-gap:10px;width:644px;"]),a=t.ZP.h2.withConfig({displayName:"FormQuestionstyle__Title",componentId:"sc-163lxxi-5"})(["font-size:20px;color:#00578b;cursor:pointer;text-transform:capitalize;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;font-family:s;"]),c=t.ZP.p.withConfig({displayName:"FormQuestionstyle__Content",componentId:"sc-163lxxi-6"})(["font-size:15px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:#00090e;font-family:r;"]),p=t.ZP.div.withConfig({displayName:"FormQuestionstyle__BottomSide",componentId:"sc-163lxxi-7"})(["display:flex;justify-content:space-between;"]),x=t.ZP.div.withConfig({displayName:"FormQuestionstyle__QuestionTags",componentId:"sc-163lxxi-8"})(["display:flex;column-gap:10px;"]),f=t.ZP.button.withConfig({displayName:"FormQuestionstyle__Tags",componentId:"sc-163lxxi-9"})(["height:22px;color:white;border:none;padding:5px;border-radius:5px;display:flex;color:#00578b;font-family:r;justify-content:center;border:1px solid lightgray;align-items:center;box-shadow:0px 0px 0px 0.5px rgba(158,161,163,0.38),inset 0px 0px 1px rgba(158,161,163,1);background-color:#e5f0f4;font-family:r;font-size:12px;text-decoration:none solid rgb(0,87,139);text-align:center;"]),u=t.ZP.div.withConfig({displayName:"FormQuestionstyle__ProductsIcons",componentId:"sc-163lxxi-10"})(["display:flex;align-items:center;justify-content:center;"]),g=t.ZP.div.withConfig({displayName:"FormQuestionstyle__ProductIcon",componentId:"sc-163lxxi-11"})(["width:18px;height:18px;box-shadow:0px 1px 2px rgba(99,105,108,1),inset 0px 0px 0px rgba(99,105,108,0.61);border-radius:50%;background-color:",";position:absolute;margin-right:","px;"],(function(e){return e.backgroundColor}),(function(e){return 15*e.index})),h=t.ZP.div.withConfig({displayName:"FormQuestionstyle__CountOfProducts",componentId:"sc-163lxxi-12"})(["display:flex;column-gap:10px;align-items:center;"]),m=t.ZP.div.withConfig({displayName:"FormQuestionstyle__ProductCount",componentId:"sc-163lxxi-13"})(["font-family:r;font-size:12px;text-decoration:none solid rgb(71,77,81);color:#474d51;span{color:#00578b;font-size:16px;font-family:m;text-decoration:none solid rgb(0,87,139);}"]),y=t.ZP.div.withConfig({displayName:"FormQuestionstyle__StatisticCont",componentId:"sc-163lxxi-14"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:95px;column-gap:5px;row-gap:5px;box-sizing:border-box;"]),w=t.ZP.div.withConfig({displayName:"FormQuestionstyle__AnswerCont",componentId:"sc-163lxxi-15"})(["width:40px;display:flex;flex-direction:column;align-items:center;row-gap:5px;"]),b=t.ZP.div.withConfig({displayName:"FormQuestionstyle__AnswerCount",componentId:"sc-163lxxi-16"})(["width:40px;height:23px;border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;row-gap:5px;color:#00578b;font-size:20px;"]),C=t.ZP.span.withConfig({displayName:"FormQuestionstyle__Text",componentId:"sc-163lxxi-17"})(["font-size:13px;color:#474d51;"]),_=t.ZP.span.withConfig({displayName:"FormQuestionstyle__ThumbIcon",componentId:"sc-163lxxi-18"})(["font-size:13px;color:#00578b;font-size:18px;"]),P=t.ZP.div.withConfig({displayName:"FormQuestionstyle__HelpfulCont",componentId:"sc-163lxxi-19"})(["width:45px;display:flex;flex-direction:column;align-items:center;row-gap:3px;"]),v=t.ZP.div.withConfig({displayName:"FormQuestionstyle__HelpfulCount",componentId:"sc-163lxxi-20"})(["width:45px;height:23px;color:#00578B;border-radius:6px;display:flex;align-items:center;justify-content:center;column-gap:10px;"]),j=t.ZP.div.withConfig({displayName:"FormQuestionstyle__DefaultLine",componentId:"sc-163lxxi-21"})(["width:76px;height:3px;background-color:rgba(0,0,0,0.5);"]),I=t.ZP.div.withConfig({displayName:"FormQuestionstyle__PercentageLine",componentId:"sc-163lxxi-22"})(["width:","%;height:100%;background-color:#00578b;"],(function(e){return e.percentage})),F=(t.ZP.div.withConfig({displayName:"FormQuestionstyle__ViewsCont",componentId:"sc-163lxxi-23"})([""]),t.ZP.p.withConfig({displayName:"FormQuestionstyle__DateCount",componentId:"sc-163lxxi-24"})(["font-family:r;font-style:italic;font-size:12px;color:#9ea1a3;"]))},2483:function(e,i,n){n.d(i,{Bo:function(){return o},uz:function(){return l},UA:function(){return s}});var t=n(9163),o=t.ZP.div.withConfig({displayName:"Pagestyled__MainPartOfPageStyle",componentId:"sc-1c4wvfo-0"})(["width:808px;padding-top:74px;display:flex;justify-content:center;"]),l=t.ZP.aside.withConfig({displayName:"Pagestyled__SidePartOfPageStyle",componentId:"sc-1c4wvfo-1"})(["width:400px;box-sizing:border-box;padding-top:25px;display:flex;padding-top:115px;justify-content:center;minHeight:100vh;"]),s=t.ZP.main.withConfig({displayName:"Pagestyled__PageDefaultStyle",componentId:"sc-1c4wvfo-2"})(["display:flex;flex-wrap:wrap;column-gap:20px;align-items:stretch;"])}}]);