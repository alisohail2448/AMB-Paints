import { Route, Routes } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import Contact from "./Components/Contact";
import Conventional from "./Components/Conventional";
import Customizable from "./Components/Customizable";
import Decorative from "./Components/Decorative";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Industrial from "./Components/Industrial";
import Navbar from "./Components/Navbar";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="body-font font-poppins">
      <TopBar/>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/about" exact element={<AboutPage/>} />
        <Route path="/products/conventional" exact element={<Conventional/>} />
        <Route path="/products/decorative" exact element={<Decorative/>} />
        <Route path="/products/industrial" exact element={<Industrial/>} />
        <Route path="/products/customizable" exact element={<Customizable/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
