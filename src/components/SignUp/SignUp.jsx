import React, {useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {

    //user and create user come from central space form authProvider
    const { user, createUser } = useContext(AuthContext);
console.log(createUser)
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    console.log(email, password);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password, name)
        if (emailError) {
            setEmailError("Your email has error")
        }

    }

    const handleEmail = (e) => {
        // const emailInput = e.target.email.value;
        setEmail(e.target.value)
        console.log(email)

    }

    const handlePassword = (e) => {
        // const passwordInput = e.target.password.value;
        setPassword(e.target.value);
        console.log(password)
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handleEmail} value={email} type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handlePassword} value={password} type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='Register' className="btn btn-primary" />
                            </div>
                        </form>
                        {/* <p className='text-green-500'>{success}</p>
                        <p className='text-red-500'>{error}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;