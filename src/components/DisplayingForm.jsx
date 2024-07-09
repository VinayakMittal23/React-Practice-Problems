import React, {useState} from 'react'

function DisplayingForm() {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
setInput(e.target.value)
    }
  return (
    <>
    <input onChange={handleChange} title='Input' type="text" placeholder='Input' value={input}/>
    <div>User Input: {input}</div>
    </>
  )
}

export default DisplayingForm
