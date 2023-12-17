import { HomeHub } from './clone/airbnb-clone';
import './projects.scss';
import { TennisZone } from './tennis-zone/tennis-zone';
import { WeatherApp } from './weather-app/weather-now';

export function Projects() {
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
