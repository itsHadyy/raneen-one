import Home from './pages/Home';
import './App.css';
import './Style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FooterCTA from './components/FooterCTA';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='main-container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterCTA />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
