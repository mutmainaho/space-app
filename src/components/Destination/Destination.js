//import React, { useState } from 'react'
//import './Destination.css'
//import  {destinations} from '../../data.json';

//import moon from '../assets/destination/image-moon.png'




//export default function Destination() {
  // const [planets] = useState(destinations)
   //const [value,setValue] = useState(0)


   //const{name, images, description, distance, travel} = 
   //planets[value]

//   return (
    /* 
    <div>
        {<section className = "home destination"> 
        <h1><span>01</span>Pick your Destination</h1>
        <div className="text" >
            <article>
            <img src={moon} alt={name} title={name}/>  
            </article>

            <article >
            
                <h2 className="name">{name}</h2>
                <p>
                    {description}
                </p>
                <ul>
                    <li> 
                        {distance}
                    </li>
                    <li> 
                        {travel}
                    </li>
                </ul>
            </article>


        </div>

        </section>
        
    </div>
  )
//}

 */

import React,  { useState }  from 'react'
import './Destination.css'
    import  {destinations} from '../../data.json';
import moon from '../assets/destination/image-moon.png'


export default function Destination() {
    const [planets] = useState(destinations)
    const [value,setValue] = useState(0)

    const{name, images, description, distance, travel} = 
   planets[value]
  return (
      
    <div>
        <section className=" home destination">
        <div className="text" >
            <article>
            <img src={moon} alt={name} title={name}/>  
            </article>

            <article >
            
                <h2 className="name">{name}</h2>
                <p>
                    {description}
                </p>
                <ul>
                    <li> 
                        {distance}
                    </li>
                    <li> 
                        {travel}
                    </li>
                </ul>
            </article>


        </div>
        

        </section>
    </div>
  )
}
