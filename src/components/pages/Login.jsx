import React from 'react'
import { useState } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../assets/db/firebase'
import { Navigate }from 'react-router-dom';

function Login({user}) {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPasseword] = useState('');
    const handleFormChange = () => {
        setIsSignUpActive(!isSignUpActive);
    }
    const handleSignUp = () => {
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;  
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
            });    
    }
    const handleSignIn = () => {
        if (!email || !password) return;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;  
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
            });    
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handlePasswordChange = (e) => {
        setPasseword(e.target.value);
        console.log(password);
    }

    if (user) {
        return <Navigate to="/Dashboard" />;
    }
    return (
        <div className='w-full h-screen bg-slate-900 flex items-center justify-center'>
            <form action="" className='flex flex-col gap-2 bg-slate-50 p-5 rounded shadow-md'>
                {isSignUpActive &&<h1 className='text-center text-slate-900 text-4xl mb-3'>S'inscrire</h1>}
                {!isSignUpActive &&<h1 className='text-center text-slate-900 text-4xl mb-3'>Se connecter</h1>}

                <label htmlFor='email' className='text-slate-900 text'>E-mail</label>
                <input id='email' name='email' onChange={handleEmailChange} className='h-10 border border-slate-900 rounded p-4' type="email" placeholder="Entrez votre email" />
                <label htmlFor='password' className='text-slate-900 text'>Mot de passe</label>
                <input id='password' name='password' onChange={handlePasswordChange} className='h-10 border border-slate-900 rounded p-4' type="password" placeholder="Entrez votre mot de passe" />
                {isSignUpActive &&<button onClick={handleSignUp} type='submit' className='bg-slate-900 px-3 py-1 5 text-white my-3 rounded hover:bg-blue-700'>S'inscrire</button>}
                {!isSignUpActive &&<button onClick={handleSignIn} type='submit' className='bg-slate-900 px-3 py-1 5 text-white my-3 rounded hover:bg-blue-700'>Se connecter</button>}
                {isSignUpActive && <a className='text-blue-500  hover:text-red-900' href="#" onClick={handleFormChange} >Se connecter</a>}
                {!isSignUpActive && <a className='text-blue-500  hover:text-red-900' href="#" onClick={handleFormChange} >Créez un compte</a>}
            </form>
            <div className='hidden md:block'>
            <img src="./images/3.png" alt="" width={''} height={''} className='w-full h-auto rounded shadow-md' />
            </div>
        </div>
    );
}

export default Login;