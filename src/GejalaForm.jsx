// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';

// import FormDiagnosa from './components/FormDiagnosa';

// const drawerWidth = 240;


// export default function GejalaForm() {

//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);


//   return (
//     <>
//     <Typography color='white' sx={{ marginBottom: 2,  fontSize: 24, fontWeight: 'bold', textAlign: 'center', color:'black'}}>
//     Silahkan Pilih Gejala Yang Dialami
//   </Typography>
//   <FormDiagnosa item></FormDiagnosa>
//     </>
//   );
// }


import * as React from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import FormDiagnosa from './components/FormDiagnosa';

export default function GejalaForm() {
  const [gejala, setGejala] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Fungsi untuk mengambil data gejala dari API Flask
  const fetchGejala = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/gejala'); // Ganti URL dengan endpoint Flask Anda
      setGejala(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch data');
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchGejala();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <>
      <Typography
        color="black"
        sx={{ marginBottom: 2, fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}
      >
        Silahkan Pilih Gejala Yang Dialami
      </Typography>
      <FormDiagnosa items={gejala} />
    </>
  );
}
