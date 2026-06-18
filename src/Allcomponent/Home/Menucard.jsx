import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FromOurMenu() {
  const navigate = useNavigate();

  // Category specific menu database
  const menuData = {
    pizza: [
      {
        id: 1,
        name: "Margherita Supreme Pizza",
        price: "$12.99",
        desc: "Classic fresh mozzarella, rich tomato sauce, basil leaves, and extra virgin olive oil.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 2,
        name: "BBQ Smoked Chicken Pizza",
        price: "$15.50",
        desc: "Grilled chicken slices, tangy BBQ sauce, red onions, cilantro, and melted cheddar.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80"
      }
    ],
    burger: [
      {
        id: 3,
        name: "Classic Steakhouse Burger",
        price: "$10.50",
        desc: "Juicy beef patty, smoked bacon, caramelized onions, Swiss cheese, and secret house sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 4,
        name: "Crispy Avocado Chicken Burger",
        price: "$11.99",
        desc: "Golden crispy fried chicken breast, fresh sliced avocado, spicy mayo, and lettuce.",
        image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=400&q=80"
      }
    ],
    coffee: [
      {
        id: 5,
        name: "Caramel Macchiato",
        price: "$4.95",
        desc: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and caramel drizzle.",
        image: "https://images.unsplash.com/photo-1572286258217-10ff409944f2?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 6,
        name: "Double Chocolate Iced Mocha",
        price: "$5.50",
        desc: "Rich chocolate sauce, espresso, milk, whipped cream, and chocolate curls over ice.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80"
      }
    ],
    salad: [
      {
        id: 7,
        name: "Mediterranean Greek Salad",
        price: "$8.99",
        desc: "Crispy cucumbers, cherry tomatoes, Kalamata olives, red onion, feta cheese, and Greek dressing.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 8,
        name: "Classic Chicken Caesar Salad",
        price: "$9.50",
        desc: "Crisp romaine lettuce, grilled chicken breast, buttery garlic croutons, and Parmesan cheese.",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=400&q=80"
      }
    ],
    sweets: [
      {
        id: 9,
        name: "Red Velvet Lava Cake",
        price: "$7.25",
        desc: "Delectable red velvet cake with a hot white chocolate molten core, served with vanilla scoop.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 10,
        name: "Italian Tiramisu Cup",
        price: "$6.50",
        desc: "Layered ladyfingers dipped in rich espresso coffee, whipped mascarpone cheese cream, and cocoa powder.",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80"
      }
    ],
    drinks: [
      {
        id: 11,
        name: "Tropical Mojito Mocktail",
        price: "$5.99",
        desc: "Muddled fresh mint leaves, lime juice, sparkling club soda, and refreshing passionfruit extract.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 12,
        name: "Wildberry Citrus Splash",
        price: "$6.25",
        desc: "Ice blended fresh strawberries, raspberries, blueberries with a squeeze of fresh key lime juice.",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80"
      }
    ]
  };

  // Shob category-r item gulo-ke eksathe ekta single array-te convert kora hocche
  const allMenuItems = Object.values(menuData).flat();

  // Featured BG Image URL directly used as a premium dark overlay banner
  const featuredBgImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="bg-[#FCFCFC] py-12 px-4 sm:px-6 lg:px-8">
      {/* Title Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif font-semibold text-amber-500 text-center tracking-wide">
          Check Our Signature Menu
        </h1>
        <p className="text-lg font-serif border-y-2 border-gray-200 py-3 text-gray-600 text-center max-w-sm mx-auto mt-3">
          Available from 11.00am to 10.00pm
        </p>
      </div>

      {/* Main Menu Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-4 md:px-10 mb-10 rounded-2xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${featuredBgImage})`,
        }}
      >
        {/* Dark Premium Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

        <div className="relative max-w-6xl mx-auto z-10">
          
          {/* Section Subtitle */}
          <div className="text-center mb-12">
            <h3 className="text-amber-400 italic text-base tracking-widest uppercase">
              --- Culinary Masterpieces ---
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-white mt-1">
              From Our Premium Kitchen
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Dynamic Menu Grid - Displays all items together */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {allMenuItems.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover shadow-md flex-shrink-0"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80";
                  }}
                />

                {/* Product Details */}
                <div className="flex-grow text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-amber-400">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Big Action Button for Ordering */}
          <div className="text-center mt-12">
            <Link to="/ProductOrder">
              <button 
                className="relative px-8 py-3.5 font-bold text-xs tracking-widest text-white uppercase inline-block group hover:text-amber-400 transition-colors duration-300 focus:outline-none"
              >
                Order Your Favorite Food Now
                
                {/* Bottom Bracket Underline Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white group-hover:bg-amber-400 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-[2px] h-[8px] bg-white group-hover:bg-amber-400 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-[2px] h-[8px] bg-white group-hover:bg-amber-400 transition-colors duration-300"></div>
              </button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}