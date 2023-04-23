import React from "react"
import {Link} from "react-router-dom";

import logo3 from "../pictures/logo3.png"
import logo5 from "../pictures/logo5.png"
import planets from "../pictures/planets2.png"
import snake from "../pictures/snake.png"
import game from "../pictures/game2.png"

export default class Projects extends React.Component{
    render(){
        return(
            <div class="a">
            <header>
            <Link class="logo" to="/"><img src={logo3} alt="logo" /></Link>
		<nav>	
		 <ul class="nav-bar"><div class="bg"></div>
            <li><Link class="nav-link" to="/">Home</Link></li>
			<li><Link class="nav-link active" to="/projects">Projects</Link></li>
			<li><Link class="nav-link" to="/spaceworm">Space Worm</Link></li>
		 </ul>
		</nav>
	    </header>
            <main>
            <div id="projects">
                <div class="background"></div> 
                <section class="intro">
                <h3>My Projects</h3>
                    <p>Here are some of my projects</p>
                    <div class="work-box">
                    <div class="work">
                        <div class="card">
			                <img class="work-img" src={logo5} />
			                <Link to="/spaceworm">
				            <div class="work-content">Space Worm</div></Link>
                        </div>
                        <div class="card">
			                <img class="work-img" src={game} />
			            	<Link to="/projects/alevel">
			            	<div class="work-content">A level project</div></Link>
                        </div>
                        <div class="card">
			                <img class="work-img" src={snake} />
			            	<Link to="/projects/snake">
			            	<div class="work-content">Snake with routing algorithm</div></Link>
                        </div>
			            <div class="card">
			                <img class="work-img" src={planets} />
			            	<Link to="/projects/planets">
			            	<div class="work-content">ThreeJS Sketch</div></Link>
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