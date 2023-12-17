import { FaGithub } from 'react-icons/fa';
import './tennis-zone.scss';
export function TennisZone() {
  return (
    <div className="project">
      <div className="description">
        <a
          target="_blank"
          href="https://tennis-zone.netlify.app/"
          rel="noreferrer"
        >
          <h3 className="description--title">Tennis Zone Reviews</h3>
          <h4 className="description--subtitle">Full Stack Development</h4>
        </a>

        <p className="description--text">
          This project is a tennis courts reviews page where people can leave
          comments about the courts they have already played on. Users can
          register and log in to leave a comment or simply explore the
          application and see the reviews. (Mobile version)
        </p>
        <div className="description__stack__list">
          <img
            className="description__list--items"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
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
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          />

          <img
            className="description__list--items"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          />
        </div>

        <div className="description__repositories">
          <div className="description__repositories__frontend">
            <h6>Frontend</h6>
            <a
              target="_blank"
              className="description--github"
              href="https://github.com/isdi-coders-2023/Jesus-Alvarez-Final-Project-front-202307-mad"
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
              href="https://github.com/isdi-coders-2023/Jesus-Alvarez-Final-Project-back-202307-mad"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="picture-div">
        <img className="picture" src="/tennis.png" alt="" />
      </div>
    </div>
  );
}
