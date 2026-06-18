import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

// Assets Import
import heroimg1 from '../../assets/assets/home/01.jpg';
import heroimg2 from '../../assets/assets/home/02.jpg';
import heroimg3 from '../../assets/assets/home/03.png';
import heroimg4 from '../../assets/assets/home/04.jpg';
import heroimg5 from '../../assets/assets/home/05.png';
import heroimg6 from '../../assets/assets/home/06.png';

// Components Import (সঠিক রিলেটিভ পাথ অনুযায়ী)
import Category from "./Category";
import BistroSection from "../../Allcomponent/Home/Bistrosection";
import FromOurMenu from "../../Allcomponent/Home/Fromourmenu";
import MenuSection from "../../Allcomponent/Home/order"; // order.jsx ফাইলটি Allcomponent ফোল্ডারে থাকায় '../' ব্যবহার করা হয়েছে

const Hero = () => {
  return (
    <div className="space-y-16">
      {/* ১. ক্যারোসেল/ব্যানার সেকশন সবার উপরে থাকবে */}
      <div className="w-full">
        <Carousel 
          showThumbs={true} 
          autoPlay={true} 
          infiniteLoop={true} 
          interval={4000}
          showStatus={false}
        >
          <div>
            <img src={heroimg1} alt="Slide 1" className="max-h-[80vh] object-cover" />
          </div>
          <div>
            <img src={heroimg2} alt="Slide 2" className="max-h-[80vh] object-cover" />
          </div>
          <div>
            <img src={heroimg3} alt="Slide 3" className="max-h-[80vh] object-cover" />
          </div>
          <div>
            <img src={heroimg4} alt="Slide 4" className="max-h-[80vh] object-cover" />
          </div>
          <div>
            <img src={heroimg5} alt="Slide 5" className="max-h-[80vh] object-cover" />
          </div>
          <div>
            <img src={heroimg6} alt="Slide 6" className="max-h-[80vh] object-cover" />
          </div>
        </Carousel>
      </div>

      {/* ২. ক্যাটাগরি সেকশন */}
      <Category />

      {/* ৩. বিস্ট্রো ব্যানার সেকশন */}
      <BistroSection />

      {/* ৪. পপুলার মেনু সেকশন */}
      <MenuSection />

      {/* ৫. স্পেশাল অফার/মেনু সেকশন */}
      <FromOurMenu />
    </div>
  );
};

export default Hero;