import React, { useState } from "react";
import "./App.css";
import Entry from "./components/Entry/Entry";
import EntryFilter from "./components/Entry/EntryFilter";
import EntryForm from "./components/Entry/EntryForm";

function App() {
  const [entrys, setEntrys] = useState([]);

  const handleSaveEntryData = (enteredEntryData) => {
    setEntrys((prevEntrys) => {
      return [enteredEntryData, ...prevEntrys];
    });
  };

  const [year, setYear] = useState("-1");
  const handleFilterByYear = (selectedYear) => {
    setYear(selectedYear);
  };

  let filteredEntrys = entrys.filter((entry) =>
    year === "-1" ? true : entry.date.getFullYear().toString() === year
  );

  let entrysContent =
    filteredEntrys.length <= 0 ? (
      <p>No content.</p>
    ) : (
      filteredEntrys
        .sort((a, b) => a.date - b.date)
        .map((entry, index) => (
          <Entry
            key={index}
            title={entry.title}
            date={entry.date.toDateString()}
            content={entry.content}
          />
        ))
    );

  return (
    <div>
      <EntryForm onSaveEntryData={handleSaveEntryData} />
      <EntryFilter
        years={entrys.map((entry) => entry.date.getFullYear()).sort()}
        onSelectedYear={handleFilterByYear}
      />
      {entrysContent}
    </div>
  );
}

export default App;
