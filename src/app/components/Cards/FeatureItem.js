import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const FeaturedItem = () => {
  return (
    // max-w-[400px] lg:max-h-[600px] overflow-hidden rounded-lg
    <div className="relative object-cover w-full h-full -z-20">
      <div className="absolute top-4 w-20  bg-[#0000005E] text-white text-3xl font-poppins pl-5 py-1   rounded-r-[30px]">
        Rent
      </div>
      <Image
        width={1000}
        height={1000}
        src="/images/Grou.png"
        alt="Featured Item"
        className="object-cover  w-full lg:h-full h-[50vh] rounded-lg "
        
      />
      <div className="absolute top-0 flex items-center justify-center w-full h-full text-6xl font-light text-white">
        <p className="w-[93%]">
          We picked <span className="font-bold"> some cool </span> things for
          you! <span className="font-medium">*</span>
        </p>
      </div>
      <a
        href="#"
        className="absolute flex items-center px-4 py-2 mt-2 ml-12 text-white rounded right-2 bottom-4 font-poppins bg-custom-blue"
      >
        <p className="mr-2 font-medium">Check it out </p> <FaChevronRight />{" "}
        <FaChevronRight /> <FaChevronRight />
      </a>
    </div>
  );
};

export default FeaturedItem;
