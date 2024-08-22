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
                <h3>Marling School</h3>
                    <p id="awardtitle">A Levels (2022):</p>
                        <p>Mathematics - A*</p>
                        <p>Further Mathematics - A*</p>
                        <p>Computer Science - A*</p>
                        <p>Physics - A*</p>

                    <br></br>

                    <p id="awardtitle">GCSEs (2020):</p>
                        <p>11 subjects grade 9-7 as:</p>
                        <p>Six at grade 9 - including Mathematics</p>
                        <p>Three at grade 8 - including English Language</p>
                        <p>Two at grade 7</p>
                        {/* <div id="twocoloumns">
                            <p>Mathematics - 9</p>
                            <p>Chemistry - 9</p>
                            <p>Design and Technology - 9</p>
                            <p>English Language - 8</p>
                            <p>History - 8</p>
                            <p>Biology - 9</p>
                            <p>Physics - 9</p>
                            <p>Latin - 9</p>
                            <p>Computer Science - 8</p>
                            <p>English Literature - 7</p>
                            <p>Religious Education - 7</p>
                        </div> */}
                        
                </section>
            </div>
         </main>
         </div>
        )
    }
}