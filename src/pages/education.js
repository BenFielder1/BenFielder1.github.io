import React from "react"

import warwick from "../pictures/warwick.jpg"
import marling from "../pictures/marling-school.jpg"

import { Header } from "../components/header";
import { Card } from "../components/card";

export default class Education extends React.Component{
    render(){
        return(
            <div>
			<Header active={"education"} />
            <main>
            <div id="education">
		        <div class="background"></div>
		        <section class="intro">
		            <h3>Education</h3>
		                <p>Currently studying Computer Science at the University of Warwick.</p>

                        <div class="work">
							<Card link={"/education/warwick"} image={warwick} content={"University of Warwick"} />
							<Card link={"/education/marling"} image={marling} content={"Marling School"} />
                        </div>
			 
		        </section> 
	        </div>
         	</main>
         	</div>
        )
    }
}