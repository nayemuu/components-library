import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = ({ codeString }) => {
  const [copyMessage, setCopyMessage] = useState(""); // State to show copy feedback message

  // Copy code to clipboard
  const copyCode = () => {
    navigator.clipboard
      .writeText(codeString) // Copy the codeString to clipboard
      .then(() => {
        setCopyMessage("Code copied to clipboard!"); // Update message on success
        setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setCopyMessage("Failed to copy!");
        setTimeout(() => setCopyMessage(""), 2000);
      });
  };

  return (
    <div>
      <div className="code-container" style={{ position: "relative" }}>
        <button
          className="copy-button"
          onClick={copyCode}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "#4caf50",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "3px",
          }}
        >
          Copy
        </button>

        {copyMessage && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              right: "10px",
              background: "#4caf50",
              color: "white",
              padding: "5px 10px",
              borderRadius: "3px",
            }}
          >
            {copyMessage}
          </div>
        )}

        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeDisplay;
