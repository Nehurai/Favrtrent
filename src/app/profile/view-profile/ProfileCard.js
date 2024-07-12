// components/ProfileCard.js
import Image from "next/image";
import Link from "next/link";
import { LuUserPlus } from "react-icons/lu";

const ProfileCard = ({ ownProfile }) => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl border  items-center ">
      <div className="flex gap-4 mb-4">
        <img
          className="h-16 w-16 object-cover rounded-full"
          src="https://s3-alpha-sig.figma.com/img/0032/2573/83698f9a5030dead064afa3b60692d9d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msf77sR8O51ZVApiNUDuxgZ7s~jkYZbxza-objAhue8~JbnizPFrOlbv2m9wvGhDo8I9e58ZYRq1vw8q7HwvlJI6I7D5tbZYlTm5dh5ldkDO9TdwWAEWN1JeG8-Y~4j1f5jO-UDWMXmBuCHPQhM2XmF7FE2syW9N8T6pP31wnTh5-ERbD5gkoVTdbjMM7aYJltTScGu0xh1XVoHylcMK6AiWh1BMvkjLo32kRJknmgU2uLwhqJZ7dWx4ju9UH7VZYgXd5e0tx4TeCpPCS0Uvf~vzth0xcifWwfCmLS4jz1g8MhVktnv-XYjupTkSicU6R5cHHfdPoWjH~rCQ026I9A__"
          alt="Profile Picture"
          width={50}
          height={50}
        />
        <div className="flex flex-col justify-center">
          <div className="text-xl font-medium text-black">Natasha Dabas</div>
          <p className="text-[#606060] text-sm">Member since 7 days ago</p>
        </div>
      </div>
      <hr />
      <div>
        {!ownProfile ? (
          <button className="bg-customBlue w-full text-white py-2 flex justify-center items-center my-2 rounded-md">
            <span>
              {" "}
              <LuUserPlus className="inline-block -mt-1" /> Follow{" "}
            </span>
          </button>
        ) : (
          ""
        )}
        <div className="mt-4 ">
          <div className="grid grid-cols-3 gap-4 font-semibold ">
            <div className="text-center -ml-2">
              <div className="text-lg ">0</div>
            </div>
            <div className="text-center -ml-2">
              <div className="text-lg ">72</div>
            </div>
            <div className="text-center">
              <div className="text-lg ">2</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2 text-[#005D76]">
            <div className="text-center  -ml-2">
              <div className="">Post</div>
            </div>
            <div className="text-center -ml-2">
              <div className="">Followers</div>
            </div>
            <div className="text-center">
              <div className="">Following</div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between ">
          <div>
            <span className="text-sm min-[320px]:text-center min-[360px]:text-base">
              User verified with{" "}
            </span>
          </div>
          <div>
            <span className="mx-1 min-[360px]:mx-2">🔗</span>
            <span className="mx-1 min-[360px]:mx-2">📞</span>
            <span className="mx-1 min-[360px]:mx-2">✉️</span>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-6">
          <Link
            href="/profile/edit-profile"
            className="bg-[#005D76] text-white px-4 py-2 rounded text-[13px] min-[360px]:text-base"
          >
            Edit profile
          </Link>
          <button className=" border-[#005D76] border text-[#005D76] px-4 py-2 rounded text-[13px] min-[360px]:text-base">
            Share profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
