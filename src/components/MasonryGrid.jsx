import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
};

const items = [
  {
    id: 1,
    name: "Sneekers",
    image: "https://images.pexels.com/photos/11946032/pexels-photo-11946032.jpeg",
    link: "#",
  },
  {
    id: 2,
    name: "Men Shoes",
    image: "https://images.pexels.com/photos/6765524/pexels-photo-6765524.jpeg",
    link: "#",
  },
  {
    id: 3,
    name: "Men Fashion",
    image: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg",
    link: "#",
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.pexels.com/photos/1438861/pexels-photo-1438861.jpeg",
    link: "#",
  },
  {
    id: 5,
    name: "Women Fashion",
    image: "https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg",
    link: "#",
  },
  {
    id: 6,
    name: "Causal Dress",
    image: "https://images.pexels.com/photos/18716401/pexels-photo-18716401.jpeg",
    link: "#",
  },
  {
    id: 7,
    name: "Wrist Watch",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    link: "#",
  },
  {
    id: 8,
    name: "Women Corporate",
    image: "https://images.pexels.com/photos/6535360/pexels-photo-6535360.jpeg",
    link: "#",
  },
];

export default function MasonryGrid() {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-2"
      columnClassName="space-y-4"
    >
      {items.map((item) => (
        <motion.a
          key={item.id}
          href={item.link}
          className="block relative rounded-lg shadow hover:shadow-xl transition overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
          />

          {/* Overlay with animation */}
          <motion.div
            className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 px-4 py-2 rounded-2xl flex items-center gap-2 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-white font-semibold text-lg">{item.name}</p>
            <ArrowRight className="text-white w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>
        </motion.a>
      ))}
    </Masonry>
  );
}