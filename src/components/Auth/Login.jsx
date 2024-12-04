import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({email, password});
    let pwd = ''
    if (localStorage.getItem(JSON.stringify({email}))) {pwd = JSON.parse(localStorage.getItem(JSON.stringify({email}))).password;}

    if (pwd !== password || pwd==='') {
      document.querySelector("#root > div > div > div > form > p.text-red-500.hidden").style.display='block'
    } else {
      document.querySelector("#root > div > div > div > form > p.text-red-500.hidden").style.display=''
      localStorage.setItem("LoggedIn", JSON.stringify({ email }))               // delete on LogOut
      successLogin()
    }
  };

  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate('/signup');
  };
  const successLogin = () => {
    navigate('/product');
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg w-8/12 rounded-lg overflow-hidden max-w-4xl">
      <div className="hidden md:block w-1/2 bg-contain bg-no-repeat bg-center bg-[url('https://cdn-icons-png.flaticon.com/512/10932/10932091.png')]">
      </div>
      <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 font-semibold text-gray-700">Tuks-Login</h2>
        <input
          type="email"
          className="mb-4 p-2 w-full border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="mb-4 p-2 w-full border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="text-red-500 hidden">Wrong Username or Password</p>
        <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">
          Login
        </button>
        <p className="m-2">Don't have an account? Create one</p>
        <button
          type="button"
          onClick={handleSignupRedirect} // Navigate to Signup
          className="bg-gray-400 text-white py-1 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
