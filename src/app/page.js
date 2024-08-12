// pages/index.js
import Head from "next/head";

import Deal from "./components/Deal";
import FeaturedItem from "./components/Cards/FeatureItem";
import ItemCard from "./components/Cards/ItemCard";

const items = [
  {
    id: 1,
    title: "Inalsa Air Fryer Fry-Light-1400W",
    price: "₹4,627.00/mo",
    image: "/images/Rec.jpg",
    available: true,
  },
  {
    id: 2,
    title: "Oneplus Bullets Z2 Bluetooth Wireless",
    price: "₹1,699.00/mo",
    image: "/images/Rec3.png",
    available: true,
  },
  {
    id: 3,
    title: "New Fastrack Reflex Play| AMOLED Display",
    price: "₹5,699.00/mo",
    image: "/images/Rec4.png",
    available: true,
  },
  {
    id: 4,
    title: "Apple iPhone 13 (128GB) - Green",
    price: "₹76,900.00/mo",
    image: "/images/Rec3.png",
    available: true,
  },
  {
    id: 5,
    title: "Samsung Galaxy Tab S8+ - Wifi Only, Graphite",
    price: "₹74,998.00/mo",
    image: "/images/Rec2.png",
    available: true,
  },
  {
    id: 6,
    title: "Kodak Mini Shot 3 Retro - Yellow, Bluetooth",
    price: "₹74,998.00/mo",
    image: "/images/Rec1.png",
    available: false,
  },
];

export default function Second() {
  return (
    <div className="w-[90%] sm:w-[85%] mx-auto  relative mt-2">
      <>
        <Head>
          <title>Rental Items</title>
        </Head>
        <main className="flex flex-col w-full h-full gap-8 lg:flex-row">
        {/* lg:w-[592px] */}
          <div className="lg:w-[35vw]  2xl:w-[45vw] w-full object-cover">
            <FeaturedItem  />
          </div>
          <div className="flex flex-col ">
            <h2 className="mb-4 text-2xl font-bold text-center sm:text-lg lg:text-xl font-poppins lg:text-left">
              Hot items are on rent for you
            </h2>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-3xl mb-4 border-b-4 border-dashed border-customBlue"></div>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3 lg:gap-3 ">
              {items.slice(0,6).map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </main>
      </>
      <>
        <Deal />
      </>
    </div>
  );
}
