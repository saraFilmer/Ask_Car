import './style.css'
import { Nav } from './Nav'
   import React from 'react';
import './styles.css'; // נוודא לייבא את קובץ ה-CSS
export const Home=()=>{   

   return <>
   <Nav></Nav>
   
    <div className="container">
      <header className="header">
         <br></br> <br></br>
        <h1>Welcome to <span className="highlight">AskCar</span></h1>
        <p>Your ultimate car rental experience.</p>
      </header>
      <main className="main-content">
        <section className="car-section">
          <h2>Our Cars</h2>
          <div className="car-gallery">
            {/* Add car images or elements here */}
            <div className="car" id="car1"></div>
            <div className="car" id="car2"></div>
            <div className="car" id="car3"></div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 AskCar. All rights reserved.</p>
      </footer>
      <div className="stars"></div>
    </div>
     </> 
    
}