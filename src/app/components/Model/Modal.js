"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import backBtn from "../../../../public/Images/back.png";
import ContactOwner from "./ContactOwner";
import Confirm from "./Confirm";
import OtpForm from "./OtpForm";
import TipForDeal from "./TipForDeal";
import Login from "./Login/Login";
import LoginWithEmail from "./Login/LoginWithEmail";
import LoginWithPhone from "./Login/LoginWithPhone";
import Message from "./Message";
import Payment1 from "./Payment/Payment1";
import Payment2 from "./Payment/Payment2";

const Modal = ({ showModal, setShowModal, modalContentType }) => {
  // useState
  const [modalContent, setModalContent] = useState(
    modalContentType || "ContactOwner"
  );
  // const [modalContent, setModalContent] = useState("Login");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModalContent("Confirm");
  };

  const handleConfirm = (e) => {
    setModalContent("OtpForm");
  };

  const handleOtpSubmit = (e) => {
    setModalContent("TipForDeal");
  };

  const handleLogin = (lType) => {
    lType === "phone"
      ? setModalContent("LoginWithPhone")
      : setModalContent("LoginWithEmail");
  };
  const handleLoginWithEmail = () => {
    setModalContent("LoginWithEmail");
  };
  const handleLoginWithPhone = () => {
    setModalContent("LoginWithPhone");
  };
  const handlePayment = () => {
    setModalContent("Payment2");
  };
  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50  overflow-y-scroll">
        <div className="relative p-4 w-full max-w-lg max-h-full">
          <div className="relative bg-white  ">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4   rounded-t ">
              <Image src={backBtn} alt="<" className="h-4  " />
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="authentication-modal"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 pt-0 ">
              {/* <Login /> */}
              {/* <LoginWithEmail /> */}
              {/* <LoginWithPhone /> */}
              {/* <Message /> */}
              {/* <Payment1 /> */}
              {/* <Payment2 /> */}
              {(() => {
                switch (modalContent) {
                  case "ContactOwner":
                    return <ContactOwner handleFormSubmit={handleFormSubmit} />;
                  case "Confirm":
                    return <Confirm handleConfirm={handleConfirm} />;
                  case "OtpForm":
                    return <OtpForm handleOtpSubmit={handleOtpSubmit} />;
                  case "TipForDeal":
                    return <TipForDeal />;
                  case "Login":
                    return <Login handleLogin={handleLogin} />;
                  case "LoginWithEmail":
                    return (
                      <LoginWithEmail
                        handleLoginWithEmail={handleLoginWithEmail}
                      />
                    );
                  case "LoginWithPhone":
                    return (
                      <LoginWithPhone
                        handleLoginWithPhone={handleLoginWithPhone}
                      />
                    );
                  case "Payment1":
                    return <Payment1 handlePayment={handlePayment} />;
                  case "Payment2":
                    return <Payment2 />;
                  // case "ModalData3":
                  //   return <OtpForm handleOtpSubmit={handleOtpSubmit} />;

                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
