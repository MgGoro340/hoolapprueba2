import React, { useEffect, useState } from 'react'

import './effects.css'
import { Messaje } from './Messaje';


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name:'',
        email:''
    });


    const { name , email } = formState;

    useEffect ( () => {
       console.log("hey!!!!");
    },[]);


    useEffect ( () => {
       console.log("formState cambió!!!!");
    },[formState]);

    useEffect ( () => {
       console.log("email419 cambió!!!!");
    },[email]);

    const handleInputChange = ( {target}) => {
        setFormState ({
          ...formState,
           [ target.name ]: target.value}
        );
    };



    return (
        <>
          <h1> use effect </h1>
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

         { name === '123' && <Messaje />}

          </div>

        </>
    )
}
