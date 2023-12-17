import './autoplay-carousel.scss';
import { CarouselItem } from './carousel-item';

export function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        <CarouselItem />
        <CarouselItem />
      </div>
    </div>
  );
}
