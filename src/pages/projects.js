import React from "react"

import logo5 from "../pictures/logo5.png"
import planets from "../pictures/planets2.png"
import snake from "../pictures/snake.png"
import game from "../pictures/game2.png"
import birdsongidentifier from "../pictures/birdsongidentifier.jpg"

import Snake from "../projects/snake"
import Planets from "../projects/planets";
import PuzzlePlatformer from "../projects/puzzleplatformer";
import BirdSongIdentifier from "../projects/birdsongidentifier";

import { Header } from "../components/header";
import { Card } from "../components/card";

export default class Projects extends React.Component{
    showProject(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        console.log(x.length)
        if(x.length <= 0){
            return;
        }
        for (i = 0; i < x.length; i++) {
            x.item(i).style.display = "none";
        }
        x.item(n-1).style.display = "block";
    }

    render(){
        return(
            <div>
            {/* <Header active={"projects"} /> */}
            <main>
            <div id="projects">
                <div class="background"></div> 
                <section class="intro">
                <h3>Projects</h3>

                {/* Could split into hardware, games and sketches */}
                    <div class="work">
                        <Card func={() => this.showProject(1)} image={logo5} content={"Space Worm"} />
                        <Card func={() => this.showProject(2)} image={game} content={"2D Puzzle Platformer"} />
                        <Card func={() => this.showProject(3)} image={birdsongidentifier} content={"Portable Bird Song Identifier"} />
                        <Card func={() => this.showProject(4)} image={snake} content={"Snake with Routing Algorithm"} />
                        <Card func={() => this.showProject(5)} image={planets} content={"ThreeJS Planets Sketch"} />
                    </div>
                </section>

                <div className="mySlides">1</div>
                <div className="mySlides">2</div>
                <div className="mySlides">3</div>
                <div className="mySlides">4</div>
                <div className="mySlides">5</div>
                {/* <div class="mySlides"><PuzzlePlatformer /></div>
                <div class="mySlides"><BirdSongIdentifier /></div>
                <div class="mySlides"><Snake /></div>
                <div class="mySlides"><Planets /></div> */}
            </div>
            </main>
            </div>
        )
    }
}