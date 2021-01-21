import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";

import { HeaderContainer, Header, Image, ViewResumeLink } from "./styles";

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src="././background9.jpg" />
        <div style={{
                  
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderRadius: "4px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  width: "fit-content",
                }}>
          <h2 style={{fontFamily: "Blippo, fantasy", color: "white" }}>User name here</h2>
          <h4>
            <a style={{fontFamily: "Blippo, fantasy", color: "rgba(50, 50, 180, 1)" }}
              href={`profile link?`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @profile link
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p style={{fontFamily: "Blippo, fantasy", color: "white" }}>Living "zipcode, or city..address?"</p>
          <p style={{fontFamily: "Blippo, fantasy", color: "white" }}>
            {user.basics.yearsOfExperience} "Maybe experience or random relevant info"
          </p>
          <p style={{fontFamily: "Blippo, fantasy", color: "white" }}>"Bio here</p>
          <p style={{fontFamily: "Blippo, fantasy", color: "black" }}>
            Blog:{" "}
            <a
              href={user.basics.blog}
              target="_blank"
              rel="noreferrer noopener"
            >
              {user.basics.blog}
            </a>
          </p>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
          style={{backgroundColor: "aqua",
        color: "black"}}
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;

