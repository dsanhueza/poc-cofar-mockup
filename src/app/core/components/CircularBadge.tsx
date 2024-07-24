import React, { FC, ReactNode } from "react";
import { twc } from "react-twc";

interface CircularBadgeI {
  text: string;
  children: ReactNode;
}

const BadgeWrap = twc.div`relative inline-flex`;
const BadgeText = twc.div`absolute inline-flex items-center 
justify-center w-6 h-6 text-xs font-medium text-white bg-[#708CC4] border-white rounded-full -top-2 -end-2`;

const CircularBadge: FC<CircularBadgeI> = ({ text, children }) => {
  return (
    <BadgeWrap>
      <BadgeText>{text}</BadgeText>
      {children}
    </BadgeWrap>
  );
};

export default CircularBadge;
