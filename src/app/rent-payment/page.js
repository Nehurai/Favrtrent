"use client";
import { useState } from "react";
import Modal from "../components/Model/Modal";
function RentPayment() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <h1 className="text-[#005D76] text-3xl flex items-center justify-center my-auto bg-[#005D760D] h-20 ">
        Payments
      </h1>
      <div className="w-[90%] sm:w-[85%] mx-auto">
        <button className="my-4 text-[#938E8E]">&larr; Back</button>

        <div className="border rounded-md py-4 px-6 text-xl">
          <h6 className="text-[#938E8E] text-sm">Product Details (1 Item)</h6>
          <div className="flex justify-between my-3 ">
            <span>Total MRP</span>{" "}
            <span className="text-customBlue font-semibold">₹10,699.00</span>
          </div>
          <div className="flex justify-between my-3">
            <span>Was used</span> <span>3 months</span>
          </div>
          <div className="flex justify-between my-3">
            <span>Rent Price</span>{" "}
            <span className="text-customBlue font-semibold">₹5699/mo</span>
          </div>
          <div className="flex justify-center my-5">
            <button
              className="py-3 px-2 bg-customBlue text-white text-base rounded-md"
              onClick={() => setShowModal(true)}
            >
              Pay for taking on rent{" "}
            </button>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalContentType="Payment1"
      />
    </>
  );
}

export default RentPayment;
