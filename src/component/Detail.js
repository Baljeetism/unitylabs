import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

export default function Detail() {
  const { objectID } = useParams();
  const [item, setItem] = useState({});
  const url = `http://hn.algolia.com/api/v1/items/${objectID}`;
  const fetchnews=async(link)=>{
    try {
        const res = await axios.get(link);
        setItem(res.data);
        console.log(res.data);
    } catch (error) {
        
    }
  }

  useEffect(() => {
    fetchnews(`http://hn.algolia.com/api/v1/items/${objectID}`);
    // axios.get(url)
    //   .then((response) => {
    //     setItem(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, [url]);

  return (
    <div>
      <Navbar />
      <h1>{item.title}</h1>
      <p>Author: {item.author}</p>
      <p>Points: {item.points}</p>
      <h2>Comments:</h2>
      <ul>
        {item.children &&
          item.children.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
      </ul>
    </div>
  );
}
