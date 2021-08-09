import React from "react";
import { Carousel, Item, Caption, Container, Row, Col } from "react-bootstrap";
import BannerCarousel from "./BannerCarousel";
import "./Banner.css";
import { useSelector } from "react-redux";
const Banner = () => {
  const { totalData, totalHarga, totalKategori } = useSelector(
    (state) => state
  );
  return (
    <div className="bg">
      <Row>
        <Col md={8}>
          <BannerCarousel />
        </Col>

        <Col md={4}>
          <div className="total-data">
            <h4>Total Data: {totalData}</h4>
          </div>
          <div className="total-harga">
            <h4>Total Harga: Rp.{totalHarga}</h4>
          </div>
          <div className="total-kategori">
            <h4>Total Kategori Elektronik: {totalKategori}</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
