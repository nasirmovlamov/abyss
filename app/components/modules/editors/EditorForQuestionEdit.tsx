import 'quill-magic-url'
import 'quill-mention'
import 'quill-mention/dist/quill.mention.css'

import React, { ReactElement, useEffect, useState } from 'react'
import {
  editQuestionContent_onChange,
  edit_question_data,
  mentionProductAtQuestionEdit,
  mentionUserAtQuestionEdit,
} from '../../app/feature/Question.slice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'

import { BASE_API_INSTANCE } from '../../../helpers/api/BaseInstance'
import { CreateThreadEDITORWrapper_STY } from '../../../styles/ui/modules/Editors/CreateThread.style'
import ReactQuill from 'react-quill'

interface Props {}

const modules = {
  toolbar: [
    ['bold', 'italic'],
    ['link', 'blockquote', 'code-block', 'image'],
    [{ indent: '-1' }, { indent: '+1' }, { list: 'ordered' }, { list: 'bullet' }],
    ['clean'],
  ],
  mention: {
    allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
    spaceAfterInsert: true,
    mentionDenotationChars: ['@', '#', 'https://'],
    linkTarget: '_blank',
    source: async (searchTerm: any, renderItem: any, mentionChar: any) => {
      let values
      let loading = false
      if (mentionChar === '@' || mentionChar === '#') {
        let products = []
        const getProductNames = async (query: string) => {
          try {
            const resp = await BASE_API_INSTANCE.get(`/forum/product/${query}`)
            const products = resp.data.data.map((element: any) => {
              return {
                value: element.name,
                id: element.id,
                link: `https://demo-abyss.vercel.app/store/${element.id}/${element.slug}`,
                target: '_blank',
              }
            })
            return products
          } catch (error) {}
        }
        const getUserNames = async (query: string) => {
          try {
            const resp = await BASE_API_INSTANCE.get(`/forum/user/${query}`)
            const users = resp.data.data.map((element: any) => {
              return {
                value: element.name,
                id: element.id,
                link: `https://demo-abyss.vercel.app/cave/${element.id}/${element.slug}`,
                target: '_blank',
              }
            })
            return users
          } catch (error) {}
        }
        if (mentionChar === '@') {
          values = await getProductNames(searchTerm)
        } else {
          values = await getUserNames(searchTerm)
        }
      }
      if (loading) {
        renderItem(['loading'], searchTerm)
      }
      if (searchTerm.length === 0) {
        renderItem(values, searchTerm)
      } else {
        const matches = []
        for (let i = 0; i < values.length; i++)
          if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase()))
            matches.push(values[i])
        renderItem(matches, searchTerm)
      }
    },
  },
  magicUrl: true,
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

const EditorForQuestionEdit = ({}: Props): ReactElement => {
  const dispatch = useAppDispatch()
  const questiondata = useAppSelector(edit_question_data)
  const linkedProducts = questiondata!.linkedProducts
  const mentionedUsers = questiondata!.mentionedUsers

  const editorOnChageHandle = (content: any, delta: any, source: any, editor: any) => {
    const editorData = editor.getContents().ops

    for (let i = 0; i < editorData.length; i++) {
      if (editorData[i].insert.hasOwnProperty('mention')) {
        if (editorData[i].insert.mention.denotationChar === '@') {
          dispatch(mentionProductAtQuestionEdit({ id: editorData[i].insert.mention.id }))
        } else if (editorData[i].insert.mention.denotationChar === '#') {
          dispatch(mentionUserAtQuestionEdit({ id: editorData[i].insert.mention.id }))
        } else {
        }
      }
    }
    dispatch(editQuestionContent_onChange(content))
  }

  return (
    <CreateThreadEDITORWrapper_STY>
      <ReactQuill
        id="ql-editor-id"
        modules={modules}
        formats={formats}
        theme="snow"
        value={questiondata!.new_content}
        onChange={editorOnChageHandle}
      />
    </CreateThreadEDITORWrapper_STY>
  )
}

export default EditorForQuestionEdit

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
//       newmentions.push({id:editor.getContents().ops[i].insert.mention.id})
//     }
//   }
//   this.state.mentions = newmentions
// };
