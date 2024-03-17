import { banner1 } from "@/src/assests";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="container">
      <div className="w-full">
        <Image className="shadow-sm" alt="banner-img" src={banner1}></Image>
      </div>
      {/* Add your banner content here */}
    </section>
  );
};

export default Banner;
