import React from "react"

import { Header } from "../components/header";

export default class Home extends React.Component{
    render(){
        return(
            <div>
			<Header active={"Home"} />
            <main>
            <div id="home">
		        <div class="background"></div>
		        <section class="intro">
		            <h3>Ben Fielder</h3>
		                <p>Computer Science Student at the University of Warwick.</p>
		                <p>Has experience with Java, C, Python, C#, JavaScript and Arduino.</p>
                        <p>Owner and Head Engineer of the Game Developer Space Worm.</p>
						<br></br>

						<a href="https://github.com/BenFielder1" target="_blank" rel="noreferrer"><i class='fab fa-github'></i></a>
						<a href="https://www.linkedin.com/in/ben-fielder-38a9ba276/" target="_blank" rel="noreferrer"><i class='fab fa-linkedin'></i></a>
			 
		        </section> 
	        </div>
         	</main>
         	</div>
        )
    }
}