import React from "react";
import Wrapper from "../UI/Wrapper";
import "./Entry.css";

const Entry = (props) => {
  return (
    <Wrapper className="entryWrapper">
      <h1>{props.title}</h1>
      <h5>{props.date}</h5>
      <p>{props.content}</p>
    </Wrapper>
  );
};

export default Entry;
