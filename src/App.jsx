import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './components/pages/Accueil';
import A_propos from './components/pages/A_propos';
import Contact from './components/pages/Contact';
import Faq from './components/pages/Faq';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import {useState, useEffect} from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import {auth} from'./assets/db/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [isFetch, setIsFetch] = useState(true);
  useEffect(() => {

    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetch(false);
        return;
      }
      setUser(null);
      setIsFetch(false);
      })

    return () => unsubscribe();
    }, []);

  if (isFetch) {
    return <h2>En cours de connexion...</h2>;
  }
  
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Dashboard" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>} />
          <Route path="/A_propos" element={<A_propos />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Login" element={<Login user={user} />} />
        </Routes>
      </div>
  );
}

export default App;
