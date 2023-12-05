import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventsPage() {
  return (
    <>
      <EventsNavigation></EventsNavigation>

      <Outlet></Outlet>
    </>
  );
}
