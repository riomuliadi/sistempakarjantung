// src/DiagnosaResult.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

export default function HasilDiagnosa() {
  const location = useLocation();
  const { result } = location.state || { result: [] }; // Mendapatkan data dari state yang dikirim

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h4" color="primary" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        Hasil Diagnosa
      </Typography>
      {result.length > 0 ? (
        <List>
          {result.map((penyakit, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Penyakit ID: ${penyakit.id_penyakit}`}
                secondary={`Aturan yang cocok: ${penyakit.matchedAturan
                  .map((rule) => `Gejala ID: ${rule.id_gejala}`)
                  .join(', ')}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No results found</Typography>
      )}
    </div>
  );
}
