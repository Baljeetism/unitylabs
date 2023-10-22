import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function Detail() {
  const { objectID } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
  const url = `http://hn.algolia.com/api/v1/items/${objectID}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setItem(response.data);
        setIsLoading(false); 
      } catch (error) {
        console.error(error);
        setIsLoading(false); 
      }
    }

    fetchData();
  }, [url]);

  return (
    <div>
      
      {isLoading ? (
       
        <p>Loading...</p>
      ) : (
        
        <div>
          <h1 className='m-4'>{item.title}</h1>
          <p className='m-4'><h3>Points: </h3>{item.points}</p>
          <h2 className='m-4'>Comments:</h2>
          <ul>
            {item.children &&
              item.children.map((comment) => (
                <li key={comment.id} className='d-flex border border-dark m-3 justify-content-around p-4'>{comment.text}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
