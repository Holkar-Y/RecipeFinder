import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Auth = ({setCurrentUser}) => {
    const [isLogin, setIsLogin]=useState(true);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[cPassword,setCPassword]=useState("");
    const [err, setErr] = useState("");
    const[loginEmail,setLoginEmail]=useState("");
    const[loginPassword,setLoginPassword]=useState("");
    const navigate=useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        setErr("");

        if (!name.trim()) {
            setErr("Please enter your name");
            return;
        }

        if (!email.trim()) {
            setErr("Please enter your email");
            return;
        }

        if (password.length < 6) {
            setErr("Password must contain at least 6 characters");
            return;
        }

        if (password !== cPassword) {
            setErr("Passwords do not match");
            return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(
        (user) => user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (userExists) {
        setErr("This email is already registered");
        return;
    }

    const newUser = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setName("");
    setEmail("");
    setPassword("");
    setCPassword("");

    alert("Registration successful!");
    setIsLogin(true);
    }
    
    function handleLogin(e){
        e.preventDefault();
        setErr("");
        const users=JSON.parse(localStorage.getItem("users")) || [];

        const loggedInUser= users.find((user)=>user.email===loginEmail.trim().toLowerCase())

        if(!loggedInUser){
            setErr("You are not registered yet! First Register yourself.")
            return;
        }

        if(loggedInUser.password!==loginPassword){
            setErr("Incorrect password");
            return;
        }

        setErr("");
        const {password,...userInfo}=loggedInUser;
        localStorage.setItem("currentUser",JSON.stringify(userInfo));
        setCurrentUser(userInfo);
        navigate('/');
    }

  return (
    <div className='bg-amber-950 flex flex-col min-h-[calc(100vh-56px)] max-w-full justify-center items-center px-4 py-8'>
        
      {isLogin?
      <form onSubmit={handleLogin} className="flex flex-col gap-6 sm:gap-10 bg-emerald-950 p-5 sm:p-8 rounded-3xl sm:rounded-4xl w-full max-w-md">

        <p className='text-xl'>Login to continue exploring delicious recipes.</p>

        <div className='flex flex-col'>
            <label htmlFor="log-email">Email Address</label>
            <input required type="email" id='log-email' value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)} placeholder='Enter your email' className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-900 mb-4"/>

            <label htmlFor="log-password">Password</label>
            <input required type="password" id='log-password' value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} placeholder='Enter your password' className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-900 mb-4"/>

            {err && <p className='text-red-700'>{err}</p>}

            <button type='submit' className='w-full bg-amber-900 rounded-2xl p-2 cursor-pointer'>Login</button>
        </div>

        <p>Don't have an account? <button type='button' onClick={()=>setIsLogin(false)}>Register</button></p>
      </form>
      

      :<form onSubmit={handleRegister} className="flex flex-col gap-6 bg-emerald-950 p-5 sm:p-8 rounded-3xl sm:rounded-4xl w-full max-w-md">

        <p className='text-xl'>Register to continue exploring delicious recipes.</p>

        <div className='flex flex-col'>
        <label htmlFor='name'>Name</label>
        <input required type="text" id='name' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-900 mb-4"/>

        <label htmlFor="reg-email">Email Address</label>
        <input required type="email" id='reg-email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-900 mb-4"/>

        <label htmlFor="reg-password">Password</label>
        <input required type="password" id='reg-password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-900 mb-4"/>

        <label htmlFor="cPassword">Confirm Password</label>
        <input required type="password" id='cPassword' placeholder='Enter your password again' value={cPassword} onChange={(e)=>setCPassword(e.target.value)} className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-900 mb-4"/>

        {err && <p className='text-red-700'>{err}</p>}

        <button type='submit' className='w-full bg-amber-900 rounded-2xl p-2 cursor-pointer'>Register</button>

        </div>

        <p>Have an account? <button type='button' onClick={()=>setIsLogin(true)}>Login</button></p>
        </form>
        }
    </div>
  )
}

export default Auth
