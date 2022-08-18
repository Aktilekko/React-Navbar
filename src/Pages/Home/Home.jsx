import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { init } from "ityped";

import Photo from "../../images/Ak.jpeg";

import "./home.scss";
function Home() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Frontend React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);
  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
          <h1 className="home__title">Hi! I am Aktilek Abdrakhmanov</h1>
          <p className="home__subtitle">
            <span ref={animatedTextRef}></span>
          </p>
          <p>
            I'm responsible and hard working person.I like reading,singing and
            swimming. But actually coding is my true passion.I would like to
            become an excellent programmer.
          </p>
          <p>
            <span className="home__info">Address :</span>
            <span>Bishkek, Kyrgyzstan</span>
          </p>
          <p>
            <span className="home__info">Email :</span>
            <span>atillaxxx@inbox.ru</span>
          </p>
          <p>
            <span className="home__info">Phone :</span>
            <span>0(559)50-70-40</span>
          </p>

          <ul className="home__links">
            <li>
              <a
                href="https://fb.com"
                target="blank"
                rel="noopener norefferrer"
              >
                <FaFacebook className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="blank"
                rel="noopener norefferrer"
              >
                <FaGithub className="home__icon" />
              </a>
            </li>
            <li>
              <a
                className="home__icon"
                href="https://linkedin.com"
                target="blank"
                rel="noopener norefferrer"
              >
                <FaLinkedin className="home__icon" />
              </a>
            </li>
          </ul>
          <Link to="/contact" className="home__cta">
            Hire Me
          </Link>
        </div>
        <div className="home_right">
          <img className="home_right-img" src={Photo} alt="Hero Coder" />
        </div>
      </div>
    </section>
  );
}

export default Home;
