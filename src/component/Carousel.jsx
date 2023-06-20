


import React from 'react';
import './carousel.css';
import { Carousel } from 'antd';
import './carousel.css';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Sliteder() {
  return (
    <Carousel >
    
        <div className="carousel-item" aria-current="true">
          <img src="./imgages/slider_1.jpg" alt="" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='caption-title'>Third slide label</h5>
            <p className='caption-text'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
     
        <div className="carousel-item" aria-current="true">
          <img src="./imgages/slider_2.jpg" alt="" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='caption-title'>Third slide label</h5>
            <p className='caption-text'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
        <div className="carousel-item" aria-current="true">
          <img src="./imgages/slider_3.jpg" alt="" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='caption-title'>Third slide label</h5>
            <p className='caption-text'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      
    </Carousel >
  );
}

export default Sliteder;
