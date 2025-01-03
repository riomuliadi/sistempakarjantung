// import React from 'react'

// const FormKonsultasi = () => {
//   return (
//     <div className='color: text-white text-center font-bold text-2xl'>Form Konsultasi</div>
//   )
// }

// export default FormKonsultasi

import React, { useState } from 'react';
import axios from 'axios';

const FormKonsultasi = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    usia: '',
    pesan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/konsultasi', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status >= 200 && response.status < 300) {
        console.log('Response:', response.data);
        alert('Formulir berhasil dikirim!');
      } else {
        alert('Gagal mengirim formulir.');
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message); // Access detailed error message from response if available
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <div className='m-0 p-5 text-black'>
      <div className='color: text-black text-center font-bold text-2xl mt-0 mb-4'>Form Konsultasi</div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Input Nama */}
        <div style={{ width: '100%' }}>
          <label style={{ fontWeight: 'bold' }}>Nama:</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </div>

        {/* Input Email */}
        <div style={{ width: '100%' }}>
          <label style={{ fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </div>

        {/* Input Usia */}
        <div style={{ width: '100%' }}>
          <label style={{ fontWeight: 'bold' }}>Usia:</label>
          <input
            type="number"
            name="usia"
            value={formData.usia}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </div>

        {/* Input Deskripsi */}
        <div style={{ width: '100%' }}>
          <label style={{ fontWeight: 'bold' }}>Pesan:</label>
          <textarea
            name="pesan"
            value={formData.pesan}
            onChange={handleChange}
            rows="1"
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '275px',
            margin: '30px auto',
            display: 'block',
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
          }}
        >
          KIRIM
        </button>
      </form>
    </div>
  );
};

export default FormKonsultasi;



// import { useState } from "react";

// function FormKonsultasi() {
//   const [formData, setFormData] = useState({
//     nama: "",
//     email: "",
//     usia: "",
//     pesan: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch("http://127.0.0.1:5000/konsultasi", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setResponseMessage("Form berhasil dikirim!");
//       } else {
//         setResponseMessage("Terjadi kesalahan, coba lagi.");
//       }
//     } catch (error) {
//       setResponseMessage("Terjadi kesalahan jaringan.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-2xl font-semibold text-center mb-4">Form Konsultasi</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700" htmlFor="nama">
//             Nama
//           </label>
//           <input
//             type="text"
//             name="nama"
//             id="nama"
//             value={formData.nama}
//             onChange={handleChange}
//             className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700" htmlFor="usia">
//             Usia
//           </label>
//           <input
//             type="number"
//             name="usia"
//             id="usia"
//             value={formData.usia}
//             onChange={handleChange}
//             className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700" htmlFor="pesan">
//             Pesan
//           </label>
//           <textarea
//             name="pesan"
//             id="pesan"
//             value={formData.pesan}
//             onChange={handleChange}
//             className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           ></textarea>
//         </div>
//         {responseMessage && (
//           <p className={`text-center mt-4 ${responseMessage.includes("berhasil") ? "text-green-500" : "text-red-500"}`}>
//             {responseMessage}
//           </p>
//         )}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`mt-4 px-6 py-2 bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
//           >
//             {isSubmitting ? "Mengirim..." : "Kirim"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default FormKonsultasi;

