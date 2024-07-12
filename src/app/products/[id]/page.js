"use client";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Details from "./Details";
// import Modal from "./Modal";
import { useState } from "react";
import Modal from "@/app/components/Model/Modal";
import ItemCard from "@/app/components/Cards/ItemCard";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
const productImages = [
  "https://s3-alpha-sig.figma.com/img/f7c6/baf1/4caeffbb1e598d7faaaed35c0d4db039?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpFm8ifHhP-A-LKz4IIuKzrJMQiCMiZJYkaLQlYOgkyHrpkJOj9bEjMz3cCFEUZgQdRb3hDGkPztWBch2-cN~ytN~CKgTm4X-XHROrcdtzd6ACQ8YBKGCCI8SKPU060vB9uXnmjIrfLSKhKCiGOaHkMRvrGmWSQ4pVdi5a8IBMeqoSkzEhZTLALFxramUqb5XPSpjNL8KgwJXlgDs5IOWkStA2WmYEJIs8FcLveHK37C9QvVgnh2CBmoAjfP55SE2VyRKhEGCGaVD0RjzGjs377yH-33ZoX5CncZk9~P~Pi2AROq82z4Cj1kMbsFOYpE1BL8hmm8gQXKuR83~A~Pvw__",
  "https://s3-alpha-sig.figma.com/img/b8de/c955/2674a68f5c283cf2fb5849e47d2d9c53?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHCHdspBHOcncLsjSqsNJu3HMAe2noef1mNzDRj1yWci78dKly9Ek1Cs~mjTNCQvCZnYongC19k89dcGtNcp2XHN~oUa15s-wp9nnLJ55TlmuugflL5yL3KZSUtf0ctzZWPi4KfVb-~BV8XHXpmk~CMLPQvxkVSh2aZDL1dxgse4bjgzVfSvkzPmAQH9PN3HIx91FMKM8qQWJhj885j9zKNl2SzQfBRUCIIyr5CK6XgAH0-D0wvN4yN74bnH9e6Wbu6CWy1ERiaSIk-8L~cww4VnuJKC0z6XLMF9228es63MsvHv100vrSTZKwVk7lWAUDUl1TlpO0wrN50NldolHQ__",
  "https://s3-alpha-sig.figma.com/img/4f0b/5da7/c253d3fac2303a616f6ae2e063897fc7?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqJmXvqdo35wHtFHmTFMVsBPufu3cbMnhFX2pMwESjGFugQH1lCV~plIdcrmEZEjVemh7ArYLj1xcMog8sgqodqu3PpGuqWjNXOihi2QDSP0hyGoANKl0sbdtlYH5Md2AxWeXlPlpLdbdCu0gILt6KA6Xgx4Yuuzao08QbW8JXqZwPCQB5Zn~e1fYrnJu0O7JPeb5Yzp-ojvm0KSZhl1mLN1eE-nr2EZ72hyGUhAquisM2hCl5eQJmAz5wW2AbTLjAe2mmL4oDBpKUW~1QVNfnlafbZwCIkwzfDxrAshM7lSGttpjcNB51A-Iwa1t~8Zcts8iYq5OqaXhsAbfco4DQ__",
  "https://s3-alpha-sig.figma.com/img/dddf/9cb3/9994b794c1c75ab531da1530d0932736?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B9o3r1e9mDvFQU9eoP196Dn1q-FJZneJvC65w7UBrYpKzhGLCIYIMfpTH021PtgAXijpU1V4aH5E0Y55EBhPjlNSTbGdgpoYSIC8RNz-wyLbGnPwdkGma9yOjBlIF111W-zMqd859Me1ReNMQ4hOQcy81ttJEUEUjElI-zRzJez7lYginstVLPk-v1Zyg82NI88jwyIq59ohVeDknwiyTmw-MHfEKoj7JAQuyQE24P4ET~UNnhfZm1RhSkboRyV3XFSp6GQjoYrtyVyeGOZa3VQCf7hjkGHj1lzXg0h5kka3Ljubp3Q0YPQsXfbtxlNJ7FMKGYaQhhejHXjIop06ag__",
];
const relatedItem = [
  {
    id: 1,
    title: "Inalsa Air Fryer Fry-Light-1400W",
    price: "₹4,627.00/mo",
    image: "/images/Rectangle1.png",
    available: true,
  },
  {
    id: 2,
    title: "Oneplus Bullets Z2 Bluetooth Wireless",
    price: "₹1,699.00/mo",
    image: "/images/Rectangle2.png",
    available: true,
  },
  {
    id: 3,
    title: "New Fastrack Reflex Play| AMOLED Display",
    price: "₹5,699.00/mo",
    image: "/images/Rectangle3.png",
    available: true,
  },
  {
    id: 4,
    title: "Apple iPhone 13 (128GB) - Green",
    price: "₹76,900.00/mo",
    image: "/images/Rectangle4.png",
    available: true,
  },
  {
    id: 5,
    title: "Samsung Galaxy Tab S8+ - Wifi Only, Graphite",
    price: "₹74,998.00/mo",
    image: "/images/Rectangle5.png",
    available: true,
  },
];
let imgs =
  "https://s3-alpha-sig.figma.com/img/dc1c/815a/f35adaa4f9acfce65a733834b2f851f0?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PpevNOlWvrLvbSVyK4hpaj04q0VTtmUCDYo5J53~RvvnFRnSZ1oQ4FYf2v-dtTgao4Yud49nxZDpreHfGcIrQ3WpxUFnlDmmTgEmQIdbe3OOzAtCEp8mTCbXLh~DpFlJXiaKxHsjzw4QL6bAvxki-J-sDPGBzGd0ulxWFov5FQijg3udqXnga3kedgMCjZ4nFvJ4KWe0HUfLqa7eFfjZ0PENZXeF~IA89K~s40ZZTabzXLKSvgvufb91Fyb8wF5grwmYbkQ8ov5~W7Ivt-uZ6LPLZ0Feqq--FeWPKWZW9XOfyn9C4VPgnYPniFMVUaYMonbohrzYrBn7gGiFZwXb6A__";
