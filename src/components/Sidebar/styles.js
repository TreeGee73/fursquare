import styled from "styled-components";
import { SideNav } from "carbon-components-react/lib/components/UIShell";

export const StyledSideNav = styled(SideNav)`
background-image: url("./background11.jpg");
background-color: black;
  background-size: cover;
  background-position: top center;
  @media (max-width: 200px) {
    display: none;
    
  }
`;
