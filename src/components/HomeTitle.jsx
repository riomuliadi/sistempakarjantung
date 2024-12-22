import { Typography, Box } from '@mui/material';
import React from 'react';
import PersistentDrawerLeft from '../PersistentDrawer';

const HomeTitle = () => {
  return (
    <div className='bg-gray-300'>
   <PersistentDrawerLeft></PersistentDrawerLeft>
    <Box 
      sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' // Menggunakan tinggi penuh layar
      }}
    >
      <Typography 
        color="black" 
        sx={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          textAlign: 'center' 
        }}
      >
        Selamat Datang Di Sistem Pakar Diagnosa Penyakit Jantung
      </Typography>
    </Box>
    </div>
    
  );
}

export default HomeTitle;