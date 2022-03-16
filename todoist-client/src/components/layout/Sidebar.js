import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { useSelectedProjectsValue } from "../../context";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectsValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
          onKeyDown={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
          tabIndex={0}
          role="button"
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          data-testid="today"
          className={active === "today" ? "active" : undefined}
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
          onKeyDown={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
          tabIndex={0}
          role="button"
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          data-testid="next_7"
          className={active === "next_7" ? "active" : undefined}
          onClick={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
          onKeyDown={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
          tabIndex={0}
          role="button"
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
        role="button"
        tabIndex={0}
      >
        <span className={!showProjects ? "hidden-projects" : undefined}>
          {showProjects ? <FaChevronDown /> : <FaChevronRight />}
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
