import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import StarIcon from "@mui/icons-material/Star";
import { product1 } from "@/src/assests";
import { responsive2 } from "@/src/utils/carouselResponsive";
import Image from "next/image";

export default function RecommendProduct() {
  const [product, setProduct] = useState([
    {
      productId: 1,
      active: "red",
    },
    {
      active: "red",
      productId: 2,
    },
    {
      active: "red",
      productId: 3,
    },
    {
      active: "red",
      productId: 4,
    },
    {
      active: "red",
      productId: 5,
    },
  ]);
  // Implement the FeaturedProduct component logic here
  const products = [1, 2, 3, 4, 5];
  return (
    <section className="lg:container mt-0 md:mt-16 transition-all">
      {/* title */}
      <div className="flex justify-between items-start max-lg:flex-col gap-x-32 gap-y-1 p-4">
        <h2 className="text-lg md:text-3xl font-medium lg:flex-[0_0_35%] lg:max-w-[35%] transition-all">
          Recommended Products
        </h2>
        <p className="text-sm md:text-lg text-left transition-all text-text-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div className="pb-4 md:pb-12">
        <Carousel
          swipeable={true}
          draggable={false}
          // ssr={true}
          responsive={responsive2}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["mobile"]}
          arrows={true}
          deviceType={"desktop"}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {products &&
            products.map((p) => (
              <div
                className="relative hover:cursor-pointer group animate-fadeIn"
                key={p}
              >
                <div className="group-hover:shadow-md transition-all">
                  <div className="relative">
                    <Image
                      width={300}
                      height={300}
                      className="size-full"
                      src={product1}
                      alt="product"
                    />
                    <div
                      className="absolute bottom-2 mx-3 left-0 right-0 group-hover:animate-appearFromBottom bg-background
                     p-2 opacity-0 rounded-lg text-center hover:bg-secondary-color hover:text-white transition-all"
                    >
                      Thêm vào giỏ hàng
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-80 py-3 px-2 space-y-2">
                    <div className="flex gap-x-2 items-center">
                      {["red", "pink", "green"].map((color, i) => {
                        return (
                          <div
                            onClick={() =>
                              setProduct((prevProducts) =>
                                prevProducts.map((prevProduct) =>
                                  prevProduct.productId === p
                                    ? { ...prevProduct, active: color }
                                    : prevProduct
                                )
                              )
                            }
                            className={`rounded-full border p-0.5 ${
                              product[p - 1].active === color
                                ? "bg-white border-black"
                                : "bg-white border-border-color"
                            }`}
                          >
                            <div
                              key={color}
                              className="rounded-full size-5"
                              style={{ backgroundColor: `${color}` }}
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <StarIcon className="fill-yellow-400 size-5" />
                      <span className="text-sm font-medium">1 review</span>
                    </div>
                    <h3 className="text-sm md:text-base font-normal truncate">
                      Long Sleeve Sweatshirt Dress
                    </h3>
                    <div className="flex items-center gap-x-2">
                      {true && (
                        <p className="text-base font-light line-through text-text-light-color">
                          $37.50
                        </p>
                      )}
                      <p className={`text-base font-medium`}>$26.50</p>
                    </div>
                  </div>
                </div>
                <label
                  className="absolute top-2 left-2 text-secondary-color text-ssm 
              font-bold text-center bg-white px-2 py-0.5 rounded-sm"
                >
                  28%
                </label>
              </div>
            ))}
        </Carousel>
      </div>
      <div className="mx-4 border-b border-border-color"></div>
    </section>
  );
}
