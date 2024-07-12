import Image from "next/image";
import Blogs_empty from "../../../../public/Images/Blogs_empty.png";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-4">
        <Image src={Blogs_empty} />
      </div>
      <h2 className="text-xl font-semibold">You havent listed anything yet</h2>
      <p className="text-[#606060] text-sm">
        Let go of what you dont use anymore
      </p>
      <button className="my-6 bg-[#005D76] text-white px-4 py-2 rounded">
        Add post
      </button>
    </div>
  );
};

export default EmptyState;
