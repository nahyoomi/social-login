// src/Login.tsx
import React from 'react';
import { auth, googleProvider } from './firebaseConfig';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/login'); // Redirige a la ruta deseada
      })
      .catch((error) => {
        console.error('Error during authentication:', error);
      });
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
};

export default Login;