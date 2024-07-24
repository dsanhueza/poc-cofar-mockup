"use client";

import React, { FC, useState } from "react";
import { CategoryBarItem } from "../interfaces/categorybar-item.interface";
import { FaChevronDown } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { twc } from "react-twc";

interface SubCategoryItemI {
  category: CategoryBarItem;
}

const SCItemContainer = twc.div`flex gap-2`;
const SCItemColumn = twc.div`flex flex-col`;
const SListButton = twc.button`cursor-pointer whitespace-nowrap flex flex-row items-center gap-2 text-md text-[#111B29] font-medium`;
const SListDropdown = twc.div`flex flex-col gap-1 mt-2 transition-all duration-100`;
const SLink = twc.div`text-sm text-[#677489]`;

const SubCategoryItem: FC<SubCategoryItemI> = ({ category }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <SCItemContainer>
      <GiMedicinePills className="text-xl text-[#3448FF]" />
      <SCItemColumn>
        <SListButton onClick={() => setActive(!active)}>
          {category.name}
          <FaChevronDown />
        </SListButton>
        <SListDropdown className={`${active ? "h-36" : "h-0"}`}>
          {category.children.map((subCategory) => (
            <SLink className={`${active ? "" : "hidden"}`} key={subCategory.id}>
              {subCategory.name}
            </SLink>
          ))}
        </SListDropdown>
      </SCItemColumn>
    </SCItemContainer>
  );
};

export default SubCategoryItem;
