import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      dispatch(getCountryByName(name));
    }
  };

  return (
    <form>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        placeholder="Busca tu país ..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </form>
  );
};

export default SearchBar;
