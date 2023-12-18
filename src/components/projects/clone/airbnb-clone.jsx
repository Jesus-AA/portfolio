/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';
export function HomeHub() {
  return (
    <div className="project">
      <div className="description">
        <a
          target="_blank"
          href="https://aibnbclone.netlify.app/"
          rel="noreferrer"
        >
          <h3 className="description--title">HomeHub</h3>
          <h4 className="description--subtitle">Full Stack Development</h4>
        </a>

        <p className="description--text">
          "Introducing HomeHub: Your all-in-one housing solution. Register and
          login seamlessly, list your property for rent effortlessly, book your
          dream home effortlessly, and make secure payments with stripe.
          Simplify your housing journey with HomeHub."
        </p>
        <div className="description__stack__list">
          <img
            className="description__list--items"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />

          <img
            className="description__list--items"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />

          <img
            className="description__list--items"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />

          <img
            className="description__list--items"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />

          <img
            className="description__list--items"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />

          <img
            className="description__list--items"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
        </div>

        <div className="description__repositories">
          <div className="description__repositories__frontend">
            <h6>Frontend</h6>
            <a
              target="_blank"
              className="description--github"
              href="https://github.com/Jesus-AA/airbnb-clone-front"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="description__repositories__backend">
            <h6>Backend</h6>
            <a
              target="_blank"
              className="description--github"
              href="https://github.com/Jesus-AA/airbnb-clone-back"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="picture-div">
        <GiHouse className="icon tennis-ball" />
      </div>
    </div>
  );
}
