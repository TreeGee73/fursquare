import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import { ProjectItem, ProjectTitle, SkillContainer } from "./styles";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div >
        <SectionTitle style={{fontFamily: "Blippo, fantasy", color: "aqua", textAlign: "center", fontSize: "75px" }}>Projects</SectionTitle>
        <ul style={{
                  // fontStyle: "oblique",
                  backgroundColor: "rgba( 0, 0, 0, 0.5)",
                  borderRadius: "4px",
                  paddingLeft: "2px",
                  width: "100%",
                  alignContent: "center"
                }}>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle style={{fontSize: "25px", fontFamily: "Impact, fantasy", textAlign: "center", color: "rgba( 0, 240, 240, 0.9)" }}>{project.name}</ProjectTitle>
              {/* {console.log(project.images[0].resolutions.thumbnail.url)} */}
              <img 
                style={{display: "block", borderRadius: "5px", alignContent: "center", marginLeft: "auto", marginRight: "auto", marginBottom: "5px",}}
                
                src={project.images[0].resolutions.thumbnail.url}
                alt="Project Demo"
              />
              <p
               style={{
                 
                 fontStyle: "oblique",
                  backgroundColor: "rgba( 0, 0, 0, 0.4)",
                  borderRadius: "4px",
                  paddingLeft: "5px",
                  
                  width: "50%",
                  color: "rgba( 90, 240, 240, 0.8)", 
                  marginLeft: "auto", 
                  marginRight: "auto"
                }}
                >{project.summary}</p>
              <SkillContainer style={{
                  borderRadius: "4px",
                  width: "fit-content",
                  color: "rgba( 90, 240, 240, 0.8)", 
                  marginLeft: "auto", 
                  marginRight: "auto"
                }}>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill style={{backgroundColor: "black", color: "aqua", alignItems: "center"}}  key={j}>{item}</Pill>
                ))}
              </SkillContainer>
              <div style={{textAlign: "center"}}>
                <a style={{fontFamily: "Blippo, fantasy", color: "aqua", letterSpacing:"1px" }}href={project.githubUrl} rel="noreferrer" target="_blank">
                  Github Repository
                </a>
              </div>
              <br></br>
              <div style={{textAlign: "center"}}>
                <a style={{fontFamily: "Blippo, fantasy", color: "aqua", letterSpacing:"1px" }}href={project.website} rel="noreferrer" target="_blank">
                  Deployed App
                </a>
              </div>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
