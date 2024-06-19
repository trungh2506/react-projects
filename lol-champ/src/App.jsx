import { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import Champion from "./components/champion";
import { useGetChampionByNameQuery } from "./champApi";
import { useSelector } from "react-redux";

function App() {
  const searchState = useSelector((state) => state.search);
  return (
    <div>
      <SearchBar></SearchBar>
      {searchState && <Champion championName={searchState}></Champion>}
    </div>
  );
}

export default App;
