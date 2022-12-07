interface FilterButtinProps {
  id: string,
  activeElement: string,
  handleClick: (e: string) => void
}

const FilterButton = ({id, activeElement, handleClick}: FilterButtinProps) => {
  const isActive = id === activeElement ? true : false;

  return (
    <div onClick={() => handleClick(id)} className={`filter-bar__btn ${isActive ? "filter-bar__btn_active" : ""}`}>
      {id}
    </div>
  );
};

export default FilterButton;