document.addEventListener("DOMContentLoaded", () => {
  const servicesCards = document.getElementById("services-cards");
  const blog = document.getElementById("blog");

  // Crear observer para services-cards
  if (servicesCards) {
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          servicesCards.classList.add("opacity-100");
          servicesObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    servicesObserver.observe(servicesCards);
  }

  // Crear observer para blog
  if (blog) {
    const blogObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blog.classList.add("opacity-100");
          blogObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    blogObserver.observe(blog);
  }
});
