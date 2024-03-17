import { product1 } from "@/src/assests";
import Image from "next/image";
import React from "react";

interface FeaturedProductProps {
  // Define the props for the FeaturedProduct component here
}

const FeaturedProduct = () => {
  // Implement the FeaturedProduct component logic here
  const products = [1, 2, 3, 4];
  return (
    <section className="lg:container mt-0 md:mt-16 mb-9 transition-all">
      {/* title */}
      <div className="flex justify-between items-start max-lg:flex-col gap-x-32 gap-y-1 p-4">
        <h2 className="text-lg md:text-3xl font-medium lg:flex-[0_0_35%] lg:max-w-[35%] transition-all">
          Featured Products
        </h2>
        <p className="text-sm md:text-lg text-left transition-all text-text-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 p-4">
        {products &&
          products.map((product) => (
            <div className="relative" key={product}>
              <div>
                <Image
                  width={300}
                  height={300}
                  className="size-full"
                  src={product1}
                  alt="product"
                />
                <div className="bg-white bg-opacity-80 p-2">
                  <h3 className="text-sm md:text-lg font-medium">
                    Product Name
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
    </section>
  );
};

export default FeaturedProduct;
