// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";

// function HalamanRegistrasi() {
//   const navigate = useNavigate();
//   const [nama, setNama] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [alamat, setAlamat] = useState("");
//   const [no_telepon, setNoTelepon] = useState("");
//   const [jenis_kelamin, setJenisKelamin] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleNavigate = () => {
//     navigate("/login");
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // Validasi form
//     if (!nama || !email || !password || !alamat || !no_telepon || !jenis_kelamin) {
//       setErrorMessage("Semua field harus diisi!");
//       return;
//     }

//     const registerData = { nama, email, password, alamat, no_telepon, jenis_kelamin };

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/user/", registerData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status === 200) {
//         console.log(response.data.message);
//         handleNavigate();
//       } else {
//         setErrorMessage(response.data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setErrorMessage("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Section */}
//       <div className="flex-1 bg-blue-700 flex items-center justify-center">
//         <div className="text-center">
//           <div className="flex items-center justify-center">
//             <img className="h-80 w-80 mr-4" src="logo.png" alt="Logo" />
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="mt-4 flex-1 bg-white flex items-center justify-center">
//         <form className="w-3/4 max-w-md space-y-4" onSubmit={handleRegister}>
//           <h2 className="text-2xl font-bold text-center">Sign up</h2>

//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Nama"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               value={nama}
//               onChange={(e) => setNama(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Alamat"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               value={alamat}
//               onChange={(e) => setAlamat(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="No Telepon"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               value={no_telepon}
//               onChange={(e) => setNoTelepon(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Jenis Kelamin"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               value={jenis_kelamin}
//               onChange={(e) => setJenisKelamin(e.target.value)}
//             />
//           </div>
//           {errorMessage && (
//             <div className="text-red-500 text-center mb-4">{errorMessage}</div>
//           )}
//           <div className="mb-6">
//             <button
//               onClick={handleNavigate}
//               type="submit"
//               className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
//             >
//               SUBMIT
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default HalamanRegistrasi;


import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

function HalamanRegistrasi() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_telepon, setNoTelepon] = useState("");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validasi form
    if (!nama || !email || !password || !alamat || !no_telepon || !jenis_kelamin) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Semua field harus diisi!",
      });
      return;
    }

    const registerData = { nama, email, password, alamat, no_telepon, jenis_kelamin };

    try {
      const response = await axios.post("http://127.0.0.1:5000/user/", registerData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Registrasi berhasil, silakan login.",
        }).then(() => {
          handleNavigate();
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: response.data.message,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Terjadi kesalahan, silakan coba lagi.",
      });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-blue-700 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <img className="h-80 w-80 mr-4" src="logo.png" alt="Logo" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-4 flex-1 bg-white flex items-center justify-center">
        <form className="w-3/4 max-w-md space-y-4" onSubmit={handleRegister}>
          <h2 className="text-2xl font-bold text-center">Sign up</h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Nama"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
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
          <div className="mb-4">
            <input
              type="text"
              placeholder="Alamat"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="No Telepon"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={no_telepon}
              onChange={(e) => setNoTelepon(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Jenis Kelamin"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={jenis_kelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HalamanRegistrasi;
