"use client";
import React from "react";
import ProfileCard from "./ProfileCard";
import EmptyState from "./EmptyState";
import Link from "next/link";

function ViewProfile() {
  return (
    <>
      <div className="bg-[#005D760D] h-20 flex items-center">
        <div className="flex justify-between w-[85%] mx-auto ">
          <h1 className="text-[#005D76] text-3xl">View Profile</h1>
          <p className="flex items-center  max-[500px]:hidden">
            <Link href="/profile/edit-profile" className="text-[#005D76]">
              click here to edit your profile
            </Link>
          </p>
        </div>
      </div>
      <div className="  container mx-auto w-[85%]  pt-8">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/4 md:min-w-80 ">
            <ProfileCard />
          </div>
          <div className="w-full md:w-3/4 ">
            <EmptyState />
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto w-[85%] px-4 pt-8">ViewProfile</div>{" "} */}
    </>
  );
}

export default ViewProfile;
