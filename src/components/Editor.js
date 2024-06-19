import { useReducer } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { content, preview } = state;

  return (
    <div className="editor">
      <div className={`editor--1 ${!preview ? "editor__full" : ""}`}>
        <div className="editor__heading">
          <h2>markpad</h2>
          {!preview && <Button dispatch={dispatch} />}
        </div>
        <div className="editor__area">
          <textarea
            value={content}
            onChange={(e) =>
              dispatch({ type: "setContent", payload: e.target.value })
            }
            spellCheck={true}
          ></textarea>
        </div>
      </div>

      {preview && (
        <div className="editor--1">
          <div className="editor__heading">
            <h2>preview</h2>
            {preview && <Button dispatch={dispatch} />}
          </div>
          <div className="editor__area">
            <div className="editor__output">
              <ReactMarkdown
                children={content}
                gfm={true}
                remarkPlugins={[gfm]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ dispatch }) {
  return (
    <button
      className="editor__view"
      onClick={() => dispatch({ type: "setPreview" })}
    >
      <img src="asset/view.png" alt="an eye icon for viewing" />
    </button>
  );
}
