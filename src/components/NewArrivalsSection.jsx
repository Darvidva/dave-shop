import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function NewArrivals() {
  const [expanded, setExpanded] = useState(false);

  const products = [
    { id: 1, name: "Cool Jacket", price: "$59.99", img: "https://img-1.kwcdn.com/thumbnail/s/7d415aa73ee3f3710c0f404b5a4d56ac_888939032ed7.jpg?imageView2/2/w/1300/q/80/format/webp" },
    { id: 2, name: "Addidas", price: "$29.99", img: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2024/02/22145404/clot-adidas-superstar-unboxing-release-info-000.jpg" },
    { id: 3, name: "Mermaid Gown", price: "$89.99", img: "https://img-1.kwcdn.com/thumbnail/s/8207053a501563a6a3932a75b618a236_0e38f4703d2a.jpg?imageView2/2/w/800/q/70/format/webp" },
    { id: 4, name: "Wrist Watch", price: "$120.00", img: "https://img.kwcdn.com/product/fancy/5dadd846-98d2-4f5a-b9cd-cae7dba11acc.jpg?imageView2/2/w/800/q/70/format/webp" },
    { id: 5, name: "Men's Suit", price: "$74.50", img: "https://img.kwcdn.com/product/fancy/c9f86c00-afc3-4e54-a656-0dfce2978ff1.jpg?imageView2/2/w/800/q/70/format/webp" },
    { id: 6, name: "Denim Jacket", price: "$45.00", img: "https://img.kwcdn.com/product/fancy/b5511a3f-15f2-49f2-8f49-e4d7594f15bc.jpg?imageView2/2/w/800/q/70/format/webp" },
    { id: 7, name: "Straight Jeans", price: "$18.00", img: "https://img.kwcdn.com/product/fancy/55bc6e1f-5c4e-400b-b168-ae7ffb1617e9.jpg?imageView2/2/w/800/q/70/format/webp" },
    { id: 8, name: "Casual Hoodie", price: "$65.00", img: "https://img.kwcdn.com/product/fancy/bfaf9327-9607-433f-a529-da2b26ea61b0.jpg?imageView2/2/w/800/q/70/format/webp" },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-bold text-center mb-2">New Arrivals</h2>
      <p className="text-center text-gray-600 mb-8">
        Exlore our latest collection, carefully selected to keep your style fresh.
      </p>

      {/* Grid wrapper */}
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-6 relative transition-all duration-500 overflow-hidden ${
          expanded ? "max-h-full" : "max-h-[600px] md:max-h-full"
        }`}
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-base font-semibold mb-1">{p.name}</h3>
              <p className="text-red-600 font-bold mb-3">{p.price}</p>
              <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}

        {/* Fade overlay only on mobile + collapsed */}
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent md:hidden"></div>
        )}
      </div>

      {/* See More / See Less link */}
      <div className="text-center mt-3 md:hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-red-600 font-medium flex items-center gap-1 mx-auto"
        >
          {expanded ? (
            <>
              See Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              See More <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
