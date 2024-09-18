import React, { useState } from 'react'
import './FormComponent.css'
const FormComponent = (props) => {
    
const [name, setname] = useState("");
const [password, setPasswor] = useState("");
const [error, setError] = useState("");

const handleSubmit = (e)=>{
    e.preventDefault();
    if(name ===" " && password ===" "){
        setError(true)
    } else{
        setError(false)
        props.setUser([name])
    }
}
    return (
        <div>
            <h1>Formulario loguin</h1>
            <form className='form' onSubmit={handleSubmit} action="">
                <p>Nombre</p>
                <input type="text" value={name} onChange={e => {
                    setname(e.target.value)
                    console.log(e.target.value,"valor input");
                }}/>
                {error && <p className='error'>el campo es requerido</p> }
                <p>Password</p>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                {error && <p className='error'>el campo es requerido</p> }
                <button type='submit'>Ingresar</button>
            </form>
     
        </div>
    )
}

export default FormComponent