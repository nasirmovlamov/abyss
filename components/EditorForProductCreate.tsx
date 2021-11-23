import React, { useEffect, useRef, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import { Head } from "next/document";
import dynamic from 'next/dynamic';

interface Props {
  content:any
  onChange:any
  display:'none' | 'block'
}


function EditorForProductCreate({content , onChange, display}: Props){
  
  hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust'],
  })
  
  const theme = 'snow';

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  

  
  
  const modules = {
        toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote' , 'code-block'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
        ],
        syntax: {
        highlight: (code:any) => hljs.highlightAuto(code).value,
        },  
   
}

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const { quill, quillRef , Quill } = useQuill({modules,formats });
  

  const [editor_theme, seteditor_theme] = useState('black')

  



  React.useEffect(() => {
    
    if(quill)
    {
      quill.root.innerHTML = content
      quill.on('text-change', (content) => {
        console.log(content)
        onChange(quill.root.innerHTML); 
        let qlSyntaxes = document.querySelectorAll('.ql-syntax')
        for (let index = 0; index < qlSyntaxes.length; index++) {
          qlSyntaxes[index].setAttribute('style', `background-color: ${editor_theme}`)
        }
      });
    }
  }, [quill , editor_theme]);
  

  const handleChange = (event:any) => {
    seteditor_theme(event.target.value)
  }


  useEffect(() => {
    let qlSyntaxes = document.querySelectorAll('.ql-syntax')
    for (let index = 0; index < qlSyntaxes.length; index++) {
      qlSyntaxes[index].setAttribute('style', `background-color: ${editor_theme}`)
    }
  }, [editor_theme])

  return (
    <>
      <select value={editor_theme} onChange={handleChange}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="black">black</option>
      </select>

      <div style={{ width: "100%",minHeight:"100",display:display}}>
        <div style={{}} ref={quillRef} />
      </div>
    </>
  );
}

export default EditorForProductCreate;