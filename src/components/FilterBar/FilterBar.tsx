import { useEffect, useState } from "react";
import cardData from "../../data/cards";
import FilterButton from "../FilterButton/FilterButton";

interface FilterBarProps {
  filterValue(e: string): void
}

const FilterBar = ({ filterValue }: FilterBarProps) => {

  const uniqFiltersArr = cardData.reduce((acc: string[], elem) => {
    if (!acc.includes(elem.category)) acc.push(elem.category);
    return acc;
  }, []);

  const [activeElement, setActiveElement] = useState(uniqFiltersArr[0]);

  useEffect(() => {
    filterValue(activeElement);
  }, [activeElement]);

  const handleClick = (id: string) => {
    activeElement !== id && setActiveElement(id);
  };

  return (
    <div className='filter-bar'>
      <ul className='filter-bar__list'>
        {uniqFiltersArr.map((item) => (
          <FilterButton
            key={item}
            id={item}
            activeElement={activeElement}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
