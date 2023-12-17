import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RoughNotation } from 'react-rough-notation';
import './home.scss';
export function Home() {
  return (
    <>
      <section className="home__section">
        <div className="home__section__text__icons">
          <div className="home__section__text">
            <p className="home__section--description">Hello there! I am</p>

            <h2 className="home__section--name">
              <RoughNotation
                type="underline"
                show={true}
                color="#d9e3da84"
                strokeWidth="10px"
                padding="10px"
                animationDuration={1700}
                animationDelay={700}
              >
                Jesús Álvarez
              </RoughNotation>
            </h2>

            <p className="home__section--description">Engineer and</p>
            <p className="home__section--description">full-stack developer.</p>
          </div>
          <div className="home__section__icons">
            <a
              target="_blank"
              className="home__section__icons--github"
              href="https://github.com/Jesus-AA"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              className="home__section__icons--linkedin"
              href="https://www.linkedin.com/in/jesusalvarezaguilar/"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="home__section__image">
          <img
            className="
          home__section__gif"
            src="../../public/docubyte-i-am-a-computer-designboom-010.gif"
            alt="A computer gif."
          />
        </div>
      </section>
    </>
  );
}
