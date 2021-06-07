import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

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
                console.log(result.user.email, result.user.displayName);
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
        <div style={{ marginTop: "300px" }}>
            <h1>this is login page</h1>
            {/* <button onClick={handleGoogleSignIn}>Sign in Using Google</button> */}
            {
                user.isSignedIn === false ? <button onClick={handleGoogleSignIn}>Sign in Using Google</button> : <h4>Welcome {user.name}</h4>
            }
        </div>
    );
};

export default Login;