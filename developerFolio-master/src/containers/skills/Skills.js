import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={800} distance="20px">
      <section className="main skills-section" id="skills">
        <div className="skills-content">
          <h1 className="skills-heading">{skillsSection.title}</h1>
          <p className="subTitle skills-text-subtitle">
            {skillsSection.subTitle}
          </p>
          <SoftwareSkill />
        </div>
      </section>
    </Fade>
  );
}
