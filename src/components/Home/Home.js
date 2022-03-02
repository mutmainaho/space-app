import { Link } from 'react-router-dom';
import './Home.css';
//import explore from '../assets/home/Group.png'


function Home() {
  return (
    <div>
      <section className="home">
      <div className="context">
            <article className="main-text" > 
            <h1 className="text"> SO, YOU WANT TO TRAVEL TO <br/></h1>
            <h1 className="block">SPACE</h1>
            <p> Let’s face it; if you want to go to space, you might as well<br/>
               genuinely go to outer space and not hover kind of on the <br/>
               edge of it. Well sit back, and relax because we’ll give you a  <br/>
                truly out of this world experience!</p>
                </article>
                <article className ="explore"> 
                <button className="btn">  
              <Link to="/destination">
                EXPLORE
                {/*  
                <img src={explore} alt="explore"/ >*/}
              </Link>
            </button>
            </article>
            </div>
      </section>
    </div>
  )
}

export default Home