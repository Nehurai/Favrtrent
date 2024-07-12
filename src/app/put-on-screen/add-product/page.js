// import Image from "next/image";
// import { FaChevronRight } from "react-icons/fa";
// import { FiEdit3 } from "react-icons/fi";

// export default function PostAd() {
//   return (
//     <div className="w-[90%] sm:w-[85%] mx-auto mb-16">
//       <div className="w-2/3 mx-auto border rounded-md">
//         <div className=" bg-gray-100 flex items-center justify-center">
//           <div className="bg-white rounded-md p-6 w-full max-w-4xl">
//             <h1 className="text-center text-3xl font-semibold mt-8">
//               POST YOUR AD
//             </h1>
//             <p className="text-center text-base text-[#606060]">
//               Choose a category
//             </p>
//             <div className="mb-4 flex justify-between mt-6">
//               <div>
//                 <span className=" text-[#606060] text-base">
//                   Dresses{" "}
//                   <FaChevronRight className=" inline-block text-[10px]" />
//                   <FaChevronRight className=" inline-block text-[10px] -ml-1.5" />{" "}
//                   <span className="text-customBlue font-medium">
//                     {" "}
//                     Sun Dress
//                   </span>
//                 </span>
//               </div>
//               <div>
//                 <span className=" text-customBlue cursor-pointer text-base">
//                   <FiEdit3 className=" inline-block -mt-0.5" /> Change
//                 </span>
//               </div>
//             </div>
//             <hr />
//             <div className="flex justify-between  my-4">
//               <div className="text-[#938E8E] w-[55%]  mr-4">
//                 <div className="border-r border-gray-300 pt-10 pr-6 pb-6">
//                   <div className=" ">
//                     <input
//                       type="text"
//                       placeholder="Add title*"
//                       className="w-full p-3 border border-gray-300 rounded-md  text-base"
//                     />
//                     <p className="text-xs mb-4">
//                       Mention the key features of your item (e.g., brand, model,
//                       age, type)
//                     </p>
//                   </div>
//                   <textarea
//                     placeholder="Description"
//                     className="w-full p-2 border border-gray-300 rounded-md text-base"
//                     rows="4"
//                   />
//                   <p className="text-xs mb-4">
//                     Include condition, features and reason for rent
//                   </p>
//                   <div className="flex border items-center border-gray-300 rounded-md text-base">
//                     <span className="border-r-2 px-3 py-1 text-customBlue">
//                       ₹
//                     </span>
//                     <input
//                       type="number"
//                       placeholder="Set a price*"
//                       className="w-full h-full rounded-md p-4 focus:outline-none"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="w-[45%]">
//                 <p className="mb-4 text-xl">Upload Atleast 4 photos</p>
//                 <div className="grid grid-cols-4 gap-2">
//                   <div className="w-full h-20 border border-gray-300 rounded-md flex items-center justify-center">
//                     <span>Add Photo</span>
//                   </div>
//                   {Array(11)
//                     .fill()
//                     .map((_, index) => (
//                       <div
//                         key={index}
//                         className="w-full h-20 border border-gray-300 rounded-md"
//                       ></div>
//                     ))}
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <div className="flex justify-between my-4">
//               <div className="text-[#938E8E] w-[55%] mr-4">
//                 <div className="border-r border-gray-300 pt-10 pr-6 pb-16">
//                   <label className="block text-black text-xl mb-2">
//                     Confirm your location
//                   </label>
//                   <select className="w-full p-2 border border-gray-300 rounded-md">
//                     <option>State *</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="w-[45%]">
//                 <label className="block mb-2 text-xl my-4">
//                   Current location
//                 </label>
//                 {/* <div className="p-2 border border-gray-300 rounded-md mb-2"> */}
//                 <section className="flex justify-between">
//                   {" "}
//                   <p className="text-base text-[#1C1C1E80]">State</p>{" "}
//                   <p>Punjab</p>
//                 </section>
//                 <hr className="my-2" />
//                 <section className="flex justify-between">
//                   <p className="text-base text-[#1C1C1E80]">City</p>{" "}
//                   <p>Mohali</p>
//                 </section>
//                 <hr className="my-2" />
//                 <section className="flex justify-between">
//                   <p className="text-base text-[#1C1C1E80]">Neighbourhood</p>{" "}
//                   <p>Sector 75</p>
//                 </section>
//                 {/* </div> */}
//               </div>
//             </div>
//             <hr />
//             <div className="mb-4">
//               <label className="block mb-2 mt-10 text-xl">
//                 Review your details
//               </label>
//               <div className="flex items-center p-2  rounded-md">
//                 <img
//                   src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__" // Placeholder image
//                   alt="Profile"
//                   width={100}
//                   height={100}
//                   className="rounded-full mr-4 w-24 h-24 object-cover"
//                 />
//                 <div className="w-96">
//                   <p className="p-4 py-3 border rounded-md text-base">
//                     Natasha Ahlawat
//                   </p>
//                   <p className="flex justify-between text-sm mt-3">
//                     <span>Your phone number</span>
//                     <span>+910000000</span>{" "}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-center my-8">
//                 <button className="bg-customBlue text-white py-2 px-4 rounded-md ">
//                   Post Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

