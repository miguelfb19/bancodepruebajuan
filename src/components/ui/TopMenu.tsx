import { useState } from "react";
import { BarsMenu } from "../../assets/icons";
import { MobileMenu } from "./MobileMenu";

export const TopMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex w-full h-24 items-center px-5 bg-primary text-white border-b-2 border-secondary">
      <a href="/" className="w-full">
        <img
          src="logox500.avif"
          alt="logo de banco de prueba juan"
          className="w-14 bg-white rounded-full"
        />
      </a>
      <nav className="hidden md:flex gap-4 font-semibold">
        <a className="menu-item" href="/">
          Inicio
        </a>
        <a className="menu-item" href="">
          Servicios
        </a>
        <a className="menu-item" href="">
          Blog
        </a>
        <a className="menu-item" href="">
          Nosotros
        </a>
        <a className="menu-item" href="">
          Contacto
        </a>
      </nav>

      <MobileMenu show={show} close={() => setShow(false)} />

      <button className="flex md:hidden" onClick={() => setShow(true)}>
        <BarsMenu size={30} />
      </button>
    </div>
  );
};
