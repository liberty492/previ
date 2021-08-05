import React,{useState} from 'react'
import ReactDOM from 'react-dom'; 

export default function Fsubmit() {
    const[data,setData] = useState({ username:'', password:'',})

    //Destructuring
    const{username,password}=data;

    //onchange
    const handlein=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submithandler=e=>{
        alert(username);
        //e.preventdefault();
        console.log(data);
        return;
    }
    return (
        <>
        <div>
            <form >
            <input 
                type="text" 
                name="username" 
                value={username} 
                placeholder="username" 
                onChange={handlein}
                
            /><br/>
             <input 
                type="password" 
                name="password" 
                value={password} 
                placeholder="password" 
                onChange={handlein}
               
            /><br/>
            <button type="submit" onClick={submithandler}>submit</button>
            
        </form>    
        </div>
        </>
        
    )
}
