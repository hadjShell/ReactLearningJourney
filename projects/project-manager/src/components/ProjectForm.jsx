import Input from "./Input";
import { useImmer } from "use-immer";

export default function ProjectForm({
  setIsCreatingProject,
  setProjects,
  setIsSelected,
  id,
}) {
  const [inputs, setInputs] = useImmer({
    title: "",
    description: "",
    date: new Date(),
  });

  // function reset() {
  //   setInputs(i => {
  //     i.title = "";
  //     i.description = "";
  //     i.date = null;
  //   });
  // }

  function handleCancel() {
    // no need to rest, when cancelled, this component is removed from UI tree,
    // hence the state is discarded
    //reset();
    setIsCreatingProject(false);
  }

  function handleSave() {
    const project = { ...inputs, id: id.current++, tasks: [] };
    setProjects(p => {
      p.push(project);
    });
    setIsCreatingProject(false);
    setIsSelected(false);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={handleCancel}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <form className="mt-4 text-right">
        <Input
          label="Title"
          style="input"
          type="text"
          value={inputs.title}
          onChange={e => {
            setInputs(i => {
              i.title = e.target.value;
            });
          }}
          required
        ></Input>
        <Input
          label="Description"
          style="textarea"
          value={inputs.description}
          onChange={e => {
            setInputs(i => {
              i.description = e.target.value;
            });
          }}
          required
        ></Input>
        <Input
          label="Due Date"
          style="input"
          type="date"
          value={inputs.date}
          onChange={e => {
            setInputs(i => {
              i.date = e.target.value;
            });
          }}
          required
        ></Input>
      </form>
    </div>
  );
}
