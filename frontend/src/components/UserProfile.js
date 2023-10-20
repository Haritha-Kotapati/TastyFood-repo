
import React from 'react';


export default function UserProfile({ user }) {
  
  console.log('User Name: ',user)
    return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      {/* <p>Email: {user.email}</p>
      <p>Location: {user.geolocation}</p> */}
      {/* Add more user profile information here */}
    </div>
  );
}
