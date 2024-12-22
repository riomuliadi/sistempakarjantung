import { Typography, Box } from '@mui/material';
import React from 'react';

const HomeTitle = () => {
  return (

    <>
    <PersistentDrawerLeft></PersistentDrawerLeft>
    <Typography color='white' sx={{ marginBottom: 2,  fontSize: 24, fontWeight: 'bold', textAlign: 'center', color:'black'}}>
    Selamat Datang di Sistem Pakar Diagnosa Jantung
  </Typography>
  <FormDiagnosa></FormDiagnosa>
    </>

    // <>
    // <PersistentDrawerLeft></PersistentDrawerLeft>
    // <Box 
    //   sx={{
    //     display: 'flex', 
    //     justifyContent: 'center', 
    //     alignItems: 'center', 
    //     height: '100vh' // Menggunakan tinggi penuh layar
    //   }}
    // >
    //   <Typography 
    //     color="black" 
    //     sx={{ 
    //       fontSize: 24, 
    //       fontWeight: 'bold', 
    //       textAlign: 'center' 
    //     }}
    //   >
    //     Selamat Datang Di Sistem Pakar Diagnosa Penyakit Jantung
    //   </Typography>
    // </Box>
    // </>
    
  );
}

export default HomeTitle;