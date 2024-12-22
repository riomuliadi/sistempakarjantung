import { HomeIcon } from '@heroicons/react/16/solid';
import React from 'react';
import PersistentDrawerLeft from './PersistentDrawer';
import { Route, Router, Routes } from 'react-router';
import GejalaForm from './GejalaForm';
import FormKonsultasi from './components/FormKonsultasi';

function App() {
  const [message, setMessage] = useState('');
  const [postResponse, setPostResponse] = useState('');

  // Fungsi untuk mendapatkan data dari Flask API
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000');
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fungsi untuk mengirim data ke Flask API
  const sendData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/data', {
        name: 'ReactJS',
        purpose: 'Connect with Flask',
      });
      setPostResponse(response.data.received);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
}

export default App;
