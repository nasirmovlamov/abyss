import 'quill-mention/dist/quill.mention.css';
import 'quill/dist/quill.snow.css';

import hljs from 'highlight.js';
import React, { useEffect, useRef, useState } from 'react';
import { useQuill } from 'react-quilljs';

// import 'highlight.js/styles/a11y-dark.css';
interface Props {
  content: any
  onChange: any
  display: 'none' | 'block'
}


function MyEditor({ content, onChange, display }: Props) {
  const [atValues, setatValues] = useState([{ id: 1, value: "Fredrik Sundqvist" }, { id: 2, value: "Patrik Sjölin" }])
  const [hashValues, sethashValues] = useState([{ id: 3, value: "Fredrik Sundqvist 2" }, { id: 4, value: "Patrik Sjölin 2" }])

  hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust'],
  })

  const theme = 'snow'

  useEffect(() => {
    hljs.highlightAll()
  }, [])





  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
    syntax: {
      highlight: (code: any) => hljs.highlightAuto(code).value,
    },
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["@", "#"],
      source: function (searchTerm: any, renderItem: any, mentionChar: any) {
        let values: any
        if (mentionChar === "@" || mentionChar === "#") {
          values = atValues
        }
        if (searchTerm.length === 0) {
          renderItem(values, searchTerm)
        } else {
          const matches = []
          for (let i = 0; i < values.length; i++)
            if (
              ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
            ) {
              matches.push(values[i])
            }
          renderItem(matches, searchTerm)
        }
      },
      onSelect: function (item: any, insertItem: any) {
        insertItem(item)
      }
    },

    magicUrl: {
      // Regex used to check URLs during typing
      urlRegularExpression: /(https?:\/\/[\S]+)|(www.[\S]+)|(tel:[\S]+)/g,
      // Regex used to check URLs on paste
      globalRegularExpression: /(https?:\/\/|www\.|tel:)[\S]+/g,
    },
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const { quill, quillRef, Quill } = useQuill({ modules, formats })

  if (Quill && !quill) { // For execute this line only once.

  }

  const [editor_theme, seteditor_theme] = useState('black')



  if (Quill) {

    const MagicUrl = require('quill-magic-url').default // Install with 'yarn add quill-magic-url'
    const Mention = require('quill-mention').default

    if (Quill) {
      Quill.register({
        'modules/magicUrl': MagicUrl,
        'modules/mention': Mention
      })
    }

    if (quill && !Quill) {
      quill.root.innerHTML = content
      quill.on('text-change', (content) => {
        onChange(quill.root.innerHTML)
        let qlSyntaxes = document.querySelectorAll('.ql-syntax')
        for (let index = 0; index < qlSyntaxes.length; index++) {
          qlSyntaxes[index].setAttribute('style', `background-color: ${editor_theme}`)
        }
      })
    }

  }


  React.useEffect(() => {





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
      <div style={{ width: "100%", minHeight: "100", display: display }}>
        <div style={{}} ref={quillRef} />
      </div>
    </>
  )
}

export default MyEditor