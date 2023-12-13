import React from "react"

import { Header } from "../components/header";

export default class Marling extends React.Component{
    render(){
        return(
            <div>
            <Header active={""} />
            <main>
            <div id="education">
            <div class="background"></div> 
                <section class="intro">
                <h3>A Level and GCSE</h3>
                    <p>4 A* grades at A level in Maths, Further Maths, Computer Science and Physics (2022).</p><br></br>

                    <p>11 GCSEs of which six were grade 9, three grade 8 and two grade 7 including</p>
                    <p>Maths grade 9 and English Language grade 8 (2020).</p><br></br>

                    <p>All from Marling School (2015 - 2022).</p>

                </section>
            </div>
         </main>
         </div>
        )
    }
}