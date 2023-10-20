import './App.css';
import { useState, useEffect } from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import Signup from './screens/Signup';
import About from './screens/About';
import UserProfile from './components/UserProfile';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import AfterSignupPage from './screens/AfterSignUp';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already authenticated when the app loads
    const token = localStorage.getItem('authToken'); // Replace with your actual token storage method

    fetch('http://localhost:4000/api/loginuser', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((userData) => {
      setUser(userData); // Update the user state with the fetched data
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
}
, []); // This effect runs once when the component loads

const handleLogin = (loggedInUser) => {
  setUser(loggedInUser);
}

return (
  <Router>
    <div>
      <Navbar user={user} onLogin={handleLogin} /> {/* Pass user and onLogin function to Navbar */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile user={user} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/loginuser" element={<Login />} />
        <Route exact path="/createuser" element={<Signup />} />
        <Route path="/signup" component={<Signup />} />
        <Route path="/aftersignup" component={<AfterSignupPage />} />

      </Routes>
      {user && <UserProfile user={user} />} {/* Display UserProfile when user is logged in */}
    </div>
  </Router>
);
}

export default App;
