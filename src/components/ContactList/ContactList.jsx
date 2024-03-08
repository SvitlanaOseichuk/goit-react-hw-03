import React from 'react'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css' 


const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={css.contactLIst} >
        {contacts.map((contact) => (
          <li key={contact.id} className='css.contact'>
            <Contact data={contact} onDelete={onDelete}/>
          </li>
        ))}
      </ul> 
    </div>
  );
};


export default ContactList
