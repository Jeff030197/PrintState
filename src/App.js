import "./App.css";
import MainBody from "./Components/Body/MainBody";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainBody/>}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>     
      <Footer/>
    </>
  );
}

export default App;
