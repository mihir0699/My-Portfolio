import { useEffect, useState, useRef } from "react";
import Img from "./images/mihir0699.jpg";
import Chattel from "./images/Chattel.jpg";
import Menu from "./images/menu.png";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Input, Button } from "antd";
import { MailTwoTone, HomeTwoTone } from "@ant-design/icons";
import { useInView, InView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import shortid from "shortid";
import * as FaIcons from "react-icons/fa";
import Git from "./images/git.svg";
import * as AiIcons from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { formSubmit } from "./firebase/formSubmit";
import "./App.css";
import "./mobile.css";

function App() {
  const projects_ref = useRef(null);
  const about_ref = useRef(null);
  const [form, setForm] = useState({});
  const form_ref = useRef();
  const skills_ref = useRef(null);
  const education_ref = useRef(null);
  const contact_ref = useRef(null);
  const experience_ref = useRef(null);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.classList.contains("ham")) {
        if (sidebar === true) setSidebar(false);
      }
    });
  }, [sidebar]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let x = form;
    x.id = shortid.generate();
    await formSubmit(x);
    toast.success("Thanks for contacting me! I will get back to you asap");
    form_ref.current.reset();
  };
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  const intro = {
    hidden: {
      x: -400,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.5,
        },
        x: {
          duration: 1,
          type: "spring",
          stiffness: 80,
          bounce: 0.25,
        },
      },
    },
  };

  const icons = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <Router>
      <div className="App">
        <div className="nav_hide">
          <Nav className="nav_width">
            <NavLink
              to="/"
              className="nav_head"
              onClick={() => {
                about_ref.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              Mihir Gupta
            </NavLink>

            <NavMenu>
              <NavLink
                to="/"
                onClick={() => {
                  about_ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                About Me
              </NavLink>
              <NavLink
                to="/"
                onClick={() => {
                  skills_ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                Skills
              </NavLink>
              <NavLink
                to="/"
                onClick={() => {
                  experience_ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                Work Experience
              </NavLink>
              <NavLink
                to="/"
                onClick={() => {
                  projects_ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                Projects
              </NavLink>
              <NavLink
                to="/"
                onClick={() => {
                  education_ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                Education
              </NavLink>
              <NavLink
                to="/"
                onClick={() => {
                  contact_ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                style={{ marginRight: "2rem" }}
              >
                Contact Me
              </NavLink>
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
          </Nav>
        </div>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
              <img
                src={Menu}
                className="ham"
                style={{ height: "15px" }}
                alt="ham"
              />
            </Link>
          </div>
          <nav
            className={sidebar ? "nav-menu active" : "nav-menu"}
            style={{ zIndex: "1000" }}
          >
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars1">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>

              <li className="nav-text">
                <Link
                  onClick={showSidebar}
                  onClick={() => {
                    about_ref.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <span>About Me</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link
                  onClick={showSidebar}
                  onClick={() => {
                    skills_ref.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <span>Skills</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link
                  onClick={showSidebar}
                  onClick={() => {
                    experience_ref.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <span>Work Experience</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link
                  onClick={showSidebar}
                  onClick={() => {
                    projects_ref.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <span>Projects</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link
                  onClick={showSidebar}
                  onClick={() => {
                    education_ref.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <span>Education</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link
                  onClick={showSidebar}
                  onClick={() => {
                    contact_ref.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <span>Contact Me</span>
                </Link>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>

        <ToastContainer />
        <div ref={about_ref} className="intro_div_class">
          <h1 className="headings">About me</h1>
          <div className="intro">
            <div className="image">
              <img src={Img} className="my_image" alt="mihir" />
            </div>
            <div className="intro_info">
              <span className="intro_head">Hi, myself Mihir</span>
              <br />
              <br /> I am a passionate self taught MERN Stack developer and a
              competitive programmer. I am currently a third year computer
              science student pursuing Bachelor of Technology at JSS Academy of
              Technical Education, Noida. In my free time you will find me
              playing "Among Us" 🤪 or scrolling{" "}
              <a
                href="https://twitter.com/mihir0699"
                target="_blank"
                className="twitter"
              >
                {" "}
                Twitter{" "}
              </a>{" "}
              🤳.
              <br />
              <a
                href="https://drive.google.com/file/d/1IOu6mtGUaGAChfOjg3IXgw1LiaI6PQoA/view?usp=sharing"
                target="_blank"
                download
              >
                {" "}
                <button class="resume">
                  Resume &nbsp;<i class="far fa-file"></i>
                </button>
              </a>
            </div>

            <div>
              <a href="https://github.com/mihir0699" target="_blank">
                {" "}
                <img
                  className="social_icons"
                  src="https://www.flaticon.com/svg/static/icons/svg/2111/2111425.svg"
                />
              </a>
              <a href="https://www.instagram.com/mihir_gupta_1" target="_blank">
                <img
                  className="social_icons"
                  src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg"
                />
              </a>
              <a href="https://www.linkedin.com/in/mihir0699/" target="_blank">
                <img
                  className="social_icons"
                  src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                />
              </a>
            </div>
          </div>
        </div>

        <InView>
          {({ inView, ref, entry }) => (
            <div ref={skills_ref}>
              <motion.div
                variants={icons}
                initial="hidden"
                animate={inView ? "animate" : "hidden"}
                ref={ref}
              >
                <h1 className="headings">Skills</h1>
                <div className="skills_icons">
                  <div className="skills_icon">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png"
                          alt="cpp"
                        />
                      </div>
                      <div className="flip-card-back">C++</div>
                    </div>
                  </div>

                  <div className="skills_icon">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
                          alt="js"
                        />
                      </div>
                      <div className="flip-card-back">JavaScript</div>
                    </div>
                  </div>

                  <div className="skills_icon">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png"
                          alt="node"
                        />
                      </div>
                      <div className="flip-card-back">Node.js</div>
                    </div>
                  </div>
                  <div className="skills_icon">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src="https://img.icons8.com/color/96/000000/mongodb.png"
                          alt="mongo"
                        />
                      </div>
                      <div className="flip-card-back">MongoDB</div>
                    </div>
                  </div>
                  <div className="skills_icon">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                          alt="react"
                        />
                      </div>
                      <div className="flip-card-back">React.js</div>
                    </div>
                  </div>
                  <div className="skills_icon">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
                          alt="python"
                        />
                      </div>
                      <div className="flip-card-back">Python</div>
                    </div>
                  </div>
                  <div className="skills_icon">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                          alt="firebase"
                        />
                      </div>
                      <div className="flip-card-back">Firebase</div>
                    </div>
                  </div>
                  <div className="skills_icon">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={Git} alt="git" />
                      </div>
                      <div className="flip-card-back">Git</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </InView>
        <InView>
          {({ inView, ref, entry }) => (
            <div ref={experience_ref}>
              <motion.div
                variants={icons}
                initial="hidden"
                animate={inView ? "animate" : "hidden"}
                ref={ref}
              >
                <h1 className="headings">Work Experience</h1>
                <div className="work_exp">
                  <div className="image_work_ex">
                    <img src={Chattel} alt="chattel" />
                  </div>
                  <div className="work_exp_div">
                    <h2>
                      Chattel Technologies{" "}
                      <span className="duration">
                        &nbsp;Sept 2020 - Oct 2020
                      </span>
                    </h2>

                    <h3>Full Stack Developer</h3>
                    <ul className="work_exp_list">
                      <li>
                        Designed and implemented a unique and user-friendly
                        eCommerce website for the company.
                      </li>
                      <li>Developed efficient REST API's.</li>
                      <li>Deployed the project on various platforms.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </InView>
        <InView>
          {({ inView, ref, entry }) => (
            <div ref={projects_ref}>
              <motion.h1
                className="headings"
                variants={icons}
                initial="hidden"
                animate={inView ? "animate" : "hidden"}
                ref={ref}
              >
                Projects
              </motion.h1>
              <motion.div
                className="project_grid"
                variants={icons}
                initial="hidden"
                animate={inView ? "animate" : "hidden"}
                ref={ref}
              >
                <div className="project_css">
                  <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/NvLRpNzKYss"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <div className="project_disc_internal">
                    <h2 style={{ fontFamily: "Montserrat" }}>
                      <a
                        href="https://github.com/mihir0699/FoodEazy"
                        target="_blank"
                        className="links"
                      >
                        Food Eazy
                      </a>
                    </h2>

                    <h4 className="project_desc">
                      Developed an online platform for food ordering to ease the
                      process of placing order for customers and receive orders
                      for restaurant owners.
                    </h4>
                    <button class="resume2">
                      <a
                        href="https://foodeazy-web.herokuapp.com/"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button class="resume1">
                      <a
                        href="https://github.com/mihir0699/FoodEazy/"
                        target="_blank"
                      >
                        <i
                          class="fab fa-github fa-1x"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </a>
                    </button>
                  </div>
                </div>
                <div className="project_css">
                  <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/kW7Gzwbn2yk"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <div className="project_disc_internal">
                    <h2 style={{ fontFamily: "Montserrat" }}>
                      <a
                        href="https://github.com/mihir0699/FoodEazy"
                        target="_blank"
                        className="links"
                      >
                        Insta Poll
                      </a>
                    </h2>

                    <h4 className="project_desc">
                      Developed a Real-Time Polling website using React.js and
                      Firebase that eases the process of creating polls and
                      sharing them across multiple social platforms.
                    </h4>
                    <button class="resume2">
                      <a
                        href="https://insta-poll-72ce3.web.app/"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button class="resume1">
                      <a
                        href="https://github.com/mihir0699/Insta-Poll"
                        target="_blank"
                      >
                        <i
                          class="fab fa-github fa-1x"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </a>
                    </button>
                  </div>
                </div>
                <div className="project_css">
                  <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/7j9qi99gRbI"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <div className="project_disc_internal">
                    <h2 style={{ fontFamily: "Montserrat" }}>
                      <a
                        href="https://github.com/mihir0699/FoodEazy"
                        target="_blank"
                        className="links"
                      >
                        Instagram Clone
                      </a>
                    </h2>

                    <h4 className="project_desc">
                      I have made this Instagram Clone using technologies like
                      React.js, firebase and Ant Design. It has all the basic
                      functionalties instagram offers.
                    </h4>
                    <button class="resume2">
                      {" "}
                      <a
                        href="https://mihir-insta.firebaseapp.com/"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button class="resume1">
                      <a
                        href="https://github.com/mihir0699/Instagram-Clone"
                        target="_blank"
                      >
                        <i
                          class="fab fa-github fa-1x"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </a>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref, entry }) => (
            <div ref={education_ref}>
              <motion.div
                variants={icons}
                initial="hidden"
                animate={inView ? "animate" : "hidden"}
                ref={ref}
              >
                <h1 className="headings">Education</h1>
                <VerticalTimeline className="timeline">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2014 - 2015"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={
                      <i
                        class="fas fa-school"
                        style={{
                          marginTop: "50%",
                          transform: "translate(0%, -50%)",
                        }}
                      />
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Secondary School
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      9.6 CGPA
                    </h4>
                    <p>S.S.K.L.A.M.Bal Vidya Mandir, Jalaun (UP)</p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016-2017"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    contentStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    icon={
                      <i
                        class="fas fa-school"
                        style={{
                          marginTop: "50%",
                          transform: "translate(0%, -50%)",
                        }}
                      />
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Senior Secondary School
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      87.2%
                    </h4>
                    <p>S.S.K.L.A.M.Bal Vidya Mandir, Jalaun (UP)</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2018 - present"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={
                      <i
                        class="fas fa-graduation-cap"
                        style={{
                          marginTop: "50%",
                          transform: "translate(0%, -50%)",
                        }}
                      />
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Bachelor of Technology
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      8.2 CGPA
                    </h4>
                    <p>JSS Academy of Technical Education, Noida</p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    iconStyle={{
                      background: "rgb(16, 204, 82)",
                      color: "#fff",
                    }}
                    icon={
                      <i
                        class="fas fa-star"
                        style={{
                          marginTop: "50%",
                          transform: "translate(0%, -50%)",
                        }}
                      ></i>
                    }
                  />
                </VerticalTimeline>
              </motion.div>
            </div>
          )}
        </InView>
        <InView>
          {({ inView, ref, entry }) => (
            <div ref={contact_ref}>
              <motion.div
                variants={icons}
                initial="hidden"
                animate={inView ? "animate" : "hidden"}
                ref={ref}
              >
                <h1 className="headings">Contact Me</h1>
                <div className="contact_grid">
                  <div className="contact_div">
                    <div>
                      <MailTwoTone />{" "}
                      <a
                        href="mailto: mihir0699@gmail.com"
                        style={{ textDecoration: "none", color: "blue" }}
                      >
                        mihir0699@gmail.com
                      </a>
                    </div>

                    <div>
                      <HomeTwoTone /> Noida, India
                    </div>
                  </div>

                  <div className="conact_div_styles">
                    <form
                      className="form"
                      onSubmit={handleSubmit}
                      ref={form_ref}
                    >
                      <input
                        type="text"
                        className="input_field contact_div_styles1"
                        placeholder="Name"
                        required
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                        }}
                      ></input>
                      <input
                        type="email"
                        className="input_field"
                        placeholder="Email"
                        required
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                        }}
                      ></input>
                      <textarea
                        className="message"
                        type="text"
                        placeholder="Message"
                        required
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                        }}
                      ></textarea>
                      <br />
                      <button type="submit" className="button_submit">
                        SEND MESSAGE
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </InView>
      </div>
    </Router>
  );
}

export default App;
