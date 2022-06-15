import React from "react"
import { useState } from "react"
import ReactFormate from "./ReactFormate"
// JSON.stringify({ name: "sumit" }
// {setValue(!value)}

const Output = () => {
  const [text, setText] = useState()
  const [list, setList] = useState([])
  const [value, setValue] = useState(false)
  const handleOnChange = async () => {
    // console.log(text)
    setList(text)
    setValue(!value)
  }
  // setValue(false)
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
        <button onClick={handleOnChange}>submit</button>
      </div>
      <div className="output">
        <h1>output</h1>
        {value && <ReactFormate text={list} />}
      </div>
    </>
  )
}

export default Output
