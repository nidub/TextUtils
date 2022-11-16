import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    //console.log("Convert to Uppercase" + text) ;
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to uppercase!","success");
  };

  const handledownClick = () => {
    //console.log("Convert to Uppercase" + text) ;
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase!","success");
  };

  const handleclearClick = () => {
    let newText = " ";
    setText(newText);
    props.showalert("Cleared the text","success");
  };

  const handlecopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    props.showalert("Copied the text","success");
    navigator.clipboard.writeText(text.value);
  };

  const handleonChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };
  

  const [text, setText] = useState("Enter text here");
  console.log(typeof(text))
  return (
    <>
      <div style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here"
            id='mybox'
            onChange={handleonChange}
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
          <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to UPPERCASE</button>
          <button className="btn btn-primary mx-1" onClick={handledownClick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters, {text.split(".").length} sentences, and {text.split("\n").length} paragraphs
        </p>
        <p >{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2> 
        <p >{text.length>0?text:"Enter something in the text above to preview it here"}</p>
      </div>
    </>
  );
}
