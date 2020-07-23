import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Generator from "./components/Generator";

function App() {
  return (
    <div className="container">
      <Header />
      <Generator />
      <Footer />
    </div>
  );
}

export default App;
