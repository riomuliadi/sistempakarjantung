
import * as React from 'react';
import { List, ListItem, ListItemText, Checkbox, Button, Grid } from '@mui/material';

export default function FormDiagnosa({ items }) {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleSelect = (nama_gejala) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(nama_gejala)
        ? prevSelected.filter((item) => item !== nama_gejala)
        : [...prevSelected, nama_gejala]
    );
  };

  const handleSubmit = () => {
    if (selectedItems.length > 0) {
      alert(`Gejala yang dipilih: ${selectedItems.join(', ')} sedang diproses.`);
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
              <ListItem button onClick={() => handleSelect(item.nama_gejala)}>
                <Checkbox
                  edge="start"
                  checked={selectedItems.includes(item.nama_gejala)}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': `checkbox-list-label-${item.nama_gejala}`,
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
          color= "success"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
