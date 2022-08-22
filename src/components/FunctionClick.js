import React from 'react'

function FunctionClick() {
    function changeEvent(){
        console.log("xyz")
    }
  return (
    <div>
        <button onClick={changeEvent}>Click Me</button>
    </div>
  )
}

export default FunctionClick