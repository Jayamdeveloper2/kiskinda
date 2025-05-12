import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Home from './layouts/Home';
import Contact from './layouts/Contact';
import IndiaAdmission from './layouts/IndiaAdmission';
import FindCourse from './layouts/FindCourse';
import MainLayout from './MainLayout';
import Signup from './layouts/Signup';
import Destination from './layouts/Destination';
import About from './layouts/About';
import Universities from './pages/About/Universities/Universities';
import QuoteSection from './pages/home/QuoteSection/QuoteSection';
import AboutProgram from './pages/About/AboutProgram/AboutProgram';

function App() {
  return (
    <Routes>
      {/* Routes with TopBar, Header, Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/quote" element={<QuoteSection />} />
        <Route path="/programs" element={<AboutProgram />} />
        <Route path="/destinations" element={<Destination />} />
            {/* <Route path="/kiskinda/destinations" element={<Destination />} /> */}

        {/* <Route path="/destinations/:country" element={<Destination />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/india-admission" element={<IndiaAdmission />} />
      </Route>

      {/* Route without layout */}
      <Route path="/find-course" element={<FindCourse />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;