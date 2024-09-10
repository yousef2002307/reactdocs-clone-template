import React from 'react';
import { useState } from 'react'
import {userfdata} from '../../data';
interface IUser {
    name: string;
    email: string;
}

function Form() {
    console.log(userfdata);
   const [userdata,setuserdata] = useState< IUser>({name:"",email:""})
    const changeevent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value,name} = event.target;
        setuserdata({
            ...userdata,
            [name]:value
        })
    }
    const formdata = userfdata.map(input => {
        return(
            <React.Fragment key={input.id}>
                <input type={`${input.type}`} name={`${input.name}`} id={`${input.id}`} value={userdata[input.name]} onChange={changeevent}/>
                
            </React.Fragment>
        )
    })
    return (
        <div>
            <form>
                {/* <input type="text" name='name' id='name' value={userdata.name} onChange={changeevent}/>
                <input type="email" name="email" id="email" value={userdata.email} onChange={changeevent}/>
                <input type="submit" value="Submit" /> */}
                {formdata}
            </form>
        </div>
    )
}

export default Form;