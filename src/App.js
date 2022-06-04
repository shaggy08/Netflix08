import React, { useState, useEffect } from "react";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        className="top_row"
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Netflix treding" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}isLargeRow />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentry" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
      <Footer />
    </div>
  );
}

export default App;
