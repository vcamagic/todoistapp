import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectsValue } from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <li
            key={project.projectId}
            data-dock-id={project.docId}
            data-testid="project-action"
            className={
              active === project.projectId
                ? "active sidebar__project"
                : "sidebar__project"
            }
          >
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
              }}
              onClick={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
              }}
            >
              <IndividualProject project={project} />
            </div>
          </li>
        ))}
    </div>
  );
};
