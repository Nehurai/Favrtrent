import React from "react";

function AboutUS() {
  return (
    <div>
      <div className="w-full bg-[#F7FAFC] font-poppins  relative top-0">
        <div className="w-[85%] mx-auto">
          <div className="flex flex-col justify-between h-full gap-10 py-6 md:py-12 md:flex-row">
            <div className="w-full pr-8 md:w-1/2">
              <h1 className="text-3xl font-semibold">
                Finibus Bonorum et Malorum
              </h1>
              <p className="text-[#606060] text-base mt-5">
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia
              </p>
              <button className="flex items-center justify-between gap-2 px-3 py-2 mt-16 text-white rounded-md bg-customBlue">
                <span> See More </span>
                <img
                  src="/Images/Vector (3).png"
                  alt=""
                  className="inline-block"
                />{" "}
              </button>
            </div>
            <div className="relative flex justify-center w-full h-full md:w-1/2">
              <img
                src="/Images/Rectangle 141708.png"
                className="object-cover h-60"
                alt=""
              />
              <img
                src="/Images/Rectangle 141709.png"
                className="h-60 hidden md:block absolute top-[136px] left-24"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto mt-20">
        <div className="flex flex-col w-full h-full gap-16 md:flex-row">
          <div className="w-full md:w-1/2">
            <img src="/Images/Rectangle 141710.png" alt="" />
          </div>
          <div className="w-full md:w-2/5">
            <p className="font-semibold text-customBlue">Our Vision</p>
            <div className="flex flex-col justify-center h-4/5">
              <h1 className="mb-8 text-3xl font-medium">Finibus Bonorum</h1>
              <p className="text-[#606060]">
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC <br /> "Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-12 mb-60 ">
        <div className="relative flex flex-col justify-between w-full md:flex-row">
          <div className="md:w-[68%] w-full bg-[#F7FAFC] pl-16 h-[500px]">
            <div className="flex flex-col justify-center w-full md:w-3/5 h-4/5">
              <p className="pt-12 mb-10 font-semibold text-customBlue ">
                Our Mision
              </p>
              <h1 className="mb-8 text-3xl font-medium">Finibus Bonorum</h1>
              <p className="text-[#606060]">
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC <br /> "Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia
              </p>
            </div>
          </div>
          <div className="w-full md:absolute md:w-2/5 right-20">
            <img src="/Images/Rectangle 141712.png" alt="" className="p-4 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
