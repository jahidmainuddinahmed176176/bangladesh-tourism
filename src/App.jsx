import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sylhet from './pages/Sylhet';
import CoxsBazar from './pages/CoxsBazar';
import Bandarban from './pages/Bandarban';

function App() {
  return (
    <Router>
      <nav>
        <div className="logo">🇧🇩 Explore Bangladesh</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sylhet">Sylhet</Link></li>
          <li><Link to="/coxsbazar">Cox's Bazar</Link></li>
          <li><Link to="/bandarban">Bandarban</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sylhet" element={<Sylhet />} />
        <Route path="/coxsbazar" element={<CoxsBazar />} />
        <Route path="/bandarban" element={<Bandarban />} />
      </Routes>

      <footer>
        <p>© 2026 Explore Bangladesh | Discover the beauty</p>
      </footer>
    </Router>
  );
}

export default App;