import React, { useEffect, useState } from 'react'

export const Messaje = () => {

    const [coords, setCoords] = useState({x:0 , y :0});
    const { x , y } = coords; 


    useEffect(() => {



         const mousemove  = (e) => {

             const coors = { x:e.x , y: e.y};
            setCoords(coors);
             //console.log(":D");
           
         };

          console.log("componente montado");
          window.addEventListener('mousemove',mousemove );




        return () => {
            console.log("descomponente unmontado");
            window.removeEventListener('mousemove',mousemove );

        }
    }, [])
    return (
        <div>
            <h3>Eres genial!!!!!</h3>
            <p> 
                
                    x:{x}  y : {y}
                
            </p>
        </div>
    )
}
