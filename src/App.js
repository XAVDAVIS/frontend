import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import "./App.css";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));

    return () => {
      // Cleanup actions
      unsubscribe();
    }
    
}, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
};

export default App;
