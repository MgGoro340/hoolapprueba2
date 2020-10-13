import React from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css'



export const FormWithCustomHook = () => {


    const [formValue,handleInputChange] = useForm  ({
        name:'',
        email:'',
        password:''
    });


    const { name , email, password } = formValue;

 


    return (
        <>
          <h1> FormWithCustomHook </h1>
          <hr />

          <div className="form-group">

              <input
                 type="text"
                 name="name"
                 className="form-control"
                 placeholder="tu nombre"
                 autoComplete="off"
                 value = {name}
                 onChange={handleInputChange}
              ></input>

              <input
                 type="text"
                 name="email"
                 className="form-control"
                 placeholder="tu mail"
                 autoComplete="off"
                 value = {email}
                 onChange={handleInputChange}
              ></input>

              <input
                 type="password"
                 name="password"
                 className="form-control"
                 placeholder="********"
                 autoComplete="off"
                 value = {password}
                 onChange={handleInputChange}
              ></input>

          </div>

        </>
    )
}
