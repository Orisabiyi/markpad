function FileOption({ dispatch }) {
  return (
    <div className="file-option">
      <div className="file">
        <h1 className="file__name">Untitled</h1>
        <p className="file__date">Created 22 June, 2023</p>
        <button onClick={() => dispatch({ type: "options" })}>X</button>
      </div>
    </div>
  );
}

export default FileOption;
