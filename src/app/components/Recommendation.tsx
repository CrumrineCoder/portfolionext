import React from "react";
import Image, { StaticImageData } from "next/image";

interface RecommendationProps {
  text: string;
  icon: string | StaticImageData;
  name: string;
  role: string;
  company: string;
  selectedProject: number | null;
  noProjectSelected: boolean;
  colour: string; 
}

const Recommendation: React.FC<RecommendationProps> = ({
  text,
  icon,
  name,
  role,
  company,
  noProjectSelected,
  colour
}: RecommendationProps) => {

  return (
    <div
      className={
        !noProjectSelected
          ? colour + "Dark recommendationContainer"
          : "recommendationContainer"
      }
    >
      <i className="fas fa-quote-left recommendationQuoteIcon"></i>
      <div
        className="recommendationText"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
      <div className="recommendationFooter">
        <Image alt="profile of the recommender" className="recommendationFooterImage" src={icon} />
        <div className="recommendationFooterText">
          <p className="recommendatonFooterName">{name}</p>
          <p className="recommendationFooterCompany">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};


export default Recommendation;
