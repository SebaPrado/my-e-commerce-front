import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Product from "../Product";
import video from "../../assets/vinyl-video-1920x1080.mp4";
import { notify } from "../../notify";

import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: `GET`,
        url: `${import.meta.env.VITE_API_URL}/products`,
      });
      setProductList(response.data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: `GET`,
        url: `${import.meta.env.VITE_API_URL}/categories`,
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  const handleToast = () => {
    notify("This feature is not within the scope of the project.");
  };

  return (
    <>
      <Link to="about">
        <button className="button-to-about">ABOUT THIS PROJECT</button>
      </Link>

      {/* =====================================     ↓ ↓ ↓ ↓ ↓    Hero     ↓ ↓ ↓ ↓ ↓    ====================================== */}

      <div className="video-player-container">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="video-play"
          playsInline
        ></video>
        <img
          src="/img/equal-vision-logo.webp"
          alt="Equal Vision Records Logo"
          itemProp="logo"
          className="overlay-image"
        ></img>
      </div>

      {/* =====================================     ↑ ↑ ↑ ↑ ↑    Hero     ↑ ↑ ↑ ↑ ↑    ====================================== */}

      {/* =====================================     ↓ ↓ ↓ ↓ ↓    New Releases      ↓ ↓ ↓ ↓ ↓    ====================================== */}

      <section>
        <h2 className="text-center space-letter  newReleasesH2">
          {" "}
          New Releases{" "}
        </h2>
        <div className="newreleasesText">
          <p>
            Discover the freshest sounds and timeless classics on vinyl! From
            groundbreaking indie anthems to the smoothest jazz and the
            hardest-hitting rock, our New Releases section is packed with albums
            that will ignite your passion for music.
          </p>
        </div>

        <div className="container py-1 ">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 5,
              },
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            // slidesPerView={3}
            loop={false}
            // autoplay={{
            //   delay: 50,
            //   disableOnInteraction: true,
            // }}
            speed={1000}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 10,
              modifier: -0.8,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper pb-5"
          >
            {productList
              .filter((product) => product.featured === true)
              .map((product) => (
                <SwiperSlide
                  className="swiperSlide mb-5 very-small-hover glass-black "
                  key={product.id}
                >
                  <Product product={product} featured={true} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>

      {/* =====================================     ↑ ↑ ↑ ↑ ↑    New Releases       ↑ ↑ ↑ ↑ ↑    ====================================== */}

      <div className="container mt-5">
        <hr />
      </div>

      {/* =====================================     ↓ ↓ ↓ ↓ ↓    relleno     ↓ ↓ ↓ ↓ ↓    ====================================== */}

      <section>
        <h2 className="text-center space-letter  newReleasesH2">Our story</h2>
        <div className="ourStoryContainer">
          <div className="ourStoryText">
          <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              ipsa perspiciatis molestias accusantium recusandae, quidem
              accusamus debitis aperiam laboriosam culpa aspernatur, ipsum ullam
              ab magnam sint explicabo commodi? Amet, facere!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              at fugiat nihil quidem aperiam qui veritatis impedit? Laudantium
              nulla blanditiis culpa et voluptatum, ratione nisi, vero pariatur
              dolore eum iusto?
            </p>
          </div>
          <div className="ourStoryImage">
           
          </div>
        </div>
      </section>
      {/* =====================================     ↑ ↑ ↑ ↑ ↑   relleno        ↑ ↑ ↑ ↑ ↑    ====================================== */}

      {/* =====================================     ↓ ↓ ↓ ↓ ↓    Shop by Category     ↓ ↓ ↓ ↓ ↓    ====================================== */}

      <section id="shop-by-category" className="mt-5 mb-5 ">
        <h2 className="text-center space-letter mb-3">SHOP BY CATEGORY</h2>

        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={5}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
            loop={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{ clickable: true }}
            className=" pb-4"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="px-5 py-5 shop-category-img very-small-hover">
                  <Link
                    to={`products/categories/${category.id}`}
                    className="text-decoration-none"
                  >
                    <div className="card ">
                      <img
                        src={`${import.meta.env.VITE_IMG_URL}/categories/${
                          category.image
                        }`}
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body text-center fw-bold">
                        <span className="text-uppercase">{category.name}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =====================================     ↑ ↑ ↑ ↑ ↑    Shop by Category     ↑ ↑ ↑ ↑ ↑    ====================================== */}

      <div className="container mt-5">
        <hr />
      </div>

      {/* =====================================     ↓ ↓ ↓ ↓ ↓    News     ↓ ↓ ↓ ↓ ↓    ====================================== */}

      <section id="news" className="mt-5 mb-5">
        <h2 className="text-center space-letter mb-3">NEWS</h2>
        <div className="container">
          <div className="row justify-content-center mt-4 g-4">
            <div className="col-md-6 col-lg-4 " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover">
                  <img className="img-fluid" src={`/img/news-1.webp`} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Apr 15, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    YELLOWCARD RELEASE 'A HOPEFUL SIGN' ALBUM WITH HAMMOCK
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4 " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover">
                  <img className="img-fluid" src={"/img/news-2.webp"} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Mar 07, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    NIGHT VERSES ANNOUNCE PART 2 OF 'EVERY SOUND HAS A COLOR IN
                    THE VALLEY OF NIGHT'
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4 " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover">
                  <img className="img-fluid" src={`/img/news-3.webp`} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Feb 28, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    PICTURESQUE PREMIERE NEW SINGLE “CRIMES” WITH ALTERNATIVE
                    PRESS
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4 " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover">
                  <img className="img-fluid" src={`/img/news-4.webp`} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Jan 25, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    CALLING ALL CAPTAINS RELEASE NEW SINGLE & VIDEO, “UNDONE”
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4 " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover">
                  <img className="img-fluid " src={`/img/news-5.webp`} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Jan 12, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    ANBERLIN RELEASE NEW EP, ‘SILVERLINE’
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================     ↑ ↑ ↑ ↑ ↑    News     ↑ ↑ ↑ ↑ ↑    ====================================== */}
    </>
  );
}

export default Home;
