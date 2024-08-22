import React from "react"

import logo5 from "../pictures/logo5.png"
import planets from "../pictures/planets2.png"
import snake from "../pictures/snake.png"
import game from "../pictures/game2.png"
import birdsongidentifier from "../pictures/birdsongidentifier.jpg"

import { Header } from "../components/header";
import { Card } from "../components/card";

export default class Projects extends React.Component{
    render(){
        return(
            <div>
            <Header active={"projects"} />
            <main>
            <div id="projects">
                <div class="background"></div> 
                <section class="intro">
                <h3>Projects</h3>

                {/* Could split into hardware, games and sketches */}
                    <div class="work">
                        <Card link={"/spaceworm"} image={logo5} content={"Space Worm"} />
                        <Card link={"/projects/puzzleplatformer"} image={game} content={"2D Puzzle Platformer"} />
                        <Card link={"/projects/birdsongidentifier"} image={birdsongidentifier} content={"Portable Bird Song Identifier"} />
                        <Card link={"/projects/snake"} image={snake} content={"Snake with Routing Algorithm"} />
                        <Card link={"/projects/planets"} image={planets} content={"ThreeJS Planets Sketch"} />
                    </div>
                </section>
            </div>
            </main>
            </div>
        )
    }
}