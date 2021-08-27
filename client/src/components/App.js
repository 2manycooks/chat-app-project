import React from 'react';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import { ContactsProvider } from '../contexts/ContactsProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>

  )

  return (
    id ? dashboard : <Login onIdSubmit={setId}/>
  );
}

export default App;
