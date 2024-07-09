import React, {useState} from 'react'

function ToggleSwitch() {
    const [isChecked, setIsChecked] = useState(false)

    const handleToggle = () => {
        setIsChecked(!isChecked)
    }
  return (
    <>
      <label>
        <input type="checkbox" onChange={handleToggle}/>
        <p>{isChecked? "ON" : "OFF"}</p>
      </label>
    </>
  )
}

export default ToggleSwitch
