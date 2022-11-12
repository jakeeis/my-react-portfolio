import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "project 1",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
    {
      name: "project 1",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
    {
      name: "project 1",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
    {
      name: "project 1",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
    {
      name: "project 1",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
  ]);
  return (
    <div>
      <div classRow="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
