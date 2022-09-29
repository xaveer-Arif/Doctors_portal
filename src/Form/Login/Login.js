import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../../Shared/Loading";
import { useEffect } from "react";


const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // email and password
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

 
  // with google
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const googleSignIn = () => {
    signInWithGoogle();

  };

  // with email and pass
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
  };
  const from = location.state?.from?.pathname || "/"
  useEffect(() =>{
    if(user || googleUser){
      navigate(from, {replace:true})
    }
  },[user, from, googleUser, navigate ])
  let loginError;
  if (error || googleError) {
   loginError = (<p className="text-red-500">{error?.message || googleError?.message}</p>)
  }
  if (loading || googleLoading) {
   return <Loading/>
  }
 
 
 
  return (
    <div className="flex h-screen  bg-gray-100 justify-center items-center">

      <div className="card w-96 mt-[-50px] bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              {/* email */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"

                {...register("email", {
                  required:{
                    value: true,
                    message: 'Required a valid email'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Use a valid email address'
                  }
                })}
                />
                {errors.email && <p className="text-red-700">{errors.email?.message}</p>}
                {/* password */}
                <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                  type="password"
                  autoComplete="off"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"

                {...register("password", {
                  required:{
                    value: true,
                    message: 'Required a password'
                  }, 
                  minLength : {
                    value: 6,
                    message: 'Password must be 6 character' 
                  }
                })}
                />
                {errors.password && <p className="text-red-700">{errors.password?.message}</p>}
            </div>
                {loginError}
            <input className="btn btn-active mt-2 w-full text-lg max-w-xs" type="submit" value="Log In"/>
          </form>
              <p className="text-lg">New User? <span className="text-secondary font-bold"><Link to='/signIn'>please sign in</Link></span></p>
          <div className="divider">OR</div>
                {/* google button */}
          <button className="btn btn-warning text-xl " onClick={googleSignIn}>
            Google
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
