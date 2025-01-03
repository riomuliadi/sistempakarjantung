import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

const HalamanLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNavigate = () => {
    navigate('/home');
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post('http://127.0.0.1:5000/user/login', loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Simpan token atau user data jika perlu
        console.log(response.data.message);
        handleNavigate();
      } else {
        setErrorMessage(response.data.message); // Menampilkan pesan error
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-xl bg-blue-600 p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              className='h-36 w-36 mr-4 '
              src='logo.png'
              alt="logo"
            />
          </div>
          <h1 className="text-white text-2xl font-semibold">Patient</h1>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              {errorMessage}
            </div>
          )}
          <div className="mb-6 mt-8">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              LOG IN
            </button>
          </div>
        </form>
        <div className="text-center text-white">
          <a href="#" className="text-sm hover:underline">
            Forgot Password
          </a>
        </div>
        <div className="mt-4 text-center text-white">
          <a className="text-sm">
            Belum memiliki akun? Silahkan
          </a>
          <a href="/registrasi" className="ml-1 text-sm hover:underline">
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default HalamanLogin;




