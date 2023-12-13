import React from "react"
import {Link} from "react-router-dom"

import { Header } from "../components/header";

export default class PuzzlePlatformer extends React.Component{
    render(){
        return(
            <div>
            <Header active={""} />
            <main>
            <div id="projects">
            <div class="alevelback"></div> 
                <section class="projectcloseup">
                    <h3>2D Puzzle Platformer</h3>
                    <p>For my A Level Computer Science project.</p>
		            <p>View the <a href="https://marling-school.gitbook.io/ben-fielder-project/mwuMyra54ckM6LNoVF1W/" target="_blank" rel="noreferrer" id="link-text">documentation here</a>, and the <a href="https://github.com/Marling-CS-Projects/Ben-Fielder-A-Level-Project" target="_blank" rel="noreferrer" id="link-text">code here</a>.</p>
                    <p>(Note: there may be some bugs as outlined in documentation)</p>
                    <br></br>

                    <Link to="/projects/puzzleplatformer/game"><button id="playbutton"><span id="span"></span>PLAY</button></Link>
                </section>
            </div>
         </main>
         </div>
        )
    }
}