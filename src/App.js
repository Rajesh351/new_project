import React, { useState } from "react";
import Raj from "./Comp/Raj"
import Tours from "./Comp/Tours";
import './App.css';
const App = () => {
  const [tours, setTours] = useState(Raj);

  function removeTour(id) {
    const newTours = tours.filter(tour=> tour.id !== id);
    setTours(newTours);
  }
  if(tours.length===0)
  {
    return(
      <div className="refersh">
         <h2>No Tours Left</h2>
         <button className="btn-white" onClick={()=>setTours(Raj)}>
          Refresh
         </button>
      </div>
    )
  }
  return (
    <div className="App">
         {/* <h2>Plan with Love</h2> */} 
      <Tours  tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;