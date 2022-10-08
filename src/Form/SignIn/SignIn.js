import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading";
import useToken from "../../Hooks/useToken";

const SignIn = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // update profile
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // with google
   // with google
   const [signInWithGoogle, gUser, googleLoading, googleError] = useSignInWithGoogle(auth);

   const googleSignIn = () => {
     signInWithGoogle();
 
   };

  // SIGN IN WITH EMAIL AND PASS
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const from = location.state?.from?.pathname || "/";

  const token = useToken(user || gUser)

  

  // with email and pass
  const onSubmit = async (data) =>{
    const name = data.name;
    const email = data.email;
    const password = data.password
    await createUserWithEmailAndPassword(email, password)
    await updateProfile( {displayName:name} )
    
  };
  
// error
  let signInError;
  if (error || updateError) {
    signInError = (<p className="text-red-500">{error?.message || updateError?.message}</p>)
  }
  if(updating){
    <Loading/>
  }
  if(token){
    navigate(from, {replace:true})
  }
  return (
    <div className="flex h-screen  bg-gray-100 justify-center items-center">
      <div className="card w-96 mt-[-50px] bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl text-center">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              {/* email */}
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name field can't empty",
                  },
                  minLength: {
                    value: 1,
                    message: "Password must be 6 character",
                  },
                })}
              />
               {errors.name && (
                <p className="text-red-700">{errors.name?.message}</p>
              )}
               <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Required a valid email",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Use a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-700">{errors.email?.message}</p>
              )}
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
                  required: {
                    value: true,
                    message: "Required a password",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-700">{errors.password?.message}</p>
              )}
            </div>
                {signInError}
            <input
              className="btn btn-active mt-2 w-full text-lg max-w-xs"
              type="submit"
              value="Sign In"
            />
          </form>
          <p className="text-lg">
            Already registered?  
            <span className="text-secondary font-bold">
              <Link to="/logIn"> please Lon In</Link>
            </span>
          </p>
          <div className="divider">OR</div>
          {/* google button */}
          <button
          onClick={googleSignIn}
          className="btn btn-warning text-xl ">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
