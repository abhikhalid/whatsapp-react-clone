import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

const Login = () => {

    const [{ user }, dispatch] = useStateValue();

    const signIn = (e) => {

        auth
            .signInWithPopup(provider)
            .then((result) => (
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            ))
            .catch((error) => alert(error.message));

    }

    return (
        <div className="login">
            <div className="login__container">

                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" alt="" />

                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button type="submit" onClick={signIn}>Sign In With Google</Button>

            </div>



        </div>
    );
};

export default Login;