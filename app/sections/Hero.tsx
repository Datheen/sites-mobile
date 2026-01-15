import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Hero() {
  return (
    <div
      id="hero-main"
      className="h-[932px] flex flex-col"
      style={{
        backgroundImage: "url('img/home/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div id="overlay" className="bg-[#141427] h-[932px] opacity-85 overflow-x-clip">
        <ResponsiveAppBar />
        <div
          id="hero-text"
          className="flex flex-col text-center items-center justify-center pt-[81px] gap-3"
        >
          <h2 className="underline font-inter text-white/90">
            INOVANDO IDEIAS
          </h2>
          <h1 className="w-[390px] text-center text-white/90 uppercase font-cormorant text-[30px] font-bold">
            Advocacia <span className="text-gold">estratégica</span> <br />
            para quem precisa de resposta.
          </h1>
        </div>



        <div id="hero-statue" className="h-[544px] w-[471px]">
          <img src="/img/home/hero-statue.webp" alt="Estátua Themis" />
        </div>
        
        
        <div id="hero-actions" className="flex">

<div id="btn" className="-mt-2 ml-2.5" >

  <div className="w-[142px] flex items-center justify-center text-center h-[49px] bg-gold rounded-tl-2xl rounded-br-2xl bg-[linear-gradient(to_right,#ffff_0%,#ffff_42%,#d0af6c_42%,#d0af6c_100%)]">

<svg className="ml-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#d0af6c"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>

<p className="ml-6 font-inter text-white text-[14px]">Ver mais</p>

</div>
</div>

<div>
<div className="h-[36px] w-1 bg-gold ml-6"></div>
<p className="text-white font-inter ml-10 text-[14px] absolute -bottom-6 w-[397px] h-[89px] ">Lei, estratégia e posicionamento. <br /> Atuamos onde decisões importam.</p>

</div>
        </div>



      </div>
    </div>
  );
}

export default Hero;
