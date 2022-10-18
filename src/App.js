import React from "react";
import "./App.css";

import Article from "./Components/Articles";
import Header from "./Components/Header";
import Map from "./Components/Map";
import credentials from "./Components/credentials"

function App() {
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
  return (
    <>
      <Header/>
      <main>
        <Article/>
      </main>
    </>


  );
}

export default App;
