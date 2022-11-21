import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase text");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloClick = () => {
        // console.log("Lowercase text");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("onchange text");
        setText(event.target.value);
    }

    const handleCopyClick = (event) => {
        let text = document.getElementById("mytext");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = (event) => {
        let ntext = text.split(/[ ]+/);
        setText(ntext.join(" "));
    }

    const [text, setText] = useState('');
    // setText("enter text");
    return (
        <>
            <div className="containet" style={{color: props.mode==='dark'?'white':'rgb(50 61 71)'}}>
                <div className="mt-3 container">
                    <h1>{props.heading}</h1>
                    <textarea value={text} id="mytext" style={{backgroundColor: props.mode==='dark'?'rgb(50 61 71)':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} cols="30" rows="10" className='form-control'></textarea>
                    <button onClick={handleUpClick} className='btn btn-primary mt-3 mx-1'>Convert to Uppercase</button>
                    <button onClick={handleloClick} className='btn btn-primary mt-3 mx-1'>Convert to Lowercase</button>
                    <button onClick={handleClearClick} className='btn btn-primary mt-3 mx-1'>Clear Text</button>
                    <button onClick={handleCopyClick} className='btn btn-primary mt-3 mx-1'>Copy Text</button>
                    <button onClick={handleExtraSpace} className='btn btn-primary mt-3 mx-1'>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'rgb(50 61 71)'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Reads</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above TextBox to Preview here"}</p>
            </div>
        </>
    )
}
