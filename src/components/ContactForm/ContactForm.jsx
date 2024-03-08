import React, { useState, useEffect } from 'react';
import css from './contactForm.module.css'
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactForm = ({ onAddNewContact }) => {

  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if(e.target.name ===  "name") {
      setName(e.target.value)
    } else if (e.target.name === "number") {
      setNumber(e.target.value)
    }
  }


  const handleFormSubmit = e => {
    e.preventDefault();

    const {name, number} = e.currentTarget.elements;

    const formData = {
      name: name.value,
      number: number.value
    }

    onAddNewContact(formData);

 // Очистити стани
   setName('');
   setNumber('');
};
  



  return(

    <form onSubmit={handleFormSubmit} className={css.form}>
      <div className={css.contactImput}>

      <label className={css.contactName}>
        <span><IoMdContact className={css.telIcon}/></span>
        <input 
          className={css.inputCon}
          type='text'
          name='name'
          required
          placeholder='Jennie Kim'
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={css.contactTel} >
        <span><BsFillTelephoneFill className={css.telIcon}/></span>
        <input
          className={css.inputCon}
          type='tel'
          name='number'
          required
          placeholder='2345678'
          value={number}
          onChange={handleChange} />
      </label>

      </div>

          
      {name === "Jennie Kim" && <p>Jennie Kim is a popular korean singe. Are you sure you know her number?</p>}
      <button type='submit'>Add contact</button>

    </form>
    );
}

export default ContactForm

  // const Form = ({onAdd}) => {
  //   const handleSubit = (evt) => {
  //       evt.preventDefault();
  //       onAdd({
  //           id: nanoid(),
  //           text: evt.target.elements.text.value,
  //       });
  //       evt.target.reset();
    
  //   }