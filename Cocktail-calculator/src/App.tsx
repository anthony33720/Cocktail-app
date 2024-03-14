import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DrinkList from "./pages/DrinkList";

import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/drink-list" element={<DrinkList/>}/>
            </Routes>
        </div>
    </Router>
  );
};

export default App;
