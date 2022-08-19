import React from "react";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Porfolio1 from "../../images/porfolio1.jpg";
import Porfolio2 from "../../images/porfolio2.jpg";
import Porfolio3 from "../../images/porfolio3.jpg";

import "./about.scss";
function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <h1>Hello! I am Aktilek</h1>
          <p>Frontend React Developer</p>
        </div>

        <div className="about__skills">
          <h3>My Skills</h3>
          <ul>
            <li>
              <FaHtml5 />
              HTML
            </li>
            <li>
              <FaCss3Alt />
              CSS
            </li>
            <li>
              <SiJavascript />
              JavaScript
            </li>
            <li>
              <FaSass />
              Sass
            </li>
            <li>
              <FaReact />
              React
            </li>
            <li>
              <FaDocker />
              Docker
            </li>
          </ul>
        </div>

        <div className="about__portfolio">
          <h3>Latest Works</h3>
          <ul>
            <li>
              <img src={Porfolio1} alt="" />
              <h4>Dashboard for Cargo</h4>
            </li>
            <li>
              <img src={Porfolio2} alt="" />
              <h4>Marketplace App</h4>
            </li>
            <li>
              <img src={Porfolio3} alt="" />
              <h4>Landing Page</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
