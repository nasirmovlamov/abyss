import React, {  ReactElement, useEffect, useState } from "react";
import "quill-mention";
import  'quill-magic-url'
import "quill-mention/dist/quill.mention.css";
import axios from "axios";
import { BASE_API_INSTANCE } from "../helpers/api/BaseInstance";
import ReactQuill, {Quill} from 'react-quill';
import dynamic from 'next/dynamic'
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { linked_products, mentioned_users, mentionProductAtQuestionCreate, mentionUserAtQuestionCreate, questionContentOnChangeHandler, question_value } from "../app/feature/CreateQuestionFeatures/CreateQuestionFeatures";

interface Props {
}

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"]
  ],
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
                  const products = resp.data.data.map((element:any) => {return {value:element.name , id:element.id , link:`https://demo-abyss.vercel.app/product/${element.id}/${element.slug}`,target:'_blank'}})
                  return products;
              } catch (error) {
                  
              }
          }
          const getUserNames = async (query:string) => {
              try {
                  const resp = await BASE_API_INSTANCE.get(`/forum/user/${query}`)
                  const users = resp.data.data.map((element:any) => {return {value:element.name , id:element.id , link:`https://demo-abyss.vercel.app/forum/${element.id}/${element.slug}` , target:'_blank'}})
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




const EditorNewVersion = ({}: Props): ReactElement => {
  const dispatch = useAppDispatch();

  const questionValue = useAppSelector(question_value)
  const linkedProducts = useAppSelector(linked_products)
  const mentionedUsers = useAppSelector(mentioned_users)

  const [value, setvalue] = useState('')


  const editorOnChageHandle = async (content:any, delta:any, source:any, editor:any) => {
    const editorData = editor.getContents().ops;

    for (let i = 0; i < editorData.length; i++) {
      if(editorData[i].insert.hasOwnProperty('mention'))
      {
        if(editorData[i].insert.mention.denotationChar === '@')
        {
          await dispatch(mentionProductAtQuestionCreate({id:editorData[i].insert.mention.id}))
        }
        else if (editorData[i].insert.mention.denotationChar === '#')
        {
          await dispatch(mentionUserAtQuestionCreate({id:editorData[i].insert.mention.id}))
        }else {
        }
      }
    }
    console.log(content)
    dispatch(questionContentOnChangeHandler(content))
  }

  const editorOnFocusHandle = (range:any, source:any, editor:any) => {
  }

  const editorOnBlurHandle = (previousRange:any, source:any, editor:any) => {
  }

  useEffect(() => {
    
  }, [])

  
  
  return (
    <div>
      <ReactQuill 
        id='ql-editor-id'
        onFocus={editorOnFocusHandle}
        onBlur={editorOnBlurHandle}
        modules={modules} 
        theme="snow" 
        value={questionValue} 
        onChange={editorOnChageHandle}

      />
    </div>
  );

}



export default EditorNewVersion







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