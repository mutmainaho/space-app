import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
//import explore from '../assets/home/Group.png'


function Home() {
  return (
    <div>
      <section className="home">
      <div className="context">
            <article className="main-text" > 
            <h5> SO, YOU WANT TO TRAVEL TO </h5>
            <h1>SPACE</h1>
            <p> Let’s face it; if you want to go to space, you might as well<br/>
               genuinely go to outer space and not hover kind of on the <br/>
               edge of it. Well sit back, and relax because we’ll give you a  <br/>
                truly out of this world experience!</p>
                </article>
                <div className="button-wrapper">
                    <Link className='link' to='/destination'>
                        <button>EXPLORE</button>
                    </Link>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Home