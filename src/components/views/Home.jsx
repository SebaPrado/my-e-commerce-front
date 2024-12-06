import { useEffect, useState, useRef } from "react";
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

  // ==========================================================================   //

  const titleRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Crear referencias para los títulos
  const [isVisible, setIsVisible] = useState([false, false, false, false]); // Estado para visibilidad de los cuatro títulos

  const projectRef = useRef(null);
  const [projectVisible, setProjectVisible] = useState(false); // Estado para visibilidad

  const [offset, setOffset] = useState(0); // Estado para el desplazamiento del div

  useEffect(() => {
    const handleScroll = () => {
      titleRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            if (
              index === 3 &&
              !newVisibility[index] &&
              rect.top < window.innerHeight &&
              rect.bottom > 0
            ) {
              newVisibility[index] = true; // Solo se activa una vez para el título 3
            } else if (index !== 3) {
              newVisibility[index] =
                rect.top < window.innerHeight && rect.bottom > 0; // Para los otros títulos
            }
            return newVisibility;
          });
        }
      });
      if (projectRef.current) {
        const rect = projectRef.current.getBoundingClientRect();
        setProjectVisible(rect.top < window.innerHeight && rect.bottom > 0); // Verificar si está en vista
      }

      // Verificar si roomContainer1 está en vista
      if (titleRefs[3].current) {
        const rect = titleRefs[3].current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const newOffset = Math.min(55, (window.innerHeight - rect.top) / 10); // Calcular desplazamiento
          setOffset(newOffset); // Actualizar el estado del desplazamiento
        } else {
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==========================================================================   //

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
      {/* <div className="container">
        <hr />
      </div> */}
      {/* =====================================     ↓ ↓ ↓ ↓ ↓    New Releases      ↓ ↓ ↓ ↓ ↓    ====================================== */}

      <section className="mt-5">
        {/* <div className=" mb-5 swiperSlide" ref={projectRef}>
          <h2
            className={`text-center space-letter newReleasesH2 ${
              isVisible[1] ? "slide-left" : ""
              }`}
            ref={titleRefs[1]}
          >
            New Releases
          </h2>
        </div> */}
        <div className="newreleasesText mt-5">
          <p className="mt-5">
            Discover the freshest sounds and timeless classics on vinyl! From
            groundbreaking indie anthems to the smoothest jazz and the
            hardest-hitting rock, our New Releases section is packed with albums
            that will ignite your passion for music.
          </p>
        </div>

        <div className="container py-3 newReleasesDiv ">
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
            className="mySwiper pb-5 borde "
          >
            {productList
              .filter((product) => product.featured === true)
              .map((product) => (
                <SwiperSlide
                  className=" my-5 very-small-hover newReleases "
                  key={product.id}
                >
                  <Product product={product} featured={true} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>

      {/* =====================================     ↑ ↑ ↑ ↑ ↑    New Releases       ↑ ↑ ↑ ↑ ↑    ====================================== */}

      {/* <div className="container mt-5">
        <hr />
      </div> */}

      {/* =====================================     ↓ ↓ ↓ ↓ ↓    Echoes Through Time     ↓ ↓ ↓ ↓ ↓    ====================================== */}

      <section className="mt-5">
        {/* <div ref={projectRef}>
    <h2
      className={` px-1 text-center space-letter newReleasesH2 tituloEchoesThroughTime ${
        isVisible[0] ? "slide-left" : ""
      }`}
      ref={titleRefs[0]}
    >
      Echoes Through Time
    </h2>
  </div> */}
        <div className="ourStoryContainer ">
          <div className="echoesImage mt-5">
            <div className="ourStoryText overlay-image">
              <div>
                <p>
                  Established in an era when melodies flowed not through wires
                  but hearts, our store has been a sanctuary for the vinyl
                  enthusiast since its humble beginnings. Beneath the warm glow
                  of gaslit lamps, music lovers would gather to peruse shelves
                  stacked high with records that whispered tales of passion,
                  rebellion, and romance. Here, the air hums with nostalgia, as
                  each groove carries the soul of an artist long past, awaiting
                  discovery anew.
                </p>{" "}
              </div>
              {/* <p>
        Through the decades, as trends have come and gone, our mission
        remains steadfast: to preserve the art of analog sound. Within
        these walls lies a treasure trove of history, from the crackling
        blues that defined a generation to the symphonies that stirred
        hearts worldwide. For us, every vinyl is not just a product—it is
        a story waiting to be told, a memory to be made, and a piece of
        history to be cherished.
      </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* =====================================     ↑ ↑ ↑ ↑ ↑  Echoes Through Time        ↑ ↑ ↑ ↑ ↑    ====================================== */}

      {/* =====================================     ↓ ↓ ↓ ↓ ↓    Shop by Category     ↓ ↓ ↓ ↓ ↓    ====================================== */}

      {/* <section id="shop-by-category" className="mt-5 mb-5 ">
        <h2
          className={`text-center space-letter newReleasesH2 tituloEchoesThroughTime `}
          ref={titleRefs[2]}
        >
          Shop by Category
        </h2>

        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
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
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            speed={7000}
            pagination={{ clickable: true }}
            className=" pb-3"
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
      </section> */}

      {/* =====================================     ↑ ↑ ↑ ↑ ↑    Shop by Category     ↑ ↑ ↑ ↑ ↑    ====================================== */}

      {/* <div className="container mt-5">
        <hr />
      </div> */}

      {/* =====================================     ↓ ↓ ↓ ↓ ↓    The listening room     ↓ ↓ ↓ ↓ ↓    ====================================== */}

      <section>
        <h2
          className={`text-center space-letter newReleasesH2  `}
          ref={titleRefs[3]}
        >
          The Listening Room
        </h2>
        <div className="ourStoryContainer">
          <div className="roomText">
            <p>
              Beyond the storefront lies a secret haven—the Listening Room,
              where the magic of vinyl truly comes alive. With rich wooden
              panels and plush chairs worn soft by decades of visitors, this
              space invites patrons to escape the chaos of the modern world and
              lose themselves in the warmth of analog sound. Each needle drop is
              a ceremony as every spin a journey through time.
            </p>{" "}
            <p>
              The Listening Room has witnessed countless moments of discovery: a
              young collector’s first encounter with jazz. A seasoned enthusiast
              rekindling their connection to a forgotten favorite... Here, the
              connection to music transcends the ordinary, transforming each
              visit into an intimate encounter with the heart and soul of sound.
              Step inside, and let the vinyl guide you home.
            </p>
          </div>
          <div className="roomContainer ">
            <div
              className="roomContainer1"
              style={{ transform: `translateX(-${offset}px)` }}
            ></div>
            <div className="roomContainer2"></div>
            <div
              className="roomContainer3"
              style={{ transform: `translateX(${offset + 10}px)` }}
            ></div>
          </div>
        </div>
        <div className="container mt-5">
          <hr />
        </div>
      </section>

      {/* =====================================     ↑ ↑ ↑ ↑ ↑   relleno        ↑ ↑ ↑ ↑ ↑    ====================================== */}

      {/* =====================================     ↓ ↓ ↓ ↓ ↓    News     ↓ ↓ ↓ ↓ ↓    ====================================== */}

      <section id="news" className="mt-5 mb-5">
        <h2 className="text-center space-letter mb-3">News</h2>
        <div className="container">
          <div className="row justify-content-center mt-4 g-4 ">
            <div className="col-md-6 col-lg-4  " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover ">
                  <img className="img-fluid border" src={`/img/7.jpg`} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3 ">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Ago 15, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    The soul of blues reborn under midnight lights
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4 " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover">
                  <img className="img-fluid border" src={"/img/5.jpg"} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Nov 07, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    The vintage cassette returns: nostalgia in every rewind
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4 " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover">
                  <img className="img-fluid border" src={`/img/6.jpg`} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Dec 02, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    An unforgettable night of magic at Radio City.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4 " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover">
                  <img className="img-fluid border" src={`/img/8.jpg`} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Oct 25, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    Electric riffs and passion: the heart of a rock soloist.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4 " onClick={handleToast}>
              <Link className="text-decoration-none text-black ">
                <div className="small-hover">
                  <img className="img-fluid border" src={`/img/3.jpg`} />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <span className="fw-lighter text-center date-font-size text-uppercase">
                    Nov 12, 2024
                  </span>
                  <p className="text-uppercase fw-bold text-black text-center mt-3">
                    Sublime improvisation: jazz resonates with a free spirit.
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
