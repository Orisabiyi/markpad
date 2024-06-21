function handleEmptyLines(content) {
  const lines = content.split("\n");
  const modifiedLines = lines.map((line) => (line === "" ? "&nbsp;" : line));
  const modifiedContent = modifiedLines.join("\n");
  return modifiedContent;
}

export default handleEmptyLines;
