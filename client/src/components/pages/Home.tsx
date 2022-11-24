import NavBar from "../NavBar";

const Home = () => {
  return (
    <main>
      <div className="relative bg-gradient-to-b from-primary to-secondary/70 min-h-screen">
        <NavBar />
        <div className="flex flex-col min-h-screen justify-end">
          <img
            src={"/images/city2.png"}
            className="flex bottom-0 align-bottom opacity-70 saturate-150"
            alt="city-skyline"
          />
        </div>
      </div>
      <section className="bg-white min-h-screen">
        <p>test text</p>
      </section>
    </main>
  );
};

export default Home;
