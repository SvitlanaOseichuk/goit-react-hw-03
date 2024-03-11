import React from 'react'
import { VscSearch } from 'react-icons/vsc';
import css from './SearchBox.module.css'

const SearchBox = ({value, onFilter}) => {
  return (
    <>
    <div className={css.SearchBox}>
      <p>Find contacts by name</p>
      <label className={css.SearchContLabel}>
        <VscSearch 
          className={css.inputIcon}  
        />
        <input
          type='text' 
          value={value}
          onChange={(evt) => onFilter(evt.target.value)}
          className={css.SearchContImput} 
         />
      </label> 
    </div>
    </>
  )
}

export default SearchBox