import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Editor() {
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(false);

  function handleSetContent(e) {
    setContent(e.target.value);
  }

  function handleSetPreview() {
    setPreview((value) => !value);
  }

  return (
    <div className="editor">
      <div className="editor--1">
        <div className="editor__heading">
          <h2>markpad</h2>
          {!preview && <Button onSetPreview={handleSetPreview} />}
        </div>
        <div className="editor__area">
          <textarea
            value={content}
            onChange={handleSetContent}
            spellCheck={true}
          ></textarea>
        </div>
      </div>

      {preview && (
        <div className="editor--1">
          <div className="editor__heading">
            <h2>preview</h2>
            {preview && <Button onSetPreview={handleSetPreview} />}
          </div>
          <div className="editor__area">
            <ReactMarkdown children={content} />
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ onSetPreview }) {
  return (
    <button className="editor__view" onClick={onSetPreview}>
      <img src="asset/view.png" alt="an eye icon for viewing" />
    </button>
  );
}
