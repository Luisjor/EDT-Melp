import React from "react";
import "./App.css";

import Article from "./Components/Articles";
import Header from "./Components/Header";


function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:3000/', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  React.useEffect(() => {
    makeAPICall();
  }, [])

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
