// components/ToggleSwitch.js

import { useState } from "react";

const ToggleSwitch = ({ initialOn = false }) => {
  const [isOn, setIsOn] = useState(initialOn);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`w-10 h-6 flex items-center bg-[#005D76] rounded-full p-1 cursor-pointer ${
        isOn ? "bg-[#005D76]" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          isOn ? "translate-x-4" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
