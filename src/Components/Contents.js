import React from "react";
import { Row, Col, Progress } from "antd";
import HoverCard from "./HoverCard";
import "./Style.css"
import { Color } from "antd/es/color-picker";



const Contents = ({ selectedPage, setSelectedPage }) => {
  const Skills=["React", "JavaScript", "HTML", "CSS", "Ant Design","Git"];
  const pages = {
    home: (
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <HoverCard
            title="Welcome to My Portfolio"
            content="Discover my projects and learn more about me."
            buttonText="View Projects"
            onClick={() => setSelectedPage("projects")}
          />
        </Col>
      </Row>
    ),
    about: (
      <Row gutter={[20, 20]} justify="center">
        <Col xs={24} md={8}>
          <HoverCard title="Background" content="Front-end developer with expertise in React and Ant Design." />
        </Col>
        <Col xs={24} md={10}>
          <HoverCard title="Skills" content="Technologies I work with:" skills={Skills}/>

        </Col>
      </Row>
    ),
    projects: (
      <Row gutter={[16, 16]} justify="center">
        {[
          { title: "Project 1", desc: "A React-based project with Ant Design." },
          { title: "Project 2", desc: "A portfolio website built with React and CSS." },
          { title: "Project 3", desc: "An interactive dashboard with data visualization." },
        ].map((project, index) => (
          <Col xs={24} md={8} key={index}>
            <HoverCard title={project.title} content={project.desc} />
          </Col>
        ))}
      </Row>
    ),
    contact: (
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={8}>
          <HoverCard
            title="Contact Me"
            content="I'd love to hear from you! Whether you have a project in mind, need a front-end developer, or just want to say hi, feel free to reach out."
            buttonText="Email Me"
            onClick={() => (window.location.href = "mailto:rasikapriyabsc@gmail.com")}
          />
        </Col>
      </Row>
    ),
  };

  return pages[selectedPage] || pages.home;
};


export default Contents;