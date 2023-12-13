import React from "react"
import {Link} from "react-router-dom"

import logo3 from "../pictures/logo3.png"

export function Header(props){
    let active = props.active.toLowerCase()
    let homeClass = "nav-link"
    let projectsClass = "nav-link"
    let educationClass = "nav-link"
    let spacewormClass = "nav-link"
    if(active === "home"){
        homeClass += " active"
    }
    else if(active === "projects"){
        projectsClass += " active"
    }
    else if(active === "education"){
        educationClass += " active"
    }
    else if(active === "spaceworm"){
        spacewormClass += " active"
    }

    return (
        <header>
			<Link class="logo" to="/"><img src={logo3} alt="logo" /></Link>
			<nav>	
		 		<ul class="nav-bar"><div class="bg"></div>
					<li><Link class={homeClass} to="/">Home</Link></li>
					<li><Link class={projectsClass} to="/projects">Projects</Link></li>
					<li><Link class={educationClass} to="/education">Education</Link></li>
					<li><Link class={spacewormClass} to="/spaceworm">Space Worm</Link></li>
		 		</ul>
			</nav>
	    </header>
    )
}