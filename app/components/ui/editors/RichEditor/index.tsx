import ListingStoreProduct from 'app/components/templates/ListingStoreProduct';
import { productGet } from 'app/store/slices/product.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
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
import React, { useEffect, useRef, useState } from 'react';

import Toolbar from './Toolbar';

interface ProductItemProps {
  id: number
}

const ProductItem = ({
  blockProps,
  block,
}: {
  blockProps: ProductItemProps
  block: ContentBlock
}) => {
  const dispatch = useAppDispatch()
  const productState = useAppSelector((state) => state.product)
  const { id } = blockProps

  useEffect(() => {
    dispatch(productGet(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return productState.currentItem ? (
    <ListingStoreProduct data={productState.currentItem} />
  ) : (
    block.getText()
  )
}

const RichEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  let isBlurred = false

  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    // Remove embedded product on backspace pressed
    if (command === 'backspace') {
      const { currentBlock, currentKey } = getCurrentBlock()
      const prevBlock = editorState.getCurrentContent().getBlockBefore(currentKey)

      if (prevBlock) {
        const prevBlockText = prevBlock.getText()

        if (getIDfromLink('store', prevBlockText)) {
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
    const id = getIDfromLink('store', contentText)

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
    if (getIDfromLink('store', currentBlock.getText())) {
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

  const getIDfromLink = (path: string, text: string): number | null => {
    const matchedLinks = linkifyIt().match(text)

    // Match url in text, then search for ID
    if (matchedLinks && matchedLinks.length === 1) {
      const url = matchedLinks[0].url
      if (url.includes(`${window.location.origin}/${path}`)) {
        const matchedDigits = url.match(/\d+/g)

        // Return last occurrence of id
        if (matchedDigits) {
          return +matchedDigits[matchedDigits.length - 1]
        }
      }
    }

    return null
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
