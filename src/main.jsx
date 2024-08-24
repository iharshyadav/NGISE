import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import Registration from './pages/Registration';
import CallForPaper from './pages/CallForPaper.jsx'
import Acceptedpaper from './pages/Acceptedpaper.jsx'
import PaperSubmission from './pages/PaperSubmission.jsx'
import ProgramCommitee from './pages/ProgramCommitee.jsx'
import OrgCommitee from './pages/OrgCommittee.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/programcommittee" element={<ProgramCommitee/>} />
        <Route path="/organizingcommittee" element={<OrgCommitee/>} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/papersubmission" element={<PaperSubmission />} />
        <Route path="/callforpaper" element={<CallForPaper />} />
        <Route path='/speakers' element ={<Acceptedpaper/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)