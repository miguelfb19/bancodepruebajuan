import SlCarousel from "@shoelace-style/shoelace/dist/react/carousel/index.js";
import SlCarouselItem from "@shoelace-style/shoelace/dist/react/carousel-item/index.js";

export interface CarouselProps {
  images?: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  return (
    <SlCarousel navigation pagination mouseDragging>
      {images?.map((src, idx) => (
        <SlCarouselItem key={idx}>
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </SlCarouselItem>
      ))}
    </SlCarousel>
  );
};
