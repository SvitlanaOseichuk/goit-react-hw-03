import React, { useState, useEffect } from 'react';
import './App.css';
import fullContact from './contacts.json';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

const App = () => {

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : fullContact
  });

  
  const [filter, setFilter] = useState('');



  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  

  const onAddNewContact = (newContactData) => {
    const FinalContact = {
      ...newContactData,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, FinalContact]);
  };


  const deleteContact= (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId)
    })
  }
  

  const searchContact = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
     <h1>Phonebook</h1>
     <ContactForm onAddNewContact={onAddNewContact} />
     <SearchBox filter={filter} onFilter={setFilter}/>
     <ContactList contacts={searchContact} onDelete={deleteContact} />
    </>
  )
}

export default App
