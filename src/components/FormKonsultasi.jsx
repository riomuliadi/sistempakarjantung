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





