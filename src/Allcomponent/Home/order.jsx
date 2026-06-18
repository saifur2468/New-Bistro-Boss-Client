import React from "react";
import { Link } from "react-router-dom";

export default function MenuSection() {
  const menuItems = [
    {
      id: 1,
      name: "ROAST DUCK BREAST",
      price: "$14.5",
      description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
      image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "TUNA NIÇOISE",
      price: "$14.5",
      description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "ESCALOPE DE VEAU",
      price: "$14.5",
      description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "CHICKEN AND WALNUT SALAD",
      price: "$14.5",
      description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "FISH PARMENTIER",
      price: "$14.5",
      description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "ROASTED PORK BELLY",
      price: "$14.5",
      description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="bg-[#FCFCFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 font-medium italic tracking-widest text-sm mb-3">
            ---Check it out---
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-gray-300 hidden sm:block"></span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-slate-800 uppercase">
              FROM OUR MENU
            </h2>
            <span className="h-[1px] w-12 bg-gray-300 hidden sm:block"></span>
          </div>
          <div className="w-24 h-[3px] bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-start gap-5 group hover:bg-white p-3 rounded-xl transition-all duration-300 hover:shadow-sm">
              
              {/* Unique Teardrop Image Container */}
              <div 
                className="w-20 h-20 bg-gray-200 flex-shrink-0 overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105"
                style={{ borderRadius: "0px 40px 40px 40px" }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.classList.add('bg-gray-300');
                  }}
                />
              </div>

              {/* Item Content & Price Dotted Row */}
              <div className="flex-grow">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-semibold text-base text-slate-800 tracking-wide group-hover:text-amber-600 transition-colors uppercase whitespace-nowrap">
                    {item.name}
                  </h3>
                  
                  {/* Flexible Dotted Line */}
                  <span className="flex-grow border-b border-dotted border-gray-400 h-1"></span>
                  
                  <span className="font-semibold text-amber-500 text-base flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-500 text-xs md:text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Button with custom tray-like bracket underline */}
        <div className="text-center mt-16">
          <Link to="/Menucard">
          <button className="relative px-6 pb-2.5 font-semibold text-xs tracking-widest text-slate-800 uppercase inline-block group hover:text-amber-500 transition-colors duration-300 focus:outline-none">
            VIEW FULL MENU 
            
            {/* Horizontal Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800 group-hover:bg-amber-500 transition-colors duration-300"></div>
            
            {/* Left Bracket Tip */}
            <div className="absolute bottom-0 left-0 w-[2px] h-[6px] bg-slate-800 group-hover:bg-amber-500 transition-colors duration-300"></div>
            
            {/* Right Bracket Tip */}
            <div className="absolute bottom-0 right-0 w-[2px] h-[6px] bg-slate-800 group-hover:bg-amber-500 transition-colors duration-300"></div>
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

