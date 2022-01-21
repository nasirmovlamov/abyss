import 'quill/dist/quill.snow.css';

import hljs from 'highlight.js';
import React, { useEffect, useRef, useState } from 'react';
import { useQuill } from 'react-quilljs';

import {
  EditorWraper_STY,
} from '../../../styles/styled-components/ui/modules/CreateProduct_Style/Steps/CreateProduct_Step2.style';

interface Props {
  content: any
  onChange: any
  display: 'none' | 'block'
}

function EditorForProductCreate({ content, onChange, display }: Props) {
  hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust'],
  })

  const theme = 'snow'

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  const modules = {
    toolbar: [
      ['bold', 'italic'],
      ['link', 'blockquote', 'code-block', 'image'],
      [
        { indent: '-1' },
        { indent: '+1' },
        { list: 'ordered' },
        { list: 'bullet' },
        { header: [1, 2, false] },
      ],
      ['clean'],
    ],
    syntax: {
      highlight: (code: any) => hljs.highlightAuto(code).value,
    },
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'mention',
    'emoji',
    'code-block',
  ]

  const { quill, quillRef, Quill } = useQuill({ modules, formats })

  const [editor_theme, seteditor_theme] = useState('black')

  React.useEffect(() => {
    if (quill) {
      quill.root.innerHTML = content
      quill.on('text-change', (content) => {
        onChange(quill.root.innerHTML)
        let qlSyntaxes = document.querySelectorAll('.ql-syntax')
        for (let index = 0; index < qlSyntaxes.length; index++) {
          qlSyntaxes[index].setAttribute('style', `background-color: ${editor_theme}`)
        }
      })
    }
  }, [quill, editor_theme])

  const handleChange = (event: any) => {
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
      <EditorWraper_STY style={{ width: '100%', display: display }}>
        <div style={{}} ref={quillRef} />
      </EditorWraper_STY>
    </>
  )
}

export default EditorForProductCreate
