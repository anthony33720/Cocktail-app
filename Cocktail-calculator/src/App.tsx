import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import MyList from "./pages/MyList";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
