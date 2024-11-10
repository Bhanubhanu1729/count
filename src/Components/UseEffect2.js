import React,{useState,useEffect} from 'react'

function UseEffect2() {

    const[count , setCount]=useState(0);
    const[mul , setMul]=useState(0);

    const increase = (e)=>{
        setCount(count+1);
        //q)e set count anaydhi apuduaaythay 20 ki reach ayiondho automatiga value anaydhi 0 chayali adhi ela antay useeffect ni use zero chasthamu
    }
    // useEffect(()=>{
    //     setMul(count*3)
    // },[count])


    useEffect(()=>{ //by using this we can change automatically zero after reaching t  he 20
        if(count===20)
        {
            setCount(0)
        }
    },[count]) 
  return (
    <div>
      <h1>You have clicked{count} times</h1>
      <button onClick={increase}>+</button>
      <h1>Multiplication value:{mul} times</h1>
    </div>
  )
}

export default UseEffect2
