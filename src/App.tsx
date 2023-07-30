import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormWizard from "./components/FormWizard";
import Home from "./components/Home";
import InfiniteScroll from "./components/InfiniteScroll";
import ShortenUrl from "./components/ShortenUrl";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/infinite-scroll" element={<InfiniteScroll />} />

          <Route path="/form-wizard" element={<FormWizard />} />

          <Route path="/shorten-url" element={<ShortenUrl />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
