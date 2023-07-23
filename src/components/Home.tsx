import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <a href="/form-wizard">Form Wizard</a>
        </li>
        <li>
          <a href="/infinite-scroll">Infinite Scroll</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
