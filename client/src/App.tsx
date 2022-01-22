import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <Fragment>
      <Navbar />
      <h1>Moon Blog</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Fragment>
  );
}

export default App;
