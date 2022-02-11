import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  language: string
  value: string
  onChange: (itemId: string, value: string) => void
}

const CodeEditor = ({ language, value, onChange }: CodeEditorProps) => {
  return (
    <Editor
      theme="vs-dark"
      language={language}
      value={value}
      onChange={(value) => onChange('code', value || '')}
    />
  )
}

export default CodeEditor
