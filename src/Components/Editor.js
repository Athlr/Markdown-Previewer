import React from "react";

const Editor = ({ input, handleInput }) => {
  return (
    <div className="editorWrap">
      <div className="label">
        <p className="labelText">Editor</p>
      </div>
      <textarea id="editor" value={input} onChange={handleInput}></textarea>
    </div>
  );
};

export default Editor;
