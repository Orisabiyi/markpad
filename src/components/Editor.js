export default function Editor() {
  return (
    <div className="editor">
      <div className="editor__heading">
        <h2>markpad</h2>
        <button className="editor__view">
          <img src="asset/view.png" alt="an eye icon for viewing" />
        </button>
      </div>
      <div className="editor__area">
        <textarea></textarea>
      </div>
    </div>
  );
}
