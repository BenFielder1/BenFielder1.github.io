import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./css/main.css"
import "./css/header.css"
import "./css/home.css"
import "./css/projects.css"
import "./css/education.css"
import "./css/spaceworm.css"
import "./css/card.css"

import Home from "./pages/home";
import Projects from "./pages/projects";
import SpaceWorm from "./pages/spaceworm";
import Education from "./pages/education";

import Snake from "./projects/snake"
import Planets from "./projects/planets";
import PuzzlePlatformer from "./projects/puzzleplatformer";
import BirdSongIdentifier from "./projects/birdsongidentifier";

import PlatformerGame from "./projects/puzzleplatformergame/platformergame";

import Warwick from "./education/warwick";
import Marling from "./education/marling";

import PyramidNumbers from "./spaceworm/pyramidnumbers";

export default function Main() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/spaceworm" element={<SpaceWorm />} />
            <Route path="/education" element={<Education />} />

            <Route path="/projects/snake" element={<Snake />} />
            <Route path="/projects/planets" element={<Planets />} />
            <Route path="/projects/puzzleplatformer" element={<PuzzlePlatformer />} />
            <Route path="/projects/birdsongidentifier" element={<BirdSongIdentifier />} />

            <Route path="/projects/puzzleplatformer/game" element={<PlatformerGame />} />

            <Route path="/spaceworm/pyramidnumbers" element={<PyramidNumbers />} />

            <Route path="/education/warwick" element={<Warwick />} />
            <Route path="/education/marling" element={<Marling />} />
        </Routes>
      </BrowserRouter>
    );
}