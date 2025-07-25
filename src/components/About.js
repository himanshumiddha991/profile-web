import { download } from "../svgImage";

const About = () => {
  return (
    <div className="devender_tm_section" id="about">
      <div className="devender_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="img/thumbs/45-49.jpg" alt="devender image" />
              <div className="main" data-img-url="img/perosn/2.png" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About Me</span>
              <h3>
                {`I'm`} <span>Devender</span>
              </h3>
              <h3>
                SEO <span>Executive</span>
              </h3>
              <span className="subtitle">Based in Sri Ganganagar, India</span>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
                Hi! My name is devender Walker. I am UI/UX designer, and {`I'm`}{" "}
                very passionate and dedicated to my work.
              </p>
              <p>
                With 20 years experience as a professional graphic designer and
                web developer, I have acquired the skills and knowledge
                necessary to make your project a success.
              </p>
            </div>
            <div
              className="devender_tm_button wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <a href="img/cv/devender_resume.jpg" download>
                <span>Download CV {download}</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/perosn/3.png" alt="devender image" />
              <div className="main" data-img-url="img/perosn/3.png" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
