function Hero() {
  return (
    <div
      id="hero-content"
      className="overflow-x-hidden h-230 w-full bg-hero bg-cover bg-center flex flex-col
"
    >
      <div
        id="overlay"
        className="absolute inset-0 h-230 bg-blue-950/60 overflow-x-clip"
      >
        <img className=" h-20 mt-15 ml-20" src="/img/logo.webp" />
        <h1 className="relative  ml-3 mt-10 text-3xl font-cormorant w-100 text-center text-white/90 font-bold">
          Onde a lei encontra <span className="text-gold">posicionamento</span>{" "}
          e decisão. Advocacia <span className="text-gold">estratégica</span>{" "}
          para quem precisa de resposta.
        </h1>
        <img className="relative ml-2" src="/img/home/hero-statue.webp" />
        <div id="actions" className="flex items-center justify-center gap-7">
          <div
            id="btn"
            className=" flex items-center justify-center active:invert-10 gap-10 w-42 h-12.5 bg-gold rounded-br-2xl rounded-tl-2xl bg-[linear-gradient(to_right,#ffff_0%,#ffff_42%,#d0af6c_42%,#d0af6c_100%)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d0af6c"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            <p className="text-white">Contato</p>
          </div>

          <div
            id="btn"
            className=" flex items-center justify-center active:invert-10 gap-10 w-42 h-12.5 bg-gold rounded-br-2xl rounded-tl-2xl bg-[linear-gradient(to_right,#ffff_0%,#ffff_42%,#d0af6c_42%,#d0af6c_100%)]"
          >
            <svg
              className="ml-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#d0af6c"
            >
              <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
            </svg>{" "}
            <p className="text-white">Ver mais</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
