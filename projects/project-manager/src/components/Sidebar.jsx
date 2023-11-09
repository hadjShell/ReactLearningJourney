import Button from "./Button";

export default function Sidebar({
  projects,
  setIsCreatingProject,
  setProject,
  setIsSelected,
}) {
  function handleSelectProject(e) {
    const id = Number(e.target.dataset.id);
    const project = projects.find(p => p.id === id);
    setProject({ ...project });
    setIsSelected(true);
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="b-8 font-bold uppercase md:text-xl text-stone-200 py-4">
        Your Projects
      </h2>
      <Button onClick={() => setIsCreatingProject(true)}>+ Add Project</Button>
      <div>
        <ul className="mt-8">
          {projects.map(p => (
            <button
              key={p.id}
              data-id={p.id}
              onClick={handleSelectProject}
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            >
              {p.title}
            </button>
          ))}
        </ul>
      </div>
    </aside>
  );
}
