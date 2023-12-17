import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';

import { FaSass } from 'react-icons/fa';

export function CarouselItem() {
  return (
    <>
      <div className="carousel-card">
        <SiTypescript />
      </div>

      <div className="carousel-card">
        <SiNodedotjs />
      </div>
      <div className="carousel-card">
        <SiExpress />
      </div>
      <div className="carousel-card">
        <SiJavascript />
      </div>
      <div className="carousel-card">
        <SiReact />
      </div>
      <div className="carousel-card">
        <SiHtml5 />
      </div>
      <div className="carousel-card">
        <SiMongodb />
      </div>
      <div className="carousel-card">
        <SiRedux />
      </div>
      <div className="carousel-card">
        <SiJest />
      </div>

      <div className="carousel-card">
        <SiCss3 />
      </div>
      <div className="carousel-card">
        <FaSass />
      </div>
    </>
  );
}
