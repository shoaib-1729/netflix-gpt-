import checkValidData from "../utils/validate"
import Header from "./Header"
import { useState, useRef } from "react"
import {auth} from "../utils/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux"
import { BG_URL, USER_AVATAR } from "../utils/constants";


const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm)
  }

  function handleButton(e) {
    e.preventDefault();

    // if the input box has input take that input, else, return null
    const inputName = name.current ? name.current.value : '';
    const inputEmail = email.current ? email.current.value : '';
    const inputPassword = password.current ? password.current.value : '';

    let errorMessage = null;

    if (!isSignInForm) {
      errorMessage = checkValidData('signup', inputName, inputEmail, inputPassword);
    } else {
      errorMessage = checkValidData('signin', '', inputEmail, inputPassword);
    }

    setErrorMessage(errorMessage);

    if (!errorMessage) {
      console.log("Form submitted successfully!");
    }


    // Sign-in / Sign-up Logic

    // if error message is not null, simply return
    if(errorMessage) return;

    // if error message is null, write sign-in / sign-up logic

    // sign-up logic
    if(!isSignInForm) {
          createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
              .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // console log user object when signed-up
                console.log(user);
                // as soon as the user signs-up, add his profile (name, photoURL) to the redux store
                  updateProfile(user, {
                    displayName: inputName , photoURL: USER_AVATAR
                  })
                  .then(() => {
                    // update the redux store once again, once the user profile is updated
                    const {uid, email, displayName, photoURL}  = user;
                    dispatch(addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                      photoURL: photoURL

                  }));
                  })
                  .catch((error) => {
                    // if error occurred, update the error message
                    setErrorMessage(error.message);
                  });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // set the error message
                setErrorMessage(errorCode + "-" + errorMessage)
              });

      }
            // sign-in logic
      else {
              signInWithEmailAndPassword(auth, inputEmail, inputPassword)
                    .then((userCredential) => {
                      // Signed-in
                      const user = userCredential.user;
                      // console the user if successfully signed-in
                      console.log(user)
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      // set the error message
                      setErrorMessage(errorCode + "-" + errorMessage)
                    });
                  }
            // as soon as the user signs-in or signs-up, add the user data to the redux store.
            // since the user data can be used anywhere across the app, hence adding data to redux store is necessary.
}

  return (
    <div className="relative">
      <Header />
      <div>
        <img className="absolute"
          src={BG_URL}
          alt="background-img"
        />
        <p>Login</p>
      </div>
      <form onSubmit={handleButton}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-md bg-opacity-80 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {(isSignInForm) ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full rounded-lg bg-gray-700"
            aria-label="name"
            autoComplete="username"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-4 p-4 w-full rounded-lg bg-gray-700"
          aria-label="email"
          autoComplete="userEmail"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full rounded-lg bg-gray-700"
          aria-label="password"
          autoComplete="current-password"
        />
        <p className="text-red-500 font-bold">
          {errorMessage}
        </p>
        <button
          type="submit"
          className="my-6 p-4 bg-red-500 w-full rounded-lg cursor-pointer text-white"
        >
          {(isSignInForm) ? "Sign In" : "Sign Up"}
        </button>
        <button className="py-4 cursor-pointer text-white text-xl" onClick={toggleSignInForm}>
            {isSignInForm ? (
              <>
                 New to Netflix? <span className="hover:underline">Sign Up Now</span>
              </>
            ) : (
              <>
                Already Registered? <span className="hover:underline">Sign In Now</span>
              </>
    )}
        </button>
      </form>
    </div>
  )
}

export default Login
