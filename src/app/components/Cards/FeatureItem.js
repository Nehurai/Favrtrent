import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const FeaturedItem = () => {
  return (
    // max-w-[400px] lg:max-h-[600px] overflow-hidden rounded-lg
    <div className="relative w-full">
      <div className="absolute top-4 w-20  bg-[#0000005E] text-white font-poppins pl-5 py-1   rounded-r-[30px]">
        Rent
      </div>
      <img
        src="/images/Grou.png"
        alt="Featured Item"
        className="w-full sm:w-[300px] md:w-[400px] lg:w-[592px] h-auto rounded-lg"
      />
      <div className=" absolute text-8xl top-0 h-full w-full text-white font-light flex items-center justify-center">
        <p className="w-[93%]">
          We picked <span className="font-bold"> some cool </span> things for
          you! <span className="font-medium">*</span>
        </p>
      </div>
      <a
        href="#"
        className="flex items-center absolute right-2 bottom-4 font-poppins text-white px-4 py-2 mt-2 ml-12 rounded bg-custom-blue"
      >
        <p className="mr-2 font-medium">Check it out </p> <FaChevronRight />{" "}
        <FaChevronRight /> <FaChevronRight />
      </a>
    </div>
  );
};

export default FeaturedItem;
