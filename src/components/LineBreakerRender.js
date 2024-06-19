function LineBreakerRender({ node, ...props }) {
  if (node.children.length === 0) {
    return <br />;
  }

  return <br {...props} />;
}

export default LineBreakerRender;
