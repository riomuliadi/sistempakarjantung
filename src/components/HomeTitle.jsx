// import { Typography, Box } from '@mui/material';
// import React from 'react';

// const HomeTitle = () => {
//   return (
//     <Box 
//       sx={{
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         height: '100vh' // Menggunakan tinggi penuh layar
//       }}
//     >
//       <Typography 
//         color="black" 
//         sx={{ 
//           fontSize: 24, 
//           fontWeight: 'bold', 
//           textAlign: 'center' 
//         }}
//       >
//         Selamat Datang Di Sistem Pakar Diagnosa Penyakit Jantung
//       </Typography>
//     </Box>
//   );
// }

// export default HomeTitle;


import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Man, Girl } from '@mui/icons-material';
import axios from 'axios';

const HomeTitle = () => {
  const [jumlahPasien, setJumlahPasien] = useState({ "Laki-Laki": 0, "Perempuan": 0 });
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data dari API
  const fetchJumlahPasien = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user/dashboard/pasien'); // Ganti URL sesuai API Flask Anda
      setJumlahPasien(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jumlah pasien:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJumlahPasien();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        marginTop: 12,
      }}
    >
      <Typography
        color="black"
        sx={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        Selamat Datang Di Sistem Pakar Diagnosa Penyakit Jantung
      </Typography>

      {loading ? (
        <Typography color="gray" sx={{ fontSize: 18 }}>
          Memuat data...
        </Typography>
      ) : (
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
            <Man sx={{ fontSize: 50, marginRight: 2 }} />
            <Typography color="black" sx={{ fontSize: 36, fontWeight: 'bold' }}>
              {jumlahPasien["Laki-Laki"]}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Girl sx={{ fontSize: 50, marginRight: 2 }} />
            <Typography color="black" sx={{ fontSize: 36, fontWeight: 'bold' }}>
              {jumlahPasien["Perempuan"]}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HomeTitle;









