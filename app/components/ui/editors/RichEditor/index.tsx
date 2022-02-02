import { DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js';
import linkifyIt from 'linkify-it';
import React, { useEffect, useState } from 'react';

import Toolbar from './Toolbar';

const RichEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const linkify = linkifyIt()
  const [productLinks, setProductLinks] = useState<{ [index: string]: boolean }>({})
  const [addTimer, setAddTimer] = useState<any>()

  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  useEffect(() => {
    // console.log(productLinks)
  }, [productLinks])

  const addLinkPreview = (link: string) => {
    clearTimeout(addTimer)
    if (!productLinks[link]) {
      const tempTimer = setTimeout(() => {
        console.log('added' + link)
        setProductLinks({ ...productLinks, [link]: true })
      }, 500)

      setAddTimer(tempTimer)
    }
  }

  const removeLinkPreview = (link: string) => {
    const productLinksUpdated = { ...productLinks }
    delete productLinksUpdated[link]
    console.log('removed' + link)
    setProductLinks(productLinksUpdated)
  }

  const handleEditorStateChange = (editorState: EditorState) => {
    const blocks = editorState.getCurrentContent().getBlockMap()

    Object.keys(productLinks).forEach((link) => {
      // If none of the blocks include the link
      if (blocks.every((block) => !block?.includes(link))) {
        removeLinkPreview(link)
      }
    })

    // Match links pasted into the content
    blocks.forEach((block) => {
      const links = linkify.match(block?.get('text'))

      // Check links and add preview
      if (links) {
        links.forEach((link: any) => {
          if (link.url.includes(window.location.origin)) {
            addLinkPreview(link.url)
          }
        })
      }
    })

    setEditorState(editorState)
  }

  return (
    <div className="RichEditor-root">
      <Toolbar editorState={editorState} setEditorState={setEditorState} />
      <div className="RichEditor-editor">
        <Editor
          editorState={editorState}
          onChange={handleEditorStateChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  )
}

export default RichEditor
