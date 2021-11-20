import React from "react";
import Footer from "../../Shered/Footer/Footer";
import Nevigation from "../../Shered/Nevigation/Nevigation";
import Banner from "../Banner/Banner";
import HomeProducts from "../HomeProducts/HomeProducts";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Nevigation />
      <Banner />
      <HomeProducts />
      <Reviews />
      <Footer />
      {/* <AppointmentBanner /> */}
    </div>
  );
};

export default Home;
