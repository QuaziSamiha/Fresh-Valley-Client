import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import Icon from '../../images/google-icon.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    const [user, setUser] = useState({
        isSignedIn: false,
        userName: '',
        email: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const signedInnUser = {
                    userName: result.user.displayName,
                    email: result.user.email,
                    isSignedIn: true
                }
                setUser(signedInnUser);
                setLoggedInUser(signedInnUser);
                history.replace(from);
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
                    <h4 className='logged-user'>Welcome {user.userName}</h4>
            }
        </div>
    );
};

export default Login;