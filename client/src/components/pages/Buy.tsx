import React from "react";
import Footer from "../Footer"
import NavBar from "../NavBar"
import Card from "../Card";

const Buy = () => {
  return (
    <main>
      <div className="bg-gradient-to-b from-primary to-secondary/70 min-h-screen">
        <NavBar />
        <div className="p-12"></div> {/* use this to add a invisible block at navbar */}
        <div className="flex h-28"> {/* this is for the filter objects */}
        </div>

        <div className="flex justify-center ">
          <div className="grid items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </main >
  )
}

export default Buy;
