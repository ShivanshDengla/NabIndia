import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import News from './pages/News';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import './App.css';

import PreventionOfBlindness from './pages/projects/PreventionOfBlindness';
import Nursery from './pages/projects/Nursery';
import Education from './pages/projects/Education';
import TalkingBooks from './pages/projects/TalkingBooks';
import BraillePress from './pages/projects/BraillePress';
import Rehabilitation from './pages/projects/Rehabilitation';
import VocationalTraining from './pages/projects/VocationalTraining';
import Employment from './pages/projects/Employment';
import Advocacy from './pages/projects/Advocacy';
import ClientService from './pages/projects/ClientService';
import ResearchLibrary from './pages/projects/ResearchLibrary';
import Recreation from './pages/projects/Recreation';
import WomensEmpowerment from './pages/projects/WomensEmpowerment';
import StateBranches from './pages/projects/StateBranches';
import PerfumeryCollege from './pages/projects/PerfumeryCollege';
import FundRaisingCommittee from './pages/projects/FundRaisingCommittee';
import MnbHomeForTheBlind from './pages/projects/MnbHomeForTheBlind';
import HomeForElderlyBlind from './pages/projects/HomeForElderlyBlind';
import CentreForBlindWomen from './pages/projects/CentreForBlindWomen';
import RehabilitationCentreMountAbu from './pages/projects/RehabilitationCentreMountAbu';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/projects/prevention-of-blindness" element={<PreventionOfBlindness />} />
            <Route path="/projects/nursery" element={<Nursery />} />
            <Route path="/projects/education" element={<Education />} />
            <Route path="/projects/talking-books" element={<TalkingBooks />} />
            <Route path="/projects/braille-press" element={<BraillePress />} />
            <Route path="/projects/rehabilitation" element={<Rehabilitation />} />
            <Route path="/projects/vocational-training" element={<VocationalTraining />} />
            <Route path="/projects/employment" element={<Employment />} />
            <Route path="/projects/advocacy" element={<Advocacy />} />
            <Route path="/projects/client-service" element={<ClientService />} />
            <Route path="/projects/research-library" element={<ResearchLibrary />} />
            <Route path="/projects/recreation" element={<Recreation />} />
            <Route path="/projects/womens-empowerment" element={<WomensEmpowerment />} />
            <Route path="/projects/state-branches" element={<StateBranches />} />
            <Route path="/projects/perfumery-college" element={<PerfumeryCollege />} />
            <Route path="/projects/fund-raising-committee" element={<FundRaisingCommittee />} />
            <Route path="/projects/mnb-home-for-the-blind" element={<MnbHomeForTheBlind />} />
            <Route path="/projects/home-for-elderly-blind" element={<HomeForElderlyBlind />} />
            <Route path="/projects/centre-for-blind-women" element={<CentreForBlindWomen />} />
            <Route path="/projects/rehabilitation-centre-mount-abu" element={<RehabilitationCentreMountAbu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
