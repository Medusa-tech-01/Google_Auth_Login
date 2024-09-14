import React, { useState } from 'react'
// import { GoogleLogin } from '@react-oauth/google';
// import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const history = useHistory();

  const handleGoogleLogin = async () => {
    try {
      // Assuming this will log in the user via Google OAuth
      // await axios.get('http://localhost:3000/auth/google');
      window.location.href = 'http://localhost:3000/auth/google';
      
      
      // After login, redirect to dashboard
      // navigate('/dashboard');
      // history.push('/dashboard');
    } catch (error) {
      setError('Error logging in');
    }
  };


  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      {/* <GoogleLogin 
      clientId = "347580870111-gq57u5vsvd5hss6t1s8oq5i6jm9u87g8.apps.googleusercontent.com"
      buttonText= "Sign in with Google"
      onSuccess={handleGoogleLogin} 
      onError={() => setError('Google Login Failed')}
      cookiePolicy={'single_host_origin'} 
      /> */}

      <button onClick={handleGoogleLogin}>Sign in with Google</button>
      
    </div>
  )
}
