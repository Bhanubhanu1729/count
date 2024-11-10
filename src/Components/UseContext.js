import React, { useContext } from 'react'

const Context = React.createContext();//instence of context api

function UseContext() {
    const data = {id:10 , name:"Bhanu", city:"Hyderabad"};
  return (
    <div>
      <Context.Provider value={data}>

       <E/>
      </Context.Provider>
    </div>
  )
}
function A(){
    return "A Component"
}
function E(){
    const data = useContext(Context);
    return(
        <div>
        <h1>ID : {data.id}</h1>
        <h1>Name : {data.name}</h1>
        <h1>CITY : {data.city}</h1>
        </div>
    )
}

export default UseContext
