import Link from "next/link";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
const ItemCard = ({ item }) => {
  return (
    <div
      className={` rounded-lg p-3  max-w-64  transform ease-out duration-300 hover:shadow-md hover:scale-[1.02] ${
        !item.available ? "bg-[#0000004d] " : ""
      } `}
    >
      <Link href={`/products/${item.id}`}>
        <div className="relative">
          <p className="absolute top-0 text-[#938E8E] text-xs">Today</p>

          <img
            src={item.image}
            alt={item.title}
            className={`w-full  h-40 md:h-52 rounded-lg    ${
              !item.available ? "bg-[#0000004d] opacity-10" : ""
            }`}
          />
          <div className="absolute top-0 right-0 flex flex-col gap-4 ">
            {item.like ? (
              <IoMdHeart className="text-lg text-[#FF0000]" />
            ) : (
              <IoMdHeartEmpty className="text-lg" />
            )}
            <GoShareAndroid className="text-lg" />
          </div>
        </div>

        <h3 className="mt-2 text-base font-poppins font-medium">
          {item.title}
        </h3>
        <div className="lg:flex flex-col md:flex-row md:items-center lg:mt-2 jus justify-between ">
          <p className="text-customBlue text-[15px]">{item.price}</p>
          <button className="lg:bg-[#0000005e] lg:flex lg:h-full  font-poppins  px-2 py-1 rounded-3xl  text-white text-base -mt-2">
            On Rent
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
