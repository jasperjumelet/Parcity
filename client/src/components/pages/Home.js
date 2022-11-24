import React from 'react';
import NavBar from '../NavBar';

const Home = () => {
  return (
    <main>
      <section className="bg-gradient-to-b from-primary to-secondary/70 min-h-screen">
        <NavBar/>
      </section>
      <section className="bg-white min-h-screen">
        <p>test text</p>
      </section>
    </main>
  )
}

export default Home;
