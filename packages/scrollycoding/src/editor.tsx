import * as React from "react"
import {
  MiniEditor,
  MiniEditorProps,
  EditorStep,
} from "@code-hike/mini-editor"
import { useCodeSandboxLink } from "@codesandbox/sandpack-react"

export { Editor, EditorProps }

type EditorProps = {
  contentProps: EditorStep
  frameProps: MiniEditorProps["frameProps"]
  codeProps: MiniEditorProps["codeProps"]
  springConfig: MiniEditorProps["springConfig"]
}

function Editor({
  contentProps,
  codeProps,
  frameProps,
  springConfig,
}: EditorProps) {
  const finalFrameProps = {
    button: <CodeSandboxIcon url={useCodeSandboxLink()} />,
    ...frameProps,
    style: { height: "100%", ...frameProps?.style },
  }
  const finalCodeProps = {
    minColumns: 46,
    ...codeProps,
  }
  return (
    <MiniEditor
      {...contentProps}
      frameProps={finalFrameProps}
      codeProps={finalCodeProps}
      springConfig={springConfig}
    />
  )
}

function CodeSandboxIcon({ url }: { url: string }) {
  return (
    <a
      style={{ margin: "0 1em 0 1em", color: "inherit" }}
      title="Open in CodeSandbox"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.3em"
        width="1.3em"
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 512 512"
        style={{ display: "block" }}
      >
        <path d="M234.4 452V267.5L75.6 176.1v105.2l72.7 42.2v79.1l86.1 49.4zm41.2 1.1l87.6-50.5v-81l73.2-42.4V175.3l-160.8 92.8v185zm139.6-313.2l-84.5-49-74.2 43.1-74.8-43.1-85.3 49.6 159.1 91.6 159.7-92.2zM34.4 384.7V129L256 0l221.6 128.4v255.9L256 512 34.4 384.7z"></path>
      </svg>
    </a>
  )
}
