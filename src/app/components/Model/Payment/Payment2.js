import React from "react";

export default function Payment2() {
  return (
    <>
      <div className="h-68 bg-[#F2F7F8]">
        <p className="text-center font-semibold py-6">Pay with UPI QR</p>
        <div className="flex gap-4 ">
          <img
            src="/Images/qrcode.png"
            alt=""
            width={169}
            className="mx-auto w-[160px] h-[150px] object-cover  mb-10"
          />
          <div className="text-[#606060]">
            <p>Scan the QR using any UPI app on your phone. </p>
            <div className="flex gap-2 my-2">
              <img src="/Images/image 10.png" alt="" />
              <img src="/Images/image 11.png" alt="" />
              <img src="/Images/image 12.png" alt="" />
              <img src="/Images/image 13.png" alt="" />
            </div>
            {/* <img
              className="w-10"
              src="https://s3-alpha-sig.figma.com/img/718c/2d69/e1650260d6f0a33b13d38d693f2a12c9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4a9IyiBP6KzPg0g56~w8uvYjFivV-IqX68TYBK0bcgFi-jwxnIBoeVMKZgG3qqsjuIsosY-LOXSQNJhwLo8-5ToCQFP2b7z5K0G44m3udg5LDRCj0nN~vtL94cWKPE8~Bax3M3-QPcLrjU0K7pKmCKmqkKEg6CjEBb1JaOwb99C8UOdfxgeCJUuKYtPe~dD5oZioJNUBNx8sb-ylYCbS3ai-YPAL2gUiCB-yK5nC8-VukElLsDlEn0ZbL88jl1LAnOz1yOECS0YGfV2gF78GdIK7NtDFgXuj8h8kqf3mwZyP17Pi43nf7WC5yUzZJdYWlMh9AoY26-f6UrJ-dzBRQ__"
              alt=""
            /> */}
            <p>
              QR code is valid for{" "}
              <span className="text-customBlue font-medium">11:53</span>{" "}
              minutes.
            </p>
            <p className="text-customBlue text-xl font-semibold my-2">
              ₹5,699.00
            </p>
          </div>
        </div>
      </div>
      <p className="text-center font-semibold my-6">UPI , Cards & More</p>
      <div className="my-4">
        <div className="flex justify-between items-center p-3 border rounded-md my-3">
          <span className="flex items-center gap-3">
            {" "}
            <img src="/Images/image 14.png" alt="" className="" /> UPI/QR
          </span>{" "}
          <span>
            {" "}
            <img
              src="https://s3-alpha-sig.figma.com/img/1a51/d86a/f0576d38ff05355494fa591c879cc037?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aAP0uI3kH-hwhBwpmCBm0-FjfFHRXtjVtKXxqvOue1yoeAfiKihEgyWROis9bQDQnyVtPqhCkcUXsaix9M3kBiVOK-jCPm16SYVmDH-Jf-QDYSCq9iKrr0NztuNqWoAdoRlwkjwhnc0UMaoT~yLNal8jqAIKvWZEcamYI~-PUj4PLuL0zT-DnV0DbS4oykpqFaU7rCJgAz-XqoPSBtDAkMMS71hhj3tvtdrtqDwxE5lfiNUxhTlt2wJufx55lp9oT4vkaoH5gVVPz8zpuCS743f4pnSOHXSPe3EM6OT-nv8S9Fd2JNPsEqi-Iexyq~poZGNd3dWFhDHtKsKMO4HDXg__"
              alt=""
              className="h-7"
            />
          </span>{" "}
        </div>

        <div className="flex justify-between items-center p-3 border rounded-md my-3">
          <span className="flex items-center gap-3">
            {" "}
            <img src="/Images/image 15.png" alt="" className="" /> Card
          </span>{" "}
          <span>
            <img
              src="https://s3-alpha-sig.figma.com/img/1a51/d86a/f0576d38ff05355494fa591c879cc037?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aAP0uI3kH-hwhBwpmCBm0-FjfFHRXtjVtKXxqvOue1yoeAfiKihEgyWROis9bQDQnyVtPqhCkcUXsaix9M3kBiVOK-jCPm16SYVmDH-Jf-QDYSCq9iKrr0NztuNqWoAdoRlwkjwhnc0UMaoT~yLNal8jqAIKvWZEcamYI~-PUj4PLuL0zT-DnV0DbS4oykpqFaU7rCJgAz-XqoPSBtDAkMMS71hhj3tvtdrtqDwxE5lfiNUxhTlt2wJufx55lp9oT4vkaoH5gVVPz8zpuCS743f4pnSOHXSPe3EM6OT-nv8S9Fd2JNPsEqi-Iexyq~poZGNd3dWFhDHtKsKMO4HDXg__"
              alt=""
              className="h-7"
            />
          </span>{" "}
        </div>

        <div className="flex justify-between items-center p-3 border rounded-md my-3">
          <span className="flex items-center gap-3">
            {" "}
            <img src="/Images/image 16.png" alt="" className="" /> Netbanking
          </span>{" "}
          <span>
            <img
              src="https://s3-alpha-sig.figma.com/img/1a51/d86a/f0576d38ff05355494fa591c879cc037?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aAP0uI3kH-hwhBwpmCBm0-FjfFHRXtjVtKXxqvOue1yoeAfiKihEgyWROis9bQDQnyVtPqhCkcUXsaix9M3kBiVOK-jCPm16SYVmDH-Jf-QDYSCq9iKrr0NztuNqWoAdoRlwkjwhnc0UMaoT~yLNal8jqAIKvWZEcamYI~-PUj4PLuL0zT-DnV0DbS4oykpqFaU7rCJgAz-XqoPSBtDAkMMS71hhj3tvtdrtqDwxE5lfiNUxhTlt2wJufx55lp9oT4vkaoH5gVVPz8zpuCS743f4pnSOHXSPe3EM6OT-nv8S9Fd2JNPsEqi-Iexyq~poZGNd3dWFhDHtKsKMO4HDXg__"
              alt=""
              className="h-7"
            />
          </span>{" "}
        </div>
        <p className="text-customBlue text-center text-lg font-semibold">
          ₹5,699.00
        </p>
        <button className="w-full flex justify-center bg-customBlue text-white py-3 rounded-md mt-4">
          Pay Now{" "}
        </button>
      </div>
    </>
  );
}
