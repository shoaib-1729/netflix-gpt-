import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth"; // Assume you're using Firebase for authentication
import { addUser, removeUser } from "../utils/userSlice"; // Assuming you have a Redux slice for managing user state
import { auth } from "../utils/firebase";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user); // Assuming user state is managed in Redux
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook ka istemal
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User login status ka state

  useEffect(() => {
    // Agar user logged in hai, setIsLoggedIn ko true kar do
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const handleSignOut = () => {
    // Logic to sign out the user
    // For example, using Firebase auth signOut method
    signOut(auth)
      .then(() => {
        // Dispatch action to remove user from Redux store
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  // get the user on authentication (this api is called whenever there is an authentication change like sign-in pr sign-out)
// this api will be called once when the user signs-in or signs-out, hence useEffect will be used here. 
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          // User exists (signs-in or signs-up)
          const {uid, email, displayName, photoURL}  = user;
          console.log(user, uid)

          // add the user to the redux store, dispatch the action 'addUser'
          dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL

          }));
          // navigate to the browse page when the user signs-in or signs-up
          navigate("/browse")
      } else {
          // User doesn't exist, that is when the user signs-out
          // remove the user, when signs-out
          removeUser();
          // navigate the user to login page
          navigate("/")
      }
      })
      // unsubscribe when component unmounts.
      return () => unsubscribe();
}, [])

  return (
         <div className="absolute z-[100] w-screen p-2 flex justify-between bg-gradient-to-b from-black">
                {/* netflix logo */}
                <img className="w-44 "
                src= {LOGO}
                alt="logo" />
      {
                    // sign out
                // render only if user signs-in successfully
                isLoggedIn && (
                        <div className="flex z-[100] gap-2 p-2">
                            <img className="w-12 h-12 rounded-md" src={USER_AVATAR} alt="sign-out"/>
                            <button onClick={handleSignOut} className='font-bold text-white text-xl hover:underline'>(Sign Out)</button>
                            {/* user info */}
                        </div>
                )
            }
    </div>
  );
};

export default Header;
