import React from 'react';

import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home'
import Detail from './component/Detail';
import Search from './component/Search';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:objectID" component={Detail} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
