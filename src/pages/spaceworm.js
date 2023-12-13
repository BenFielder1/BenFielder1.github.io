import React from "react"

import pyramid from "../pictures/pyramidnumbersicon.png"
import spacewormicon from "../pictures/spacewormicon.png"

import { Header } from "../components/header";
import { Card } from "../components/card";

export default class SpaceWorm extends React.Component{
    render(){
        return(
            <div>
			<Header active={"spaceworm"} />
            <main>
            <div class="spaceworm">
		        <div class="background"></div>
		        <section class="intro">
		            <h3>Space Worm</h3>
						<p>My game developer and publisher name.</p>
		                <p>I primarily work with C# and Unity.</p>
						<p>View some of my games below.</p><br></br>

						<a href="https://www.spaceworm.co.uk" target="_blank" rel="noreferrer"><img src={spacewormicon} id="icon" alt="Icon" /></a>
						<a href="https://play.google.com/store/apps/dev?id=6182294895604559398" target="_blank" rel="noreferrer"><i class="fab fa-google-play"></i></a>
						<a href="https://www.youtube.com/@SpaceWorm-GameDeveloper" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a>
						<a href="https://github.com/space-worm" target="_blank" rel="noreferrer"><i class='fab fa-github'></i></a>
						
                    	<div class="work">
							<Card link={"/spaceworm/pyramidnumbers"} image={pyramid} content={"Pyramid Numbers"} />
                    	</div>
		        </section> 
	        </div>
         </main>
         </div>
        )
    }
}