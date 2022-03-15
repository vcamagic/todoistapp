import React from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider } from "./context";
import { SelectedProjectProvider } from "./context/selected-project-context";
export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <Header />
      <Content />
    </ProjectsProvider>
  </SelectedProjectProvider>
);
