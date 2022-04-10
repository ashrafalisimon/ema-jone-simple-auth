import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';
import './SingUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SingUp = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');
    const [error, setError] =useState('');
    const [createUserWithEmailAndPassword, user]= useCreateUserWithEmailAndPassword(auth);
    const navigate =useNavigate();
    
    if(user){
        navigate('/shop');
    }
    const handleEmailBlur =event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur =event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur =event =>{
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your two password did'n match...")
            return;
        }
        if( password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                </div>
                <p className='error-meg'>{error}</p>
                <input className='form-submit' type="submit" value="Sing Up" />
            </form>
            <p>
            Already have an account? <Link className='form-link' to="/login"> Login</Link>
            </p>
            <div className='container-or'>
                <div className='gray-line'> </div>
                <div>
                    <p>or</p>
                </div>
                <div className='gray-line'> </div>
            </div>
            <div>
                <button className='google-btn'>
                    <img src={google} alt="" />
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    </div>
    );
};

export default SingUp;