import { useState } from "react";
import "./app.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import FilterBar from "./components/FilterBar/FilterBar";
import Title from "./components/Title/Title";

function App() {

  const [newFilter, setNewFilter] = useState("");

  const setFilter = (activeElement:string) => {
    setNewFilter(activeElement);
  };

  return (
    <>
      <div className="app">
        <Title />
        <FilterBar filterValue={setFilter} />
        <CardContainer newFilter={newFilter} />
      </div>
    </>
  );
}

export default App;
