import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import PatientHome from "./components/PatientHome";
import Footer from "./components/Footer";
import Appointments from "./components/Appointments"; // <-- Import the Appointments page
import BookAppointment from "./components/BookAppointment"; // <-- Import the BookAppointment page
import Hospitals from "./components/Hospitals"; // <-- Import the Hospitals page 

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="appContainer">
        {/* Header remains fixed across all pages */}
        <Header />

        {/* Page Content */}
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<PatientHome />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/hospitals" element={<Hospitals />} />
          </Routes>
        </div>

        {/* Footer stays across pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
