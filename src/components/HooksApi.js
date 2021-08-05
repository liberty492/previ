import axios from 'axios'
import React from 'react'
import { useState } from 'react'

var styles={
    padding:"",
    height:""
}
 const HooksApi=()=> {

     const [users,setusers]=useState({
         name:'',
         email:'',
         phone:'',
         city:''
     })
     const {name,email,phone,city}=users
     const HandleFormControl=(e)=>
     {
         setusers({ ...users, [e.target.name]:e.target.value })
     }

    //  const SubmitFormData=()=>{
    //      axios.post(users/url).then( ()=>history.push('/hooksapi') )
    //  }
     console.log(users.name)
    return (<>
        <div className="container border m-1px">
            <form>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={name}
                     onChange={HandleFormControl.bind(this)}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={email}
                     onChange={HandleFormControl.bind(this)}/>
                </div>
                <div className="form-group">
                    <label className="form-label">phone</label>
                    <input type="number" className="form-control" name="phone" value={phone} 
                     onChange={HandleFormControl.bind(this)}/>
                </div>
                <div className="form-group">
                    <label className="form-label">City</label>
                    <input type="text" style={{}} className="form-control" name="city" value={city}
                    onChange={HandleFormControl.bind(this)}
                    />
                </div>
                <div className="form-group">
                   <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </>)
}
export default HooksApi