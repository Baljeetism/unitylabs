import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    fetch('http://hn.algolia.com/api/v1/search?query=test')
      .then(response => response.json())
      .then(result => {
        setData(result.hits || []); 
        setLoading(false); 
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []); 

  const filteredData = data.filter((item) =>
    (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    
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
              key={item.objectID} 
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
