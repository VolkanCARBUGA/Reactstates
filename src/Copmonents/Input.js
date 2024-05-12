import React, { useState } from 'react'

function Input(){
const[form,setForm]=useState({name:"",surName:""})

const changeInput=(event)=>{
    console.log(event.target.name)
    setForm({...form, [event.target.name]:event.target.value})
}
//const changeSurName=(event)=>setSurName(event.target.value)
    return(
        <div>
            İsminizi Yazın   
          <input name='name' placeholder='İsmini yaz' value={form.name}onChange={changeInput} />
        
          <br></br>
          <br></br>
          <input name='surName' placeholder='Soy ismini  yaz' value={form.surName}onChange={changeInput} />
          <br></br>
          <br></br>
         {form.name} {form.surName}
      
        </div>
   
    )
}
export default Input