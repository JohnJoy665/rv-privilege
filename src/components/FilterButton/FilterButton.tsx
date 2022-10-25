type props = {
  id: string,
  activeElement: string,
  handleClick: any
};

const FilterButton = ({id, activeElement, handleClick}:props) => {
  const isActive = id === activeElement ? true : false

  return (
    <div onClick={() => handleClick(id)} className={`filter-bar__btn ${isActive && 'filter-bar__btn_active'}`}>
      {id}
    </div>
  )
}

export default FilterButton;
