import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// SCREENS
import LandingScreen from "./Screens/LandingScreen";
import ListScreen from "./Screens/ListScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />}>
          <Route path="/list" element={<ListScreen />}></Route>
          <Route path="/details" element={<DetailsScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route>
          <Route path="/profile" element={<ProfileScreen />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
