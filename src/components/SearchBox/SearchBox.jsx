import React from 'react'

const SearchBox = ({value, onFilter}) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label>
        <input
         type='text' 
         value={value}
         onChange={(evt) => onFilter(evt.target.value)}></input>
      </label> 
    </>
  )
}

export default SearchBox