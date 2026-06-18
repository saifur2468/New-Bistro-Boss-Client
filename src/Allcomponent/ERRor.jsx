import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[#E6F7FF] flex flex-col items-center justify-center px-6 py-12 md:py-24 font-sans select-none">
      
      {/* Decorative Top subtle clouds */}
      <div className="absolute top-10 left-10 opacity-30 pointer-events-none hidden lg:block">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 35C20 35 30 20 50 25C70 30 80 15 95 20C110 25 115 35 115 35" stroke="#40A9FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Content Area */}
        <div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center">
          
          {/* Main 404 Title */}
          <h1 className="text-6xl md:text-8xl font-black text-[#5C51DB] tracking-tight leading-none mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#5C51DB] tracking-wide uppercase mb-6">
            error
          </h2>

          {/* Description */}
          <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-sm mb-8">
            The page you are looking for was moved, removed, renamed or might never existed.
          </p>

          {/* Navigation Button */}
          <Link to="/">
            <button className="bg-[#13C2C2] hover:bg-[#0E9797] text-white font-bold tracking-widest text-xs py-4 px-10 rounded-sm shadow-md transition-all duration-300 transform active:scale-95 uppercase">
              Go To Homepage
            </button>
          </Link>
        </div>

        {/* Right Side: High-Fidelity Custom Vector Illustration (SVG) */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center items-center">
          <svg 
            viewBox="0 0 600 450" 
            className="w-full max-w-[480px] md:max-w-[550px] drop-shadow-xl" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Organic Liquid/Mountain shape */}
            <path 
              d="M120 280C90 200 180 120 280 100C380 80 480 120 510 220C540 320 420 380 320 370C220 360 150 360 120 280Z" 
              fill="#BAE7FF" 
              className="opacity-60"
            />
            
            {/* Deeper Blue waves behind */}
            <path 
              d="M200 320C250 290 350 290 400 330C450 370 520 320 550 350" 
              stroke="#91D5FF" 
              strokeWidth="12" 
              strokeLinecap="round"
              className="opacity-45"
            />

            {/* Clouds */}
            {/* Cloud Left */}
            <path 
              d="M100 210C100 198.954 108.954 190 120 190C127.42 190 133.882 194.032 137.337 200.061C138.826 198.742 140.817 197.949 143 197.949C147.971 197.949 152 201.978 152 206.949C152 207.644 151.921 208.32 151.771 208.968C154.269 210.125 156 212.609 156 215.5C156 219.642 152.642 223 148.5 223H111.5C105.149 223 100 217.851 100 211.5V210Z" 
              fill="#FFFFFF" 
            />
            {/* Cloud Right */}
            <path 
              d="M450 200C450 185.641 461.641 174 476 174C486.326 174 495.215 180.005 499.38 188.729C501.954 186.368 505.378 184.949 509.154 184.949C517.151 184.949 523.633 191.432 523.633 199.429C523.633 200.063 523.593 200.689 523.513 201.303C527.76 203.208 530.718 207.458 530.718 212.385C530.718 219.349 525.074 225 518.11 225H466.154C457.234 225 450 217.766 450 208.846V200Z" 
              fill="#FFFFFF" 
            />

            {/* Shadow Puddles at bottom */}
            <ellipse cx="380" cy="390" rx="90" ry="15" fill="#A6E2E2" className="opacity-70" />
            <ellipse cx="370" cy="393" rx="60" ry="10" fill="#79E0E0" className="opacity-50" />
            <ellipse cx="230" cy="385" rx="30" ry="6" fill="#A6E2E2" className="opacity-60" />

            {/* Giant '4 0 4' 3D Text Shapes */}
            {/* First '4' */}
            <g transform="translate(180, 210)">
              {/* Back Shadow */}
              <path d="M30 140V100H-25V80L25 10V140H30Z" fill="#E6E6E6" />
              <path d="M30 100H65V140H30V100Z" fill="#CCCCCC" />
              <path d="M30 10V140H48V10H30Z" fill="#D9D9D9" />
              {/* Front Main White Face */}
              <path d="M20 130V90H-35V72L15 2V130H20Z" fill="#FFFFFF" />
              <path d="M20 90H55V130H20V90Z" fill="#FFFFFF" />
              <path d="M20 2V130H38V2H20Z" fill="#FFFFFF" />
            </g>

            {/* Middle '0' */}
            <g transform="translate(280, 240)">
              {/* Back Shadow */}
              <rect x="0" y="0" width="70" height="110" rx="35" fill="#CCCCCC" />
              <rect x="20" y="20" width="30" height="70" rx="15" fill="#BAE7FF" />
              {/* Front Face */}
              <rect x="-10" y="-10" width="70" height="110" rx="35" fill="#FFFFFF" />
              <rect x="10" y="10" width="30" height="70" rx="15" fill="#BAE7FF" />
            </g>

            {/* Last '4' */}
            <g transform="translate(380, 215)">
              {/* Back Shadow */}
              <path d="M30 140V100H-25V80L25 10V140H30Z" fill="#CCCCCC" />
              <path d="M30 100H65V140H30V100Z" fill="#B3B3B3" />
              <path d="M30 10V140H48V10H30Z" fill="#BFBFBF" />
              {/* Front Face */}
              <path d="M20 130V90H-35V72L15 2V130H20Z" fill="#FFFFFF" />
              <path d="M20 90H55V130H20V90Z" fill="#FFFFFF" />
              <path d="M20 2V130H38V2H20Z" fill="#FFFFFF" />
            </g>

            {/* Flag on the '0' */}
            <path d="M335 240L352 195" stroke="#333333" strokeWidth="4" strokeLinecap="round" />
            <path d="M352 195C352 195 365 190 365 202C365 214 352 215 352 215V195Z" fill="#722ED1" />

            {/* Character standing on the first '4' */}
            <g id="character" transform="translate(200, 100)">
              {/* Head & Hair */}
              <circle cx="95" cy="50" r="12" fill="#F5C2C1" />
              <path d="M85 45C85 38 95 35 105 38C107 42 105 48 100 48C95 48 95 48 85 45Z" fill="#1F2937" /> {/* Black Hair */}
              
              {/* Body / Purple Shirt */}
              <path d="M80 62C85 62 105 62 110 62L112 115H78L80 62Z" fill="#722ED1" />

              {/* Legs / Cyan Blue Pants */}
              {/* Left Leg (Stepping down on '4') */}
              <path d="M80 115L65 155H80L90 120L80 115Z" fill="#13C2C2" />
              <rect x="52" y="152" width="28" height="14" rx="6" fill="#1F2937" /> {/* Shoe Left */}

              {/* Right Leg (Straight on top of '4') */}
              <path d="M98 115V170H113V115H98Z" fill="#13C2C2" />
              <rect x="98" y="168" width="28" height="14" rx="6" fill="#1F2937" /> {/* Shoe Right */}

              {/* Left Arm holding Telescope */}
              <path d="M82 68L55 90L63 98L84 75" fill="#722ED1" />
              {/* Right Arm near face */}
              <path d="M106 68L112 85L102 90" fill="#722ED1" />

              {/* Hand holding Telescope */}
              <circle cx="53" cy="92" r="5" fill="#F5C2C1" />

              {/* Telescope / Spyglass */}
              <g transform="translate(15, 80) rotate(-18)">
                <rect x="0" y="0" width="55" height="12" rx="3" fill="#13C2C2" />
                <rect x="55" y="1" width="15" height="10" rx="1" fill="#1890FF" />
                <line x1="0" y1="6" x2="-20" y2="6" stroke="#1F2937" strokeWidth="2" />
              </g>
            </g>

          </svg>
        </div>

      </div>

      {/* Attribution footer mimicking the layout */}
      <div className="mt-16 text-xs text-slate-400 font-medium">
        Image recreated beautifully for <span className="font-bold text-amber-500">HotelRoyal</span> Error Handler
      </div>
    </div>
  );
}