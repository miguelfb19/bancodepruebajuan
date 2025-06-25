import { useState, useEffect } from "react";
import { UpArrowCircle } from "../../assets/icons";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    // Limpieza del listener al desmontar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <a
      href="#menu"
      className={`${
        show ? "block" : "hidden"
      } fixed bottom-10 right-10 z-50 text-secondary`}
    >
      <UpArrowCircle size={50} />
    </a>
  );
};
