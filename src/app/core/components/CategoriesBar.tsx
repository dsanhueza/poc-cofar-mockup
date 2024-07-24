import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { CategoryBarItem } from "../interfaces/categorybar-item.interface";
import SubCategoryItem from "./SubCategoryItem";
import { twc } from "react-twc";
import CategoryCard from "./CategoryCard";

const categories: CategoryBarItem[] = [
  {
    id: 111,
    name: "Medicamentos",
    url: "",
    children: [
      {
        id: 1,
        name: "Cardiovascular",
        url: "",
        children: [
          {
            id: 11,
            name: "Antiarrítmicos",
            url: "",
            children: [],
          },
          {
            id: 12,
            name: "Anticoagulantes",
            url: "",
            children: [],
          },
          {
            id: 13,
            name: "Antiplaquetarios/Infarto",
            url: "",
            children: [],
          },
          {
            id: 14,
            name: "Colesterol",
            url: "",
            children: [],
          },
          {
            id: 15,
            name: "Hipertensión Arterial",
            url: "",
            children: [],
          },
          {
            id: 16,
            name: "Otros",
            url: "",
            children: [],
          },
        ],
      },
      { id: 2, name: "Dermatológicos", url: "", children: [] },
      { id: 3, name: "Antiinfecciosos", url: "", children: [] },
      { id: 4, name: "Fertilidad", url: "", children: [] },
      { id: 5, name: "Enfermedades Esp.", url: "", children: [] },
      { id: 6, name: "Diabetes", url: "", children: [] },
      { id: 7, name: "Gastrointestinal", url: "", children: [] },
      { id: 8, name: "Dolor y analgésicos", url: "", children: [] },
    ],
  },
  {
    id: 112,
    name: "Dermo",
    url: "",
    children: [
      { id: 1, name: "Diabetes", url: "", children: [] },
      { id: 2, name: "Gastrointestinal", url: "", children: [] },
      { id: 3, name: "Dolor y analgésicos", url: "", children: [] },
    ],
  },
  { id: 113, name: "Suplementos y Vitaminas", url: "", children: [] },
  { id: 114, name: "Dispositivos", url: "", children: [] },
  { id: 115, name: "Contigo", url: "", children: [] },
];

const CList = twc.div`relative z-50 list-none pl-20 items-start gap-4 py-3 hidden lg:flex`;
const CListItem = twc.div`group relative`;
const CFrontButton = twc.div`text-[#97A3B7] cursor-pointer flex items-center gap-2 uppercase font-medium text-sm`;
const CCardTitle = twc.div`text-[#97A3B7] uppercase font-medium text-sm`;
const CCardContent = twc.div`flex justify-between gap-4`;
const CContentColumn = twc.div`flex flex-col gap-3`;

const CategoriesBar = () => {
  const booleano = true;

  return (
    <CList>
      {categories.map((category) => (
        <CListItem key={category.id}>
          <CFrontButton>
            {category.name}
            <FaChevronDown />
          </CFrontButton>
          <CategoryCard>
            <CCardTitle>{category.name}</CCardTitle>
            <CCardContent>
              <CContentColumn>
                {category.children.map(
                  (subCategory, index) =>
                    index < 4 && (
                      <SubCategoryItem
                        key={subCategory.id}
                        category={subCategory}
                      />
                    )
                )}
              </CContentColumn >
              <CContentColumn>
                {category.children.map(
                  (subCategory, index) =>
                    index >= 4 && (
                      <SubCategoryItem
                        key={subCategory.id}
                        category={subCategory}
                      />
                    )
                )}
              </CContentColumn>
            </CCardContent>
          </CategoryCard>
        </CListItem>
      ))}
    </CList>
  );
};

export default CategoriesBar;
