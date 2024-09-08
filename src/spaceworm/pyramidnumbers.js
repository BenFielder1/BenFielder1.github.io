import React from "react"

import { Header } from "../components/header";

import pyramidnumbersapp from "../downloadables/PyramidNumbers.apk"

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
		                <p>Download for Android by clicking the download button below</p>
                        <p>Currently unavailable on the Play Store.</p>
						<br></br>

                        <a href={pyramidnumbersapp} download="PyramidNumbers.apk"><i class="fa-solid fa-download"></i></a>

		        </section> 
	        </div>
         </main>
         </div>
        )
    }
}