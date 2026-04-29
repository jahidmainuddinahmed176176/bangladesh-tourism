import { Link } from 'react-router-dom';

function Bandarban() {
  return (
    <div className="destination-detail">
      <h1>Bandarban - City of Hills</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Landscape_of_Bandarban%2C_Bangladesh.jpg/960px-Landscape_of_Bandarban%2C_Bangladesh.jpg" alt="Bandarban hills" />

      <h2>Top Attractions</h2>
      <div className="attractions">
        <div className="attraction-card">
          <h3>⛰️ Nilgiri</h3>
          <p>Highest peak with stunning sunrise views</p>
        </div>
        <div className="attraction-card">
          <h3>🏞️ Sangu River</h3>
          <p>Boat rides through tribal villages</p>
        </div>
        <div className="attraction-card">
          <h3>🚣 Boga Lake</h3>
          <p>Mystical high-altitude lake</p>
        </div>
      </div>

      <h2>Best Time to Visit</h2>
      <p>October to March — clear skies, perfect for trekking</p>

      <h2>Local Food</h2>
      <p>Try <strong>Bamboo Chicken</strong>, tribal <strong>bamboo rice</strong>, and local <strong>fruit wines</strong>!</p>

      <Link to="/" className="btn">← Back to Home</Link>
    </div>
  );
}

export default Bandarban;