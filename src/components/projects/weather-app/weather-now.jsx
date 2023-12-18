import { FaGithub } from 'react-icons/fa';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import './weatherapp.scss';

export function WeatherApp() {
  return (
    <>
      <div className="project">
        <div className="description">
          <a
            target="_blank"
            href="https://weathernowapplication.netlify.app/"
            rel="noreferrer"
          >
            <h3 className="description--title">Weather Now App</h3>
            <h4 className="description--subtitle">Front-End Development</h4>
          </a>

          <p className="description--text">
            WeatherNow is a simple and user-friendly weather application that
            allows users to quickly check the current weather conditions in any
            city worldwide. With just a click, you can input the city of your
            choice and get instant access to real-time weather information.
          </p>
          <div className="description__stack__list">
            <img
              className="description__list--items"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />

            <img
              className="description__list--items"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />

            <img
              className="description__list--items"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            />
          </div>

          <div className="description__repositories">
            <div className="description__repositories__frontend">
              <h6>Repository</h6>
              <a
                target="_blank"
                className="description--github"
                href="https://github.com/Jesus-AA/weather"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="picture-div">
          <TiWeatherPartlySunny className="icon tennis-ball" />
        </div>
      </div>
    </>
  );
}
