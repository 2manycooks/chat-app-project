import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    function createContact(id, name) {
        setContacts(prevContacts => {
            return [...prevContacts, { id, name }]
        })
    }

    function removeContact(id, name) {
        setContacts(prevContacts => {
            return contacts.filter(function(ele){
                return ele !== id || ele !== name
            })
        })
    }

    return (
        <ContactsContext.Provider value={{ contacts, createContact, removeContact }}>
            { children }
        </ContactsContext.Provider>
    )
}
