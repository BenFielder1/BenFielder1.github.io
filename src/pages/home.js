import React from "react"
import {Link} from "react-router-dom";

import logo3 from "../pictures/logo3.png"

export default class Home extends React.Component{
    render(){
        return(
            <div>
            <header>
			<Link class="logo" to="/"><img src={logo3} alt="logo" /></Link>
		<nav>	
		 <ul class="nav-bar"><div class="bg"></div>
			<li><Link class="nav-link active" to="/">Home</Link></li>
			<li><Link class="nav-link" to="/projects">Projects</Link></li>
			<li><Link class="nav-link" to="/spaceworm">Space Worm</Link></li>
		 </ul>
		</nav>
	    </header>
            <main>
            <div id="home">
		        <div class="filter"></div>
		        <section class="intro">
		            <h3>Ben Fielder</h3>
		                <p>Computer Science Student at the University of Warwick.</p>
		                <p>Has experience with Python, Javascript, Java and C#.</p>
                        <p>Owner and head engineer of the game developer Space Worm.</p>
						<br></br>
						<a href="https://github.com/BenFielder1" target="_blank"><i class='fab fa-github'></i> BenFielder1</a>
						<a href="https://github.com/Space-Worm" target="_blank"><i class='fab fa-github'></i> Space Worm</a>
			 
		        <div class="social-media">
			        {/* <a href="#" target="_blank"><i class='fab fa-codepen'></i></a>
			        <a href="#" target="_blank"><i class='fab fa-twitter'></i></a> */}
			        {/* <a href="https://github.com/BenFielder1" target="_blank"><i class='fab fa-github'></i> BenFielder1</a>
					<a href="https://github.com/Space-Worm" target="_blank"><i class='fab fa-github'></i> Space Worm</a> */}
			        {/* <a href="#" target="_blank"><i class='fab fa-linkedin-in'></i></a>
			        <a href="#" target="_blank"><i class="fab fa-youtube"></i></a> */}
		        </div>
			 
		        </section> 
	        </div>
         </main>
         </div>
        )
    }
}