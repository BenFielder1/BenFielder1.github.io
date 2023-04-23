import React from "react"
import {Link} from "react-router-dom";

import logo3 from "../pictures/logo3.png"
import pyramid from "../pictures/colourpyramid.png"

export default class SpaceWorm extends React.Component{
    render(){
        return(
            <div>
            <header>
            <Link class="logo" to="/"><img src={logo3} alt="logo" /></Link>
		<nav>	
		 <ul class="nav-bar"><div class="bg"></div>
			<li><Link class="nav-link" to="/">Home</Link></li>
			<li><Link class="nav-link" to="/projects">Projects</Link></li>
			<li><Link class="nav-link active" to="/spaceworm">Space Worm</Link></li>
		 </ul>
		</nav>
	    </header>
            <main>
            <div id="spaceworm">
		        <div class="background"></div>
		        <section class="intro">
		            <h3>Space Worm</h3>
		                <p>Game Developer using Unity and C#.</p>
		                <p>Currently working on Pyramid Numbers.</p>
                

                    <div class="work-box">
                    <div class="work">
                        <div class="card">
			                <img class="work-img" src={pyramid} />
			                <Link to="/spaceworm/pyramidnumbers">
				            <div class="work-content">Pyramid Numbers</div></Link>
                        </div>
                    </div>
                    </div>
		        </section> 
	        </div>
         </main>
         </div>
        )
    }
}