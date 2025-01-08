
// import * as React from 'react';
// import { List, ListItem, ListItemText, Checkbox, Button, Grid } from '@mui/material';

// export default function FormDiagnosa({ items }) {
//   const [selectedItems, setSelectedItems] = React.useState([]);

//   const handleSelect = (nama_gejala) => {
//     setSelectedItems((prevSelected) =>
//       prevSelected.includes(nama_gejala)
//         ? prevSelected.filter((item) => item !== nama_gejala)
//         : [...prevSelected, nama_gejala]
//     );
//   };

//   const handleSubmit = () => {
//     if (selectedItems.length > 0) {
//       alert(`Gejala yang dipilih: ${selectedItems.join(', ')} sedang diproses.`);
//     } else {
//       alert('Pilih setidaknya satu item terlebih dahulu.');
//     }
//   };

//   return (
//     <>
//       <Grid container>
//         {items.map((item) => (
//           <Grid item xs={6} key={item.id_gejala}>
//             <List>
//               <ListItem button onClick={() => handleSelect(item.nama_gejala)}>
//                 <Checkbox
//                   edge="start"
//                   checked={selectedItems.includes(item.nama_gejala)}
//                   disableRipple
//                   inputProps={{
//                     'aria-labelledby': `checkbox-list-label-${item.nama_gejala}`,
//                   }}
//                 />
//                 <ListItemText primary={item.nama_gejala} />
//               </ListItem>
//             </List>
//           </Grid>
//         ))}
//       </Grid>
//       <div style={{ textAlign: 'center', marginTop: '30px' }}>
//         <Button
//           variant="contained"
//           color= "success"
//           onClick={handleSubmit}
//         >
//           Submit
//         </Button>
//       </div>
//     </>
//   );
// }



import * as React from 'react';
import { List, ListItem, ListItemText, Checkbox, Button, Grid } from '@mui/material';
import axios from 'axios'; // Pastikan sudah menginstal axios dengan npm atau yarn

export default function FormDiagnosa({ items }) {
  const [selectedItems, setSelectedItems] = React.useState([]); // Menyimpan ID gejala yang dipilih
  const [penyakit, setPenyakit] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSelect = (id_gejala) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id_gejala)
        ? prevSelected.filter((item) => item !== id_gejala)
        : [...prevSelected, id_gejala]
    );
  };

  const handleSubmit = async () => {
    if (selectedItems.length > 0) {
      setLoading(true);
      try {
        // Kirim ID gejala yang dipilih ke API Flask
        const response = await axios.post('http://127.0.0.1:5000/aturan/diagnosa', {
          gejala: selectedItems,
        });

        // Set hasil diagnosa penyakit
        setPenyakit(response.data.penyakit || 'Tidak ada penyakit yang cocok');
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Terjadi kesalahan saat memproses data.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Pilih setidaknya satu item terlebih dahulu.');
    }
  };

  return (
    <>
      <Grid container>
        {items.map((item) => (
          <Grid item xs={6} key={item.id_gejala}>
            <List>
              <ListItem button onClick={() => handleSelect(item.id_gejala)}>
                <Checkbox
                  edge="start"
                  checked={selectedItems.includes(item.id_gejala)}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': `checkbox-list-label-${item.id_gejala}`,
                  }}
                />
                <ListItemText primary={item.nama_gejala} />
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Memproses...' : 'Submit'}
        </Button>
      </div>

      {penyakit && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3>Hasil Diagnosa:</h3>
          <p>{penyakit}</p>
        </div>
      )}
    </>
  );
}









