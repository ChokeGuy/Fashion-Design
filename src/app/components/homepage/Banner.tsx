import { banner1 } from "@/src/assests";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { MyArrowNext, MyArrowPrev } from "../Arrows";
import { MyIndicator } from "../Indicator";

const Banner = () => {
  const [arrows, setArrowsStatus] = useState(false);

  return (
    <section className="xl:px-[6.25rem]">
      <div
        onMouseEnter={() => setArrowsStatus(true)} // Added line
        onMouseLeave={() => setArrowsStatus(false)} // Added line
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          showArrows={false} // Modified line
          renderArrowPrev={arrows ? MyArrowPrev : undefined}
          renderArrowNext={arrows ? MyArrowNext : undefined}
          renderIndicator={MyIndicator}
        >
          <article>
            <div className="relative">
              <Image
                className="shadow-sm w-full min-h-56"
                alt="banner-img"
                src={banner1}
              ></Image>
            </div>
            <div
              className="absolute bottom-[10%] md:bottom-[20%] lg:bottom-[30%] xl:bottom-[35%]
             left-[5.5%] flex flex-col items-start gap-y-4 text-text-color transition-all duration-300 ease-in-out"
            >
              <h1 className="font-bold text-ssm uppercase">
                Winter Collection 2024
              </h1>
              <p className="text-4xl md:text-6xl lg:text-7xl capitalize flex flex-col text-left font-medium md:font-light">
                <span>Valentin Paul</span>
                <span>Essential Collection</span>
              </p>
              <button className="my-button w-32 hover:bg-primary-color ">
                Xem thêm
              </button>
            </div>
          </article>
          <article>
            <div className="relative ">
              <Image
                className="shadow-sm w-full min-h-56"
                alt="banner-img"
                src={banner1}
              ></Image>
            </div>
            <div
              className="absolute bottom-[10%] md:bottom-[20%] lg:bottom-[30%] xl:bottom-[35%]
             left-[5%] flex flex-col items-start gap-y-4 text-text-color transition-all duration-300 ease-in-out"
            >
              <h1 className="font-bold text-ssm uppercase">
                Winter Collection 2024
              </h1>
              <p className="text-4xl md:text-6xl lg:text-7xl capitalize flex flex-col text-left font-light">
                <span>Valentin Paul</span>
                <span>Essential Collection</span>
              </p>
              <button className="my-button w-32 hover:bg-primary-color ">
                Xem thêm
              </button>
            </div>
          </article>
          <article>
            <div className="relative ">
              <Image
                className="shadow-sm w-full min-h-56"
                alt="banner-img"
                src={banner1}
              ></Image>
            </div>
            <div
              className="absolute bottom-[10%] md:bottom-[20%] lg:bottom-[30%] xl:bottom-[35%]
             left-[5%] flex flex-col items-start gap-y-4 text-text-color transition-all duration-300 ease-in-out"
            >
              <h1 className="font-bold text-ssm uppercase">
                Winter Collection 2024
              </h1>
              <p className="text-4xl md:text-6xl lg:text-7xl capitalize flex flex-col text-left font-light">
                <span>Valentin Paul</span>
                <span>Essential Collection</span>
              </p>
              <button className="my-button w-32 hover:bg-primary-color ">
                See more
              </button>
            </div>
          </article>
        </Carousel>
      </div>
    </section>
  );
};

export default Banner;