export default function PostAd() {
  return (
    <div className="w-[90%] sm:w-[85%] mx-auto mb-16">
      <div className="w-full lg:w-2/3 mx-auto border rounded-md">
        <div className="bg-gray-100 flex items-center justify-center">
          <div className="bg-white rounded-md p-6 w-full max-w-4xl">
            <h1 className="text-center text-3xl font-semibold mt-8">
              POST YOUR AD
            </h1>
            <p className="text-center text-base text-[#606060]">
              Choose a category
            </p>
            <div className="mb-4 flex flex-col sm:flex-row justify-between mt-6">
              <div className="mb-2 sm:mb-0">
                <span className="text-[#606060] text-base">
                  Dresses{" "}
                  <FaChevronRight className="inline-block text-[10px]" />
                  <FaChevronRight className="inline-block text-[10px] -ml-1.5" />{" "}
                  <span className="text-customBlue font-medium">
                    {" "}
                    Sun Dress
                  </span>
                </span>
              </div>
              <div>
                <span className="text-customBlue cursor-pointer text-base">
                  <FiEdit3 className="inline-block -mt-0.5" /> Change
                </span>
              </div>
            </div>
            <hr />
            <div className="flex flex-col lg:flex-row justify-between my-4">
              <div className="text-[#938E8E] w-full lg:w-[55%] lg:mr-4 mb-4 lg:mb-0">
                <div className="lg:border-r lg:border-gray-300 pt-10 pr-6 pb-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Add title*"
                      className="w-full p-3 border border-gray-300 rounded-md text-base"
                    />
                    <p className="text-xs mb-4">
                      Mention the key features of your item (e.g., brand, model,
                      age, type)
                    </p>
                  </div>
                  <textarea
                    placeholder="Description"
                    className="w-full p-2 border border-gray-300 rounded-md text-base"
                    rows="4"
                  />
                  <p className="text-xs mb-4">
                    Include condition, features and reason for rent
                  </p>
                  <div className="flex border items-center border-gray-300 rounded-md text-base">
                    <span className="border-r-2 px-3 py-1 text-customBlue">
                      ₹
                    </span>
                    <input
                      type="number"
                      placeholder="Set a price*"
                      className="w-full h-full rounded-md p-4 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[45%]">
                <p className="mb-4 text-xl">Upload At least 4 photos</p>
                <div className="grid grid-cols-3 min-[375px]:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                  <div className="w-full h-20 border border-gray-300 rounded-md flex items-center justify-center">
                    <span>Add Photo</span>
                  </div>
                  {Array(11)
                    .fill()
                    .map((_, index) => (
                      <div
                        key={index}
                        className="w-full h-20 border border-gray-300 rounded-md"
                      ></div>
                    ))}
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col lg:flex-row justify-between my-4">
              <div className="text-[#938E8E] w-full lg:w-[55%] lg:mr-4 mb-4 lg:mb-0">
                <div className="lg:border-r lg:border-gray-300 pt-10 pr-6 pb-16">
                  <label className="block text-black text-xl mb-2">
                    Confirm your location
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>State *</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-[45%]">
                <label className="block mb-2 text-xl my-4">
                  Current location
                </label>
                <section className="flex justify-between">
                  <p className="text-base text-[#1C1C1E80]">State</p>
                  <p>Punjab</p>
                </section>
                <hr className="my-2" />
                <section className="flex justify-between">
                  <p className="text-base text-[#1C1C1E80]">City</p>
                  <p>Mohali</p>
                </section>
                <hr className="my-2" />
                <section className="flex justify-between">
                  <p className="text-base text-[#1C1C1E80]">Neighbourhood</p>
                  <p>Sector 75</p>
                </section>
              </div>
            </div>
            <hr />
            <div className="mb-4">
              <label className="block mb-2 mt-10 text-xl">
                Review your details
              </label>
              <div className="flex flex-col sm:flex-row items-center p-2 rounded-md">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jztn5pOOw3eGpUhnlw6NCjfQWSA1COH8F2jaIIjGgSLRH-lbi6cZJpbw-0ZFF5R9UgUzd0eC3MSbAdooZ8PBAuTS36m5ZgXEHYlend6JZIyWgNxW3k2CYqn1Rrnn3ZPM3OSKOkZ95X05-BcsgeR~HazHtkEftRaS6GeB0YKW4o~RGwADO5wsUJQhmNThW8EiPronhpdBlO8B8aKjr7Ar-gc4hq5B1w0KDNJcolZitOPbCmPWbazy4CKCaV~d4Kw7IaukP56HAXWGWZGkbqcEBuTFlBuz1N2r1wjigaVERSS~6F0DhQ6iX90ylqMS~qV91DYn7fEN~FqNe4WMMFlPKg__" // Placeholder image
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full mb-4 sm:mb-0 sm:mr-4 w-24 h-24 object-cover"
                />
                <div className="w-full sm:w-96">
                  <p className="p-4 py-3 border rounded-md text-base">
                    Natasha Ahlawat
                  </p>
                  <p className="flex justify-between text-sm mt-3">
                    <span>Your phone number</span>
                    <span>+910000000</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-8">
                <button className="bg-customBlue text-white py-2 px-4 rounded-md">
                  Post Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
