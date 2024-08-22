import React from "react"

import { Header } from "../components/header";

export default class PyramidNumbers extends React.Component{
    render(){
        return(
            <div>
            <Header active={""} />
        <main>
            <div class="spaceworm">
		        <div id="pyramidnum"></div>
		        <section class="intro">
		            <h3>Pyramid Numbers</h3>
		                <p>A puzzle game involving numbers and pyramids</p>
		                <p>Download for Android available here soon</p>
                        <p>Currently unavailable on the Play Store.</p>
						<br></br>
						{/* <a href="https://play.google.com/store/apps/details?id=com.SpaceWorm.PyramidNumbers1" target="_blank" rel="noreferrer"><i class="fab fa-google-play"></i></a> */}
                

		        </section> 
	        </div>
         </main>
         </div>
        )
    }
}