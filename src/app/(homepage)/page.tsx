"use client";
import Accessories from "../components/homepage/Accessories";
import Banner from "../components/homepage/Banner";
import FeaturedProduct from "../components/homepage/FeaturedProduct";

export default function IndexPage() {
  return (
    <>
      {/* Banner Section */}
      <Banner />
      {/* Featured Products Section */}
      <FeaturedProduct />
      <Accessories/>
    </>
  );
}
