import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import FormDiagnosa from './components/FormDiagnosa';
import PersistentDrawerLeft from './PersistentDrawer';

const drawerWidth = 240;



export default function GejalaForm() {
  

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  return (
    
    <>
    <PersistentDrawerLeft></PersistentDrawerLeft>
    <Typography color='white' sx={{ marginBottom: 2,  fontSize: 24, fontWeight: 'bold', textAlign: 'center', color:'black'}}>
    Silahkan Pilih Gejala Yang Dialami
  </Typography>
  <FormDiagnosa></FormDiagnosa>
    </>
  );
}

// import React, { useState } from 'react';


// const GejalaForm = () => {
//   const [gejala, setGejala] = useState({
//     nyeriDada: false,
//     sesakNapass: false,
//     pusing: false,
//     mual: false,
//     keringatDingin: false,
//   });

//   const [diagnosa, setDiagnosa] = useState('');

//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     setGejala((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Algoritma Diagnosa
//     if (gejala.nyeriDada && gejala.sesakNapass) {
//       setDiagnosa('Kemungkinan Penyakit Jantung Koroner');
//     } else if (gejala.nyeriDada && gejala.pusing) {
//       setDiagnosa('Kemungkinan Serangan Jantung');
//     } else if (gejala.keringatDingin && gejala.mual) {
//       setDiagnosa('Kemungkinan Gagal Jantung');
//     } else {
//       setDiagnosa('Tidak Terdeteksi Gejala Penyakit Jantung');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
//         <h1 className="text-2xl font-semibold text-center mb-6">Sistem Pakar Diagnosa Penyakit Jantung</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-lg">Nyeri Dada</label>
//               <input 
//                 type="checkbox" 
//                 name="nyeriDada" 
//                 checked={gejala.nyeriDada}
//                 onChange={handleChange}
//                 className="form-checkbox h-5 w-5 text-blue-600"
//               />
//             </div>
//             <div>
//               <label className="block text-lg">Sesak Napas</label>
//               <input 
//                 type="checkbox" 
//                 name="sesakNapass" 
//                 checked={gejala.sesakNapass}
//                 onChange={handleChange}
//                 className="form-checkbox h-5 w-5 text-blue-600"
//               />
//             </div>
//             <div>
//               <label className="block text-lg">Pusing</label>
//               <input 
//                 type="checkbox" 
//                 name="pusing" 
//                 checked={gejala.pusing}
//                 onChange={handleChange}
//                 className="form-checkbox h-5 w-5 text-blue-600"
//               />
//             </div>
//             <div>
//               <label className="block text-lg">Mual</label>
//               <input 
//                 type="checkbox" 
//                 name="mual" 
//                 checked={gejala.mual}
//                 onChange={handleChange}
//                 className="form-checkbox h-5 w-5 text-blue-600"
//               />
//             </div>
//             <div>
//               <label className="block text-lg">Keringat Dingin</label>
//               <input 
//                 type="checkbox" 
//                 name="keringatDingin" 
//                 checked={gejala.keringatDingin}
//                 onChange={handleChange}
//                 className="form-checkbox h-5 w-5 text-blue-600"
//               />
//             </div>
//             <div className="mt-4">
//               <button 
//                 type="submit" 
//                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//               >
//                 Diagnosa
//               </button>
//             </div>
//           </div>
//         </form>

//         {diagnosa && (
//           <div className="mt-6 text-center p-4 bg-green-100 text-green-800 rounded-md">
//             <h2 className="font-semibold">Hasil Diagnosa:</h2>
//             <p>{diagnosa}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GejalaForm;