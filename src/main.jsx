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
import HalamanRegistrasi from './HalamanRegistrasi.jsx'
import HasilDiagnosa from './components/HasilDiagnosa.jsx'

const router= createBrowserRouter([
  {
    element: <PersistentDrawerLeft />,
    children:[
    {
    path: '/gejala',
    element:<GejalaForm/>,
  },

      {
        path: '/home',
        element:<HomeTitle/>
      },
      {
        path: '/konsultasi',
        element:<FormKonsultasi/>
      },
      {
        path: '/hasil-diagnosa',
        element:<HasilDiagnosa/>
      },
  ],
  },
  {
    path: '/registrasi',
    element:<HalamanRegistrasi/>
  },
  {
    path: '/login',
    element:<HalamanLogin/>
  },
  {
    index:true,
    path: '/',
    element:<Layout/>
  },
  
  // {
  //   path: '/logout',
  //   element:<LogoutButton/>
  // },
  
])

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
