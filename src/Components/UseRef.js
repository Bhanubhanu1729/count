import React,{useRef}  from 'react'

// which is used to create a reference to the DOM elements in the functional components
//it can be used to access a DOM elements directly.
//it can be used to store a mutable value that does not cause a re-render when updated
//inside the component data  does not re-rendering 
function UseRef() {

    const count = useRef(0) ;

    const CheckValue=()=>{
        count.current++;
        console.log(count.current)
    }
  return (
    <div>
      <button onClick={CheckValue}>Check value</button>
    </div>
  )
}

export default UseRef
