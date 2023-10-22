import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ title, objectID }) {
  return (
    <div className='d-flex border border-dark m-3 justify-content-around' style={{ backgroundImage: "url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg')", backgroundSize: "cover", width: "100%", borderRadius: "25px" }}>
      <Link to={`/detail/${objectID}`}>
        <p className='m-4'>{title}</p>
      </Link>
    </div>
  );
}


