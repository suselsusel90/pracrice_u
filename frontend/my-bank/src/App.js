import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Calc1 from "./components/Calc1";
import Calc2 from "./components/Calc2";
import Calc3 from "./components/Calc3";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <div className="App">
      <Header />
      <Calc1 />
      <Calc2 />
      <Calc3 />
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
