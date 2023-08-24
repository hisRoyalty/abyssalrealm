import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Staff from './components/Staff';
import ServerStatus from './components/ServerStatus';
import Mods from './components/Mods';
import Gallery from './components/Gallery';
import Map from './components/Map';
import StickyWindow from './components/IPStickyWindow';
import Factions from './components/Factions';
import AIFactions from './components/AIFactions';
import TutorialComponent from './components/Tutorial';

const App = () => {
  return (
    <Router>
      <div>
        <StickyWindow serverIP={'play.abyssalrealm.tech:25592'}></StickyWindow>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/status" element={<ServerStatus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/map" element={<Map />} />
          <Route path="/factions" element={<Factions />} />
          <Route path="/aifactions" element={<AIFactions />} />
          <Route path="/tutorial" element={<TutorialComponent />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
