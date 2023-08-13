import React, { useState } from 'react';
import "./topfold.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchXpense } from "../../redux/actions/expenses";

export default function Topfold() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value);
    dispatch(searchXpense(e.target.value));
  };

  return (
    <div className="topfold">
      <div className="searchbar">
        <input
          type="text"
          name="text"
          // value={query} //isko agar use karenge toh sirf 1 letter hi update hoga
          className="input-container_tag"
          placeholder="Add Expense..."
          onChange={(e) => handleQuery(e)}
        ></input>
      </div>
      <div className="addButton">
        <NavLink to="/add">
          <button id="addButton">ADD</button>
        </NavLink>
      </div>
    </div>
  );
}
