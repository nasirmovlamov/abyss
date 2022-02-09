import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  //@todo: add theme and language switching

  return <Editor defaultLanguage="javascript" theme="vs-dark" defaultValue="// hello world" />
}

export default CodeEditor
