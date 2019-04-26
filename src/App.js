import React, { Component } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import ReactFCCtest from "react-fcctest";
const marked = require("marked");
marked.setOptions({
  breaks: true
});
class App extends Component {
  state = {
    markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
  };

  updateMark = function(markdown) {
    this.setState({ markdown });
  };

  render() {
    let { markdown } = this.state;
    console.log(markdown);

    return (
      <div className="App container">
        <Form.Row>
          <Form.Group className="col-md-6 p-0 bg-indigo h-md-100">
            <Form.Label>Markdown Input</Form.Label>
            <Form.Control
              rows="20"
              id="editor"
              as="textarea"
              placeholder="Enter Something!"
              value={markdown}
              onChange={event => this.updateMark(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="col-md-6 p-0 bg-white h-md-100 loginarea">
            <h1>Markdown Output</h1>
            <div
              rows="20"
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
          </Form.Group>
        </Form.Row>
        <ReactFCCtest />
      </div>
    );
  }
}

export default App;
