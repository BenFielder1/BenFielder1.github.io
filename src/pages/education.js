import React from "react"

import { Header } from "../components/header";

export default class Education extends React.Component{
    render(){
        return(
            <div>
			{/* <Header active={"education"} /> */}
            <main>
            <div id="education">
		        <div class="background"></div>
		        <section class="intro">
		            <h3>University of Warwick</h3>
                    <p id="awardtitle">Computer Science BSc:</p>
                    <p>3rd Year Student</p>
                    <p>September 2022 - Present</p>
                    <p>Expected Graduation Date: June 2025</p>
			 
		        </section> 
	        </div>
         	</main>
         	</div>
        )
    }
}