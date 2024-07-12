import React from "react";

function AboutUS() {
  return (
    <div>
      <div className="w-full bg-[#F7FAFC] font-poppins h-[410px] relative top-0">
        <div className="w-[85%] mx-auto">
          <div className="flex justify-between pt-6 gap-10">
            <div className="w-1/2 pr-8">
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
              <button className="rounded-md bg-customBlue text-white px-3 py-2 flex items-center justify-between gap-2 mt-16">
                <span> See More </span>
                <img
                  src="/Images/Vector (3).png"
                  alt=""
                  className="inline-block"
                />{" "}
              </button>
            </div>
            <div className="w-1/2 relative flex">
              <img
                src="/Images/Rectangle 141708.png"
                className="h-60 object-cover"
                alt=""
              />
              <img
                src="/Images/Rectangle 141709.png"
                className="h-60 absolute top-[136px] left-24"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto mt-20">
        <div className="flex gap-16">
          <div className="w-1/2">
            <img src="/Images/Rectangle 141710.png" alt="" />
          </div>
          <div className="w-2/5">
            <p className="text-customBlue font-semibold">Our Vision</p>
            <div className="flex flex-col justify-center h-4/5">
              <h1 className="text-3xl font-medium mb-8">Finibus Bonorum</h1>
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
        <div className="flex justify-between relative">
          <div className="w-[68%] bg-[#F7FAFC] pl-16 h-[500px]">
            <div className="flex flex-col justify-center h-4/5 w-3/5">
              <p className="text-customBlue font-semibold pt-12 mb-10 ">
                Our Mision
              </p>
              <h1 className="text-3xl font-medium mb-8">Finibus Bonorum</h1>
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
          <div className="w-2/5 absolute top-32 right-20">
            <img src="/Images/Rectangle 141712.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
