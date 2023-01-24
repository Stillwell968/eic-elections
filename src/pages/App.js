import React from 'react'
import { BrowserRouter } from "react-router-dom";
import SiteRoutes from './SiteRoutes';
// import home from "./home";
// import Winners from "./Winners"
// import Dashboard from "./Dashboard"
// import Login from './login';

// import ForgotPassword from "./forgotPassword";
import Register from "./register";
import Landing from "./Landing";

import { AuthProvider } from "../Backend Components/firebase/Auth";
import PrivateRoute from "../Backend Components/firebase/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <div className="App"> 
        <BrowserRouter>
         <SiteRoutes />
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}

export default App
