import React from "react"

import { Header } from "../components/header";

export default class Warwick extends React.Component{
    render(){
        return(
            <div>
            <Header active={""} />
            <main>
            <div id="education">
            <div class="background"></div> 
                <section class="intro">
                <h3>Computer Science MEng</h3>
                    <p>Currently in 2nd year working towards a Computer Science MEng</p>
                    <p>at the University of Warwick (September 2022 - July 2026).</p>

                </section>
            </div>
         </main>
         </div>
        )
    }
}