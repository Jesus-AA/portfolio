import './about.scss';

export function About() {
  return (
    <>
      <section className="about__section">
        <article className="about__section__article">
          <h2 className="about__section--title">About me</h2>
          <p className="about__section__article--text">
            I am a full-stack developer and a chemical engineer. My coding
            journey began when I took the Algorithms and Programming class
            during my time at university. Since then, I have been exploring
            technologies on my freetime and furthering my skills through a Full
            Stack Web Development bootcamp at ISDI Coders in Madrid. My hobbies
            are playing football⚽ and tennis🎾. Also I like anime and sci-fi
            movies🎞️.
          </p>
        </article>
        <img className="about__section--img" src="/me.JPG" />
      </section>
    </>
  );
}
