// "use client";
// import React, { useState } from "react";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// function PutOnScreenCategory() {
//   const [isSubcategaryVisible, setIsSubcategaryVisible] = useState(false);
//   const [category, setCategary] = useState("");
//   return (
//     <div className="w-[90%] sm:w-[85%] mx-auto mb-8">
//       <FaChevronLeft className="text-customBlue" />
//       <div className="w-2/3 mx-auto border rounded-md">
//         <h1 className="text-center text-3xl font-semibold mt-8">
//           POST YOUR AD
//         </h1>
//         <p className="text-center text-base text-[#606060]">
//           Choose a category
//         </p>
//         <div className="flex gap-2 p-4 mt-6">
//           <ul className="w-2/3">
//             <li
//               onClick={() => {
//                 setIsSubcategaryVisible(true);
//                 setCategary("dresses");
//               }}
//               className={`flex justify-between items-center py-2.5  px-2 cursor-pointer ${
//                 category === "dresses"
//                   ? "bg-customBlue text-white"
//                   : "bg-[#F7FAFC] text-black"
//               }`}
//             >
//               {" "}
//               <p className="flex items-center gap-3">
//                 {" "}
//                 <img
//                   src="/images/dresses.png"
//                   className=" object-fill h-5"
//                   alt=""
//                 />{" "}
//                 <span>Dresses</span>{" "}
//               </p>{" "}
//               <FaChevronRight
//                 className={` text-sm ${
//                   category === "dresses"
//                     ? "bg-customBlue text-white"
//                     : "bg-[#F7FAFC] text-[#1C1C1E80]"
//                 }`}
//               />
//             </li>
//             <li className="flex justify-between items-center py-2.5 px-2 ">
//               {" "}
//               <p className="flex items-center gap-3">
//                 {" "}
//                 <img
//                   src="/images/shoes.png"
//                   className=" object-fill h-4"
//                   alt=""
//                 />{" "}
//                 <span> Shoes</span>{" "}
//               </p>
//               <FaChevronRight className="text-[#1C1C1E80] text-sm" />
//             </li>
//             <li className="flex justify-between items-center py-2.5 px-2  bg-[#F7FAFC]">
//               {" "}
//               <p className="flex items-center gap-3">
//                 {" "}
//                 <img
//                   src="/images/sunglasses.png"
//                   className=" object-contain h-3 w-5"
//                   alt=""
//                 />{" "}
//                 <span> Sunglasses</span>{" "}
//               </p>
//               <FaChevronRight className="text-[#1C1C1E80] text-sm" />
//             </li>
//             <li className="flex justify-between items-center py-2.5 px-2  ">
//               {" "}
//               <p className="flex items-center gap-3">
//                 {" "}
//                 <img
//                   src="/images/handbag.png"
//                   className=" object-fill h-5"
//                   alt=""
//                 />{" "}
//                 <span>Handbags</span>{" "}
//               </p>{" "}
//               <FaChevronRight className="text-[#1C1C1E80] text-sm" />
//             </li>
//             <li className="flex justify-between items-center py-2.5 px-2  bg-[#F7FAFC]">
//               {" "}
//               <p className="flex items-center gap-3">
//                 {" "}
//                 <img
//                   src="/images/jewelery.png"
//                   className=" object-fill h-4"
//                   alt=""
//                 />{" "}
//                 <span>Jewelary</span>{" "}
//               </p>{" "}
//               <FaChevronRight className="text-[#1C1C1E80] text-sm" />
//             </li>
//             <li className="flex justify-between items-center py-2.5 px-2 ">
//               {" "}
//               <p className="flex items-center gap-3">
//                 {" "}
//                 <img
//                   src="/images/hats.png"
//                   className=" object-fill h-4"
//                   alt=""
//                 />{" "}
//                 <span> Hats</span>{" "}
//               </p>
//               <FaChevronRight className="text-[#1C1C1E80] text-sm" />
//             </li>
//           </ul>

