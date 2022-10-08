import React from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {

  return (
    <React.Fragment>
      <div className="app">
        {/* Componentes dentro del wrapper */}
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default App;
