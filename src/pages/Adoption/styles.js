import styled from "styled-components";
import { white } from "@carbon/colors";

export const PetItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const PetsTitle = styled.h4`
  font-weight: bold;
  font-size: 25px;
  font-family: "Impact, fantasy";
  text-align: center;
  color: rgba( 0, 240, 240, 0.9);
`;

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`;
export const PetsHeader = styled.h3`
  font-family:"Blippo, fantasy";
  color: aqua;
  text-align: center;
  font-size: 75px;
  `;
  export const PetBio = styled.p`
        
    font-style: oblique;
    background-color: rgba( 0, 0, 0, 0.4);
    border-radius: 4px;
    padding-left: 5px;   
    width: 50%;
    color: rgba( 90, 240, 240, 0.8); 
    margin-left: auto;
    margin-right: auto;
   
  `
  export const PetImg = styled.img`
  display: block;
  border-radius: 5px;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  `