import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Order() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState(null); // Buy Now Modal-er jonno
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Proti page-e 6ti card thakbe

  // URL query parameter theke active category load kora (default: all)
  const activeCategory = searchParams.get("category") || "all";

  useEffect(() => {
    setLoading(true);
    // Public directory absolute path use kore fetch kora hocche
    fetch("/items.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load database");
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading items:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const categories = [
    { id: "all", label: "All Items" },
    { id: "pizza", label: "Pizza" },
    { id: "burger", label: "Burger" },
    { id: "coffee", label: "Coffee" },
    { id: "salad", label: "Salads" },
    { id: "sweets", label: "Sweets" },
    { id: "drinks", label: "Drinks" }
  ];

  const handleCategoryChange = (catId) => {
    setSearchParams({ category: catId });
  };

  // Active category anujayi product filter kora
  const filteredItems = activeCategory === "all" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setPurchaseSuccess(false);
  };

  const confirmPurchase = () => {
    setPurchaseSuccess(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setPurchaseSuccess(false);
    }, 2500);
  };

  // Safe Page Change handler
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Smooth scroll back to top of menu
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
          Explore Our Delicious <span className="text-amber-500">Menu</span>
        </h1>
        <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
          Choose from our carefully curated signature categories and order your favorite culinary masterpiece instantly.
        </p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${
              activeCategory === cat.id
                ? "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/25 scale-105"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Loading Skeleton & Error Management */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-white rounded-2xl h-96 animate-pulse border border-slate-100 p-4 space-y-4">
              <div className="bg-slate-200 h-48 w-full rounded-xl"></div>
              <div className="h-6 bg-slate-200 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded w-1/2"></div>
              <div className="h-10 bg-slate-200 rounded-xl w-full"></div>
            </div>
          ))}
        </div>
      ) : currentItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100 max-w-md mx-auto">
          <p className="text-slate-400 text-6xl">🍽️</p>
          <h3 className="text-xl font-bold text-slate-700 mt-4">No items found</h3>
          <p className="text-slate-500 text-sm mt-1">We couldn't find any products in this category.</p>
        </div>
      ) : (
        <div className="space-y-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Price Overlay */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white font-bold text-sm px-3.5 py-1.5 rounded-full shadow-md">
                    ${item.price.toFixed(2)}
                  </div>
                  {/* Visual Category Label */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-amber-400 text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md">
                    {item.category}
                  </div>
                </div>

                {/* Content details */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 tracking-wide uppercase group-hover:text-amber-500 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Buy Now Button with Animation */}
                  <div className="mt-6">
                    <button
                      onClick={() => handleBuyNow(item)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs tracking-widest uppercase rounded-2xl shadow-md hover:from-amber-600 hover:to-orange-600 active:scale-95 transition-all duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 pt-8 border-t border-slate-100">
              {/* Previous Page Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  currentPage === 1
                    ? "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                Previous
              </button>

              {/* Numbered Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-200 ${
                    currentPage === page
                      ? "bg-amber-500 text-white shadow-md shadow-amber-500/25"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Page Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  currentPage === totalPages
                    ? "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md w-full relative border border-slate-100 animate-slideUp">
            
            {/* Close Button */}
            {!purchaseSuccess && (
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition"
              >
                ✕
              </button>
            )}

            {/* Success Animation Area */}
            {purchaseSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-3xl animate-bounce">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mt-4">Order Successful!</h3>
                <p className="text-slate-500 text-sm mt-2">Preparing your fresh {selectedProduct.name}...</p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-extrabold text-slate-800 mb-2">Confirm Your Order</h3>
                <div className="w-full h-40 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 uppercase">{selectedProduct.name}</h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{selectedProduct.desc}</p>
                
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl mt-4 border border-slate-100">
                  <span className="text-slate-500 font-medium">Total Amount:</span>
                  <span className="text-2xl font-black text-amber-500">${selectedProduct.price.toFixed(2)}</span>
                </div>

                {/* Modal Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-2xl text-xs uppercase tracking-wider transition"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmPurchase}
                    className="py-3 px-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-green-500/20 hover:from-emerald-600 hover:to-green-600 active:scale-95 transition"
                  >
                    Confirm Purchase
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
