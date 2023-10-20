import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from './Signup';
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';

function AfterSignupPage({ name, email, location }) {
    // const history = useHistory();
    // After successful signup, redirect to the AfterSignupPage
    // history.push('/aftersignup');
    return (

        <div>
            <div><Navbar /></div>
            <h1>Welcome to our platform, {name}!</h1>
            <p>You have successfully signed up with the following details:</p>
            <ul>
                <li><strong>Name:</strong> {name}</li>
                <li><strong>Email:</strong> {email}</li>
                <li><strong>Location:</strong> {location}</li>
            </ul>
            <button>
                <Link to="/">Go to Home</Link>
            </button>
            <div><Footer /></div>
        </div>

    );
    
}

export default AfterSignupPage;
