import { collatedTasks } from "../constants";
import { v4 as uuidv4 } from "uuid";

export const collatedTasksExist = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);

export const getTitle = (projects, projectId) =>
  projects.find((project) => project.projectId === projectId);

export const getCollatedTitle = (projects, key) =>
  projects.find((project) => project.key === key);

export const generatePushId = ()=> uuidv4();
