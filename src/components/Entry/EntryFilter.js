import React from "react";
import Wrapper from "../UI/Wrapper";
import "./EntryFilter.css";

const EntryFilter = (props) => {
  const handleSelectYear = (event) => {
    props.onSelectedYear(event.target.value);
  };

  return (
    <Wrapper className="filterWrapper">
      <label className="filterLabel">Filtrar por año</label>
      <select
        value={props.selectedYear}
        className="filterSelect"
        onChange={handleSelectYear}
      >
        <option value="-1">Mostrar todos</option>
        {props.years.map((year, index) => {
          return (
            <option key={index} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default EntryFilter;
