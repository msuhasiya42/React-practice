import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormWizard from "./components/FormWizard";
import Home from "./components/Home";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/infinite-scroll" element={<InfiniteScroll />} />

          <Route path="/form-wizard" element={<FormWizard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
