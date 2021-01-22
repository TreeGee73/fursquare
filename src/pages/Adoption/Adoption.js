import React from "react";
import Layout from "../../components/Layout";
import { PetItem, PetsHeader, PetsTitle, PetBio, PetImg } from "./styles"

const Adoption = ({user}) => {
    return (
        <Layout user={user}>
      <div >
        <PetsHeader  >Adopt Me</PetsHeader>
        <ul style={{
                  // fontStyle: "oblique",
                  backgroundColor: "rgba( 0, 0, 0, 0.5)",
                  borderRadius: "4px",
                  paddingLeft: "2px",
                  width: "100%",
                  alignContent: "center"
                }}>
          {user.projects.map((project, i) => (
              console.log(user),
            <PetItem key={i}>
              <PetsTitle >{project.name}</PetsTitle>
              {/* {console.log(project.images[0].resolutions.thumbnail.url)} */}
              <PetImg 
                
                
                src={project.images[0].resolutions.thumbnail.url}
                alt="Project Demo"
              ></PetImg>
              <PetBio>{project.summary}</PetBio>
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
            </PetItem>
          ))}
        </ul>
      </div>
    </Layout>
    )
}
export default Adoption;