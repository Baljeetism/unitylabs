import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ title, objectID }) {
  
  return (
    
      <div className='d-flex border border-dark m-3 justify-content-around'>
      <Link to={`/detail/${objectID}`}><p className='m-4'>{title}</p>  </Link> 
        
        
    </div>
    
     
    
  )
}
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Card({ title, id }) {
//   return (
//     <div className="card">
//       <h2>
//         <Link to={`/detail/${id}`}>{title}</Link>
//       </h2>
//     </div>
//   );
// }



