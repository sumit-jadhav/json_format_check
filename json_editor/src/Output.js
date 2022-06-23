import React from "react"
import { jason } from "jason-formatter"

import { useState } from "react"

const Output = () => {
  const [text, setText] = useState()

  const handleOnChanges = () => {
    try {
      var b = JSON.parse(text)
      if (typeof b === "object") console.log("is valid json object")
    } catch {
      alert("not a json object")
      return false
    }
    const a = jason(text)
    console.log(a, typeof a)
    console.log(text)
    setText(a)
  }

  return (
    <>
      <textarea
        id="myText"
        className="text-area"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter your JSON here..."
      ></textarea>
      <div className="controls">
        <button onClick={handleOnChanges}>submit</button>
      </div>
      <div className="output">
        {/* <h1>output</h1> */}

        {/* {value &&  <ReactFormate text={list} />} */}
      </div>
    </>
  )
}

export default Output
