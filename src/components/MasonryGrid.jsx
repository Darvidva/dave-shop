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
        <a
          key={item.id}
          href={item.link}
          className="block relative rounded-lg shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-auto"
          />

          {/* Overlay text positioned bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-4 bg-black/40 px-3 py-2 rounded-lg flex items-center gap-2"
          >
            <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
              {item.name}
            </p>
            <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </a>
      ))}
    </Masonry>
  );
}