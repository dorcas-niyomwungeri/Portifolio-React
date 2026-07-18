import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';
import UseState from './useState';
import UseEffect from './useEffect';
import UseRef from './useRef';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useRef" element={<UseRef/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;