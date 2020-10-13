import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {
    const { counter , increment } = useCounter(1);

    const state = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);


    const { loading , data} = state;

    const { author, quote } =  !!data && data[0];

    //console.log( author, quote);    

    
    return (
        <div>
            <h1>Breaking Bad quotes!</h1>
            <hr/>


            {
                loading ? 
                (
                    <div className="alert alert-info text-center">
                        Loading...

                    </div>

                )
                : 
                (

                    <blockquote  className="blockquote text-right">
                        <p className="mb-0"> {quote}</p>
                <footer className="blockquote-footer"> { author}</footer>
                    </blockquote>

                )
            }

            <button
                className="btn btn-primary"
                onClick={increment}
                >
                siguiente quote
            </button>
        </div>
    )
}
