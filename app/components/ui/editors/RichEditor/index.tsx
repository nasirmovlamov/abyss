import { CompositeDecorator, ContentBlock, DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js';
import linkifyIt from 'linkify-it';
import React, { ReactNode, useRef, useState } from 'react';

import Toolbar from './Toolbar';

const ProductItem = ({ children }: { children: ReactNode; offsetKey: string }) => {
  return (
    <div
      // contentEditable={false}
      suppressContentEditableWarning
      style={{ width: '100%', height: 40, background: '#2e3a59', borderRadius: 5 }}
    >
      <span>{children}</span>
    </div>
  )
}

const RichEditor = () => {
  const editorRef = useRef<any>()
  const [shouldReplace, setShouldReplace] = useState(false)

  const findProductLink = (contentBlock: ContentBlock, callback: Function) => {
    const blockText = contentBlock.getText()
    const links = linkifyIt().match(blockText)

    if (links) {
      links.forEach((link: any) => {
        if (link.url.includes(window.location.origin) && shouldReplace) {
          const start = blockText.indexOf(link.url)
          callback(start, start + link.url.length)
          // shouldReplace = false
        }
      })
    }
  }

  // Add custom decorator for embedding products
  const compositeDecorator = new CompositeDecorator([
    // {
    //   strategy: findProductLink,
    //   component: ProductItem,
    // },
  ])
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(compositeDecorator))

  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (command === 'split-block') {
      setShouldReplace(true)
      // forceRender()
    }

    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const handleEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }

  const forceRender = () => {
    var contentState = editorState.getCurrentContent()

    var newEditorStateInstance = EditorState.createWithContent(contentState, compositeDecorator)

    var copyOfEditorState = EditorState.set(newEditorStateInstance, {
      selection: editorState.getSelection(),
      undoStack: editorState.getUndoStack(),
      redoStack: editorState.getRedoStack(),
      lastChangeType: editorState.getLastChangeType(),
    })
    setEditorState(copyOfEditorState)
  }

  const handleBlockRenderer = (contentBlock: ContentBlock) => {
    const blockText = contentBlock.getText()
    const links = linkifyIt().match(blockText)

    if (links) {
      links.forEach((link: any) => {
        if (link.url.includes(window.location.origin)) {
          return {
            component: ProductItem,
            editable: false,
            props: {
              foo: 'bar',
            },
          }
          // setTimeout(() => {
          //   setShouldReplace(false)
          //   return {
          //     component: ProductItem,
          //     editable: false,
          //     props: {
          //       foo: 'bar',
          //     },
          //   }
          // }, 500)
        }
      })
    }
  }

  return (
    <div className="RichEditor-root">
      <Toolbar editorState={editorState} setEditorState={setEditorState} />
      <div className="RichEditor-editor">
        <Editor
          ref={editorRef}
          editorState={editorState}
          onChange={handleEditorStateChange}
          handleKeyCommand={handleKeyCommand}
          blockRendererFn={handleBlockRenderer}
        />
      </div>
    </div>
  )
}

export default RichEditor
