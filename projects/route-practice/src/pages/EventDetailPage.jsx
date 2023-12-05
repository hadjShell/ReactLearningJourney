import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
import { DUMMY_DATA } from "../data";

export default function EventDetailPage() {
  const { id } = useParams();
  const index = Number(id.slice(-1)) - 1;

  return (
    <>
      <EventItem event={DUMMY_DATA[index]}></EventItem>
    </>
  );
}
