import React, { useState } from 'react'
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks'
//import './effects.css'
import '../useEffect/effects.css'
export const RealExampleUseRef = () => {


    const [show, setShow] = useState(false);



    return (
        <div>
            <h1>  uso real de useRef </h1>
            <hr/>

            { show && <MultipleCustomHooks/> }


            <button
                className="btn btn-primary mt-5"
                onClick= {
                    () => {
                        setShow(!show);
                    }
                }
            >
                show / hide
            </button>
            

        </div>
    )
}
