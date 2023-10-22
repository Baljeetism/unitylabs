import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]); // Initialize data as an empty array.
  const [loading, setLoading] = useState(true); // Flag to track whether data is being loaded.

  useEffect(() => {
    // Fetch data from your API and set it to the 'data' state.
    // Example API call:
    fetch('http://hn.algolia.com/api/v1/search?query=test')
      .then(response => response.json())
      .then(result => {
        setData(result.hits || []); // Use result.hits, or initialize data as an empty array if result.hits is undefined.
        setLoading(false); // Set loading to false once data is available.
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Set loading to false on error.
      });
  }, []); // Empty dependency array to fetch data only once.

  const filteredData = data.filter((item) =>
    (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // You can add additional logic here to perform the search when the button is clicked.
  };

  return (
    <div>
      <div>
        <input type='text' value={searchTerm} onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </div>
      <div>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          filteredData.map((item) => (
            <Card
              key={item.objectID} // Use a unique key property (objectID in this case)
              title={item.title}
              objectID={item.objectID}
              points = {item.points}
            />
          ))
        )}
      </div>
    </div>
  );
}
