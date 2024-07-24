import React, { FC } from "react";
import { twc } from "react-twc";

interface CategoryCardI {
  children: any;
}

const CContainer = twc.div`absolute collapse opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200`;
const CCloudyChevron = twc.div`z-0 -mb-2 ml-3 h-10 w-10 origin-bottom-left rotate-45 rounded-md transform bg-white`;
const CContent = twc.div`bg-white p-10 rounded-xl flex flex-col gap-5 shadow-[0_0px_20px_5px_rgba(0,0,0,0.1)]`;

const CategoryCard: FC<CategoryCardI> = ({ children }) => {
  return (
    <CContainer>
      <CCloudyChevron />
      <CContent>{children}</CContent>
    </CContainer>
  );
};

export default CategoryCard;
