import React from "react";
import { useNavigate } from "react-router";

const HalamanLogin = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/dashboard')
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-xs">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-red-500 p-4 rounded-full">
              
            </div>
          </div>
          <h1 className="text-white text-2xl font-semibold">Patient</h1>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <button

              onClick={handleNavigate}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
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
          <a  className="text-sm">
            Belum memiliki akun? Silahkan
          </a>
          <a href="/layout" className="ml-1 text-sm hover:underline">
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default HalamanLogin;