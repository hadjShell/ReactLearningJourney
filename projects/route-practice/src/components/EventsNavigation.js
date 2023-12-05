import classes from "./EventsNavigation.module.css";
import { NavLink } from "react-router-dom";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="new"
              relative="path"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              New event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
