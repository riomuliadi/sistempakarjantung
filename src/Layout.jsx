import React from "react";
import { useNavigate } from "react-router";

const Layout = () => {
    
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate ('/login')
    }
  return (
    <div className="flex min-h-screen bg-blue-600">
      <div className="text-left ml-20 mt-20">
        <h1 className="text-white text-4xl font-semibold mb-4">Sistem Pakar</h1>
        <h2 className="text-white text-6xl font-bold mb-6 mt-24">
          Sistem Pakar Diagnosa <br /> <br />Penyakit Jantung
        </h2>
        <button
      onClick={handleNavigate}
        className="w-[375px] mt-20 bg-green-600 text-white px-7 py-2 rounded-full font-medium hover:bg-green-700">
          Patient
      </button>
        {/* <div className="mt-8">
          <span className="inline-block text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-20 h-20 mx-auto"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        </div> */}
      </div>
      <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-blue-600 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <img className="h-80 w-80 mr-4" src="logo.png" />
          </div>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default Layout;