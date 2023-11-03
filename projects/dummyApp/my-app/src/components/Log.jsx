export default function Log({ log }) {
  return (
    <ol id="log">
      {log.map(step => (
        <li
          key={`${step.row}${step.col}`}
        >{`${step.player} selected {${step.row}, ${step.col}}`}</li>
      ))}
    </ol>
  );
}
