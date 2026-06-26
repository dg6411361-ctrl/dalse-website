import React from "react";
import Detail from "./Detail";
import Home from "./Home";
import img from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Student";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <About /> */}

        {/* <Contact /> */}
        {/* <MyInfo /> */}
        {/* <Student /> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" Contact={<Contact />} />
        <Route path="/" Student={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
const About = () => {
  return (
    <div>
      <p>about page </p>
    </div>
  );
};

function Contact() {}

function MyInfo() {
  const Biodata = {
    Name: "Emma",
    Age: 10,
  };
  const myArray = ["cup", "yam", "rice"];
  const house = [
    {
      name: "Dalse",
      street: "Adamu street",
      number: 1,
    },
    {
      name: "Dalse tech",
      street: "Mouka foam street",
      number: 2,
    },
    {
      name: "Dalse tech hub",
      street: "medoline",
      number: 3,
    },
  ];
  return (
    <div>
      <p>BioData</p>
      <p>Home</p>
      <p>Detail</p>
      <p>{3 + 10}</p>
      <p> {Biodata.Name}</p>
      <p>{Biodata.Age}</p>
      {myArray[0]}
      {myArray.map((food) => (
        <p>{food}</p>
      ))}
      {JSON.stringify(house[0])}
      {house.map((house) => (
        <>
          <div key={house.number}>
            <p>{house.name}</p>
            <p>{house.street}</p>
          </div>
        </>
      ))}
      <img src={img} width={20} alt="image" height={30} />
    </div>
  );
}
