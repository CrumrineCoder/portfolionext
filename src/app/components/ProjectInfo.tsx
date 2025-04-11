import { StaticImageData } from "next/image";
import React, { Component } from "react";
//import { Spring } from 'react-spring/renderprops';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
interface ProjectInfoProps {
  selectedProject: number;
  noProjectSelected: boolean;
  projectData: {
    logo: StaticImageData | string;
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
  }[];
}

class ProjectInfo extends Component<ProjectInfoProps> {
  constructor(props: ProjectInfoProps) {
    super(props);
    console.log(props);
    this.state = {};
  }

  render() {
    const { selectedProject, noProjectSelected, projectData } = this.props;
    return (
    <div
        className={
            noProjectSelected || !projectData[selectedProject]
                ? "landingTitleBody"
                : projectData[selectedProject].classToAdd +
                    "DarkOpacity landingTitleBody coloredTitleBody"
        }
    >
        <div className="landingTitle">
          {selectedProject !== null
            ? projectData[selectedProject].projectName
            : "Nicolas Crumrine"}
        </div>
        {selectedProject !== null ? (
          <div>
            <div className="landingAdditionalInfo">
              <ul className="landingAdditionalInfoPills">
                <div id="projectFrontEnd">
                  <li className="frontend">
                    {projectData[selectedProject].frontend}
                  </li>
                </div>
                <div id="projectBackEnd">
                  <li className="backend">
                    {projectData[selectedProject].backend}
                  </li>
                </div>
              </ul>
              <p>{projectData[selectedProject].shortDesc}</p>
              <p>{projectData[selectedProject].productPaper}</p>
            </div>
          </div>
        ) : (
          <div className="landingSubTitle">Front-end Web Developer</div>
        )}
      </div>
    );
  }
}

export default ProjectInfo;