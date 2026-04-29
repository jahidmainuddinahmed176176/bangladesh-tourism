import { Link } from 'react-router-dom';

function Sylhet() {
  return (
    <div className="destination-detail">
      <h1>Sylhet - The Land of Tea Gardens</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Sylhet_tea_garden.jpg/960px-Sylhet_tea_garden.jpg?_=20180528175205" alt="Sylhet" />

      <h2>Top Attractions</h2>
      <div className="attractions">
        <div className="attraction-card">
          <h3>🍃 Jaflong</h3>
          <p>Stone quarry and crystal-clear river surrounded by hills</p>
        </div>
        <div className="attraction-card">
          <h3>🕌 Hazrat Shah Jalal Shrine</h3>
          <p>Holy shrine of the famous Sufi saint</p>
        </div>
        <div className="attraction-card">
          <h3>🍵 Ratargul Swamp Forest</h3>
          <p>Bangladesh's only freshwater swamp forest</p>
        </div>
      </div>

      <h2>Best Time to Visit</h2>
      <p>October to March — pleasant weather, perfect for sightseeing</p>

      <h2>Local Food</h2>
      <p>Try traditional <strong>7-layer tea</strong>, <strong>Shatkora beef curry</strong>, and fresh <strong>lemons</strong>!</p>

      <Link to="/" className="btn">← Back to Home</Link>
    </div>
  );
}

export default Sylhet;