export default function Button({ type, className, children, ...props }) {
  const classes = className + " " + type;

  return <button className={classes} {...props}>{children}</button>;
}
