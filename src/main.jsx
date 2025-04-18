import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home';
import Contact from './pages/Contact';
// import Speaker from './pages/Speaker';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import CallForPaper from './pages/CallForPaper.jsx'
import Acceptedpaper from './pages/Acceptedpaper.jsx'
import PaperSubmission from './pages/PaperSubmission.jsx'
import RegistrationFee from './pages/RegistrationFee.jsx'
import FeeSubmission from './pages/FeeSubmission.jsx'
import ProgramCommitee from './pages/ProgramCommitee.jsx'
import OrgCommitee from './pages/OrgCommittee.jsx'
import Query from './pages/query.jsx'
import PlaceToVisit from './pages/PlaceToVisit.jsx'
import Form from './pages/Form.jsx'
import FAQ from './pages/FAQ.jsx'
import VisaInformation from './pages/VisaInformation.jsx'
import Program from './pages/Program.jsx'
import PosterPresentation from './pages/PosterPresentaion.jsx'
import ProgramSchedule from './pages/ProgramSchedule.jsx'
import TrackSchedule from './pages/TrackSchedule.jsx'
import WieActivity from './pages/WieActivity.jsx'
import ChiefGuest from './pages/chiefguest.jsx'
import Guestofhonor from './pages/guestofhonor.jsx'
import Keynotespeaker from './pages/keynotespeaker.jsx'
import Ieeeobserver from './pages/ieeeobserver.jsx'
// import VisaInfocontact from './pages/Visainfocontact.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/speaker" element={<Speaker />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/programcommittee" element={<ProgramCommitee/>} />
        <Route path="/organizingcommittee" element={<OrgCommitee/>} /> 
        {/* <Route path="/locale/about" element={<AboutCity/>} /> */}
        <Route path="/locale/place" element={<PlaceToVisit/>} />
        <Route path="/locale/nearby-hotel" element={<Accomodation />} />
        <Route path="/registration" element={<RegistrationFee />} />
        <Route path="/fee" element={<FeeSubmission />} />
        {/* <Route path="/papersubmission" element={<PaperSubmission />} /> */}
        <Route path="/callforpaper" element={<CallForPaper />} />
        {/* <Route path="/plagiarism" element={<PlagiarismPolicy />} />
        <Route path="/impDates" element={<ImportantDates />} /> */}
        <Route path='/speakers' element ={<Acceptedpaper/>}/>
        <Route path="/contact/query" element={<Query />} />
        <Route path="/registrationform" element={<Form />} />
        <Route path="/locale/faq" element={<FAQ />} />
        <Route path="/locale/Visainformation" element={<VisaInformation />} />
        <Route path="/program" element={<Program />} />
        <Route path="/program/posterpresentation" element={<PosterPresentation />} />
        <Route path="/program/programschedule" element={<ProgramSchedule />} />
        <Route path="/program/trackschedule" element={<TrackSchedule />} />
        <Route path="/program/wieactivity" element={<WieActivity />} />
        <Route path="/Speaker/chiefguest" element={<ChiefGuest />} />
        <Route path="/Speaker/guestofhonor" element={<Guestofhonor />} />
        <Route path="/Speaker/keynotespeaker" element={<Keynotespeaker />} />
        <Route path="/ieeeobserver" element={<Ieeeobserver />} />
        {/* <Route path="/locale/Visainformation/contact" element={<VisaInfocontact />} /> */}
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
