import React from "react";
import Navbar from "./components/Navbar";
import MainNew from "./components/MainNew";
import RightSideNew from "./components/RightSideNew";
import BottomNews from "./components/BottomNews";
function App() {
  return (
    <div className="max-w-[1440px] w-[95%] mx-auto ">
      <Navbar />
      <main className="md:grid md:grid-cols-2.5fr/1fr md:grid-rows-minContents gap-x-10">
        <MainNew />
        <RightSideNew />
        <BottomNews />
      </main>
      {/* 
      
      
      <Footer />*/}
      {/*  ?   Hydrogen VS Electric Cars      01  02 T  03  
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  );
}

export default App;
