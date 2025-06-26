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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        show ? "block" : "hidden"
      } fixed bottom-10 right-10 z-50 text-secondary bg-primary rounded-full border-none cursor-pointer p-0`}
    >
      <UpArrowCircle size={50} />
    </button>
  );
};
