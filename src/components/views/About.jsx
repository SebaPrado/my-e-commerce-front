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
      <div className=" d-flex justify-content-start align-items-start about-lg-padding pb-5 ">
        <div className="container row p-0 m-0 mx-auto">
          <div className="about-text-color ab1 col-12 col-md-10 col-xl-8 p-0 pt-5 p-4">
            <h2 className="text-white fw-bold mb-4">ABOUT THIS PROJECT</h2>
            <p className="mt-2 lh-lg">
              Equal Vision is an indie record label{" "}
              <span className="text-white fw-bold ms-1 me-1">
                E-commerce website .{" "}
              </span>{" "}
              It was created as a final project for the Hack Academy's{" "}
              <span className="text-white fw-bold ms-1 me-1">
                Full stack depeloper course ( an intensive 4 - month , Full -
                time program)
              </span>{" "}
              . It showcases my understanding of web development, with over 250
              hours of coding activity dedicated to its creation. The objective:
              to create a seamless and enjoyable{" "}
              <span className="text-white fw-bold ms-1 me-1">E-commerce</span>,
              integrating the extensive knowledge aquired during the course.
            </p>
            {/* <p className="lh-lg">
              The{" "}
              <span className="text-white fw-bold">
                {" "}
                full stack web developer
              </span>{" "}
              is an{" "}
              <span className="text-white fw-bold">
                intensive 4 - month{" "}
              </span>,{" "}
              <span className="text-white fw-bold">Full - time program</span>,
              which encompasses
              <span className="text-white fw-bold"> over 700 hours </span> of
              learning covering Node.js, Express, React.js, MySQL, MongoDB, and
              Git. This final project serves as a testament to the student's
              ability to apply the practical aspects of the Course's curriculum
              .
            </p> */}
          </div>
          <div className="col-6"></div>
          <div className="col-12">
            <div className="row d-flex justify-content-between ">
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div className="mx-1 bg-black p-3 p-lg-4 about-cards h-100 letterspacing">
                  <h2>How I Developed the Backend</h2>
                  <p className="lh-lg mt-4 ">
                    I built the backend infrastructure using{" "}
                    <span className="text-white fw-bold">Node.js</span> and{" "}
                    <span className="text-white fw-bold">Express</span>{" "}
                    framework, where I implemented{" "}
                    <span className="text-white fw-bold">RESTful APIs</span>{" "}
                    with{" "}
                    <span className="text-white fw-bold">
                      asynchronous functions
                    </span>{" "}
                    for data handling.
                  </p>
                  <p className="lh-lg mt-4 ">
                    I integrated{" "}
                    <span className="text-white fw-bold">
                      middleware authentication
                    </span>{" "}
                    and{" "}
                    <span className="text-white fw-bold">
                      route controllers
                    </span>{" "}
                    for secure database operations and to manage client's
                    requests .
                  </p>
                  <p className="lh-lg mt-4">
                    Following the{" "}
                    <span className="text-white fw-bold">
                      MVC architecture pattern
                    </span>
                    , I organized the code with separate{" "}
                    <span className="text-white fw-bold">Models</span> for data
                    structure,{" "}
                    <span className="text-white fw-bold">Controllers</span> for
                    business logic. With the help of{" "}
                    <span className="text-white fw-bold">Insomnia</span> I
                    implemented the 4{" "}
                    <span className="text-white fw-bold">CRUD operations</span>{" "}
                    (Post, Get, Update, Delete) to handle all database
                    interactions.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div className="mx-1 bg-black p-3 p-lg-4 about-cards h-100 letterspacing">
                  <h2>How I Built the Frontend</h2>
                  <p className="lh-lg mt-4">
                    I created the user interface using{" "}
                    <span className="text-white fw-bold">React.js</span>,
                    implementing{" "}
                    <span className="text-white fw-bold">
                      component-based architecture
                    </span>{" "}
                    for better code reusability. I used{" "}
                    <span className="text-white fw-bold">React Router</span> to
                    create a smooth navigation experience.
                  </p>
                  <p className="lh-lg mt-4">
                    {" "}
                    I developed
                    <span className="text-white fw-bold">
                      {" "}
                      API integrations
                    </span>{" "}
                    through <span className="text-white fw-bold">Axios</span> to
                    handle all backend communications and data fetching
                    operations.
                  </p>
                  <p className="lh-lg mt-4">
                    For state management, I implemented{" "}
                    <span className="text-white fw-bold">Redux</span> to handle
                    global application state, along with{" "}
                    <span className="text-white fw-bold">React Hooks</span> for
                    local states. This helped manage shopping cart functionality
                    and user authentication status.
                  </p>
                  {/* <p className="lh-lg mt-4">
                    I enhanced the{" "}
                    <span className="text-white fw-bold">
                      responsive design
                    </span>{" "}
                    using custom CSS and while implementing{" "}
                  </p> */}
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div className="mx-1 bg-black p-3 p-lg-4 about-cards h-100 letterspacing">
                  <h2>Database, Deployment, and Other</h2>
                  <p className="lh-lg mt-4">
                    I implemented{" "}
                    <span className="text-white fw-bold">Sequelize</span> as an
                    ORM to interact between the backend and the{" "}
                    <span className="text-white fw-bold">
                      relational database , MySQL
                    </span>
                    , managed using{" "}
                    <span className="text-white fw-bold">TablePlus</span>. The
                    database models and relationships were efficiently handled
                    through{" "}
                    <span className="text-white fw-bold">Sequelize </span>.
                  </p>
                  <p className="lh-lg mt-4">
                    For deployment, I utilized{" "}
                    <span className="text-white fw-bold">Vercel</span> to host
                    all three parts of the project: the frontend, dashboard, and
                    backend. Due to Vercel's MySQL limitations, I migrated the
                    database to{" "}
                    <span className="text-white fw-bold">PostgreSQL</span> for
                    production deployment. Until now, I use Mysql for dev and
                    Postgre for production
                  </p>
                  <p className="lh-lg mt-4">
                    Given the medium scale of the project, I implemented{" "}
                    <span className="text-white fw-bold">Formidable</span> for
                    efficient image processing and storage.
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
            <h2 className="fw-bold text-white mb-5">TECHNOLOGIES & TOOLS</h2>
            {/* <p>This website was built using these technologies and tools:</p> */}
          </div>
          <div className="row d-flex justify-content-around align-content-around glass mx-4 py-4">
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
        <div className=" mx-5 text-center our-team-section letterspacing px-5">
          <h2 className=" mb-5 fw-bold team-members-title text-white ">
            WHO AM I... ?
          </h2>
          <p className=" fs-5 mb-5">
            Big question.. Instead of giving structured information ( will keep
            that for the database tables..), I'll just write what I ve lately
            learned from life... life that has kicked my ass in the last 16
            months, what I apreciate ( now that it's over !  ) .. It taught me, among other many lessons, 
            that fear of taking risks is the greatest enemy of a great life. And
           thinking about it, fear shows up on a daily basis..{" "}
          </p>
          <p className=" fs-5 mb-5">
            Knowing the greatest risk (no taking action), I decided to take the plunge,
            leave my not bad (at all) former profession as an Agricultural engineer
            behind, and venture into the world of Development... who knows, in
            the future I might develop something for the Agriculture sector..
            Anyway, this is the beginning of a new stage, and with the two key
            ingredients, immense effort and resilience, I will definetively make
            it happen. What lies ahead is amazing..{" "}
          </p>{" "}
          <p className=" fs-5 mb-5">
            Contact me to discuss projects and ideas, commitment-free . If you
            made it this far (and you're not a dev friend reviewing my work),
            thank you for your time, no matter what happens from here on out!
          </p>
          <div className="team-members">
            <div className="d-flex justify-content-around ">
              <div className="d-flex flex-column justify-content-between member text-center p-3 m-3 ">
                <a
                  className="email-link "
                  href="mailto:sebastian.pradomelesi@gmail.com"
                >
                  <div>
                    <img src="/img/seb.png" alt="" className="img-members" />
                    <h3>Sebastian Prado</h3>
                    <p>Click here to talk ! </p>
                  </div>
                  <div>
                    {/* <a
                    className="links"
                    href="https://www.linkedin.com/in/sebastian-prado-b05862281/"
                  >
                    <FaLinkedin size="1.5rem" className="m-1" />
                  </a>
                  <a className="links" href="https://github.com/SebaPrado">
                    <FaGithub size="1.5rem" className="m-1" />
                  </a> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
