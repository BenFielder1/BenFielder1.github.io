import React from "react"
import {Link} from "react-router-dom";

import logo3 from "../pictures/logo3.png"

export default class PyramidNumbers extends React.Component{
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
            <div id="spaceworm">
		        <div class="background"></div>
		        <section class="intro">
		            <h3>Pyramid Numbers</h3>
		                <p>A puzzle game involving numbers and pyramids</p>
		                <p>Download for Android on the Play Store.</p>
						<br></br>
						<a href="https://play.google.com/store/apps/details?id=com.SpaceWorm.PyramidNumbers1" target="_blank"><i class="fab fa-google-play"></i> Pyramid Numbers</a>
                

		        </section> 
	        </div>
         </main>
         </div>
        )
    }
}