import NavBar from "../NavBar";
import Footer from "../Footer";
import Card from "../Card";
import { useRef } from 'react';
import { Link } from "react-router-dom";


const Home = () => {

  const section2Ref = useRef<null | HTMLInputElement>(null);
  const section2Click = () => {
    section2Ref.current?.scrollIntoView({ behavior: "smooth" });
  }



  return (
    <main>
      <div className="bg-gradient-to-b from-primary to-secondary/70 min-h-screen">
        <NavBar />
        <div className="absolute flex flex-col min-h-screen justify-end">
          <img
            src={"/images/city2.png"}
            className="flex bottom-0 align-bottom opacity-70 saturate-150"
            alt="city-skyline"
          />
        </div>
        <div className="relative flex flex-col h-screen items-center text-center justify-between">
          <div></div>
          <h1 className="font-jetbrains-mono font-[300] text-4xl text-white mx-10">Invest in properties
            with insights and flexibility</h1>
          <button onClick={section2Click} className="bg-[#FF7417] hover:bg-[#CE5B0E] text-white font-jetbrans-mono font-[600] text-xl shadow-lg shadow-orange-900 py-3 px-16 mb-8 border-b-4 border-[#CE5B0E] hover:border-[#FF7417] rounded">Explore</button>

        </div>

      </div>
      <section ref={section2Ref} className="bg-gray-200">
        <div className="flex pt-16 gap-8 justify-center">
          <Card />
          <div className="flex inline-flex hidden nav:block">
            <Card />
          </div>
          <div className="flex inline-flex hidden nav:block">
            <Card />
          </div>
        </div>
        <div className="flex flex-col mt-10 justify-center items-center">
          <h3 className="font-jetbrains-mono font-[700] text-3xl text-gray-800">Recommended Properties</h3>
          <h2 className="font-jetbrains-mono font-[400] text-md text-gray-600">Buy and Sell your properties and find new investments</h2>
          <button className="border px-5 mt-2 mb-12 border-[#015E8B] hover:bg-[#015E8B] hover:text-gray-100 font-jetbrains-mono font-[400] text-xl text-[#015E8B] rounded"><Link to="/buy">Learn more</Link></button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
