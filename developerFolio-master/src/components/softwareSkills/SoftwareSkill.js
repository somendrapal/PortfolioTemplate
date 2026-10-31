import React, {useContext} from "react";
import {
  siBabel,
  siCplusplus,
  siConfluence,
  siCss,
  siEslint,
  siGit,
  siGithubactions,
  siGitlab,
  siHtml5,
  siJavascript,
  siJenkins,
  siJirasoftware,
  siJsonwebtokens,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siOpenjdk,
  siPostgresql,
  siReact,
  siRedux,
  siShadcnui,
  siSpringboot,
  siTanstack,
  siTailwindcss,
  siTestinglibrary,
  siTypescript,
  siWebpack
} from "simple-icons";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const skillIcons = {
  babel: siBabel,
  cplusplus: siCplusplus,
  confluence: siConfluence,
  css: siCss,
  eslint: siEslint,
  git: siGit,
  githubactions: siGithubactions,
  gitlab: siGitlab,
  html5: siHtml5,
  javascript: siJavascript,
  jenkins: siJenkins,
  jirasoftware: siJirasoftware,
  jsonwebtokens: siJsonwebtokens,
  mui: siMui,
  nextdotjs: siNextdotjs,
  nodedotjs: siNodedotjs,
  npm: siNpm,
  openjdk: siOpenjdk,
  postgresql: siPostgresql,
  react: siReact,
  redux: siRedux,
  shadcnui: siShadcnui,
  springboot: siSpringboot,
  tanstack: siTanstack,
  tailwindcss: siTailwindcss,
  testinglibrary: siTestinglibrary,
  typescript: siTypescript,
  webpack: siWebpack
};

function SkillIcon({skill}) {
  const icon = skill.icon ? skillIcons[skill.icon] : null;

  if (!icon && !skill.iconClass) {
    throw new Error(`No icon configured for skill "${skill.name}"`);
  }

  if (!icon) {
    return (
      <span className="skill-logo skill-logo-generic" aria-hidden="true">
        <i className={skill.iconClass}></i>
      </span>
    );
  }

  return (
    <svg
      className="skill-logo"
      viewBox="0 0 24 24"
      role="img"
      aria-label={`${skill.name} logo`}
    >
      <path fill={`#${icon.hex}`} d={icon.path}></path>
    </svg>
  );
}

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="software-skills-main-div">
      {skillsSection.skillCategories.map(category => (
        <section
          className={
            isDark ? "skill-category skill-category-dark" : "skill-category"
          }
          key={category.category}
          aria-labelledby={`skill-category-${category.category}`}
        >
          <h3 id={`skill-category-${category.category}`}>
            {category.category}
          </h3>
          <ul className="skill-list">
            {category.skills.map(skill => (
              <li className="skill-item" key={skill.name}>
                <SkillIcon skill={skill} />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
