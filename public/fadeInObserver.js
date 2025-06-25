export const fadeInAnimationObserver = (elementId) => {
    document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById(elementId);
    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("opacity-100");
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
    }
  });
}