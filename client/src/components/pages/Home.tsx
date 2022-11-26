import NavBar from "../NavBar";

const Home = () => {
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
        <div className="relative flex h-screen items-center text-center justify-center">
          <h1 className="font-jetbrains-mono font-[300] text-4xl text-white mx-10">Invest in properties
            with insights and flexibility</h1>
        </div>
      </div>
      <section className="bg-white min-h-screen">
        <p>test text</p>
      </section>
    </main>
  );
};

export default Home;
