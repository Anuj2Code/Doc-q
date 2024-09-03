import React from "react";
import star from "../../../../public/star.png";
import spiral from "../../../../public/circle.png";
import Image from "next/image";
import Doc from "../../../../public/336d8e1819c7512cca52d33ab385dfa4.jpeg";

const DoctorDetails = () => {
  return (
    <div className="min-h-[100vh] bg-[#f2f7ff]">
      <div>
        <div className="bg-[#FFFFFF] w-[800px] h-[390px] relative top-8 left-8 mb-[50px] rounded-[55px]">
          <div className="flex w-[100%] items-center justify-center gap-5 pt-6 mb-4">
            <h1 className="text-[30px] font-bold">Dr. Annah Ray</h1>
            <div className="bg-gradient-to-r from-[#00FFF6] to-[#0080FF] h-[42px] w-[104px] rounded-xl flex justify-center items-center gap-3 text-white">
              <Image src={star} height={30} width={30}></Image>
              <span>5.0</span>
            </div>
            <div>
              <Image src={spiral} height={40} width={40}></Image>
            </div>
          </div>
          <div className="flex gap-12">
            <div>
              <Image
                src={Doc}
                height={288}
                width={288}
                className=" rounded-full h-[250px] w-[250px]"
              ></Image>
            </div>
            <div className="relative top-12">
              <h1 className="text-[21px]">
                <span className="font-bold text-[20px]">BDS , MDS </span> - Prosthodontist And Crown
                Bridge
              </h1>
              <h1 className="text-[21px]">Implantologist,</h1>
              <h1 className="text-[21px]">Cosmetic/Aesthetic Dentist,</h1>
              <h1 className="text-[21px]">Dental Surgeon,</h1>
              <h1 className="text-[21px]">Dentist</h1>
            </div>
          </div>
        </div>
        <div className="h-[1000px] bg-[#FFFFFF] rounded-[55px] w-[734px] relative  left-8 ">

        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DoctorDetails;
