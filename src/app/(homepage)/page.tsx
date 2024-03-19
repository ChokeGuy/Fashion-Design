"use client";
import Accessories from "../components/homepage/Accessories";
import Banner from "../components/homepage/Banner";
import Collection from "../components/homepage/Collection";
import FeaturedProduct from "../components/homepage/FeaturedProduct";
import Introduction from "../components/homepage/Introduction";
import RecommendProduct from "../components/homepage/RecommendProduct";
import Service from "../components/homepage/Service";

export default function IndexPage() {
  return (
    <>
      {/* Banner Section */}
      <Banner />
      {/* Featured Products Section */}
      <FeaturedProduct />
      {/* Accessories Section */}
      <Accessories />
      {/* Collection Section */}
      <Collection />

      {/* Introduction Section */}
      <Introduction />
      {/* Recommend Product Section */}
      <RecommendProduct />
      {/* Service Section */}
      <Service />
    </>
  );
}
