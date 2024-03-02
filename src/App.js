import React from "react";
import "./App.css";
import Card from "./component/Card/Card";
import Page from "./component/Card/Page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="main">
        <h1 className="heading-style">Book your session</h1>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/Page" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
