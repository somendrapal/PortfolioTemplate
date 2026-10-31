import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SoftwareSkill from "./components/softwareSkills/SoftwareSkill";
import StyleContext from "./contexts/StyleContext";
import {skillsSection} from "./portfolio";
import {it, vi} from "vitest";

vi.mock("lottie-react", () => ({
  default: () => null
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders every resume skill with a matching logo or icon", () => {
  const div = document.createElement("div");
  const skills = skillsSection.skillCategories.flatMap(
    category => category.skills
  );

  ReactDOM.render(
    <StyleContext.Provider value={{isDark: false}}>
      <SoftwareSkill />
    </StyleContext.Provider>,
    div
  );

  expect(div.querySelectorAll(".skill-item")).toHaveLength(skills.length);
  expect(div.querySelectorAll(".skill-logo")).toHaveLength(skills.length);

  for (const skill of skills) {
    expect(div.textContent).toContain(skill.name);
  }

  ReactDOM.unmountComponentAtNode(div);
});
