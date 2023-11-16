import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<App/>}/>
    <Route path='/shop' element={<Shop/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />

  </Routes>
  </BrowserRouter>
  
  // <React.StrictMode>
  //   <Header/>
  //   <App />
  //   <Footer/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
