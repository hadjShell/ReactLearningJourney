import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import ProjectForm from "./components/ProjectForm";
import ProjectDetail from "./components/ProjectDetail";
import { useState } from "react";
import { useRef } from "react";
import { useImmer } from "use-immer";

function App() {
  const [projects, setProjects] = useImmer([]);
  const [project, setProject] = useImmer(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const id = useRef(0); // id generator

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projects}
        setIsCreatingProject={setIsCreatingProject}
        setProject={setProject}
        setIsSelected={setIsSelected}
      ></Sidebar>

      {!isCreatingProject ? (
        !isSelected ? (
          <Welcome setIsCreatingProject={setIsCreatingProject}></Welcome>
        ) : (
          <ProjectDetail
            project={project}
            projects={projects}
            setProject={setProject}
            setProjects={setProjects}
            setIsSelected={setIsSelected}
          ></ProjectDetail>
        )
      ) : (
        <ProjectForm
          setProjects={setProjects}
          setIsCreatingProject={setIsCreatingProject}
          setIsSelected={setIsSelected}
          id={id}
        ></ProjectForm>
      )}
    </main>
  );
}

export default App;
