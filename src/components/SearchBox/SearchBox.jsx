import React from 'react'
import { VscSearch } from "react-icons/vsc";

const SearchBox = ({value, onFilter}) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label>
        <VscSearch 
        // className={css.inputCon}  
        />
        <input
         type='text' 
         value={value}
         onChange={(evt) => onFilter(evt.target.value)}
         />
      </label> 
    </>
  )
}

export default SearchBox