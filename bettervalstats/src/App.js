import React from 'react';
import { Routes , Route, Link} from "react-router-dom";
import Display from './components/display.component.js';
import Search from './components/search.component.js';

function App() {

  return (
   <>
      <div className="relative p-2 bg-gray-900 flex justify-between" id="navbar">
        <h1 className='text-slate-400 font-bold ml-4'>BetterVCTStats</h1>
          <Link to={"/"} className="text-l font-medium text-white hover:text-slate-500 mx-5">
            Search
          </Link>
      </div>

      <div id='switchDiv' className='object-cover h-[95%] overflow-hidden'>
        <Routes>
          <Route exact path= "/" element={<Search />} />
          <Route path="/player/:name" element={<Display />}/>
        </Routes>
      </div>
    
   </>
  );
}

export default App;
