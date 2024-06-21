import { useReducer } from "react";
import Button from "./Button";
import handleEmptyLines from "./handleEmptyLines";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EditorHeading from "./EditorHeading";
import EditorArea from "./EditorArea";

function reducer(state, action) {
  switch (action.type) {
    case "setPreview":
      return { ...state, preview: !state.preview };
    case "setContent":
      return { ...state, content: action.payload };
    default:
      throw new Error("Unknown");
  }
}

export default function Editor() {
  const initialState = { content: "", preview: false };
  const [{ content, preview }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="editor">
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
    </div>
  );
}
