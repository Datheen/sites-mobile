"use client";

import ResponsiveAppBar from "../components/MobileHeader";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Hero() {
  useIntersectionObserver();

  return (
    <div
      id="hero-main"
      className="h-[932px] flex flex-col md:h-[750px] 2xl:h-[1024px]"
      style={{
        backgroundImage: "url('img/home/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        id="overlay"
        className="bg-[#141427] h-[955px] opacity-85 overflow-x-clip 2xl:h-[1024px]"
      >
        <div
          id="container"
          className="mw-full max-w-[1440px] mx-auto md:px-8 md:flex md:mt-8 2xl:scale-130 2xl:pl-20 2xl:pt-20"
        >
          <div id="mobile-header" className="md:hidden">
            <ResponsiveAppBar />
          </div>

          <div
            id="hero-text"
            className="animar flex flex-col text-center items-center justify-center pt-[81px] gap-3"
          >
            <h2 className="underline font-inter -mt-15 text-white/90 md:-mt-30">
              INOVANDO IDEIAS
            </h2>
            <h1 className="w-[390px] text-center text-white/90 uppercase font-cormorant text-[30px]   font-bold md:text-[46px] md:text-start md:w-[560px] md:-mr-80 md:ml-20">
              Advocacia <span className="text-gold">estratégica</span> 
              <br className="md:hidden" />
              <br className="hidden md:block" />
              para quem precisa de resposta.
            </h1>
          </div>

          <div className="md:flex md:flex-row-reverse md:items-end md:-ml-30">
            <div
              id="hero-statue"
              className="h-[544px] w-[471px] md:ml-15 md:mt-25  2xl:ml-5"
            >
              <img
                className="2xl:scale-110"
                src="/img/home/hero-statue.webp"
                alt="Estátua Themis"
              />
            </div>

            <div id="hero-actions" className="flex md:-ml-32">
              <div id="btn" className="-mt-2 ml-2.5 md:-mt-46">
                <div className="w-[142px] opacity-90 hover:opacity-100 hover:cursor-pointer flex items-center justify-center text-center h-[49px] bg-gold rounded-tl-2xl rounded-br-2xl bg-[linear-gradient(to_right,#ffff_0%,#ffff_42%,#d0af6c_42%,#d0af6c_100%)] active:invert-15">
                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#d0af6c"
                  >
                    <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                  </svg>

                  <p className="ml-6 font-inter text-white text-[14px]">
                    Ver mais
                  </p>
                </div>
              </div>

              <div className="md:-mt-68 md:ml-23">
                <div className="h-[36px] w-1 bg-gold ml-6"></div>
                <p className="text-white font-inter ml-10 text-[14px] -mt-10 w-[397px] h-[89px] ">
                  Lei, estratégia e posicionamento. <br /> Atuamos onde decisões
                  importam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
