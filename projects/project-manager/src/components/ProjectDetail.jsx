import Tasks from "./Tasks";

export default function ProjectDetail({
  project,
  projects,
  setProject,
  setProjects,
  setIsSelected,
}) {
  function handleDelete() {
    setProjects(projects.filter(p => p.id !== project.id));
    setIsSelected(false);
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={handleDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{project.date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      <Tasks
        project={project}
        setProject={setProject}
        setProjects={setProjects}
      ></Tasks>
    </div>
  );
}
