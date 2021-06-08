import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import Icon from '../../images/google-icon.png';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // console.log(result);
                const signedInnUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    isSignedIn: true
                }
                setUser(signedInnUser);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            {
                user.isSignedIn === false ?
                    <button className='login-btn' onClick={handleGoogleSignIn}> <img src={Icon} alt="" /> Sign in Using Google</button>
                    :
                    <h4 className='logged-user'>Welcome {user.name}</h4>
            }
        </div>
    );
};

export default Login;