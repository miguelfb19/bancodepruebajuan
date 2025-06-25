import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel/index.js';
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item/index.js';

export const Carousel = () => {
  return (
    <>
      <SlCarousel navigation pagination mouse-dragging>
        <SlCarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/portada.avif"
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/portada.avif"
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/portada.avif"
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/portada.avif"
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/portada.avif"
          />
        </SlCarouselItem>
      </SlCarousel>
    </>
  );
};
