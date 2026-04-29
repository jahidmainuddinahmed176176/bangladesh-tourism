import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const destinations = [
  {
    id: 'sylhet',
    name: 'Sylhet',
    desc: 'Tea gardens, rolling hills, and the shrine of Hazrat Shah Jalal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Sylhet_tea_garden.jpg/960px-Sylhet_tea_garden.jpg?_=20180528175205',
    route: '/sylhet'
  },
  {
    id: 'coxsbazar',
    name: "Cox's Bazar",
    desc: "World's longest unbroken sea beach — 120km of golden sand",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Cox%27s_Bazar_sea_beach_01.jpg/960px-Cox%27s_Bazar_sea_beach_01.jpg',
    route: '/coxsbazar'
  },
  {
    id: 'bandarban',
    name: 'Bandarban',
    desc: 'Highest peaks, indigenous culture, and the mystical Nilgiri',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Landscape_of_Bandarban%2C_Bangladesh.jpg/960px-Landscape_of_Bandarban%2C_Bangladesh.jpg',
    route: '/bandarban'
  }
];

  return (
    <>
      <div className="hero">
        <h1>Discover Beautiful Bangladesh</h1>
        <p>Explore the green hills, longest sea beach, and rich cultural heritage</p>
      </div>

      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="card-container">
          {destinations.map((dest) => (
            <div key={dest.id} className="card" onClick={() => navigate(dest.route)}>
              <img src={dest.image} alt={dest.name} />
              <h3>{dest.name}</h3>
              <p>{dest.desc}</p>
              <button className="btn">Explore →</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;