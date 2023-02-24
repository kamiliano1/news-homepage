import React from "react";
import Navbar from "./components/Navbar";
import MainNew from "./components/MainNew";
import RightSideNew from "./components/RightSideNew";
import BottomNews from "./components/BottomNews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto ">
      <Navbar />
      <main className="md:grid md:grid-cols-midScreen lg:grid-cols-2.5fr/1fr md:grid-rows-minContent gap-x-10">
        <MainNew />
        <RightSideNew />
        <BottomNews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
