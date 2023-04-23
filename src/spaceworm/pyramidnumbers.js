import React from "react"
import {Link} from "react-router-dom";

import logo3 from "../pictures/logo3.png"
import pyramidnumbersapp from "../downloadables/Pyramid_Numbers_42.apk"

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
		                <p>Download for Android on the <a href="https://play.google.com/store/apps/details?id=com.SpaceWorm.PyramidNumbers" target="_blank">Play Store</a>.</p>
						<p>Or click <a href={pyramidnumbersapp} download="PyramidNumbers.apk">here</a>.</p>
                

		        </section> 
	        </div>
         </main>
         </div>
        )
    }
}