import { useReducer } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import handleEmptyLines from "./components/handleEmptyLines";
import EditorHeading from "./components/EditorHeading";
import EditorArea from "./components/EditorArea";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

const initialState = { content: "", preview: false, display: false };

function reducer(state, action) {
  switch (action.type) {
    case "setPreview":
      return { ...state, preview: !state.preview };
    case "setContent":
      return { ...state, content: action.payload };
    case "options":
      return { ...state, display: !state.display };
    default:
      throw new Error("Unknown");
  }
}

export default function App() {
  const [{ content, preview, display }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <Navbar dispatch={dispatch} />
      <Editor>
        <div className={`editor--1 ${!preview ? "editor__full" : ""}`}>
          <EditorHeading>
            <h2>markpad</h2>
            {!preview && <Button dispatch={dispatch} />}
          </EditorHeading>

          <EditorArea>
            <textarea
              value={content}
              onChange={(e) =>
                dispatch({ type: "setContent", payload: e.target.value })
              }
            ></textarea>
          </EditorArea>
        </div>

        {preview && (
          <div className="editor--1">
            <EditorHeading>
              <h2>preview</h2>
              {preview && <Button dispatch={dispatch} />}
            </EditorHeading>

            <EditorArea>
              <div className="editor__output">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {handleEmptyLines(content)}
                </ReactMarkdown>
              </div>
            </EditorArea>
          </div>
        )}
      </Editor>

      {display && console.log(true)}
    </>
  );
}
