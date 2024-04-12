import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurLocations from "./components/OurLocations";
import WayAbout from "./components/WayAbout";

function App() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <HeroSection />
      <OurLocations />
      <WayAbout />
    </div>
  );
}

export default App;
