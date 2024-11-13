import React from 'react'
import { useState } from 'react'


const InputExample = () => {
//   const [name, setName] = useState('Mehmet')
//   const [surname, setSurname] = useState('')
  
  const [form, setForm] = useState({name:"",surname:""})

//   const onChangeName = (event) => setName(event.target.value);
//   const onChangeSurname = (event) => setSurname(event.target.value);
   
  const onChangeInput = (event) => {
console.log(event.target.name);
setForm({...form,[event.target.name]:event.target.value})
};

return (
    <div>
        Please enter a name
        <br></br>
        <input name="name" value={form.name} onChange={onChangeInput}></input>
        <br></br>
        Please enter a surname
        <br></br>
        <input name="surname" value={form.surname} onChange={onChangeInput}></input>
        <br></br>
        <br></br>
        {form.name} {form.surname} 
    </div>
  )
}

export default InputExample