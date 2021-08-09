import React, { Component } from "react";
import Slider from "react-slick";
import "./Content.css";
// let photos = [
//   {
//     title: "photo1",
//     url: "https://www.youtube.com/watch?v=5kHyviqjhCk",
//   },
//   {
//     title: "photo1",
//     url: "https://www.youtube.com/watch?v=5kHyviqjhCk",
//   },
//   {
//     title: "photo1",
//     url: "https://www.youtube.com/watch?v=5kHyviqjhCk",
//   },
//   {
//     title: "photo1",
//     url: "https://www.youtube.com/watch?v=5kHyviqjhCk",
//   },
//   {
//     title: "photo1",
//     url: "https://www.youtube.com/watch?v=5kHyviqjhCk",
//   },
// ];

export default class Content extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      // dots: true,
      // infinite: true,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 2000,
      // cssEase: "linear",
    };
    return (
      <div className="bg-content">
        <div className="text-yt">
          <h3>Youtube</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            consequatur voluptatem delectus placeat! Ullam quibusdam eligendi
            facere eveniet laboriosam, consectetur accusantium laborum
            consequatur? Deleniti, soluta voluptatibus iusto esse nisi ea!
          </p>
        </div>
        <br />
        <Slider {...settings}>
          {/* {photos.map((photo) => {
            return (
              <div>
                <img className="isi-content" src={photo.url} />
              </div>
            );
          })} */}

          <div>
            <iframe
              width="700"
              height="400"
              margin-left={50}
              src="https://www.youtube.com/embed/1tecXLTNMA0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/1tecXLTNMA0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/1tecXLTNMA0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/1tecXLTNMA0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Slider>
      </div>
    );
  }
}
