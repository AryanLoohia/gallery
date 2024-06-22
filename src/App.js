import React from 'react';
import './App.css';
import Card from './Card';
import Details from './Details';
import img from './images/arrow-down-sign-to-navigate.png';


function App() {
  const cardCount = 15;
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 1.0, // Scroll down by 90% of the viewport height
      behavior: 'smooth',
    });
  };
  return (
    <>
   
    <div className="card-container">
      {Array.from({ length: cardCount }).map((_, index) => (
        <Card key={index} index={index} />
      ))}
    </div>
    <div className="overlay">
    <div className="overlay-text">EVENTS AND INITIATIVES</div><br></br><br></br>
    <img src={img} alt="Moving Image" className="moving-image" onClick={scrollDown} />
    
    </div><br></br><br></br><br></br>
    <Details></Details>
    </>
  );
}

export default App;
