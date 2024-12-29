import React from "react";

function HalamanRegistrasi() {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-blue-700 flex items-center justify-center">
        <div className="text-center">
          <div className="w-80 h-80 flex items-center justify-center">
          <img 
            className='h-36 w-36 mr-4 '
            src='logo.png'
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white flex items-center justify-center">
        <form className="w-3/4 max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center">Sign up</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Nama"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Usia"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="No Telp"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Alamat"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-md hover:bg-green-600"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default HalamanRegistrasi;
