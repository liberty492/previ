import React,{useState} from 'react'

function Hookusestate() {
    const[count,setCount] =  useState(0)
    return (
        <center>
            
             <div>
            
                 <p>you clicked{count} times</p>
                 <button onClick={()=>setCount(count+1)}>count</button>
             </div>
    
        </center>
        )
}

export default Hookusestate
