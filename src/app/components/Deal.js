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
    slidesToShow: 4,
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
      <div className="w-full h-auto mt-10 ">
        {/* <section className="sm:col-auto"> */}
        {/* <div className="w-full  h-auto sm:h-[628px]"> */}
        <img src="/images/deal.png" className="" />
      </div>
      {/* </div> */}
      {/* </section> */}

      <section className="mt-12">
        <div className="flex flex-col justify-center flex-1 mr-0">
          <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 pl-5 border-customBlue">
            <h2 className="text-2xl font-semibold text-center font-poppins lg:text-left">
              Today's Hot Deals
            </h2>
            <p className="text-lg font-semibold text-customBlue">View All</p>
          </div>
          {/* <div className="grid grid-cols-2 gap-6 my-8 lg:grid-cols-5"> */}
          <div className="px-4 my-4 md:my-8 sm:px-0">
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
        <div className="flex flex-col justify-center flex-1 mr-0">
          <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 pl-5 border-customBlue">
            <h2 className="text-2xl font-semibold text-center font-poppins lg:text-left">
              Your searched items
            </h2>
            <p className="text-lg font-semibold text-customBlue">View All</p>
          </div>

          <div className="grid grid-cols-2 gap-4 my-8 md:grid-cols-4 2xl:grid-cols-6">
            {searchedItem.map((item) => (
              <SearchCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="relative flex justify-center w-full mt-14">
          <img
            src="/images/Rectangle 3.png"
            className="absolute w-full h-auto "
          />
          <p className="absolute text-3xl font-bold lg:mt-40 text-customGold mt-60 font-poppins">
            20% special offer
          </p>
          
          <p className="absolute text-3xl font-bold top-7 font-qwigley lg:mt-40 text-customGold mt-60">
            Jewellery
          </p>
        
        </div>
        <div className="relative flex justify-center w-full mt-72 gap-x-6 font-poppins">
          <p className="text-customGold">check it out</p>
        </div>
      </section> */}

      <div className="relative w-full mt-10">
        {/* <section className="sm:col-auto"> */}
        {/* <div className="w-full  h-auto sm:h-[628px]"> */}
        <img src="/images/Rectangle 3.png" className="relative object-cover " />
        <p className="absolute font-poppins text-[#A29781] md:text-3xl text-xl font-bold top-[2%] md:top-[8%] right-[45%] ">
          Special offer on
        </p>

        <p className="absolute font-qwigley right-20 mb-2 text-[#A29781] top-[5%] text-[80px] md:text-[200px] md:top-[10%] md:right-[31%]">
          Jewellery
        </p>
        <p className="absolute flex items-center  font-poppins text-[#606060] md:text-2xl text-xl top-[45%] right-[30%] md:right-[45%]">
          Check it out <MdOutlineKeyboardArrowRight className="-mr-3" />{" "}
          <MdOutlineKeyboardArrowRight className="-mr-3" />{" "}
          <MdOutlineKeyboardArrowRight />
        </p>
      </div>
      <section className="mt-12">
        <div className="flex flex-col justify-center flex-1 mr-0">
          <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 pl-5 border-customBlue">
            <h2 className="text-2xl font-semibold text-center font-poppins lg:text-left">
              More items
            </h2>
            <p className="text-lg font-semibold text-customBlue">View All</p>
          </div>
          <div className="grid grid-cols-2 gap-6 my-8 md:grid-cols-4 2xl:grid-cols-5">
            {hotItemDeal.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="">
        {/* <div className="flex flex-col justify-center flex-1 mr-0"> */}
        <div className="flex justify-between items-center border-dashed border-b-2 py-2  pt-2.5 pl-5 border-customBlue">
          <h2 className="text-2xl font-semibold text-center font-poppins lg:text-left">
            Review on product
          </h2>
          <p className="text-lg font-semibold text-customBlue">View All</p>
        </div>

        <div className="grid grid-cols-1 gap-4 my-8 md:grid-cols-2">
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default Deal;
