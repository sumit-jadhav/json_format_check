import ReactJson from "react-json-view"

const ReactFormate = ({ text }) => {
  try {
    var a = JSON.parse(text)

    if (typeof a == "object") {
      console.log("json object")
    }
  } catch {
    alert("not a json object")
    return false
  }

  return (
    <>
      <ReactJson src={a}></ReactJson>
    </>
  )
}
export default ReactFormate
