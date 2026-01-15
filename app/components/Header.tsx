function Header() {
  return (
    <div className="flex justify-center">
      <header className="hidden backdrop-blur-md md:flex items-center fixed z-10 justify-center h-20 bg-blue-950/40 w-full 2xl:h-25">
        <div
          id="header-container"
          className="w-[1440px] flex justify-center items-center 2xl:w-[1920px]"
        >
          {" "}
          <div>
            <img className="w-40" src="/img/logo.webp" alt="Civix Logo" />
          </div>
          <nav className="text-white/90 flex gap-6 text-[14px] font-inter mx-55 z-10 uppercase 2xl:mx-70 2xl:gap-15 2xl:text-[16px]">
            <a className="hover:cursor-pointer hover:text-[#D0AF6C] active:text">
              Início
            </a>
            <a className="hover:cursor-pointer hover:text-[#D0AF6C] active:text">
              Sobre
            </a>
            <a className="hover:cursor-pointer hover:text-[#D0AF6C] active:text">
              Serviços
            </a>
            <a className="hover:cursor-pointer hover:text-[#D0AF6C] active:text">
              Blog
            </a>
            <a className="hover:cursor-pointer hover:text-[#D0AF6C] active:text">
              Atendimento
            </a>
          </nav>
          <div>
            <div id="btn" className=" ml-2.5">
              <div className="w-[142px] opacity-90 hover:opacity-100 hover:cursor-pointer flex items-center justify-center text-center h-[49px] bg-gold rounded-tl-2xl rounded-br-2xl bg-[linear-gradient(to_right,#ffff_0%,#ffff_42%,#d0af6c_42%,#d0af6c_100%)] active:invert-15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#d0af6c"
                >
                  <path d="m720-560-58-56 64-64H520v-80h206l-62-62 56-58 160 162-160 158Zm78 440q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>

                <p className="ml-7 font-inter text-white text-[14px]">
                  Contato
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