const ProductPage = () => {
  const [mainImage, setMainImage] = useState(productImages[0]);
  //   const [openModal, setOpenModal] = useState(false);
  //   useState
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mx-auto w-[90%] sm:w-[85%] sm:px-1 pt-8 mb-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
        {/* Part 1: Image Section */}
        <div className="lg:w-[90%]  flex flex-col-reverse sm:flex-row lg:flex-col-reverse xl:flex-row gap-4">
          {/* Thumbnails Section */}
          <div className="flex flex-row sm:flex-col lg:flex-row xl:flex-col max-sm:space-y-0 space-y-4 lg:space-y-0 xl:space-y-4 max-sm:gap-4 gap-0 lg:gap-2.5 xl:gap-0  h-full">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={` bg-blend-lighten hover:bg-blend-darken cursor-pointer  border rounded overflow-hidden w-36   h-20 min-[425px]:h-24 sm:h-32 lg:h-32 lg:w-32 xl:h-[9.8rem] xl:w-36 ${
                  mainImage === image ? "ring-2 ring-purple-600" : ""
                }`}
                onClick={() => setMainImage(image)}
              >
                <img
                  src={image}
                  alt={`Product Thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                  width={183}
                  height={172}
                />
              </div>
            ))}
          </div>

          {/* Main Image Section */}

          <div className="w-4/5  relative max-sm:w-full lg:w-full ">
            <div
              className="  relative 
           max-sm:h-[420px] sm-[1023px]:h-[560px] lg:h-[550px] xl:h-[678px]
          "
            >
              <img
                src={mainImage}
                alt="Product Image"
                className="w-full h-full object-cover"
                layout="fill"
              />
            </div>
          </div>
        </div>

        {/* Part 2: Product Details min-[1026px]:w-2/5 */}
        <div className="  mt-4  max-lg:w-full xl:w-2/5">
          <div className="text-gray-500 text-sm flex justify-between">
            {" "}
            <div>
              <span> 01/June/2024</span>{" "}
              <span>
                <CiHeart className="inline-block" />{" "}
              </span>{" "}
            </div>
            <div>
              <CiLocationOn className=" inline-block" /> Dwarka, Delhi
            </div>
          </div>
          <h1 className="text-2xl font-semibold my-4">Elegant Chrono Watch</h1>
          <p className="font-semibold text-[#005D76] text-[15px]">
            About the product
          </p>
          <p className="text-[#606060] mb-4">
            Discover the epitome of sophistication and precision with our
            Elegant Chrono Watch. Designed for those who appreciate fine
            craftsmanship and timeless style, this watch combines classic design
            with modern functionality.
          </p>
          <div className="mb-4">
            <h2 className="font-semibold text-[#005D76] text-[15px]">Color</h2>
            <p className="text-[#606060]">Grey and Blue</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold text-[#005D76] text-[15px]">
              Specifications
            </h2>
            <ul className="  text-[#606060]">
              <li className="my-0.5">
                <span className="font-medium"> Case Diameter:</span> 42mm{" "}
              </li>
              <li className="my-0.5">
                <span className="font-medium"> Case Thickness:</span> 11mm
              </li>
              <li className="my-0.5">
                <span className="font-medium"> Strap Width:</span> 20mm
              </li>
            </ul>
          </div>
          <div className="text-xl  text-[#005D76] my-10 lg:my-6  flex items-center gap-8">
            <p className="font-bold"> ₹5,699.00/mo</p>
            <Link
              href="/rent-payment"
              className=" text-sm bg-[#005D76] text-white py-2 px-3 lg:px-2 xl:px-3 rounded-md"
            >
              Take on Rent
            </Link>
          </div>
          <div className="flex border-2 gap-8 p-2 mt-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/dc1c/815a/f35adaa4f9acfce65a733834b2f851f0?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kPwnCUA8-nlPu4IzKShW2kHsgVqRY8hy25Agb6Kd4kNAsO~Ta0fT5IJdBvK5-j4fv5nkIXfI7E-0eEWBkJ27UHbrtFL8VX0Gm66MNwDiHW8NxWjU20jdifyUZDCEQVd-OSncoaHkafC--gH5R2BRZQ4CGESA86B0lQeI~YVaaDo1U8bEo6el7jSyBvVfZdOgMF~j49O6Yn5Z9XBvi-KDA0kHK5dfRD1yaG6zMczkzj~04IidDAgldF4ydS2WJCZfXiipVywmfeWH0gEI8~SNBFHA~0LlWb9z~Jeas~ILYgUnIHCHknjEBQWrceB5jR5TUpHJDFOUFXVSFx7PQDYngQ__"
              alt=""
              width={136}
              className="h-[140px] lg:h-[120px] xl:h-[140px]"
            />
            <div>
              <p className="flex justify-between items-center">
                <span>
                  {" "}
                  Owner:
                  <span className="text-customBlue">Arpit</span>{" "}
                </span>{" "}
                <Link href="/profile/other-profile">
                  <FaChevronRight className="text-[#606060]" />
                </Link>
              </p>
              <button
                className="bg-[#005D76] py-2 px-3 lg:px-2 xl:px-3 relative top-6 text-white rounded-lg"
                onClick={() => setShowModal(true)}
              >
                Chat with Owner
              </button>
            </div>
          </div>
        </div>
      </div>
      <Details />

      <section className="mt-12">
        <div className="flex-1 mr-0  flex-col flex justify-center">
          <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 pl-5 border-customBlue">
            <h2 className="text-2xl font-semibold font-poppins  text-center lg:text-left">
              Related Items
            </h2>
            <p className="text-customBlue text-lg font-semibold">View All</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 my-8">
            {relatedItem.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ProductPage;
