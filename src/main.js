import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import "./main.css"
import logo3 from "./pictures/logo3.png"

import Home from "./pages/home";
import Projects from "./pages/projects";
import SpaceWorm from "./pages/spaceworm";

import Snake from "./projects/snake"
import Planets from "./projects/planets";
import ALevel from "./projects/a-level";

// import Alevelproject from "./alevelproject/alevelproject";

import PyramidNumbers from "./spaceworm/pyramidnumbers";

export default function Main() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/spaceworm" element={<SpaceWorm />} />

            <Route path="/projects/snake" element={<Snake />} />
            <Route path="/projects/planets" element={<Planets />} />
            <Route path="/projects/alevel" element={<ALevel />} />

            <Route path="/spaceworm/pyramidnumbers" element={<PyramidNumbers />} />
        </Routes>
      </BrowserRouter>
    );
}