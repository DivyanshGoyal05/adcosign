import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "200px",
  borderRadius: "12px",
  margin: "10px",
};
// const slideImages = [
//   {
//     url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Slide 1",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     caption: "Slide 2",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Slide 3",
//   },
// ];

const Card = ({ item }) => {
  const {
    uname,
    shopName,
    brandType,
    phone,
    email,
    city,
    state,
    country,
    address,
    location,
    password,
    photo1,
    photo2,
    images,
    logo,
  } = item;

  const navigate = useNavigate();
  const branddetailpage = () => {
    navigate("/BrandDetails", { state: item });
  };

  let settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="">
      <div className="mx-5 max-sm:mx-0 max-md:mx-10  my-10  ">
        <div className="px-3 py-3 bg-gray-100 rounded-2xl border-2 border-gray-300 shadow-2xl">
          <div
            className="flex flex-wrap cursor-pointer  "
            onClick={branddetailpage}
          >
            <div className="flex px-4 my-5">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={logo}
                  alt="myPic"
                  className="shadow-xl w-full h-full rounded-full  "
                />
              </div>
              <div className=" mt-2 ml-10">
                <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                  {shopName}
                </h3>

                <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                  {brandType}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center"></div>
          </div>
          <div className=" py-3 border-t border-slate-200 ">
            <Carousel {...settings}>
              {images?.map((slideImage, index) => (
                <Wrap>
                  <div key={index}>
                    <div
                      style={{
                        ...divStyle,
                        backgroundImage: `url(${slideImage.url})`,
                      }}
                    ></div>
                  </div>
                </Wrap>
              ))}
            </Carousel>
          </div>

          <div className="m-3">
            <div className="flex space-x-2 p-1">
              <TiLocation size={20} />
             
              <div>{item.city + ", " + item.country}</div>
            </div>
            <div className="flex space-x-2 p-1">
              <FiPhoneCall size={20} />
              <div>{item.phone}</div>
            </div>
            <div className="flex space-x-2 p-1">
              <MdEmail size={20} />
              <div>{item.email}</div>
            </div>
          </div>

          {/* <div className=" py-5 border-t border-slate-200 ">
                <div className="flex flex-wrap justify-center">

                  <div className="flex  items-center">
                    <AiOutlineFacebook size={20} className="text-[#3b5998] " />
                    <div className="text-[#3b5998] mr-3 ml-1"></div>

                    <AiOutlineInstagram size={20} className="text-[#E4405F]" />
                    <div className="text-[#E4405F] mr-3 ml-1"></div>

                    <CiTwitter size={20} className="text-[#1DA1F2]" />
                    <div className="text-[#1DA1F2] mr-3 ml-1"></div>
                  </div>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  );
};

// const Slider = styled(Slide)`
// `;

const Carousel = styled(Slider)`
  il li button {
    &:before {
      font-size: 50px;
      color: white;
    }
  }

  .slick-list {
    overflow: hidden;
    color: white;
  }
  button {
    z-index: 1;
    color: white;
  }
  .slick-dots li button:before {
    color: white;
  }
  .slick-next {
    right: 15px;
  }
  .slick-prev {
    left: 15px;
  }
`;

const Wrap = styled.div`
  // transition-duration: 300ms;
  // &:hover {
  //   border: 4px solid rgba(249, 249, 249, 0.8);
  // }
`;

export default Card;
