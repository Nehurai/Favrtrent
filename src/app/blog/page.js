// import Link from "next/link";
// import React from "react";

// function Blog() {
//   return (
//     <div className="font-poppins mt-6 mb-40">
//       <div className="w-[70%] mx-auto">
//         <div className="flex border">
//           <div className="w-[57%] p-10">
//             <h2 className="text-4xl font-semibold">Long established</h2>
//             <p className="text-lg text-[#606060] my-8">
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout. The
//               point of using Lorem Ipsum is that....
//             </p>
//             <section className="flex justify-between text-sm">
//               <span className="text-[#606060]">May 20th 2020</span>
//               <Link href="/blog/2" className="text-customBlue font-semibold">
//                 Read More
//               </Link>
//             </section>
//           </div>
//           <div className="w-[43%]">
//             <img
//               src="/images/image 1.png"
//               alt=""
//               className="h-full object-cover"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-8 my-12">
//           <div className="shadow-md rounded-md">
//             <img src="/Images/image 2.png" alt="" className="object-cover " />
//             <div className="py-4 px-4">
//               <h2 className="text-2xl font-semibold mb-3">Long established</h2>
//               <p className="text-base text-[#606060] mb-8">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking at its layout.
//                 The point of using Lorem Ipsum is that....
//               </p>
//               <section className="flex justify-between text-sm">
//                 <span className="text-[#606060]">May 20th 2020</span>
//                 <p className="text-customBlue font-semibold">Read More</p>
//               </section>
//             </div>
//           </div>
//           <div className="shadow-md rounded-md">
//             <img src="/Images/image 4.png" alt="" className="object-cover " />
//             <div className="py-4 px-4">
//               <h2 className="text-2xl font-semibold mb-3">Long established</h2>
//               <p className="text-base text-[#606060] mb-8">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking at its layout.
//                 The point of using Lorem Ipsum is that....
//               </p>
//               <section className="flex justify-between text-sm">
//                 <span className="text-[#606060]">May 20th 2020</span>
//                 <p className="text-customBlue font-semibold">Read More</p>
//               </section>
//             </div>
//           </div>
//           <div className="shadow-md rounded-md">
//             <img src="/Images/image 5.png" alt="" className="object-cover " />
//             <div className="py-4 px-4">
//               <h2 className="text-2xl font-semibold mb-3">Long established</h2>
//               <p className="text-base text-[#606060] mb-8">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking at its layout.
//                 The point of using Lorem Ipsum is that....
//               </p>
//               <section className="flex justify-between text-sm">
//                 <span className="text-[#606060]">May 20th 2020</span>
//                 <p className="text-customBlue font-semibold">Read More</p>
//               </section>
//             </div>
//           </div>
//         </div>

//         <div className="flex bg-[#F7FAFC] mb-8 ">
//           <div className="w-[46%] p-16 flex flex-col justify-center">
//             <h1 className="text-5xl font-medium">What is Lorem Ipsum</h1>
//             <p className="text-xl text-[#606060] my-8">
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout. The
//               point of using Lorem Ipsum is that it...
//             </p>
//             <section className="flex justify-between text-sm">
//               <span className="text-[#606060]">May 20th 2020</span>
//               <p className="text-customBlue font-semibold">Read More</p>
//             </section>
//           </div>
//           <div className="w-[54%]">
//             <img src="/Images/image 7.png" alt="" />
//           </div>
//         </div>

//         <button className="float-right rounded-md bg-customBlue text-white px-3 py-2 flex items-center justify-between gap-2">
//           <span> See More </span>
//           <img
//             src="/Images/Vector (3).png"
//             alt=""
//             className="inline-block"
//           />{" "}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Blog;

import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div className="font-poppins mt-6 mb-40">
      <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto">
        <div className="flex flex-col sm:flex-row border">
          <div className="w-full sm:w-[57%] p-6 md:p-10">
            <h2 className="text-2xl lg:text-4xl font-semibold">
              Long established
            </h2>
            <p className="text-base lg:text-lg text-[#606060] my-4 lg:my-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <section className="flex justify-between text-sm">
              <span className="text-[#606060]">May 20th 2020</span>
              <Link href="/blog/2" className="text-customBlue font-semibold">
                Read More
              </Link>
            </section>
          </div>
          <div className="w-full sm:w-[43%]">
            <img
              src="/images/image 1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-8 my-12">
          <div className="shadow-md rounded-md">
            <img
              src="/Images/image 2.png"
              alt=""
              className="object-cover w-full h-48 lg:h-64"
            />
            <div className="py-4 px-4">
              <h2 className="text-xl lg:text-2xl font-semibold mb-3">
                Long established
              </h2>
              <p className="text-sm lg:text-base text-[#606060] mb-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </p>
              <section className="flex justify-between text-sm">
                <span className="text-[#606060]">May 20th 2020</span>
                <p className="text-customBlue font-semibold">Read More</p>
              </section>
            </div>
          </div>
          <div className="shadow-md rounded-md">
            <img
              src="/Images/image 4.png"
              alt=""
              className="object-cover w-full h-48 lg:h-64"
            />
            <div className="py-4 px-4">
              <h2 className="text-xl lg:text-2xl font-semibold mb-3">
                Long established
              </h2>
              <p className="text-sm lg:text-base text-[#606060] mb-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </p>
              <section className="flex justify-between text-sm">
                <span className="text-[#606060]">May 20th 2020</span>
                <p className="text-customBlue font-semibold">Read More</p>
              </section>
            </div>
          </div>
          <div className="shadow-md rounded-md">
            <img
              src="/Images/image 5.png"
              alt=""
              className="object-cover w-full h-48 lg:h-64"
            />
            <div className="py-4 px-4">
              <h2 className="text-xl lg:text-2xl font-semibold mb-3">
                Long established
              </h2>
              <p className="text-sm lg:text-base text-[#606060] mb-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </p>
              <section className="flex justify-between text-sm">
                <span className="text-[#606060]">May 20th 2020</span>
                <p className="text-customBlue font-semibold">Read More</p>
              </section>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-[#F7FAFC] mb-8">
          <div className="w-full sm:w-[46%] p-6 lg:p-16 flex flex-col justify-center">
            <h1 className="text-2xl lg:text-5xl font-medium">
              What is Lorem Ipsum
            </h1>
            <p className="text-base lg:text-xl text-[#606060] my-4 lg:my-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it...
            </p>
            <section className="flex justify-between text-sm">
              <span className="text-[#606060]">May 20th 2020</span>
              <p className="text-customBlue font-semibold">Read More</p>
            </section>
          </div>
          <div className="w-full sm:w-[54%]">
            <img
              src="/Images/image 7.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <button className="float-right rounded-md bg-customBlue text-white px-3 py-2 flex items-center justify-between gap-2">
          <span> See More </span>
          <img src="/Images/Vector (3).png" alt="" className="inline-block" />
        </button>
      </div>
    </div>
  );
}

export default Blog;
