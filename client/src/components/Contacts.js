import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';

export default function Contacts() {
    const { contacts } = useContacts()
    const { removeContact } = useContacts()

    return (
        <ListGroup variant='flush'>
            {contacts.map(contact => (
                <ListGroup.Item key={contact.id}>
                    {contact.name} 
                    <button 
                    type="button" 
                    class="btn-close" 
                    aria-label="Close" 
                    style={{float:"right"}} 
                    onClick={removeContact}>
                    </button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
