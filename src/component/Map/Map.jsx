import React from "react";
import "./Map.css";
const Map = () => {
  return (
    <div className="bg-map">
      <div className="text-map">
        <h1>Map</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          itaque aliquid tenetur quis veniam! Cumque mollitia incidunt
          cupiditate saepe, doloremque explicabo ullam omnis commodi
          consequuntur dicta culpa eveniet blanditiis nisi.
        </p>
      </div>
      <div>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.2181755963015!2d105.29374391412972!3d-5.383676655332837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dac03d097843%3A0x6bb59f4ba9a84e8c!2sPT.MICRODATA%20INDONESIA%20%7C%20SOFTWARE%20DEVELOPER!5e0!3m2!1sid!2sid!4v1628078464316!5m2!1sid!2sid"
          width={1080}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Map;
