import { useParams } from "react-router-dom";

export default function EditEventPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Edit</h1>
      <p>{id}</p>
    </>
  );
}
