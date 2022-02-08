import {
  ContentBlock,
  ContentState,
  DraftHandleValue,
  Editor,
  EditorState,
  genKey,
  Modifier,
  RichUtils,
  SelectionState,
} from 'draft-js';
import { List } from 'immutable';
import linkifyIt from 'linkify-it';
import React, { useRef, useState } from 'react';

import Toolbar from './Toolbar';

const ProductItem = ({ block }: { block: ContentBlock }) => {
  return (
    <div
      style={{
        width: '100%',
        height: 40,
        background: '#000',
        borderRadius: 5,
        userSelect: 'none',
      }}
    >
      <span>I am the inserted product</span>
    </div>
  )
}

const RichEditor = () => {
  const editorRef = useRef<any>()
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    // Remove embedded product on backspace pressed
    if (command === 'backspace') {
      const { currentBlock, currentKey } = getCurrentBlock()
      const prevBlock = editorState.getCurrentContent().getBlockBefore(currentKey)

      if (prevBlock) {
        const prevBlockText = prevBlock.getText()

        if (getProductLinks(prevBlockText)) {
          prevBlock.clear()
          const removeSelection = new SelectionState({
            anchorKey: prevBlock.getKey(),
            anchorOffset: prevBlockText.length,
            focusKey: prevBlock.getKey(),
            focusOffset: 1,
          })
          const newContentState = Modifier.removeRange(
            editorState.getCurrentContent(),
            removeSelection,
            'backward',
          )

          const newEditorState = EditorState.forceSelection(
            EditorState.push(editorState, newContentState, 'remove-range'),
            editorState.getCurrentContent().getSelectionAfter(),
          )
          setEditorState(newEditorState)
        }
      }
    }

    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const handleBlockRenderer = (contentBlock: ContentBlock) => {
    const contentText = contentBlock.getText()
    const links = getProductLinks(contentText)

    if (links && links.length === 1) {
      const { currentBlock, currentKey } = getCurrentBlock()
      const contentBlockKey = contentBlock.getKey()

      // Embed product on block change, and on space
      if (contentBlockKey !== currentKey) {
        return {
          component: ProductItem,
          editable: false,
          props: {
            block: contentBlock,
          },
        }
      }
    }
  }

  const handleEditorStateChange = (newEditorState: EditorState) => {
    const { currentBlock, currentKey } = getCurrentBlock()

    // Force render if previous block contained links
    if (getProductLinks(currentBlock.getText())) {
      const newSelection = newEditorState.getSelection()
      const newKey = newEditorState.getSelection().getEndKey()
      const newBlock = newEditorState.getCurrentContent().getBlockForKey(newKey)

      // Embed product on focus and on space key pressed
      const wasBlurred =
        newEditorState.getLastChangeType() === 'insert-fragment' && currentKey === newKey
      const hasSpace = newBlock.getText().charAt(newBlock.getText().length - 1) === ' '

      if (wasBlurred || hasSpace) {
        // Insert new block
        const newBlockState = EditorState.push(
          newEditorState,
          insertBlock('after'),
          'insert-fragment',
        )

        // Go to the new block
        newEditorState = EditorState.forceSelection(
          newBlockState,
          goToBlock(newBlockState.getCurrentContent().getBlockAfter(currentKey)?.getKey()),
        )
      } else {
        newEditorState = EditorState.forceSelection(newEditorState, newSelection)
      }
    }

    setEditorState(newEditorState)
  }

  const insertBlock = (direction: 'before' | 'after') => {
    const selection = editorState.getSelection()
    const contentState = editorState.getCurrentContent()
    const { currentBlock } = getCurrentBlock()

    const blockMap = contentState.getBlockMap()
    // Split the blocks
    const blocksBefore = blockMap.toSeq().takeUntil(function (v) {
      return v === currentBlock
    })
    const blocksAfter = blockMap
      .toSeq()
      .skipUntil(function (v) {
        return v === currentBlock
      })
      .rest()
    const newBlockKey = genKey()
    let newBlocks =
      direction === 'before'
        ? [
            [
              newBlockKey,
              new ContentBlock({
                key: newBlockKey,
                type: 'unstyled',
                text: '',
                characterList: List(),
              }),
            ],
            [currentBlock?.getKey(), currentBlock],
          ]
        : [
            [currentBlock?.getKey(), currentBlock],
            [
              newBlockKey,
              new ContentBlock({
                key: newBlockKey,
                type: 'unstyled',
                text: '',
                characterList: List(),
              }),
            ],
          ]
    const newBlockMap = blocksBefore.concat(newBlocks, blocksAfter).toOrderedMap()
    const newContentState = contentState.merge({
      blockMap: newBlockMap,
      selectionBefore: selection,
      selectionAfter: selection,
    })

    return newContentState as ContentState
  }

  const goToBlock = (key: string | undefined) => {
    return new SelectionState({
      anchorKey: key,
      focusKey: key,
    })
  }

  const getCurrentBlock = () => {
    const currentKey = editorState.getSelection().getEndKey()
    const currentBlock = editorState.getCurrentContent().getBlockForKey(currentKey)

    return { currentKey, currentBlock }
  }

  const getProductLinks = (text: string) => {
    return linkifyIt().match(text)
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
