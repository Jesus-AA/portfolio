import { useState } from 'react';
import { HomeHub } from './clone/airbnb-clone';
import './projects.scss';
import { TennisZone } from './tennis-zone/tennis-zone';
import { WeatherApp } from './weather-app/weather-now';

export function Projects() {
  const [message, setMessage] = useState(true);

  if (message) {
    return (
      // <dialog>
      <div className="dialog">
        <h2 className="dialog-text">
          My projects are deployed on the free version of Render, so initially,
          their performance is a bit slow. Sorry for the inconvenience😶.
        </h2>
        <button className="dialog-button" onClick={() => setMessage(false)}>
          Ok
        </button>
      </div>

      // </dialog>
    );
  }

  return (
    <>
      <section className="projects__section">
        <h2>Projects</h2>

        <TennisZone />
        <WeatherApp />
        <HomeHub />
      </section>
    </>
  );
}
