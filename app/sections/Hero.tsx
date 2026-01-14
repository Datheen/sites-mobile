import ResponsiveAppBar from "../components/ResponsiveAppBar";



function Hero() {
  return (
    
    
    <div
      id="hero-content"
      className="overflow-x-hidden h-230 w-full bg-hero bg-cover bg-center flex flex-col
"
    > <div className="z-100"><ResponsiveAppBar/></div>
      
      <div
        id="overlay"
        className="absolute inset-0 h-230 bg-blue-950/55 overflow-x-clip"
      >
        
       
        <h1 className="relative  ml-3 mt-30 text-4xl font-cormorant w-100 text-center uppercase text-white/90 font-black">
          Advocacia <span className="text-gold">estratégica</span>{" "}
          para quem precisa de resposta
        </h1>
        <img className="relative ml-2" src="/img/home/hero-statue.webp" />
        <div id="actions" className="flex opacity-80 items-center justify-center gap-7">
          <div
            id="btn"
            className=" flex items-center justify-center active:invert-10 gap-10 w-42 h-12.5 bg-gold rounded-br-2xl rounded-tl-2xl bg-[linear-gradient(to_right,#ffff_0%,#ffff_42%,#d0af6c_42%,#d0af6c_100%)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#d0af6c"
            >
              <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" />
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
