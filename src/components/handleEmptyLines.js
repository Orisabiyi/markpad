function handleEmptyLines(content) {
  const lines = content.split("\n");
  const modifiedLines = lines.map((line) =>
    line === "" ? "&nbsp;  \n\n" : line
  );
  console.log(modifiedLines);
  const modifiedContent = modifiedLines.join("\n\n");
  return modifiedContent;
}

export default handleEmptyLines;
