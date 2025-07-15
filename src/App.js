import './App.css';
import './Style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FooterCTA from './components/FooterCTA';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef } from 'react';
import Home from './pages/Home';
import AdServer from './pages/products/AdServer';
import Audience from './pages/products/Audience';

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/adServer" element={<AdServer />} />
            <Route path="/audience" element={<Audience />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='main-container'>
        <Navbar />
        <AnimatedRoutes />
        <FooterCTA />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
