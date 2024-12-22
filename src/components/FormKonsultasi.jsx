// import React from 'react'

// const FormKonsultasi = () => {
//   return (
//     <div className='color: text-white text-center font-bold text-2xl'>Form Konsultasi</div>
//   )
// }

// export default FormKonsultasi

import React, { useState } from 'react';
import PersistentDrawerLeft from '../PersistentDrawer';

const FormKonsultasi = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    description: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data yang dikirim:', formData);
    alert('Formulir berhasil dikirim!');
  };

  return (
    <>
    <PersistentDrawerLeft></PersistentDrawerLeft>
    <div className='m-0 p-5 text-black bg-gray-400'>
      <div className='color: text-black text-center font-bold text-2xl mt-0 mb-4'>Form Konsultasi</div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Input Nama */}
        <div style={{ width: '100%' }}>
          <label style={{ fontWeight: 'bold' }}>Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
          <label style={{ fontWeight: 'bold'}}>Usia:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </div>

        {/* Input Deskripsi */}
        <div style={{ width: '100%' }}>
          <label style={{ fontWeight: 'bold'}}>Deskripsi:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="1"
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </div>

        {/* Input Tanggal */}
        {/* <div style={{ width: '100%' }}>
          <label style={{ fontWeight: 'bold'}}>Pilih Tanggal:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </div> */}

        {/* Input Jam */}
        {/* <div style={{ width: '100%' }}>
          <label style={{ fontWeight: 'bold'}}>Pilih Jam:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </div> */}

        {/* Tombol Submit */}
        <button
  type="submit"
  style={{
    width: '275px', // Menentukan lebar tombol
    margin: '30px auto', // Memastikan tombol berada di tengah secara horizontal
    display: 'block', // Dibutuhkan untuk properti margin auto
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
    </>
    
  );
};

export default FormKonsultasi;