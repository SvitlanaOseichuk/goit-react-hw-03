import React from 'react'
import css from './Contact.module.css'
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({data: {id, name, number}, onDelete}) => {
  return (
    <div className={css.contact}>
      <h2 className={css.contactName}>
        <IoMdContact className={css.telIcon}/>
        {name}
      </h2>

      <p className={css.contactTel} >
        <BsFillTelephoneFill className={css.telIcon}/>
        {number}
      </p>

      <button onClick={()=>{onDelete(id)}}>Delete</button>
    </div>
  )
}

export default Contact

