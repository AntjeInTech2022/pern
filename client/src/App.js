import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// SCREENS
import LandingScreen from './Screens/LandingScreen';
import ListScreen from './Screens/ListScreen';
import DetailsScreen from './Screens/DetailsScreen';

import ProfileScreen from './Screens/ProfileScreen';

// COMPONENTS

import AppAppBar from './components/c_navigation/AppAppBar';
import AppFooter from './components/c_footer/AppFooter';
import SignUp from './Screens/SignUp';

function App() {
  return (
    <div className="App">
      <AppAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />}></Route>
          <Route path="/list" element={<ListScreen />}></Route>
          <Route path="/details/:id" element={<DetailsScreen />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/profile" element={<ProfileScreen />}></Route>
        </Routes>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
