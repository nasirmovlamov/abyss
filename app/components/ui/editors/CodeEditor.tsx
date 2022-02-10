import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  language: string
  value: string
  onChange: (itemId: string, value: string) => void
}

const CodeEditor = ({ language, value, onChange }: CodeEditorProps) => {
  console.log(language)
  return (
    <Editor
      theme="vs-dark"
      defaultValue="// Add some code"
      language={language}
      value={value}
      onChange={(value) => value && onChange('code', value)}
    />
  )
}

export default CodeEditor
