import React , {useState,useEffect} from 'react';


function UseEffect() {
    const[count , setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000)
    },[]);
  return (
    <div>
      <h1>Count value rendered :{count} times</h1>
    </div>
  )
}

export default UseEffect

