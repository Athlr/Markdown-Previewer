import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ input }) => {
  return (
    <div className="previewWrap">
      <div className="label">
        <p className="labelText">Preview</p>
      </div>
      <div id="preview">
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
