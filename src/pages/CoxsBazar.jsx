import { Link } from 'react-router-dom';

function CoxsBazar() {
  return (
    <div className="destination-detail">
      <h1>Cox's Bazar - The Longest Sea Beach</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Cox%27s_Bazar_sea_beach_01.jpg/960px-Cox%27s_Bazar_sea_beach_01.jpg" alt="Cox's Bazar beach" />

      <h2>Top Attractions</h2>
      <div className="attractions">
        <div className="attraction-card">
          <h3>🏖️ Himchari</h3>
          <p>Waterfalls and breathtaking sea views</p>
        </div>
        <div className="attraction-card">
          <h3>🏝️ Saint Martin's Island</h3>
          <p>Coral island with crystal clear water</p>
        </div>
        <div className="attraction-card">
          <h3>⛰️ Inani Beach</h3>
          <p>Rocky beach perfect for sunset views</p>
        </div>
      </div>

      <h2>Best Time to Visit</h2>
      <p>November to February — cool breeze, perfect beach weather</p>

      <h2>Local Food</h2>
      <p>Fresh <strong>seafood</strong>, <strong>dried fish</strong> (Shutki), and <strong>coconut</strong> water!</p>

      <Link to="/" className="btn">← Back to Home</Link>
    </div>
  );
}

export default CoxsBazar;