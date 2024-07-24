import React from "react";
import { twc } from "react-twc";

const Wrapper = twc.div`bg-white font-bold border-[#E6E6E6] border-2 text-3xl rounded-full p-2 text-[#7C7C7C] cursor-pointer`;

const IconWrapper = ({ icon }: any) => {
  return <Wrapper>{icon}</Wrapper>;
};

export default IconWrapper;
