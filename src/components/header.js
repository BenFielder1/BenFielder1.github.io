import React from "react"
import {Link} from "react-router-dom"

import logo3 from "../pictures/logo3.png"

export function Header(props){
    let active = ""
    // props.active.toLowerCase()
    let homeClass = "nav-link"
    let projectsClass = "nav-link"
    let educationClass = "nav-link"
    let spacewormClass = "nav-link"
    let workClass = "nav-link"
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
    else if(active === "work"){
        workClass += " active"
    }

    return (
        <header>
			<a class="logo" href="#home"><img src={logo3} alt="logo" /></a>
			<nav>	
		 		<ul class="nav-bar"><div class="bg"></div>
					<li><a class={homeClass} href="#home">Home</a></li>
                    <li><a class={workClass} href="#work">Work</a></li>
					<li><a class={projectsClass} href="#projects">Projects</a></li>
					<li><a class={educationClass} href="#education">Education</a></li>
					<li><a class={spacewormClass} href="#spaceworm">Space Worm</a></li>
		 		</ul>
			</nav>
	    </header>
    )
}