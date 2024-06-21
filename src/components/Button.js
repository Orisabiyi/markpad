export default function Button({ dispatch }) {
  return (
    <button
      className="editor__view"
      onClick={() => dispatch({ type: "setPreview" })}
    >
      <img src="asset/view.png" alt="an eye icon for viewing" />
    </button>
  );
}
