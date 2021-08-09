import React from "react";
import Banner from "../../component/Banner/Banner";
import Content from "../../component/Content/Content";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Map from "../../component/Map/Map";
import Menu from "../../component/Menu/Menu";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <Content />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
