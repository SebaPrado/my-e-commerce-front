import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiRedux, SiInsomnia } from "react-icons/si";

function About() {
  return (
    <div className=" about-text-color">
      <div className="snap-section d-flex justify-content-start align-items-start about-lg-padding pb-5 ">
        <div className="container row p-0 m-0 mx-auto">
          <div className="about-text-color col-12 col-md-10 col-xl-8 p-0 pt-5 p-4">
            <h2 className="text-white fw-bold">ABOUT THIS PROJECT</h2>
            <p className="mt-2 lh-lg">
              Equal Vision Records, an indie record label e-commerce website, is
              the brainchild of a dedicated team of students from
              <span className="text-white fw-bold ms-1 me-1">
                Hack Academy Coding Bootcamp.
              </span>{" "}
              Five individuals with diverse skills and knowledge collaborated to
              create a robust project, each of them investing
              <span className="text-white fw-bold ms-1 me-1">
                over 155 hours of coding activity during three weeks.
              </span>
              The objective: to create a seamless and enjoyable online shopping
              experience for users, integrating the extensive knowledge aquired
              during the Bootcamp.
            </p>
            <p className="lh-lg">
              The <span className="text-white fw-bold">Coding Bootcamp</span> is
              an <span className="text-white fw-bold">intensive 3-month </span>,{" "}
              <span className="text-white fw-bold">full-time program</span>,
              which encompasses
              <span className="text-white fw-bold"> over 600 hours </span> of
              learning covering Node.js, Express, React.js, MySQL, MongoDB, and
              Git. This final project serves as a testament to the team's
              ability to apply the practical aspects of the Bootcamp's
              curriculum, demonstrating their proficiency as
              <span className="text-white fw-bold ms-1">
                Full Stack Developers
              </span>
              .
            </p>
          </div>
          <div className="col-6"></div>
          <div className="col-12">
            <div className="row d-flex justify-content-between ">
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div className="mx-1 bg-black p-3 p-lg-4 about-cards h-100">
                  <h2>Duration</h2>
                  <p className="lh-lg">
                    The project was developed in just 3 weeks, during April
                    2024. It was divided into one-week sprints (Scrum).
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div className="mx-1 bg-black p-3 p-lg-4 about-cards h-100">
                  <h2>Objective & Focus</h2>
                  <p className="lh-lg">
                    The team aimed to ensure a seamless and enjoyable shopping
                    experience for users, leveraging the extensive knowledge
                    acquired during their Bootcamp training.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div className="mx-1 bg-black p-3 p-lg-4 about-cards h-100">
                  <h2>Task Division</h2>
                  <p className="lh-lg">
                    During the project, task organization was efficiently
                    managed through the use of Trello, a versatile project
                    management tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-section d-flex justify-content-center align-items-center about-lg-padding pb-5">
        <div className="techAndTools mx-auto">
          <div className=" text-center">
            <h2 className="fw-bold text-white">TECHNOLOGIES & TOOLS</h2>
            <p>This website was built using these technologies and tools:</p>
          </div>
          <div className="row d-flex justify-content-around align-content-around glass mx-2">
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <FaHtml5 className="icons html" size="2rem" />
              <h5 className="mt-2">HTML</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <FaCss3 className="icons css" size="2rem" />
              <h5 className="mt-2">CSS</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <IoLogoJavascript className="icons js" size="2rem" />
              <h5 className="mt-2">JavaScript</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <FaReact className="icons react" size="2rem" />
              <h5 className="mt-2">React</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <SiMysql className="icons mysql" size="2rem" />
              <h5 className="mt-2">MySQL</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <FaNodeJs className="icons nodejs" size="2rem" />
              <h5 className="mt-2">NodeJS</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <SiRedux className="icons redux" size="2rem" />
              <h5 className="mt-2">Redux</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <FaBootstrap className="icons bootstrap" size="2rem" />
              <h5 className="mt-2">Bootstrap</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <FaGitAlt className="icons git" size="2rem" />
              <h5 className="mt-2">Git</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <FaGithub className="icons github" size="2rem" />
              <h5 className="mt-2">Github</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <SiInsomnia className="icons insomnia" size="2rem" />
              <h5 className="mt-2">Insomnia</h5>
            </div>
            <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
              <FaFigma className="icons figma" size="2rem" />
              <h5 className="mt-2">Figma</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-section last-snap-item d-flex justify-content-center align-items-center about-lg-padding pb-5">
        <div className=" mx-5 text-center our-team-section">
          <h2 className=" mb-3 fw-bold team-members-title text-white">
            OUR TEAM
          </h2>
          <p>
            This project was developed through the collaboration and dedication
            of a team of committed professionals. Below, we introduce the team
            behind this project:
          </p>
          <div className="team-members">
            <div className="d-flex justify-content-around row ">
              <div className="d-flex flex-column justify-content-between member text-center p-3 m-3 ">
                <div>
                  <img
                    src="/img/sebastian-prado.webp"
                    alt=""
                    className="img-members"
                  />
                  <h3>Sebastian Prado</h3>
                  <p>Full Stack Web Developer</p>
                </div>
                <div>
                  <a
                    className="links"
                    href="https://www.linkedin.com/in/sebastian-prado-b05862281/"
                  >
                    <FaLinkedin size="1.5rem" className="m-1" />
                  </a>
                  <a className="links" href="https://github.com/SebaPrado">
                    <FaGithub size="1.5rem" className="m-1" />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between  member text-center p-3 m-3">
                <div>
                  <img
                    src="/img/pablo-abreu.webp"
                    alt=""
                    className="img-members"
                  />
                  <h3>Pablo Abreu</h3>
                  <p>Full Stack Web Developer</p>
                </div>
                <div>
                  <a
                    className="links"
                    href="https://www.linkedin.com/in/pablo-abreu-321650231/"
                  >
                    <FaLinkedin size="1.5rem" className="m-1" />
                  </a>
                  <a
                    className="links"
                    href="https://github.com/PabloAbreuMinasian"
                  >
                    <FaGithub size="1.5rem" className="m-1" />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between  member text-center p-3 m-3">
                <div>
                  <img
                    src="/img/ignacio-gonzalez-muniz.webp"
                    alt=""
                    className="img-members"
                  />
                  <h3>Ignacio González Muniz</h3>
                  <p>Full Stack Web Developer</p>
                </div>
                <div>
                  <a
                    className="links"
                    href="https://www.linkedin.com/in/migonzalezmuniz/"
                  >
                    <FaLinkedin size="1.5rem" className="m-1" />
                  </a>
                  <a className="links" href="https://github.com/hopnux">
                    <FaGithub size="1.5rem" className="m-1" />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between  member text-center p-3 m-3">
                <div>
                  <img
                    src="/img/emiliano-baston.webp"
                    alt=""
                    className="img-members"
                  />
                  <h3>Emiliano Baston</h3>
                  <p>Full Stack Web Developer</p>
                </div>
                <div>
                  <a
                    className="links"
                    href="https://www.linkedin.com/in/emiliano-baston/"
                  >
                    <FaLinkedin size="1.5rem" className="m-1" />
                  </a>
                  <a className="links" href="https://github.com/EmiBaston">
                    <FaGithub size="1.5rem" className="m-1" />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between  member text-center p-3 m-3">
                <div>
                  <img
                    src="/img/diego-munoz.webp"
                    alt=""
                    className="img-members"
                  />
                  <h3>Diego Muñoz</h3>
                  <p>Full Stack Web Developer</p>
                </div>
                <div>
                  <a
                    className="links"
                    href="https://www.linkedin.com/in/diego-mu%C3%B1oz-hughes-b83764219/"
                  >
                    <FaLinkedin size="1.5rem" className="m-1" />
                  </a>
                  <a className="links" href="https://github.com/diegoMunozH">
                    <FaGithub size="1.5rem" className="m-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
