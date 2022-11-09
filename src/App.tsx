import { useState } from "react";
import "./app.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import FilterBar from "./components/FilterBar/FilterBar";
import Modal from "./components/Modal/Modal";
import Title from "./components/Title/Title";
import { UseModalState } from "./hooks/UseModalState";
import {IprivilegeDatа} from "./interfaces/models";


function App() {

  const [newFilter, setNewFilter] = useState("");
  const [cardData, setcardData] = useState<IprivilegeDatа | undefined>(undefined);
  const { isOpen, onOpen, onClose } = UseModalState();

  const setFilter = (activeElement:string) => {
    setNewFilter(activeElement);
  };

  const setModalCard = (e: React.MouseEvent<HTMLElement>, cardData: IprivilegeDatа) => {
    setcardData(cardData);
    onOpen();
  };

  return (
    <>
      <div className="app">
        <Title />
        <FilterBar filterValue={setFilter} />
        <CardContainer handleClick={setModalCard} newFilter={newFilter} />
        {cardData && <Modal handleClose={onClose} open={isOpen} dataCard={cardData}/>}
      </div>
    </>
  );
}

export default App;
