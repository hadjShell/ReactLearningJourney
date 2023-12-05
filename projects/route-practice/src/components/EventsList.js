import { DUMMY_DATA } from "../data";
import classes from "./EventsList.module.css";
import { Link } from "react-router-dom";

function EventsList() {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {DUMMY_DATA.map(event => (
          <li key={event.id} className={classes.item}>
            <Link to={`${event.id}`} relative="path">
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
