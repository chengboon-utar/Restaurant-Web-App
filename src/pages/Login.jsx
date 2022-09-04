// Login.js
import React, { Component, useContext, useReducer } from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { Route, Router, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../components/Nav';




export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const count = useSelector(state => state.count);

    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.uid) {
                    dispatch({ type: 'LOGIN' });
                    // navigate('/order');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            }
            );
    }

    return (
        <>
            <div className='flex bg-gray-200 items-center content-center' style={{ height: 'calc(100vh - 64px)' }} >
                <div className='flex-row flex-auto content-center w-screen'>
                    <form onSubmit={handleRegister}>
                        <div className='flex flex-col w-screen text-center content-center items-center'>
                            <div className='flex flex-col mb-4 w-56'>
                                <label className='mb-2 font-bold text-lg text-gray-700' htmlFor='email'>Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='email border py-2 px-3 text-gray-700' type='email' id='email' placeholder='example@email.com' />
                            </div>
                            <div className='flex flex-col mb-6 w-56'>
                                <label className='mb-2 font-bold text-lg text-gray-700' htmlFor='password'>Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='border py-2 px-3 text-gray-700' type='password' id='password' placeholder='Password' />
                            </div>
                            <div className='flex flex-row mb-6 w-56'>
                                <Button
                                    className='bg-green-900 text-white font-bold py-2 px-4 rounded' type='submit'>Sign In</Button>
                                <Button
                                    onClick={() => dispatch({ type: 'INCREMENT' })}
                                    className='bg-green-900 text-white font-bold py-2 px-4 rounded'>Increment {count}</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}
