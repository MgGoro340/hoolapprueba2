
import React from 'react'

import './CounterApp.css'

import {useCounter} from '../hooks/useCounter.js'



export const CounterWithCustomHook = () => {

    const { state , increment, decrement, reset} = useCounter(150);

    return (
        <>
        <h1> Counter with Hook: {state}</h1>
        <hr />

        <button onClick={ () => increment(3) } className="btn btn-primary"> + 1</button>
        <button onClick={ reset } className="btn btn-primary"> Reset</button>
        <button onClick={ () =>  decrement(5) } className="btn btn-primary"> - 1</button>
        </>
        
    )
}
