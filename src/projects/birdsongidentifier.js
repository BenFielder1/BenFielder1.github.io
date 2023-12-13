import React from "react"
import ReactPlayer from 'react-player'

import video from "../pictures/birdidentifiervid.mp4"

import { Header } from "../components/header";

export default class BirdSongIdentifier extends React.Component{
    render(){
        return(
            <div>
            <Header active={""} />
            <main>
            <div id="projects">
            <div class="birdsongidentifier"></div> 
                <section class="projectcloseup">
                <h3>Portable Bird Song Identifier</h3>
                    <p>A handheld device used to help you identfy birds from their song.</p>
                    <p>The program is run on an Arduino Uno.</p>
                    <p>Play the video to see an example (turn up the volume to hear the bird songs at the end).</p>
                    <br></br><br></br>
		            
                    <ReactPlayer url={video} controls={true} id="video" />

                </section>
            </div>
         </main>
         </div>
        )
    }
}