import React,{useCallback,useState} from 'react'

// it is used for performance optimization in react functionl componenets
// main reson to use useCallback is to prevent a componennts from re-rendering unless its props/dependency have changed
function UseCallback() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default UseCallback
