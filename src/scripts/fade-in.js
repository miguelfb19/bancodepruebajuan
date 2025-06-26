document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("services-cards");
    if (el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("opacity-100");
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    }
  });