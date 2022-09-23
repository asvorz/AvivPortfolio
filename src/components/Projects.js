import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "React Search Project",
      description: "Design Css & Development",
      imgUrl: projImg1,
      link: "https://asvorz.github.io/MonsterFriends/",
    },
    {
      title: "Class With Style - Ecommerce",
      description: "React Project with Redux, BootStrap ",
      imgUrl: projImg2,
      link: "",
    },
    {
      title: "Virtual Keyboard - HTML, CSS & JS",
      description: "Vanila JavaScript and Css",
      imgUrl: projImg3,
      link: "https://github.com/asvorz/VirtualKeyboard",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <div>
                  <p className="text-start">
                    In my projects, I learned and experimented with React,
                    JavaScript, CSS, HTML and server-side programming
                    languages like NodeJS, ExpressJS, SQL and MongoDB. <br></br>
                    I was involved in projects that interested me and
                    also a real active store project
                  </p>
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                     </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
