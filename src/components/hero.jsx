import "./Hero.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import hero1 from "../assets/img/header-1.jpg";
import hero2 from "../assets/img/header-5.jpg";
import hero3 from "../assets/img/header-6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, ChevronRightCircle } from "lucide-react";
import { Autoplay, Navigation, EffectFade, EffectFlip } from "swiper/modules";

function Hero() {
  const slide = [
    {
      image: hero1,
      title: "Grow partner",
      desc: "Connect with top consultants hand picked by elixir consulting and finanace",
    },
    {
      image: hero2,
      title: "Grow partner",
      desc: "Grow with us",
    },
    {
      image: hero3,
      title: "Grow partner",
      desc: "We look forward to doing greater jobs",
    },
  ];

  return (
    <>
      <section className="hero-container">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade, EffectFlip]}
          effect="fade"
          navigation
          autoplay={{ delay: 2000 }}
          loop={true}
          effect={"flip"}
        >
          {slide.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-overlay">
                  <div className="hero-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.desc}</p>
                    <div className="hero-btns">
                      <button className="btn-read">
                        Read More <ChevronRight size={16} />
                      </button>
                      <button className="btn-contact">
                        {" "}
                        Contact Us <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${hero2})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>Growth Partner</h1>
                  <p>
                    Grow with us
                  </p>
                  <div className="hero-btns">
                    <button className="btn-read">
                      Read More <ChevronRight size={16} />
                    </button>
                    <button className="btn-contact">
                      {" "}
                      Contact Us <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${hero3})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>Growth Partner</h1>
                  <p>
                    We look forward to doing greater jobs
                  </p>
                  <div className="hero-btns">
                    <button className="btn-read">
                      Read More <ChevronRight size={16} />
                    </button>
                    <button className="btn-contact">
                      {" "}
                      Contact Us <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>  */}
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
