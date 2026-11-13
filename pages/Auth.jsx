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
    <div className="page-container min-h-[calc(100vh-64px)] flex items-center justify-center py-10 px-4">
        
      {isLogin?
      <form onSubmit={handleLogin} className="surface-card flex flex-col gap-6 p-6 sm:p-8 rounded-2xl w-full max-w-md border border-[#E8E5DC]">

        <div>
        <p className="eyebrow mb-2">Welcome back</p>
        <h1 className="font-serif text-3xl font-bold text-[#183D32]">
            Login to RecipeFinder
        </h1>
        <p className="muted-text mt-2">
            Continue exploring delicious recipes.
        </p>
        </div>

        <div className='flex flex-col'>
            <label htmlFor="log-email" className="mb-2 text-sm font-semibold text-[#252B28]">Email Address</label>
            <input required type="email" id='log-email' value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)} placeholder='Enter your email' className="auth-input w-full rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-3 text-[#252B28] outline-none transition mb-4"/>

            <label htmlFor="log-password" className="mb-2 text-sm font-semibold text-[#252B28]">Password</label>
            <input required type="password" id='log-password' value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} placeholder='Enter your password' className="auth-input w-full rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-3 text-[#252B28] outline-none transition mb-4"/>

            {err && (<p className="mb-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">{err}</p>)}

            <button
                type="submit"
                className="btn-primary w-full py-3"
            >Login</button>
        </div>

        <p className="text-sm text-[#777D76]">Don't have an account?<button
            type="button"
            onClick={() => setIsLogin(false)}
            className="ml-2 font-semibold text-[#D97745] hover:underline"
        >Register</button></p>

      </form>
      

      :<form onSubmit={handleRegister} className="surface-card flex flex-col gap-6 p-6 sm:p-8 rounded-2xl w-full max-w-md border border-[#E8E5DC]">

        <div>
            <p className="eyebrow mb-2">Join our kitchen</p>
            
            <h1 className="font-serif text-3xl font-bold text-[#183D32]">Create an Account</h1>

            <p className="muted-text mt-2">Save your favorite recipes and discover something delicious.</p>
        </div>

        <div className='flex flex-col'>
        <label htmlFor='name' className="mb-2 text-sm font-semibold text-[#252B28]">Name</label>
        <input required type="text" id='name' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} className="auth-input w-full rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-3 text-[#252B28] outline-none transition mb-4"/>

        <label htmlFor="reg-email" className="mb-2 text-sm font-semibold text-[#252B28]">Email Address</label>
        <input required type="email" id='reg-email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} className="auth-input w-full rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-3 text-[#252B28] outline-none transition mb-4"/>

        <label htmlFor="reg-password" className="mb-2 text-sm font-semibold text-[#252B28]">Password</label>
        <input required type="password" id='reg-password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className="auth-input w-full rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-3 text-[#252B28] outline-none transition mb-4"/>

        <label htmlFor="cPassword" className="mb-2 text-sm font-semibold text-[#252B28]">Confirm Password</label>
        <input required type="password" id='cPassword' placeholder='Enter your password again' value={cPassword} onChange={(e)=>setCPassword(e.target.value)} className="auth-input w-full rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-3 text-[#252B28] outline-none transition mb-4"/>

        {err && (
            <p className="mb-1 rounded-lg bg-red-50 p-3 text-sm text-red-700">{err}</p>
        )}

        <button type='submit' className="btn-primary w-full py-3">Create Account</button>

        </div>

        <p className="text-sm text-[#777D76]">
        Already have an account?
        <button
            type="button"
            onClick={() => setIsLogin(true)}
            className="ml-2 font-semibold text-[#D97745] hover:underline"
        >Login</button></p>

        </form>
        }
    </div>
  )
}

export default Auth
