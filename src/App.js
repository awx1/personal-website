import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Work from './components/Work/Work';

let wayOfLife = ["#E6CDD0", "#EAE7E5", "#CEC7C4", "#F3F4F6", "#E2DFC6"];
let softGradient = ["#FDE9F5", "#EFE2F4", "#E1DAF4", "#D2D3F3", "#C4CBF2"];
let alwaysBeautiful = ["#FDF4C5", "#FAD7B7", "#F3B5AB", "#EE9CA3", "#E7809E"];
let whiteAndCream = ["#FFFED2", "#FEFFED", "#FFFFFF", "#FFFBF1", "#F0DFBC"];
let successful = ["#99D1F2", "#B6DDF4", "#FEFAF2", "#FCE9C9", "#FAD2DC"];
let surgicalMask = ["#8BE3D9", "#A1F0EB", "#BEF4F4", "#D4F8F9", "#88CFF9"];
let softMusic = ["#E7E1F7", "#FAE9F4", "#FCF3EE", "#FFFFF", "#FFE8D9"];
let peachAndCream = ["#FDBF89", "#FFCD9A", "#FDD8AC", "#FBE9CA", "#FFFEEE"];

const palettes = [
  wayOfLife,
  softGradient,
  alwaysBeautiful,
  whiteAndCream,
  successful,
  surgicalMask,
  softMusic,
  peachAndCream,
];

const selectedPalette = palettes[Math.floor(Math.random() * palettes.length)];


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Body">
        <section id="about" style={{ backgroundColor: selectedPalette[0] }}>
          <About />
        </section>
        <section id="work" style={{ backgroundColor: selectedPalette[2] }}>
          <Work />
        </section>
        <p style={{ textAlign: "center" }}>
          <i>Website last updated 7/06/21</i>
        </p>
      </div>
    </div>
  );
}

export default App;
