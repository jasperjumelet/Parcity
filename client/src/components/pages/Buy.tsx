import React from "react";
import NavBar from "../NavBar"
import Card from "../Card";

const Buy = () => {
  return (
    <main>
      <div className="bg-gradient-to-b from-primary to-secondary/70 min-h-screen">
        <NavBar />
        <div className="p-12"></div> {/* use this to add a invisible block at navbar */}
        <div className="flex bg-green-800 h-28"> {/* this is for the filter objects */}
        </div>
        <div className="flex container mx-12 ">
          <div className="grid mx-24 items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </main >
  )
}

export default Buy;
