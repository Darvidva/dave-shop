import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      {/* Hero image with left-biased focal point on mobile */}
      <img
        src="/hero.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-[20%_50%] md:object-center"
      />

      {/* Uniform subtle dark overlay (tweak to from-black/30..50 to taste) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Effortless Style, Delivered to Your Door.
        </h2>
        <p className="text-sm sm:text-lg mb-6 max-w-xl">
          Our curated collection of modern essentials helps you build a wardrobe that works for you.
        </p>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-400 transition mb-2">
            Explore Category
          </button>
          <ChevronDown className="text-white animate-bounce" size={32} />
        </div>
      </div>
    </section>
  );
}
