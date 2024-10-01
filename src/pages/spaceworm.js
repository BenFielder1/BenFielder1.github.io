import React from "react"

import pyramid from "../pictures/pyramidnumbersicon.png"

import { Header } from "../components/header";
import { Card } from "../components/card";

export default class SpaceWorm extends React.Component{
    render(){
        return(
            <div>
			{/* <Header active={"spaceworm"} /> */}
            <main>
            <div id="spaceworm">
		        <div class="background"></div>
		        <section class="intro">
		            <h3>Space Worm</h3>
						<p>Game Developer and Publisher Brand.</p>
		                <p>Works with C# and Unity.</p>
						<p>View some games by Space Worm below.</p>

                    	<div class="work">
							{/* <Card link={"/spaceworm/pyramidnumbers"} image={pyramid} content={"Pyramid Numbers"} /> */}
                    	</div>
		        </section> 
	        </div>
         </main>
         </div>
        )
    }
}