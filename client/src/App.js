import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//CONTEXT
import { UsersContextProvider } from './Context/userContext';
import { AuthProvider, AuthContext } from './Context/authContext';

// SCREENS
import LandingScreen from './Screens/LandingScreen';
import ListScreen from './Screens/ListScreen/ListScreen.js';
import ProfileScreen from './Screens/Profile/ProfileScreen';
import Login from './Screens/Login/LoginScreen';
import Register from './Screens/Register/RegisterScreen';
import ChatScreen from './Screens/Chat/ChatScreen'
import { SavedUsersScreen } from './Screens/Profile/SavedUsersScreen.js';

// COMPONENTS
import ResponsiveAppBar from './components/c_navigation/AppBar';
import BottomAppBar from './components/c_footer/BottomAppBar.js';
import Footer from './components/c_footer/Footer.js';

// UTILITIES
import ProtectedRoute from './utilities/protectedRoute.js';
import ProtectedRoute2 from './utilities/protectedRoute2.js';

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TOAST
// https://fkhadra.github.io/react-toastify/installation
import { ToastContainer } from 'react-toastify';

// THEME
const customTheme = createTheme({
  palette: {
    primary: {
      light: '#ffcd38',
      main: '#ffc107',
      dark: '#b28704',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffa733',
      main: '#ff9100',
      dark: '#b26500',
      contrastText: '#000',
    },
  },
});

function App() {


  return (
    <div className="App">
      <ToastContainer />
      <ThemeProvider theme={customTheme}>
        <Router>
          <AuthProvider>
            <UsersContextProvider>
              <ResponsiveAppBar />
              <Routes>
                <Route path="/" element={<LandingScreen />}></Route>
                <Route
                  path="/list"
                  element={
                    <ProtectedRoute>
                      <ListScreen />
                    </ProtectedRoute>
                  }
                ></Route>
                {/* <Route
                  path="/details/:id"
                  element={
                    <ProtectedRoute>
                      <DetailsScreen />
                    </ProtectedRoute>
                  }
                ></Route> */}
                <Route 
                path="/login" 
                element={
                  <ProtectedRoute2>
                <Login />
                </ProtectedRoute2>
                }>

                </Route>
                <Route 
                path="/register" 
                element={
                  <ProtectedRoute2>
                  <Register />
                  </ProtectedRoute2>
                }>
                </Route>

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfileScreen />
                    </ProtectedRoute>
                  }
                ></Route>
                 <Route
                  path="/chat"
                  element={
                    <ProtectedRoute>
                      <ChatScreen />
                    </ProtectedRoute>
                  }
                ></Route>
                 <Route
                  path="/contacts"
                  element={
                    <ProtectedRoute>
                      <SavedUsersScreen />
                    </ProtectedRoute>
                  }
                ></Route>
              </Routes>
              <Footer/>
              {/* <AppFooter /> */}
            </UsersContextProvider>
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
