import { HomeIcon } from '@heroicons/react/16/solid';
import React from 'react';
import PersistentDrawerLeft from './PersistentDrawer';
import { Route, Router, Routes } from 'react-router';
import GejalaForm from './GejalaForm';
import FormKonsultasi from './components/FormKonsultasi';

function App() {
  return (
   
    <Router>
    <Routes>
      {/* Gunakan Layout sebagai pembungkus halaman */}
      <Route path="/" element={<PersistentDrawerLeft />}>
        <Route path="gejala" element={<GejalaForm />} />
        <Route path="konsultasi" element={<FormKonsultasi />} />
        {/* Tambahkan routing lainnya */}
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
