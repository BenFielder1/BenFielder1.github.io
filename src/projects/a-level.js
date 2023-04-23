import React from "react"
import {Link} from "react-router-dom";

import logo3 from "../pictures/logo3.png"

export default class ALevel extends React.Component{
    render(){
        return(
            <div>
            <header>
		<a class="logo" href="#home">
              <img src={logo3} alt="logo" />
		</a>
		<nav>	
		 <ul class="nav-bar"><div class="bg"></div>
			<li><Link class="nav-link" to="/">Home</Link></li>
			<li><Link class="nav-link" to="/projects">Projects</Link></li>
			<li><Link class="nav-link" to="/spaceworm">Space Worm</Link></li>
		 </ul>
		</nav>
	    </header>
            <main>
            <div id="projects">
            <div class="alevelback"></div> 
                <section class="projectcloseup">
                <h3>My A Level Computer Science Project</h3>
                    <p>A 2D puzzle platformer</p>
		            <p>View the documentation <a href="https://marling-school.gitbook.io/ben-fielder-project/mwuMyra54ckM6LNoVF1W/" target="_blank">here</a>, and the code <a href="https://github.com/Marling-CS-Projects/Ben-Fielder-A-Level-Project" target="_blank">here</a>.</p>
                    {/* <p>Play the game <a href="http://ben-fielder-a-level-project.herokuapp.com/" target="_blank">here</a>.</p> */}
                    {/* <p>Play the offline version <Link to="game">here</Link>.</p> */}
                </section>
            </div>
         </main>
         </div>
        )
    }
}