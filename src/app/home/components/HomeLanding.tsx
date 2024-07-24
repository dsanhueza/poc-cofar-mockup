import Image from "next/image";
import React from "react";
import cofarEsp from "../../assets/cofar-especialistas.png";
import usoRacional from "../../assets/uso-racional.png";

const HomeLanding = () => {
  return (
    <section>
      <div className="z-0 relative">
        <div className="grid grid-cols-3 grid-rows-1 gap-5">
          <Image className="w-full h-full col-span-2" src={cofarEsp} alt="" />
          <Image className="w-full col-span-1" src={usoRacional} alt="" />
        </div>

      </div>
    </section>
  );
};

export default HomeLanding;
