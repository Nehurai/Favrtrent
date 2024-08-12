import Image from "next/image";
import close from "../../../../public/Images/x.png";

export default function Details() {
  return (
    <div className="my-12 ">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Description Section */}
        <div className="md:w-2/3 bg-white max-[375px]:p-4 p-6 rounded-lg border-2">
          <div className="flex max-[375px]:gap-10 gap-24 max-[375px]:pl-2 pl-6 pb-3 border-b-2">
            <div className="text-[#005D76] font-semibold">Description</div>
            <div className="text-[#606060] font-semibold">Reviews(0)</div>
          </div>
          <h1 className="max-[375px]:text-[1.35rem] text-2xl font-semibold my-6">
            Elegant Chrono Watch
          </h1>
          <section className="mb-6">
            <h2 className="text-xl font-medium text-[#005D76]">Overview:-</h2>
            <p className="text-[#606060]">
              Discover the epitome of sophistication and precision with our
              Elegant Chrono Watch. Designed for those who appreciate fine
              craftsmanship and timeless style, this watch combines classic
              design with modern functionality.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-medium text-[#005D76] ">
              Key Features:-
            </h2>
            <ul className="list-disc list-inside text-[#606060]">
              <li>
                <span className="font-medium"> Premium Materials: </span>{" "}
                Crafted with a stainless steel case and a scratch-resistant
                sapphire crystal, ensuring durability and a luxurious feel.
              </li>
              <li>
                <span className="font-medium">Movement: </span> Powered by a
                reliable automatic movement, offering accurate timekeeping and a
                smooth sweep of the second hand.
              </li>
              <li>
                <span className="font-medium">Water Resistance: </span> With a
                water resistance of up to 100 meters, its suitable for everyday
                wear and light swimming.
              </li>
              <li>
                <span className="font-medium"> Design: </span> The minimalist
                dial features luminous hands and markers, making it easy to read
                in any light. Available in multiple finishes to suit your
                personal style.
              </li>
              <li>
                <span className="font-medium">Strap Options: </span> Choose from
                a variety of straps including genuine leather, stainless steel,
                and NATO straps, all designed for comfort and style.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-medium text-[#005D76]">
              Specifications:-
            </h2>
            <ul className="list-disc list-inside text-[#606060]">
              <li>
                {" "}
                <span className="font-medium"> Case Diameter: </span> 42mm
              </li>
              <li>
                {" "}
                <span className="font-medium"> Case Thickness:</span> 11mm
              </li>
              <li>
                {" "}
                <span className="font-medium"> Strap Width:</span> 20mm
              </li>
              <li>
                {" "}
                <span className="font-medium"> Movement: </span> Automatic
                (self-winding)
              </li>
              <li>
                {" "}
                <span className="font-medium"> Water Resistance: </span> 100
                meters (10 ATM)
              </li>
              <li>
                {" "}
                <span className="font-medium"> Dial: </span> Available in Black,
                White, and Blue
              </li>
              <li>
                {" "}
                <span className="font-medium"> Strap: </span> Genuine Leather,
                Stainless Steel, NATO
              </li>
              <li>
                {" "}
                <span className="font-medium"> Crystal: </span> Sapphire,
                scratch-resistant
              </li>
              <li>
                {" "}
                <span className="font-medium"> Warranty:</span> 2-year
                international warranty
              </li>
            </ul>
          </section>
        </div>

        {/* Map and Ad Section */}
        <div className="flex flex-col md:w-1/3 ">
          <div className="p-2 mb-4 bg-white border rounded-lg">
            <img
              src="/images/map.svg"
              alt="Map"
              className="w-full h-auto border rounded-md"
            />
          </div>
          <div className="flex justify-between px-4 py-4 mb-2 bg-white border-2 rounded-lg">
            <p className="text-[#005D76] text-xs font-medium">
              AD ID 1769320054
            </p>
            <p className="text-[8px] text-[#005D76] font-medium">
              REPORT THIS AD
            </p>
          </div>
          <div className="bg-white border-2 rounded-lg">
            <Image src={close} className="float-right mt-2 mr-2 " />
            <img
              src="/images/rent.svg"
              alt="For Rent"
              className="w-full h-[240px] object-cover relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
