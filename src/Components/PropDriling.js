import React from 'react'

function PropDriling() {
    const parent = " A Component data"
  return (
    <div>
      <h1>A = Component</h1>
      <B value = {parent}/>
    </div>
  )
}
function B({value}){
    return(
        <div>
            <h1>B-Component</h1>

            <C value={value}/>
        </div>
    )
}
function C({value}){
    return(
        <div>
            <h1>C-Component</h1>

            {/* <D value={er}/> */}
            <D value={value}/>

        </div>
    )
}
function D({value}){
    return(
        <div>
            <h1>D-Component</h1>

            <E value={value}/>
        </div>
    )
}
function E({value}){
    return(
        <div>
            <h1>E-Component</h1>
            <h1>Finally i have received parent data in E component:{value}</h1>

        </div>
    )
}

export default PropDriling
