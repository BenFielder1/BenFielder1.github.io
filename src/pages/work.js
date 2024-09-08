import React from "react"

import { Header } from "../components/header";

export default class Work extends React.Component{
    render(){
        return(
            <div>
			<Header active={"work"} />
            <main>
            <div id="work">
		        <div class="background"></div>
		        <section class="intro">
		            <h3>Renishaw</h3>
                    <p>Software Engineer - Summer Placement</p>
                    <p>July 2024 - September 2024</p>
			 
		        </section> 
	        </div>
         	</main>
         	</div>
        )
    }
}