//           {isSubcategaryVisible ? (
//             <ul className="w-1/3 py-2 px-5 border overflow-y-auto h-[264px] ">
//               <li className="py-1">Sundress</li>
//               <li className="py-1">Sundress</li>
//               <li className="py-1">Sundress</li>
//               <li className="py-1">Sundress</li>
//               <li className="py-1">Sundress</li>
//               <li className="py-1">Sundress</li>
//               <li className="py-1">Sundress</li>
//               <li className="py-1">Sundress</li>
//               <li className="py-1">Sundress</li>
//               <li className="py-1">Sundress</li>
//             </ul>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PutOnScreenCategory;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function PutOnScreenCategory() {
  const [isSubcategaryVisible, setIsSubcategaryVisible] = useState(false);
  const [category, setCategary] = useState("");

  return (
    <div className="w-[90%] sm:w-[85%] mx-auto mb-8">
      <FaChevronLeft className="text-customBlue" />
      <div className="w-full sm:w-4/5  lg:w-2/3 mx-auto border rounded-md">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold mt-8">
          POST YOUR AD
        </h1>
        <p className="text-center text-sm sm:text-base text-[#606060]">
          Choose a category
        </p>
        <div className="flex flex-col sm:flex-row gap-2 p-4 mt-6">
          <ul className="w-full sm:w-2/3">
            <li
              onClick={() => {
                setIsSubcategaryVisible(true);
                setCategary("dresses");
              }}
              className={`flex justify-between items-center py-2.5 px-2 cursor-pointer ${
                category === "dresses"
                  ? "bg-customBlue text-white"
                  : "bg-[#F7FAFC] text-black"
              }`}
            >
              <p className="flex items-center gap-3">
                <img
                  src="/images/dresses.png"
                  className="object-fill h-5"
                  alt="Dresses"
                />
                <span>Dresses</span>
              </p>
              <FaChevronRight
                className={`text-sm ${
                  category === "dresses"
                    ? "bg-customBlue text-white"
                    : "bg-[#F7FAFC] text-[#1C1C1E80]"
                }`}
              />
            </li>
            {/* Repeat for other categories */}
            <li className="flex justify-between items-center py-2.5 px-2">
              <p className="flex items-center gap-3">
                <img
                  src="/images/shoes.png"
                  className="object-fill h-4"
                  alt="Shoes"
                />
                <span>Shoes</span>
              </p>
              <FaChevronRight className="text-[#1C1C1E80] text-sm" />
            </li>
            <li className="flex justify-between items-center py-2.5 px-2 bg-[#F7FAFC]">
              <p className="flex items-center gap-3">
                <img
                  src="/images/sunglasses.png"
                  className="object-contain h-3 w-5"
                  alt="Sunglasses"
                />
                <span>Sunglasses</span>
              </p>
              <FaChevronRight className="text-[#1C1C1E80] text-sm" />
            </li>
            <li className="flex justify-between items-center py-2.5 px-2">
              <p className="flex items-center gap-3">
                <img
                  src="/images/handbag.png"
                  className="object-fill h-5"
                  alt="Handbags"
                />
                <span>Handbags</span>
              </p>
              <FaChevronRight className="text-[#1C1C1E80] text-sm" />
            </li>
            <li className="flex justify-between items-center py-2.5 px-2 bg-[#F7FAFC]">
              <p className="flex items-center gap-3">
                <img
                  src="/images/jewelery.png"
                  className="object-fill h-4"
                  alt="Jewelary"
                />
                <span>Jewelary</span>
              </p>
              <FaChevronRight className="text-[#1C1C1E80] text-sm" />
            </li>
            <li className="flex justify-between items-center py-2.5 px-2">
              <p className="flex items-center gap-3">
                <img
                  src="/images/hats.png"
                  className="object-fill h-4"
                  alt="Hats"
                />
                <span>Hats</span>
              </p>
              <FaChevronRight className="text-[#1C1C1E80] text-sm" />
            </li>
          </ul>

          {isSubcategaryVisible && (
            <ul className="w-full sm:w-1/3 py-2 px-5 border overflow-y-auto h-[264px]">
              <li className="py-1">
                <Link href="/put-on-screen/add-product"> Sundress</Link>
              </li>
              <li className="py-1">Sundress</li>
              <li className="py-1">Sundress</li>
              <li className="py-1">Sundress</li>
              <li className="py-1">Sundress</li>
              <li className="py-1">Sundress</li>
              <li className="py-1">Sundress</li>
              <li className="py-1">Sundress</li>
              <li className="py-1">Sundress</li>
              <li className="py-1">Sundress</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default PutOnScreenCategory;
