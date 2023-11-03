import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './pages/home/index';
import Login from './pages/auth/Login';
import './App.css';
import Index from './pages/home/index';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Index user={user} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/home"
          element={user ? <Home user={user} /> : <Navigate to="/Login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


