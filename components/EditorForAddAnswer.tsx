import React, {  ReactElement, useEffect, useLayoutEffect, useState } from "react";
import "quill-mention";
import  'quill-magic-url'
import "quill-mention/dist/quill.mention.css";
import axios from "axios";
import { BASE_API_INSTANCE } from "../helpers/api/BaseInstance";
import ReactQuill, {Quill} from 'react-quill';
import dynamic from 'next/dynamic'
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import {  question_value } from "../app/feature/CreateQuestionFeatures/CreateQuestion.slice";
import { AnswerContentOnChange, linked_products_at_anwser_submit, linkProductAtAnswer, mentioned_users_at_anwser_submit, mentionUserAtAnswer, submit_answer_content } from "../app/feature/Question.slice";
import javascript from 'highlight.js/lib/languages/javascript';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css'
import { EditorWraper_STY } from "../styles/components/styled-blocks/CreateProduct_Style/Steps/CreateProduct_Step2.style";
import { CreateAddAnswerEDITORWrapper_STY, CreateThreadEDITORWrapper_STY } from "../styles/components/Editors/CreateThread.style";



interface Props {
}

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline','strike', 'blockquote' , 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
  syntax: {
    highlight: (code:any) => hljs.highlightAuto(code).value,
  },  
  mention: {
    allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
    mentionDenotationChars: ["@", "#" , "https://"],
    linkTarget:'_blank',
    source: async (searchTerm:any, renderItem:any, mentionChar:any) => {
      let values;
      let loading = false;
      if (mentionChar === "@" || mentionChar === "#") {
          let products = []
          const getProductNames = async (query:string) => {
              try {
                  const resp = await BASE_API_INSTANCE.get(`/forum/product/${query}`)
                  const products = resp.data.data.map((element:any) => {return {value:element.name , id:element.id ,  link:`https://demo-abyss.vercel.app/store/${element.id}/${element.slug}`,target:'_blank'}})
                  return products;
              } catch (error) {
                  
              }
          }
          const getUserNames = async (query:string) => {
              try {
                  const resp = await BASE_API_INSTANCE.get(`/forum/user/${query}`)
                  const users = resp.data.data.map((element:any) => {return {value:element.name , id:element.id ,  link:`https://demo-abyss.vercel.app/cave/${element.id}/${element.slug}` , target:'_blank'}})
                  return users;
              } catch (error) {
                  
              }
          }
          if(mentionChar === "@")
          {
              values = await getProductNames(searchTerm);
          }else 
          {
              values = await getUserNames(searchTerm);
          }
      }
      if(loading)
      {
          renderItem(['loading'], searchTerm);
      }
      if (searchTerm.length === 0) {
        renderItem(values, searchTerm);
      } else {
        const matches = [];
        for (let i = 0; i < values.length; i++)
          if (
            ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
          )
            matches.push(values[i]);
        renderItem(matches, searchTerm);
      }
    },
  
  },
  magicUrl: true,
};



const EditorAddAnswer = ({}: Props): ReactElement => {
  const [theme, settheme] = useState('')
  const addThemeFromHjs = async (theme:string) => {
    // const Fuse = (await import('fuse.js')).default
    // const fuse = new Fuse(names)
    // const myvalue = theme
    // if(theme ==='dark')
    // {
    //   dynamic(await import('highlight.js/styles/a11y-dark.css'))
    // }
    // else {
    //   dynamic(await import('highlight.js/styles/a11y-light.css'))
    // }
  }
  useLayoutEffect(() => {
    addThemeFromHjs('dark')
  }, [])


  

  
  

  const dispatch = useAppDispatch();

  const answerContent = useAppSelector(submit_answer_content)
  const linkedProducts = useAppSelector(linked_products_at_anwser_submit)
  const mentionedUsers = useAppSelector(mentioned_users_at_anwser_submit)

  const [value, setvalue] = useState('')


  const editorOnChageHandle = async (content:any, delta:any, source:any, editor:any) => {
    try {
      const editorData = editor.getContents().ops;

      for (let i = 0; i < editorData.length; i++) {
        if(editorData[i].insert.hasOwnProperty('mention'))
        {
          if(editorData[i].insert.mention.denotationChar === '@')
          {
            await dispatch(linkProductAtAnswer({id:editorData[i].insert.mention.id}))
          }
          else if (editorData[i].insert.mention.denotationChar === '#')
          {
            await dispatch(mentionUserAtAnswer({id:editorData[i].insert.mention.id}))
          }else {
          }
        }
      }
      dispatch(AnswerContentOnChange(content))
    } catch (error) {
      
    }
   
  }

  const editorOnFocusHandle = (range:any, source:any, editor:any) => {
  }

  // const quillEditorOnPaste = (event:any, editor:any, html:any):any => {
  //   const data = event.clipboardData.getData('text/plain');
  //   const dataHtml = event.clipboardData.getData('text/html');
  //   if (dataHtml) {
  //     const div = document.createElement('div');
  //     div.innerHTML = dataHtml;
  //     const text = div.textContent;
  //     if (text) {
  //       editor.insertText(text);
  //     }
  //   } else if (data) {
  //     editor.insertText(data);
  //   }
  // }

         

  const editorOnBlurHandle = (previousRange:any, source:any, editor:any) => {
  }

  useEffect(() => {
    
  }, [])

  
  
  return (
      <CreateAddAnswerEDITORWrapper_STY>
          <ReactQuill 
            id='ql-editor-id'
            onFocus={editorOnFocusHandle}
            onBlur={editorOnBlurHandle}
            modules={modules} 
            theme="snow" 
            value={answerContent} 
            onChange={editorOnChageHandle}
          />
      </CreateAddAnswerEDITORWrapper_STY>
  );

}



export default EditorAddAnswer







// constructor(props) {
  //   super(props);
  //   this.quillRef = null;
  //   this.reactQuillRef = null;
  //   this.attachQuillRefs = this.attachQuillRefs.bind(this);
  //   this.handleClick = this.handleClick.bind(this)
  //   this.state = {
  //     text: "<div contenteditable='false'>Hector oscar Pacheco</div>",
  //     mentions: []
  //   };
  // }
  // componentDidMount () {
  //   this.attachQuillRefs()
  // }
  // attachQuillRefs() {
  //   // Ensure React-Quill reference is available:
  //   if (typeof this.reactQuillRef.getEditor !== 'function') return;
  //   // Skip if Quill reference is defined:
  //   if (this.quillRef != null) return;
  //   const quillRef = this.reactQuillRef.getEditor();
  //   if (quillRef != null) this.quillRef = quillRef;
  // }
  
  // handleClick () {
    //   var range = this.quillRef.getSelection();
    //   let position = range ? range.index : 0;
    //   //this.quillRef.insertText(position, 'Hello, World! ')
    
    // }
  // handleProcedureContentChange = (content, delta, source, editor) => {
  //   // if (typeof this.reactQuillRef.getEditor !== 'function') return;
  //   // // Skip if Quill reference is defined:
  //   // if (this.quillRef != null) return;
  //   // this.quillRef.insertEmbed(position, 'audio', 'https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3', 'user');

  //   // Mentions Problem
  //   let newmentions = []
  //   for(let i = 0 ; i<editor.getContents().ops.length; i++)
  //   {
  //     if(editor.getContents().ops[i].insert.hasOwnProperty('mention'))
  //     {
  //       // console.log(editor.getContents().ops[i].insert.mention)
  //       newmentions.push({id:editor.getContents().ops[i].insert.mention.id})
  //     }
  //   }
  //   this.state.mentions = newmentions
  // };