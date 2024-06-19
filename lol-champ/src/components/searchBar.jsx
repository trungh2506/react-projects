import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetChampionByNameQuery } from "../champApi";
import { handleSearch } from "../searchSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [champName, setChampName] = useState("");
  const handleSubmit = () => {
    dispatch(handleSearch(champName));
  };
  return (
    <div>
      <h2>Enter the name of LOL champion</h2>
      <input
        type="text"
        value={champName}
        onChange={(e) => {
          setChampName(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
