import React ,{useState,useEffect}from 'react'

function APIIntegration() {
    const[array,setArray] = useState([ ]);

    useEffect(()=>{
// axios.get(); library
                    //windows.fetch() or fetch() we are use ;windows BOM fetch("https://jsonplaceholder.typicode.com/users")
                    fetch("https://jsonplaceholder.typicode.com/users")
                    //.then is a one of the fetch method , fetch internally convert the json format to string format we want convert the string format to json format 
                    .then((response) => response.json())
                    .then((json) =>{ //json forat lo unnan data ni manam emapty array lo store chayadaniki setarray(json) ni use chasthunanmu
                        setArray(json)
                    })
    },[])
  return (
    <div>
        <table>
            <tr>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                
            </tr>
        
      {
        array.map((item)=>(
            <tr>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                
            </tr>
        ))
      }
      </table>
    </div>
  )
}

export default APIIntegration
