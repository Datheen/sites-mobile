"use client";

import CountUp from "react-countup";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Sobre() {
  useIntersectionObserver();

  return (
    <div
      id="sobre-section"
      className="bg-[#1E2833] h-[2330px] flex justify-center md:h-[1349px] 2xl:scale-125 2xl:mt-42"
    >
      <div id="sobre-container" className="max-w-full">
        {/* Homem lendo livro sobre direitos */}

        <div id="md-mode" className="md:flex">
          <div
            id="card-image"
            className="flex flex-col justify-center items-center pt-[37px] md:scale-140 md:mt-20 md:ml-40"
          >
            <img
              className="w-[350px] h-[337px] rounded-tr-[70px] z-1 rounded-bl-[70px]"
              src="/img/sobre/advogado.webp"
              alt="Advogado Lendo Livro"
            />

            <p className="w-[300px] -mt-15 ml-5 z-10 font-inter font-medium text-white text-[12px]">
              O conhecimento das leis é o primeiro passo para transfomar
              direitos em justiça
            </p>
          </div>

          {/* Texto com card e foto do acessor */}

          <div className="flex flex-col justify-center items-center mt-15 md:ml-86  md:scale-115">
            <h1 className="font-inter text-white text-[20px] w-[370px]">
              Nós somos advogados pelo direito e justiça, com base nos mais
              altos padrões de conhecimento
            </h1>

            <div
              id="line-gradient"
              className="h-2 w-[370px] mt-3 bg-gradient-to-r from-[#d0af6c] to-white/0"
            >
              {" "}
            </div>

            <p className="w-[370px] text-[16px] mt-4 text-white/90">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos unde
              dolorem est! Iusto earum, minus odio ullam culpa optio est
              explicabo! Harum autem eos suscipit voluptatum provident nihil
              consequuntur dolor?
            </p>

            <div className="flex mt-8 -ml-10">
              <img
                className="rounded-full w-[58px]"
                src="/img/sobre/profile.webp"
                alt="Foto do Acessor"
              />
              <div className="ml-4">
                <h1 className="font-inter text-[20px] font-semibold text-white/90">
                  Willian Felipe de Almeida
                </h1>
                <p className="text-white/80">Acessor executivo da Civix</p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="cards-counters"
          className="flex flex-col items-center mt-15 gap-[30px] md:flex-row md:ml-185 md:scale-70"
        >
          {/* Porcentagem de casos resolvidos */}

          <div className="w-[292px] h-[126px] bg-[#0050C8]/70 rounded-tl-[30px] rounded-br-[30px] gap-4  flex">
            <svg
              className="ml-4 mt-4"
              xmlns="http://www.w3.org/2000/svg"
              height="100px"
              viewBox="0 -960 960 960"
              width="100px"
              fill="#ffffff"
            >
              <path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.38 17.62Q840-804.75 840-780v329q-14-8-29.5-13t-30.5-8v-308H180v600h309q4 16 9.02 31.17Q503.05-133.66 510-120H180Zm0-107v47-600 308-4 249Zm100-53h211q4-16 9-31t13-29H280v60Zm0-170h344q14-7 27-11.5t29-8.5v-40H280v60Zm0-170h400v-60H280v60Zm200-177q14 0 24.5-10.5T515-832q0-14-10.5-24.5T480-867q-14 0-24.5 10.5T445-832q0 14 10.5 24.5T480-797ZM733-40q-78.43 0-133.72-55.28Q544-150.57 544-229t55.28-133.72Q654.57-418 733-418t133.72 55.28Q922-307.43 922-229T866.72-95.28Q811.43-40 733-40Zm0-60q51 0 86.78-33.12T861-215q-4 2-8.5 3.5T843-210h-36.49Q791-210 780-220.93q-11-10.92-11-27.07v-17h-72v-37.89Q697-319 707-329t26.08-10H752q0-5 .5-9t2.5-8q-5.5-1-10.75-1.5t-10.87-.5q-54.38 0-91.88 37.5Q604-283 604-229h72.92q30.08 0 52.58 22t22.5 51.97v18.16h-55V-106q9 3 17.55 4.5T733-100Z" />
            </svg>

            <div className="flex flex-col -mr-7 mt-2">
              <span
                id="countup"
                className="text-[48px] mb-1 font-bold text-white/90"
              >
                <CountUp
                  end={95}
                  duration={2.5}
                  suffix="%"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </span>
              <p className=" text-[14px] w-[180px] -mt-4 text-white/90">
                Sucesso de casos em <br /> tribunais da capital
              </p>
            </div>
          </div>

          {/*Contagem anos de experiência*/}

          <div className="w-[292px] h-[126px] bg-gold rounded-tl-[30px] rounded-br-[30px] flex items-center justify-center gap-3">
            <span
              id="countup"
              className="text-[64px] font-inter font-bold text-[#1E2833]"
            >
              <CountUp
                end={20}
                duration={2.5}
                prefix="+"
                enableScrollSpy
                scrollSpyOnce
              />
            </span>
            <p className="text-[#1E2833] font-inter font-bold text-[20px]">
              Anos de <br /> experiência
            </p>
          </div>
        </div>

        {/*Segunda Parte de Sobre*/}

        <div
          id="divisao"
          className="w-[430px] bg-gold h-[10px] mt-20 md:w-full"
        ></div>

        {/*Texto e parte final do sobre*/}

        <div
          id="md-mode"
          className="md:flex md:justify-center md:gap-100 md:mt-15"
        >
          <div className="animar flex flex-col items-center justify-center mt-15">
            <h1 className="font-cormorant font-bold text-gold text-[24px] font-semibold w-[384px] md:w-[450px] md:text-[28px] md:-mt-15">
              Nós somo os melhores em fidelidade e satisfação do cliente
            </h1>
            <p className="text-white/90 font-inter text-[16px] w-[384px] mt-6 md:w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate consequatur cumque in itaque, ab assumenda fuga dolorem
              non laboriosam possimus sequi facere vero et soluta doloremque
              ullam unde exercitationem expedita. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illum aspernatur aliquid quidem
              excepturi minima omnis libero consectetur, ipsum voluptatibus.
              Doloribus labore et cumque. Illum praesentium ducimus est expedita
              nihil explicabo?
            </p>

            <span className="font-cormorant text-[36px] font-semibold text-gold w-[384px] md:w-[450px]">
              1995
            </span>

            <p className="font-inter text-white text-[16px] w-[384px] mt-2 md:w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              facere, placeat voluptatibus modi ipsa sint, exercitationem,
              doloremque repudiandae delectus facilis dolorum possimus nihil
              ipsam repellendus cumque esse vel cupiditate perferendis!
            </p>
          </div>

          {/*Imagem da Advogada*/}
          <div className="flex justify-center items-center mt-[34px] md:mt-[41px]">
            <img
              className="w-[305px] md:scale-110"
              src="/img/sobre/mulher.webp"
              alt="Imagem Advogada"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
