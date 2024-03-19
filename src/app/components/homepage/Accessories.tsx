import { accessories, product1 } from "@/src/assests";
import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import EastIcon from "@mui/icons-material/East";
const Accessories = () => {
  const [product, setProduct] = React.useState([
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
  ]);
  // Implement the FeaturedProduct component logic here
  const products = [1, 2, 3, 4];
  return (
    <section className="lg:container">
      <div className="">
        <div className="px-0 lg:px-4">
          <Image
            width={1230}
            height={900}
            className="w-full h-56 md:h-64 object-cover xl:h-96 transition-all"
            src={accessories}
            alt="Accessories"
          ></Image>
        </div>
        <div className="grid gap-y-4 gap-x-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-4 py-8">
          {products &&
            products.map((p) => (
              <div
                className={`relative hover:cursor-pointer group animate-fadeIn ${
                  p === 4 ? "md:hidden xl:block" : "block"
                }`}
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
        </div>
        <div className="grid place-items-center pb-12 border-b border-border-color mx-4">
          <button className=" bg-black text-white py-3 px-8 rounded-lg hover:bg-primary-color flex items-center gap-x-2">
            <span>Xem thêm</span>
            <EastIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
