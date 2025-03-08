import { useState } from 'react';
import { auth, googleProvider,db,signInWithPopup,collection, query, where,getDocs,addDoc } from '../../firebase/firebaseConfig';
import bcrypt from 'bcryptjs';
import {v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom";
import backGroundImage from "../../assets/LoginBgImage.jpeg"

import { useDispatch } from "react-redux";
import {  AppDispatch } from "../../redux/store";
import { setUser } from "../../redux/authSlice";


const saltRounds = import.meta.env.VITE_SALT_ROUNDS

function SignInSignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  // Toggle SignIn / SignUp
  const toggleForm = () => setIsSignUp(!isSignUp);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const userRef = collection(db,"users");
        const q = query(userRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty){
          alert('Email already registered !');
          setIsSignUp(false)
          return;
        }

        const userId = uuidv4();
        const hashedPassword = await bcrypt.hash(password, parseInt(saltRounds));
        await addDoc(userRef,{
          userId,
          name:fullName,
          email,
          password:hashedPassword,
          productAccess:false,
        })
        alert('Account created successfully.');
        dispatch(setUser({ name: fullName, email:email ,userId:userId }));
        navigate("/");
      } else {
        // Sign In
        const userRef = collection(db,"users");
        const userQuery = query(userRef, where("email", "==", email));
        const userQuerySnapshot = await getDocs(userQuery);

        const adminRef = collection(db,"admins");
        const adminQuery = query(adminRef, where("email", "==", email));
        const adminQuerySnapshot = await getDocs(adminQuery);


        if (userQuerySnapshot.empty && adminQuerySnapshot.empty) {
          alert("User not found!");
          return;
        }

        if(!userQuerySnapshot.empty){
          const userData = userQuerySnapshot.docs[0].data();
          const passwordMatch = await bcrypt.compare(password, userData.password);
          if (!passwordMatch) {
            alert("Invalid credentials!");
            return;
          }else{
            dispatch(setUser({ name: userData.name, email: userData.email ,userId:userData.userId }));
          }
        }else if(!adminQuerySnapshot.empty){
          const adminData = adminQuerySnapshot.docs[0].data();
          if (password !== adminData.password) {
            alert("Invalid credentials!");
            return;
          }else{
            dispatch(setUser({ name: adminData.fullName, email: adminData.email ,userId:adminData.userId }));
          }
        }
        navigate("/");
      }
    } catch (error) {
      //write error to log file
      alert("something went wrong please try after some time");
    }
  };

  // Google Auth
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user
      if(user.email != null){
        const userRef = collection(db,"users");
        const userQuery = query(userRef, where("email", "==", user.email));
        const userQuerySnapshot = await getDocs(userQuery);
        if(userQuerySnapshot.empty) {
          alert("As you are new to our page please sign up using a password.");
          setIsSignUp(true);
          setFullName(user.displayName?user.displayName:"please write your name");
          setEmail(user.email);
        }else{
          navigate("/");
        }
      }else{
        alert("something went wrong, please try to log in through email and password");
      }
    } catch (error) {
      //write to log file error
      console.log(error)
      alert("something went wrong with Google Auth. please try to log in through email and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-no-repeat bg-cover bg-center" 
      style={{backgroundImage: `url(${backGroundImage})`}}>
        {/* Overlay for darker effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Main Card */}
        <div className="relative z-10 max-w-md w-full bg-gray-900 bg-opacity-80 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            {isSignUp ? 'Create an account' : 'Sign in'}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {isSignUp && (
              <input
                type="text"
                placeholder="Full name"
                className="p-2 rounded bg-gray-800 text-white focus:outline-none"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded bg-gray-800 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded bg-gray-800 text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="my-4 text-center text-gray-300">OR</div>

          <button onClick={handleGoogleSignIn}
            className="w-full bg-white text-black font-semibold py-2 rounded flex items-center justify-center">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          <div className="text-gray-300 mt-4 text-center">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={toggleForm}
              className="ml-2 text-purple-400 hover:text-purple-200 underline">
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </div>

        </div>
      </div>
  );
}

export default SignInSignUp;
