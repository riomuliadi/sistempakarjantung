import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router'
import Home from './Home.jsx'
import GejalaForm from './GejalaForm.jsx'
import PersistentDrawerLeft from './PersistentDrawer.jsx'
import HomeTitle from './components/HomeTitle.jsx'
import FormKonsultasi from './components/FormKonsultasi.jsx'
import PatientLogin from './HalamanLogin.jsx'
import HalamanLogin from './HalamanLogin.jsx'
import Layout from './Layout.jsx'
import { AppBlockingRounded } from '@mui/icons-material'

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
const router = createBrowserRouter([
  { 
    path: '/',
    element: <Layout />,
  },
  {
    path: '/login',
    element: <HalamanLogin />,
  },
  {
    path: '/persistent',
    element: <PersistentDrawerLeft />,
  },
      {
        path: '/home',
        element: <HomeTitle />
      },
      {
        path: '/gejala',
        element: <GejalaForm />,
      },
      {
        path: '/konsultasi',
        element: <FormKonsultasi />,
      },
    
  
])

// const router= createBrowserRouter([
//   {
//     element: <PersistentDrawerLeft />,
//     path:'/',
//     children:[
//     {
//     path: '/gejala',
//     element:<GejalaForm/>
//   },

//       {
//         index:true,
//         element:<HomeTitle/>
//       },
//       {
//         path: '/konsultasi',
//         element:<FormKonsultasi/>
//       },
      
//   ],
//   },
//   {
//     path: '/login',
//     element:<HalamanLogin/>
//   },
//   {
//     path: '/layout',
//     element:<Layout/>
//   },
// ])

createRoot(document.getElementById('root')).render(
  // <Router>
  //   <Routes>
  //     <Route path="/" element = {<App />}>
  //       {/* <Route path="/" element = {<App />}/> */}
  //     </Route>
  //     {/* <Route path="/gejalaform" element = {< gejala/>} /> */}
  //   </Routes>
  // </Router>
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)