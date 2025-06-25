import { CloseX } from "../../assets/icons";

interface Props {
  show: boolean;
  close: () => void;
}

export const MobileMenu = ({ show, close }: Props) => {
  return (
    <div
      className={`fixed top-0 right-0 z-20 h-[100dvh] md:hidden flex flex-col w-full items-center px-5 pt-20 bg-primary text-white transition-all duration-200 ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col gap-10 md:gap-4 font-semibold text-center">
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

      <button className="flex md:hidden absolute top-5 right-5" onClick={close}>
        <CloseX size={35} />
      </button>
    </div>
  );
};
