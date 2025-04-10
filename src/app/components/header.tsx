import React from "react";
import Image from "next/image";
import emailIcon from "../../../public/email.svg";
import githubIcon from "../../../public/github.svg";
import linkedinIcon from "../../../public/linkedin.svg";
import profile from "../../../public/pfp.jpg";

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <div className="left-elements">
        <Image
          src={profile}
          className="profile-picture"
          alt="Nicolas Crumrine's profile"
        />
        <p>Nicolas Crumrine</p>
      </div>
      <div className="right-elements">
        <a
          href="https://github.com/CrumrineCoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={githubIcon} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-crumrine-50899b120/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedinIcon} alt="" />
        </a>
        <a
          href="mailto:crumrinecoding@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={emailIcon} alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
