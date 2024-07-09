import React from 'react'

function RenderingList() {
    const items = ['item1', 'item2','item2','item3','item4','item5']
  return (
    <>
    <ul>
        {items.map((item, index)=>{
            return <li key={index}>{item}</li>
        })}
    
    </ul>
    </>
  )
}

export default RenderingList
