import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {user, logIn, googleLogin} = useContext(AuthContext);
    

    const handleLoginIn =(e)=>{

        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password = form.password.value;
        // console(email, password);
        logIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error =>{
            console.log(error.message)
        })

    }
    const handleGoogleLogin =()=>{
        googleLogin()
        .then(res=>{
            const loggedUser = res.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error)
        })
    }
   

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h2>This is me{user && <p>{user.rakib}</p>}</h2>
                        <form onSubmit={handleLoginIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='SIgn In' className="btn btn-primary" />
                            </div>
                        </form>
                        {/* <p className='text-green-500'>{success}</p>
                        <p className='text-red-500'>{error}</p> */}
                        <button onClick={handleGoogleLogin} className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                            <span>Login with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;