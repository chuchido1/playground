import React, { useState } from "react";
import Wrapper from "../UI/Wrapper";
import "./EntryForm.css";

const EntryForm = (props) => {
  const [enteredEntryData, setEnteredEntryData] = useState({
    enteredTitle: "",
    enteredDate: "",
    enteredContent: "",
  });

  const handleTitleChange = (event) => {
    setEnteredEntryData((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const handleDateChange = (event) => {
    setEnteredEntryData((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const handleContentChange = (event) => {
    setEnteredEntryData((prevState) => {
      return { ...prevState, enteredContent: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const entryData = {
      title: enteredEntryData.enteredTitle,
      date: new Date(enteredEntryData.enteredDate + "T00:00"),
      content: enteredEntryData.enteredContent,
    };

    props.onSaveEntryData(entryData);

    setEnteredEntryData({
      enteredTitle: "",
      enteredDate: "",
      enteredContent: "",
    });
  };

  return (
    <Wrapper className="formWrapper">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label>Titulo</label>
          <input
            type="text"
            size="50"
            placeholder="Inserte aquí el título de la entrada del post."
            value={enteredEntryData.enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="date">
          <label>Fecha</label>
          <input
            type="date"
            value={enteredEntryData.enteredDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="content">
          <label>Contenido</label>
          <textarea
            rows="5"
            cols="50"
            placeholder="Inserte aquí el contenido de la entrada del post."
            value={enteredEntryData.enteredContent}
            onChange={handleContentChange}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </Wrapper>
  );
};

export default EntryForm;
