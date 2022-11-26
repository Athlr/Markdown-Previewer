import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

function App() {
  const [input, setInput] = useState(`
  # Heading 1 Element
  ---
  ## Heading 2 Element
  ---
  [Link to Google](http://google.com)
  
  \`react-markdown\`
  \`\`\`
  # code block
  print '3 backticks or'
  print 'indent 4 spaces'
  \`\`\`

  * List Item 1
  * List Item 2
  * List Item 3
  
  > Blockquote

  **Bolded text**

  ![Image](http://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)
  `);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <Header />
      <div className="body">
        <Editor input={input} handleInput={handleInput} />
        <Preview input={input} />
      </div>
    </div>
  );
}

export default App;
