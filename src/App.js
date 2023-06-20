import React from 'react';
import './App.css';
import Sliteder from './component/Carousel';
import Navbar from './component/Navbar';
import CartItem from './component/CartItem';
import Footer from './component/Footer';
import Footer1 from './component/Footer1';

function App() {
  const listItem = [
    {
      id: 0,
      title: "WOMEN'S",
      img: './imgages/banner_1.jpg',
    },
    {
      id: 1,
      title: "ACCESSORIES'S",
      img: './imgages/banner_2.jpg',
    },
    {
      id: 2,
      title: 'MEN',
      img: './imgages/banner_3.jpg',
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Sliteder />
      <div className="component-list">
        {listItem.map((item, index) => (
          <div key={index} className="component-wrapper">
            <CartItem card={item} />
          </div>
        ))}
      </div>
      <div className="component-spacing"></div>
      <Footer1 />
      <div className="component-spacing"></div>
      <Footer />
    </div>
  );
}

export default App;
