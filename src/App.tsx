import React from "react";
import "./App.css";
import EventBoard from "./components/EventBoard/EventBoard";
import LeftCalendar from "./components/LeftCalendar/LeftCalendar";

function App() {
  return (
    <div className="container m-auto grid grid-cols-12 gap-2">
      <div className="lg:px-4 sm:px-6 md:px-1 sm:col-span-5 md:col-span-5 lg:col-span-4 border-solid border-2  bg-white  col-span-12">
        <LeftCalendar />
        <EventBoard />
      </div>
      <div className="sm:col-span-7 md:col-span-7 lg:col-span-8 bg-yellow-300 col-span-12 ">
        <h1>this is main content</h1>
      </div>
    </div>
  );
}

export default App;
