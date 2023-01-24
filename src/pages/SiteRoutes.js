import React from 'react'
// import home from "./home";
// import Winners from "./Winners"
// import Dashboard from "./Dashboard"
// import Login from './login';

// import ForgotPassword from "./forgotPassword";
import Register from "./register";
import Landing from "./Landing";
import VotingCard from './VotingCard';
import RegisterParty from './RegisterParty';
import RegistrationCard from '../Components/RegistrationCard';

import { AuthProvider } from "../Backend Components/firebase/Auth";
import PrivateRoute from "../Backend Components/firebase/PrivateRoute";
import { Route, Routes } from "react-router-dom";


function SiteRoutes() {
  return (
    <Routes>
    <Route  path="/" element={<Landing />}/>
    <Route  path="register/*" >
      <Route index element={<Register />}  />
      <Route  path="registrationCard" element={<VotingCard />} />
    </Route>

    <Route path='/registerParty' element={<RegisterParty />} />

    
       
      {/* <PrivateRoute exact path="/" component={Landing} /> */}
      {/* <PrivateRoute exact path="/vote" component={home} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/results" component={Winners} />
      <Route exact path="/login" component={Login} />
      
      {/* <Route exact path="/forgotPassword" component={ForgotPassword} /> */}
    </Routes>
  )
}

export default SiteRoutes