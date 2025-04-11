import React, { Component } from "react";
import { StaticImageData } from "next/image";
//import logo from "../assets/images/bardicLogo.png";
interface ProjectBoxProps {
  key: number;
  project: {
    logo: StaticImageData;
    colour: string;
    projectName: string;
    shortDesc: string;
    frontend: string;
    backend: string;
    productPaper: string;
    codeLink: string;
    websiteLink?: string | undefined;
    caseStudyLink?: string | undefined;
    freeCodeCampLink?: string | undefined;
    video: string;
    classToAdd: string;
  };
  selectedProject: boolean;
  onclick: (key: number) => void;
  noProjectSelected: boolean;
}

class ProjectBox extends Component<ProjectBoxProps> {
  constructor(props: ProjectBoxProps) {
    super(props);
    console.log(props);
    this.state = {};
  }

  render() {
    const { selectedProject, noProjectSelected, project } = this.props;
    const classPill = selectedProject
      ? project.classToAdd + "Pill"
      : project.classToAdd + "Pill hiddenLink";

    return (
      <>
     
        <button
          className="landingBox"
          onMouseOver={() => this.props.onclick(this.props.key)}
          style={{ background: this.props.project.colour }}
          key={this.props.key}
        >
          <div
            className="landingBoxInner"
            style={{ backgroundImage: `url(${this.props.project.logo.src})` }}
          >
            <a
              href={this.props.project.codeLink}
              className={
                this.props.project.websiteLink === undefined
                  ? "landingBoxExternalLink soloLink"
                  : this.props.project.caseStudyLink === undefined
                  ? "landingBoxExternalLink landingBoxExternalLink2"
                  : "landingBoxExternalLink landingBoxExternalLink3"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <li
                className={
                  noProjectSelected ? classPill + " hiddenLink" : classPill
                }
                id="code-link"
              >
                <div>
                  <i className="fas fa-code fontIcon" />
                  See Code
                </div>
              </li>
            </a>
            {this.props.project.websiteLink && (
              <a
                href={this.props.project.websiteLink}
                className={
                  this.props.project.caseStudyLink === undefined
                    ? "landingBoxExternalLink landingBoxExternalLink2"
                    : "landingBoxExternalLink landingBoxExternalLink3"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                <li
                  className={
                    noProjectSelected ? classPill + " hiddenLink" : classPill
                  }
                  id="website-link"
                >
                  <div>
                    <i className="fas fa-external-link-alt fontIcon" />
                    Visit Website
                  </div>
                </li>
              </a>
            )}
            {this.props.project.caseStudyLink !== undefined && (
              <a
                href={this.props.project.caseStudyLink}
                className={
                  this.props.project.caseStudyLink === undefined
                    ? "landingBoxExternalLink landingBoxExternalLink2"
                    : "landingBoxExternalLink landingBoxExternalLink3"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                <li
                  className={
                    noProjectSelected ? classPill + " hiddenLink" : classPill
                  }
                >
                  <div>
                    <i className="fas fa-file-alt fontIcon" />
                    Case Study
                  </div>
                </li>
              </a>
            )}
          </div>
        </button>
      </>
    );
  }
}
export default ProjectBox;
