import { useState, useEffect } from 'react';

function PlacesAPI() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from LIVE .NET API on Render
        fetch('https://bangladesh-dotnet-api.onrender.com/api/places')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPlaces(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading places from .NET API...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Tourist Places (from .NET API)</h2>
            <ul>
                {places.map(place => (
                    <li key={place.id} style={{ margin: '10px 0' }}>
                        <strong>{place.name}</strong> - {place.type}
                        <br />
                        <small>{place.description}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlacesAPI;