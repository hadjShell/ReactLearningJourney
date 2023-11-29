export default function Button({ style, className = "", children, ...props }) {
  const classes = style + " " + className;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
