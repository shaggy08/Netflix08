import React, { useState, useEffect } from "react";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Netflix treding" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Commedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romace" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Documentry" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
