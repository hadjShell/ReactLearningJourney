import { useState } from "react";

export default function Tasks({ project, setProject, setProjects }) {
  const [input, setInput] = useState("");

  function handleAddTask() {
    setProject(p => {
      p.tasks.push(input);
    });
    setProjects(ps => {
      ps.forEach(p => {
        if (p.id === project.id) p.tasks.push(input);
      });
    });
    setInput("");
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        ></input>
        <button
          onClick={handleAddTask}
          className="text-stone-700 hover:text-stone-950"
        >
          Add task
        </button>
      </div>

      {project.tasks.length === 0 ? (
        <p className="text-stone-800 my-4">This project has no task yet. </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.map(t => (
            <li key={Math.random()} className="flex justify-between my-4">
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
