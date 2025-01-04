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

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!nama || !email || !password || !alamat || !no_telepon || !jenis_kelamin) {
      Swal.fire({
        title: "Error!",
        text: "Semua field harus diisi!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const registerData = { nama, email, password, alamat, no_telepon, jenis_kelamin };

    try {
      const response = await axios.post("http://127.0.0.1:5000/user/", registerData, {
        headers: { "Content-Type": "application/json" },
      });

      Swal.fire({
        title: "Registrasi Berhasil!",
        text: "Anda akan diarahkan ke halaman login.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan, silakan coba lagi.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-blue-700 flex items-center justify-center">
        <div className="text-center">
          <img className="h-80 w-80" src="logo.png" alt="Logo" />
        </div>
      </div>
      {/* Right Section */}
      <div className="mt-4 flex-1 bg-white flex items-center justify-center">
        <form className="w-3/4 max-w-md space-y-4" onSubmit={handleRegister}>
          <h2 className="text-2xl font-bold text-center">Sign up</h2>
          <input type="text" placeholder="Nama" className="w-full px-4 py-2 border" value={nama} onChange={(e) => setNama(e.target.value)} />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder="Alamat" className="w-full px-4 py-2 border" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
          <input type="text" placeholder="No Telepon" className="w-full px-4 py-2 border" value={no_telepon} onChange={(e) => setNoTelepon(e.target.value)} />
          <input type="text" placeholder="Jenis Kelamin" className="w-full px-4 py-2 border" value={jenis_kelamin} onChange={(e) => setJenisKelamin(e.target.value)} />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default HalamanRegistrasi;
