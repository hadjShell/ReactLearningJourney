export default function Input({ label, style, ...props }) {
  let element = null;
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  switch (style) {
    case "input":
      element = <input className={classes} {...props}></input>;
      break;
    case "textarea":
      element = (
        <textarea
          className={classes}
          {...props}
        ></textarea>
      );
      break;
    default:
      element = null;
  }

  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {element}
    </div>
  );
}
