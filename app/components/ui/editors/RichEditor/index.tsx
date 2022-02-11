import Utils from 'app/utils';
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
import React, { useState } from 'react';

import ProductItem from '../../elements/ProductItem';
import Toolbar from './Toolbar';

interface RichEditorProps {
  contentValueChanged?: (value: string) => void
  value?: string
}

const RichEditor = ({ contentValueChanged, value }: RichEditorProps) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(value || '')),
  )
  let isBlurred = false

  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    // Remove embedded product on backspace pressed
    if (command === 'backspace') {
      const { currentBlock, currentKey } = getCurrentBlock()
      const prevBlock = editorState.getCurrentContent().getBlockBefore(currentKey)

      if (prevBlock) {
        const prevBlockText = prevBlock.getText()

        if (Utils.matchIDfromTextLink('store', prevBlockText)) {
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
    const id = Utils.matchIDfromTextLink('store', contentText)

    if (id) {
      const { currentBlock, currentKey } = getCurrentBlock()
      const contentBlockKey = contentBlock.getKey()

      // Embed product on block change, and on space
      if (contentBlockKey !== currentKey) {
        return {
          component: ProductItem,
          editable: false,
          props: { id },
        }
      }
    }
  }

  const handleEditorStateChange = (newEditorState: EditorState) => {
    const { currentBlock, currentKey } = getCurrentBlock()

    // Force render if previous block contained links
    if (Utils.matchIDfromTextLink('store', currentBlock.getText())) {
      const newSelection = newEditorState.getSelection()
      const newKey = newEditorState.getSelection().getEndKey()
      const newBlock = newEditorState.getCurrentContent().getBlockForKey(newKey)

      // Embed product on focus and on space key pressed
      const hasSpace = newBlock.getText().charAt(newBlock.getText().length - 1) === ' '

      if (isBlurred || hasSpace) {
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

    // Pass content value to parent on change
    if (contentValueChanged) {
      const newContent = newEditorState.getCurrentContent()
      if (newContent !== editorState.getCurrentContent()) {
        contentValueChanged(newContent.getPlainText())
      }
    }

    setEditorState(newEditorState)
  }

  // Insert an empty block to a given direction
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

  // Go to a specific block
  const goToBlock = (key: string | undefined) => {
    return new SelectionState({
      anchorKey: key,
      focusKey: key,
    })
  }

  // Get current block info
  const getCurrentBlock = () => {
    const currentKey = editorState.getSelection().getEndKey()
    const currentBlock = editorState.getCurrentContent().getBlockForKey(currentKey)

    return { currentKey, currentBlock }
  }

  return (
    <div className="RichEditor-root">
      <Toolbar editorState={editorState} setEditorState={setEditorState} />
      <div className="RichEditor-editor">
        <Editor
          editorState={editorState}
          onChange={handleEditorStateChange}
          handleKeyCommand={handleKeyCommand}
          blockRendererFn={handleBlockRenderer}
          onBlur={() => (isBlurred = true)}
          onFocus={() => (isBlurred = false)}
        />
      </div>
    </div>
  )
}

export default RichEditor
