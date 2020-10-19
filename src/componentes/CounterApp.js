import React, { useState } from 'react'

import './CounterApp.css'

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10 ,
        counter2: 20 
    });
    //console.log(counter);
    
    const {counter1, counter2} = state;
    return (
        <>
          {/* <h1> {counter} </h1> */}
          <h1> counter1 {counter1} </h1>
          {/* <h1> counter2 {counter2} </h1> */}
          <hr/>

          <button 
            className="btn btn-primary"
            onClick= { 
                () => {
                     setCounter ( {
                         ...state,
                         counter1: counter1 + 1,
                     });
                }
            }>
              +1
          </button>  
        </>
    )
}
