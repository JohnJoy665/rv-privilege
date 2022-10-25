import { useEffect, useState } from 'react'
import data from '../../data/cards'
import FilterButton from '../FilterButton/FilterButton'

const FilterBar = ({filterValue}:{filterValue:any}) => {
  const allFilters: any = data.reduce((p, c) => p.add(c.category), new Set())
  const arrCat: string[] = [...allFilters]

  const [activeElement, setActiveElement] = useState(arrCat[0]);


  useEffect(() => {
    filterValue(activeElement)
  },[activeElement])


  const handleClick = (id: string) => {
    if (activeElement !== id) {
      setActiveElement(id)
    }
  }

  return (
    <div className='filter-bar'>
      <ul className='filter-bar__list'>
        {arrCat.map((item, index, arr) => {
          return <FilterButton
            key={item}
            id={item}
            activeElement={activeElement}
            handleClick={handleClick}
          />
        })}
      </ul>
    </div>
  )
}

export default FilterBar;
