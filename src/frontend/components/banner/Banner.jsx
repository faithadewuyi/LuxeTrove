// src/components/HeroCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide1 from './bannerAsset/slide1.jpg'
import Slide2 from './bannerAsset/slide2.jpg'
import Slide3 from './bannerAsset/slide3.jpg'
import Slide4 from './bannerAsset/slide4.jpg'

const Banner= () => {
  return (
    <div className="relative w-full h-screen">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
      >
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Slide1})`}}>
          <div className="flex items-center justify-start w-full h-full bg-black bg-opacity-50 ">
            <div className="text-left text-white pl-16 mt-12">
              <h2 className="text-5xl md:text-5xl font-light text-btn">DISCOVER</h2>
              <h2 className="text-5xl md:text-7xl font-bold text-lightgray">TIMELESS</h2>
              <h2 className="text-5xl md:text-5xl font-light  text-btn">LUXURY</h2>
              <p className="mt-2 mb-7 text-xl md:text-2xl sm:mr-8">Unearth The Hidden Gem In Luxury Thrift Fashion.</p>
              {/* <a href="#" className="py-4 px-5 w-96 font-medium  bg-btn rounded-md text-black hover:font-bold text-center sm:px-1">Shop Now</a> */}
              <a href="#" className="text-center  bg-btn rounded-md px-10 py-4 text-black font-medium hover:font-bold hover:bg-btnHover ">Shop Now</a>

            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Slide2})` }}>
        <div className="flex items-center justify-start w-full h-full bg-black bg-opacity-50 ">
          <div className="text-left text-white pl-16">
            <h2 className="text-5xl md:text-5xl font-light text-btn">DISCOVER</h2>
              <h2 className="text-5xl md:text-7xl font-bold text-lightgray">Men's Wear</h2>
              <h2 className="text-5xl md:text-5xl font-light  text-btn">LUXURY</h2>
              <p className="mt-2 mb-7 text-xl md:text-2xl ">Stylish and elegant men's fashion for every occasion.</p>
              <a href="#" className="text-center  bg-btn rounded-md px-10 py-4 text-black font-medium hover:font-bold hover:bg-btnHover ">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Slide3})` }}>
        <div className="flex items-center justify-start w-full h-full bg-black bg-opacity-50 ">
          <div className="text-left text-white pl-16">
          <h2 className="text-5xl md:text-5xl font-light text-btn">DISCOVER</h2>
              <h2 className="text-5xl md:text-7xl font-bold text-lightgray">Women's Wear</h2>
              <h2 className="text-5xl md:text-5xl font-light  text-btn">LUXURY</h2>
              <p className="mt-2 mb-7 text-xl md:text-2xl">Discover the latest trends in women's fashion.</p>
              <a href="#" className="text-center  bg-btn rounded-md px-10 py-4 text-black font-medium hover:font-bold hover:bg-btnHover ">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Slide4})` }}>
        <div className="flex items-center justify-start w-full h-full bg-black bg-opacity-50 ">
          <div className="text-left text-white pl-16">
            <h2 className="text-5xl md:text-5xl font-light text-btn">DISCOVER</h2>
              <h2 className="text-5xl md:text-7xl font-bold text-lightgray">Endless Sales</h2>
              <h2 className="text-5xl md:text-5xl font-light  text-btn">LUXURY</h2>
              <p className="mt-2 mb-7 text-xl md:text-2xl">Unbeatable prices on our luxury collections.</p>
              <a href="#" className="text-center  bg-btn rounded-md px-10 py-4 text-black font-medium hover:font-bold hover:bg-btnHover ">Shop Now</a>
            </div>
          </div>
        </div> 
      </Carousel>
    </div>
    
    
  );
};

export default Banner;
