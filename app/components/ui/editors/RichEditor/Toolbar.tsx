import { EditorState, RichUtils } from 'draft-js';
import React from 'react';

interface TooltipBlock {
  type: string
  label: string
  toolTip: string
}

export const inlineStyles: TooltipBlock[] = [
  { type: 'BOLD', label: 'Bold', toolTip: 'Bold' },
  { type: 'ITALIC', label: 'Italic', toolTip: 'Italic' },
  { type: 'UNDERLINE', label: 'Underline', toolTip: 'Underline' },
  { type: 'CODE', label: 'Code', toolTip: 'Code Block' },
]

export const blockStyles: TooltipBlock[] = [
  { type: 'unordered-list-item', label: 'Unordered List', toolTip: 'Unordered List' },
  { type: 'ordered-list-item', label: 'Ordered List', toolTip: 'Ordered List' },
]

interface ToolbarProps {
  editorState: EditorState
  setEditorState: Function
}

const Toolbar = ({ editorState, setEditorState }: ToolbarProps) => {
  const handleInlineStyle = (event: any, style: string) => {
    event.preventDefault()
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }

  const handleBlockStyle = (event: any, block: string) => {
    event.preventDefault()
    setEditorState(RichUtils.toggleBlockType(editorState, block))
  }

  const renderInlineStyleButton = (style: TooltipBlock, index: number) => {
    const currentInlineStyle = editorState.getCurrentInlineStyle()
    let className = 'RichEditor-styleButton'
    if (currentInlineStyle.has(style.type)) {
      className += ' RichEditor-activeButton'
    }

    return (
      <button
        key={index}
        title={style.toolTip}
        onMouseDown={(event) => handleInlineStyle(event, style.type)}
        onClick={(event) => event.preventDefault()}
        className={className}
      >
        {style.label}
      </button>
    )
  }

  const renderBlockStyleButton = (block: TooltipBlock, index: number) => {
    const currentBlockType = RichUtils.getCurrentBlockType(editorState)
    let className = 'RichEditor-styleButton'
    if (currentBlockType === block.type) {
      className += ' RichEditor-activeButton'
    }

    return (
      <button
        key={index}
        title={block.toolTip}
        onMouseDown={(event) => handleBlockStyle(event, block.type)}
        onClick={(event) => event.preventDefault()}
        className={className}
      >
        {block.label}
      </button>
    )
  }

  return (
    <div className="RichEditor-controls">
      {inlineStyles.map((style, index) => {
        return renderInlineStyleButton(style, index)
      })}
      {blockStyles.map((block, index) => {
        return renderBlockStyleButton(block, index)
      })}
    </div>
  )
}

export default Toolbar
