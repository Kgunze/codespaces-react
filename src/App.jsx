import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home'; // Import Home component
import AboutUs from './pages/AboutUs';
import OurCharter from './pages/OurCharter';
import Stats from './pages/Stats';
import Press from './pages/Press';
import Jobs from './pages/Jobs';
import HelpCenter from './pages/HelpCenter';
import OurRules from './pages/OurRules';
import CreatorResources from './pages/CreatorResources';
import ForwardFunds from './pages/ForwardFunds';
import BrandAssets from './pages/BrandAssets';
import Newsletter from './pages/Newsletter';
import HoaSenProjectUpdates from './pages/HoaSenProjectUpdates';
import Research from './pages/Research';
import Login from './pages/Login'; // Import Login component
import Signup from './pages/Signup'; // Import Signup component
import CreateProject from './pages/CreateProject'; // Import Create Project component

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Default route for Home */}
        <Route path='/login' element={<Login />} /> {/* Route for Login */}
        <Route path='/signup' element={<Signup />} /> {/* Route for Signup */}
        <Route path='/create' element={<CreateProject />} /> {/* Route for Create Project */}
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/our-charter' element={<OurCharter />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/press' element={<Press />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path='/our-rules' element={<OurRules />} />
        <Route path='/creator-resources' element={<CreatorResources />} />
        <Route path='/forward-funds' element={<ForwardFunds />} />
        <Route path='/brand-assets' element={<BrandAssets />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/hoa-sen-project-updates' element={<HoaSenProjectUpdates />} />
        <Route path='/research' element={<Research />} />
      </Routes>
      <Footer />
    </Router>
  );
}
