import { FaShareAlt, FaHeart } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SearchCard = ({ item }) => {
  return (
    <div
      className={`  border border-gray-300 rounded-lg p-3 lg:w-auto max-w-64  shadow transition-transform transform  `}
    >
      <div className="">
        <img
          src={item.image}
          alt={item.title}
          className="w-full  h-40 md:h-52 rounded-lg"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center mt-2">
        <div className=" flex justify-center font-medium font-poppins rounded-lg">
          <button className="flex items-center py-2 text-base font-poppins rounded text-customBlue">
            <p> Check it </p>
            <MdOutlineKeyboardArrowRight
              size="18px"
              // fontWeight="600"
              color="#005D76"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
