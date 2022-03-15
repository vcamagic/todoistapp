import React from "react";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { useSelectedProjectsValue } from "../../context";
import { generatePushId } from "../../helpers";
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