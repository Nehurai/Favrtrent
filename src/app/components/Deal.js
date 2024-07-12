"use client";
import React from "react";
// import Slider from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemCard from "./Cards/ItemCard";
import SearchCard from "./Cards/SearchCard";
import ReviewCard from "./Cards/ReviewCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Deal() {
  const hotItemDeal = [
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
    {
      id: 6,
      title: "Inalsa Air Fryer Fry-Light-1400W",
      price: "₹4,627.00/mo",
      image: "/images/Rectangle1.png",
      available: true,
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const searchedItem = [
    {
      id: 1,
      title: "Inalsa Air Fryer Fry-Light-1400W",
      price: "₹4,627.00/mo",
      image: "/images/Rectangle6.png",
    },
    {
      id: 2,
      title: "Oneplus Bullets Z2 Bluetooth Wireless",
      price: "₹1,699.00/mo",
      image: "/images/Rectangle7.png",
    },
    {
      id: 3,
      title: "New Fastrack Reflex Play| AMOLED Display",
      price: "₹5,699.00/mo",
      image: "/images/Rectangle8.png",
    },
    {
      id: 4,
      title: "Apple iPhone 13 (128GB) - Green",
      price: "₹76,900.00/mo",
      image: "/images/Rectangle9.png",
    },
    {
      id: 5,
      title: "Samsung Galaxy Tab S8+ - Wifi Only, Graphite",
      price: "₹74,998.00/mo",
      image: "/images/Rectangle10.png",
    },
    {
      id: 6,
      title: "Samsung Galaxy Tab S8+ - Wifi Only, Graphite",
      price: "₹74,998.00/mo",
      image: "/images/Rectangle11.png",
    },
  ];

  return (
    <div>
      <div className="w-full mt-10 h-auto ">
        {/* <section className="sm:col-auto"> */}
        {/* <div className="w-full  h-auto sm:h-[628px]"> */}
        <img src="/images/deal.png" className="" />
      </div>
      {/* </div> */}
      {/* </section> */}

      <section className="mt-12">
        <div className="flex-1 mr-0  flex-col flex justify-center">
          <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 pl-5 border-customBlue">
            <h2 className="text-2xl font-semibold font-poppins  text-center lg:text-left">
              Today's Hot Deals
            </h2>
            <p className="text-customBlue text-lg font-semibold">View All</p>
          </div>
          {/* <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 my-8"> */}
          <div className="my-8">
            <Slider {...settings}>
              {hotItemDeal.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </Slider>
          </div>
          {/* </div> */}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex-1 mr-0  flex-col flex justify-center">
          <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 pl-5 border-customBlue">
            <h2 className="text-2xl font-semibold font-poppins  text-center lg:text-left">
              Your searched items
            </h2>
            <p className="text-customBlue text-lg font-semibold">View All</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4  my-8">
            {searchedItem.map((item) => (
              <SearchCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="relative w-full mt-14 flex justify-center">
          <img
            src="/images/Rectangle 3.png"
            className="absolute w-full  h-auto  "
          />
          <p className="absolute lg:mt-40 text-customGold font-bold text-3xl mt-60 font-poppins">
            20% special offer
          </p>
          
          <p className="absolute top-7  font-qwigley lg:mt-40 text-customGold font-bold text-3xl mt-60">
            Jewellery
          </p>
        
        </div>
        <div className="relative w-full mt-72 flex gap-x-6 justify-center font-poppins">
          <p className="text-customGold">check it out</p>
        </div>
      </section> */}

      <div className="w-full mt-10  relative">
        {/* <section className="sm:col-auto"> */}
        {/* <div className="w-full  h-auto sm:h-[628px]"> */}
        <img src="/images/Rectangle 3.png" className=" object-cover relative" />
        <p className="absolute font-poppins text-[#A29781] text-3xl font-bold top-[8%] right-[25%] ">
          Special offer on
        </p>

        <p className="absolute font-qwigley text-[#A29781] text-[200px] top-[10%] right-[31%]">
          Jewellery
        </p>
        <p className="absolute flex items-center  font-poppins text-[#606060] text-2xl top-[45%] right-[45%]">
          Check it out <MdOutlineKeyboardArrowRight className="-mr-3" />{" "}
          <MdOutlineKeyboardArrowRight className="-mr-3" />{" "}
          <MdOutlineKeyboardArrowRight />
        </p>
      </div>
      <section className="mt-12">
        <div className="flex-1 mr-0  flex-col flex justify-center">
          <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 pl-5 border-customBlue">
            <h2 className="text-2xl font-semibold font-poppins  text-center lg:text-left">
              More items
            </h2>
            <p className="text-customBlue text-lg font-semibold">View All</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 my-8">
            {hotItemDeal.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="">
        {/* <div className="flex-1 mr-0  flex-col flex justify-center"> */}
        <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 pl-5 border-customBlue">
          <h2 className="text-2xl font-semibold font-poppins  text-center lg:text-left">
            Review on product
          </h2>
          <p className="text-customBlue text-lg font-semibold">View All</p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 my-8">
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default Deal;
