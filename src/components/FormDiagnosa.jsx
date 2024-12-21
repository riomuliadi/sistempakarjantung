
// import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/16/solid';
// import { HomeIcon, TagIcon, UserIcon } from '@heroicons/react/20/solid';
// import React, { useState } from 'react';

// const FormDiagnosa = ({ setHasil }) => {
//   const [usia, setUsia] = useState('');
//   const [tekananDarah, setTekananDarah] = useState('');
//   const [kolesterol, setKolesterol] = useState('');
//   const [gulaDarah, setGulaDarah] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Proses diagnosa (misalnya berdasarkan beberapa kondisi)
//     let diagnosa = '';
//     if (tekananDarah > 140 && kolesterol > 200 && gulaDarah > 120) {
//       diagnosa = 'Penyakit Jantung Terindikasi';
//     } else {
//       diagnosa = 'Tidak Terindikasi Penyakit Jantung';
//     }

//     setHasil(diagnosa);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 mr-1 rounded-lg shadow-lg w-96 flex flex-col h-screen">
//       {
//        <div className=" flex flex-col gap-20">
//          <div className="p-4 active:bg-orange-400 rounded-md flex">
//        <HomeIcon className="w-6 mr-2"/>

//           gh
//         </div>
//          <div className="p-4 active:bg-orange-400 rounded-md flex">
//           <TagIcon className='w-6 mr-2' />
//          gh
//        </div>
//        <div className="p-4 active:bg-orange-400 rounded-md flex">
//         <UserIcon className='w-6 mr-2' />
//         gh
//        </div>
//        <div className="p-4 active:bg-orange-400 rounded-md flex">
//         <ArrowLeftStartOnRectangleIcon className='w-6 mr-2 rotate-180' />
//         gh
//         </div>
//        </div>
      // <div className="mb-4">
      //   <label className="block text-gray-700">Usia</label>
      //   <input
      //     type="number"
      //     value={usia}
      //     onChange={(e) => setUsia(e.target.value)}
      //     className="mt-2 p-2 w-full border border-gray-300 rounded-md"
      //     required
      //   />
      // </div>
      // }

      {/* <div className="mb-4">
        <label className="block text-gray-700">Tekanan Darah</label>
        <input
          type="number"
          value={tekananDarah}
          onChange={(e) => setTekananDarah(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div> */}

      {/* <div className="mb-4">
        <label className="block text-gray-700">Kolesterol</label>
        <input
          type="number"
          value={kolesterol}
          onChange={(e) => setKolesterol(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div> */}

      {/* <div className="mb-4">
        <label className="block text-gray-700">Gula Darah</label>
        <input
          type="number"
          value={gulaDarah}
          onChange={(e) => setGulaDarah(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div> */}

      {/* <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md"
      >
        Diagnosa
      </button> */}
      import { colors } from "@mui/material";
      import { blue } from "@mui/material/colors";
      //     </form>
      //   );
      // };
      
      // export default FormDiagnosa;
      
      
      // import { useState } from "react";
      
      // const FormDiagnosa = ({ onDiagnose }) => {
      //   const [gejala, setGejala] = useState({
      //     nyeriDada: false,
      //     sesakNafas: false,
      //     pusing: false,
      //     mual: false,
      //     kelelahan: false,
      //   });
      
      //   const handleChange = (event) => {
      //     const { name, checked } = event.target;
      //     setGejala((prev) => ({
      //       ...prev,
      //       [name]: checked,
      //     }));
      //   };
      
      //   const handleSubmit = (event) => {
      //     event.preventDefault();
      //     onDiagnose(gejala);
      //   };
      
      //   return (
          
      //     <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      //       {/* <h1 className="text-2xl font-bold text-center mb-4">Diagnosa Penyakit Jantung</h1> */}
      //       <form onSubmit={handleSubmit}>
      //         <div className="mb-4">
      //           <label className="block text-sm font-medium text-gray-700">
      //             Nyeri Dada
      //           </label>
      //           <input
      //             type="checkbox"
      //             name="nyeriDada"
      //             checked={gejala.nyeriDada}
      //             onChange={handleChange}
      //             className="ml-2"
      //           />
      //         </div>
      
      //         <div className="mb-4">
      //           <label className="block text-sm font-medium text-gray-700">
      //             Sesak Nafas
      //           </label>
      //           <input
      //             type="checkbox"
      //             name="sesakNafas"
      //             checked={gejala.sesakNafas}
      //             onChange={handleChange}
      //             className="ml-2"
      //           />
      //         </div>
      //         <div className="mb-4">
      //           <label className="block text-sm font-medium text-gray-700">
      //             Pusing
      //           </label>
      //           <input
      //             type="checkbox"
      //             name="pusing"
      //             checked={gejala.pusing}
      //             onChange={handleChange}
      //             className="ml-2"
      //           />
      //         </div>
      
      //         <div className="mb-4">
      //           <label className="block text-sm font-medium text-gray-700">
      //             Mual
      //           </label>
      //           <input
      //             type="checkbox"
      //             name="mual"
      //             checked={gejala.mual}
      //             onChange={handleChange}
      //             className="ml-2"
      //           />
      //         </div>
      
      //         <div className="mb-4">
      //           <label className="block text-sm font-medium text-gray-700">
      //             Kelelahan
      //           </label>
      //           <input
      //             type="checkbox"
      //             name="kelelahan"
      //             checked={gejala.kelelahan}
      //             onChange={handleChange}
      //             className="ml-2"
      //           />
      //         </div>
      
      //         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
      //           Diagnosa
      //         </button>
      //       </form>
      //     </div>
      //   );
      // };
      
      // export default FormDiagnosa;
      
      import React, { useState } from "react";
      
      const FormDiagnosa = () => {
        // Daftar item diagnosa
        const [checkedItems, setCheckedItems] = useState({});
      
        const items = [
          { id: 1, label: "Demam" },
          { id: 2, label: "Batuk" },
          { id: 3, label: "Sakit Kepala" },
          { id: 4, label: "Mual" },
          { id: 5, label: "Nyeri Otot" },
          { id: 6, label: "Pusing" },
          { id: 7, label: "Sesak Napas" },
          { id: 8, label: "Kehilangan Indra Penciuman" },
          { id: 9, label: "Sakit Perut" },
          { id: 10, label: "Kelelahan" },
          { id: 11, label: "Demam" },
          { id: 12, label: "Batuk" },
          { id: 13, label: "Sakit Kepala" },
          { id: 14, label: "Mual" },
          { id: 15, label: "Nyeri Otot" },
          { id: 16, label: "Pusing" },
          { id: 17, label: "Sesak Napas" },
          { id: 18, label: "Kehilangan Indra Penciuman" },
          { id: 19, label: "Sakit Perut" },
          { id: 20, label: "Kelelahan" },{ id: 1, label: "Demam" },
          { id: 21, label: "Batuk" },
          { id: 22, label: "Sakit Kepala" },
          { id: 23, label: "Mual" },
          { id: 24, label: "Nyeri Otot" },
          { id: 25, label: "Pusing" },
          { id: 26, label: "Sesak Napas" },
          { id: 27, label: "Kehilangan Indra Penciuman" },
          { id: 28, label: "Sakit Perut" },
          { id: 29, label: "Kelelahan" },{ id: 1, label: "Demam" },
          { id: 30, label: "Batuk" },
        ];
      
        const handleCheckboxChange = (id) => {
          setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
          }));
        };
      
        const handleSubmit = () => {
          // Menampilkan hasil diagnosa berdasarkan checkbox yang dipilih
          const selectedItems = items.filter((item) => checkedItems[item.id]);
          alert(`Gejala yang dipilih: ${selectedItems.map((item) => item.label).join(", ")}`);
        };
      
        return (
          <div className="diagnosa-container" 
          style={{ padding: "20px",
          }}>
            <div
              className="checkbox-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(200px, 1fr))",
                gap: "10px",
              }}
            >
              {items.map((item) => (
                <div key={item.id} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={`checkbox-${item.id}`}
                    checked={checkedItems[item.id] || false}
                    onChange={() => handleCheckboxChange(item.id)}
                    style={{ marginRight: "10px" }}
                  />
                  <label
                    htmlFor={`checkbox-${item.id}`}
                    style={{ color: "black" }}
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
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
        SUBMIT
      </button>
      
          
            {/* <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
              Diagnosa
            </button> */}
          </div>
        );
      };
      
      export default FormDiagnosa;
      