import { twc } from "react-twc";

export const NavLabel = twc.div`bg-[#0A1F5C] text-white text-sm justify-center flex sm:justify-between px-3 py-1`;
export const NavColumn = twc.div`gap-10 hidden md:flex`;
export const NavContent = twc.div`w-full flex justify-between items-center md:px-5 py-4 px-5`;
export const NavContentLeft = twc.div`flex items-center gap-3`;
export const NavContentMiddle = twc.div`items-center gap-5 hidden lg:flex`;
export const NavContentRigth = twc.div`flex items-center gap-2 md:gap-3`;
export const SearchInput = twc.input`bg-[#F3F3F3] border-2 outline-none px-5 py-3 rounded-full w-full border-[#D9D9D9]`;