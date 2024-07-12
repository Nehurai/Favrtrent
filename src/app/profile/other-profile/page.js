"use client";
import Link from "next/link";
import React from "react";
import ProfileCard from "../view-profile/ProfileCard";
import EmptyState from "../view-profile/EmptyState";
import ItemCard from "@/app/components/Cards/ItemCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function otherProfile() {
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
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  return (
    <>
      <div className="mx-auto w-[85%]  pt-8 mb-24">
        <div className="w-full  flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/4 md:min-w-80 ">
            <ProfileCard ownProfile={false} />
          </div>
          <div className="w-full md:w-3/5 ">
            {/* <EmptyState /> */}
            <section className="">
              <div className="flex-1 mr-0  flex-col flex justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
                  {/* <Slider {...settings}> */}
                  {hotItemDeal.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                  {/* </Slider> */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default otherProfile;
