import React from 'react';
import NavBar from '../NavBar';

const Home = () => {
  return (
    <main>
      <div className="bg-gradient-to-b from-primary to-secondary/70 min-h-screen">
          <NavBar/>
        <img src={"/images/city2.png"} className="inline-block align-bottom" alt="city-skyline"/>
      </div>
      <section className="bg-white min-h-screen">
        <p>test text</p>
      </section>
    </main>
  )
}

export default Home;
