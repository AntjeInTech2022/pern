import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//CONTEXT
import { UsersContextProvider } from './Context/userContext';

// SCREENS
import LandingScreen from './Screens/LandingScreen';
import ListScreen from './Screens/ListScreen';
import DetailsScreen from './Screens/DetailsScreen';
import ProfileScreen from './Screens/ProfileScreen';

// COMPONENTS
import ResponsiveAppBar from './components/c_navigation/AppBar';
// import AppFooter from './components/c_footer/AppFooter';
import SignUp from './Screens/SignUp';

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
      <ThemeProvider theme={customTheme}>
        <Router>
          <UsersContextProvider>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<LandingScreen />}></Route>
              <Route path="/list" element={<ListScreen />}></Route>
              <Route path="/details/:id" element={<DetailsScreen />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              {/* <Route path="/login" element={<Login />}></Route> */}
              <Route path="/profile" element={<ProfileScreen />}></Route>
            </Routes>
            {/* <AppFooter /> */}
          </UsersContextProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
