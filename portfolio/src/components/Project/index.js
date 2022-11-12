import React from "react";


function Project({project}) {
const {name, description, repo, link} = project

return (
  <div className="project" key={name}>
    <img src={require(`../../assets/${name}.png`)}
    alt={name} className="project.bg"></img>
    <div className="project-text">
      <h3>
        <a href={link}>{name}</a>{' '}
        <a href={repo}>{repo}</a>{' '} 
        {/* //can be github icon */}

        
      </h3>
      <p>{description}</p>
    </div>
  </div>
)


  
}
export default Project;
