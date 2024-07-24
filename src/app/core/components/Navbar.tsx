import Image from "next/image";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import cofarBrand from "../../assets/cofar-logo.png";
import cofarPlusIcon from "../../assets/cofar-plus-icon.png";
import IconWrapper from "./IconWrapper";
import CircularBadge from "./CircularBadge";
import {
  NavColumn,
  NavContent,
  NavContentLeft,
  NavContentMiddle,
  NavContentRigth,
  NavLabel,
  SearchInput,
} from "../styled/Navbar.styled";

const Navbar = () => {
  return (
    <nav>
      <NavLabel>
        <p>Aprovecha nuestros despachos: 24HRS en la RM</p>
        <NavColumn>
          <p>Información Toxicológica</p>
          <p>MINSAL +569 999 999 99</p>
        </NavColumn>
      </NavLabel>
      <NavContent>
        <NavContentLeft>
          <IconWrapper icon={<RxHamburgerMenu />} />
          <Image src={cofarBrand} alt="" />
        </NavContentLeft>

        <NavContentMiddle>
          <SearchInput placeholder="Buscar medicamentos" type="text" />
          <IconWrapper icon={<CiSearch />} />
        </NavContentMiddle>

        <NavContentRigth>
          <IconWrapper icon={<CiUser />} />
          <CircularBadge text="4">
            <IconWrapper icon={<CiShoppingCart />} />
          </CircularBadge>

          <IconWrapper
            icon={<Image className="min-w-16" src={cofarPlusIcon} alt="" />}
          />
        </NavContentRigth>
      </NavContent>
    </nav>
  );
};

export default Navbar;
