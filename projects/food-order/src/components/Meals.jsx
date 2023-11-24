import Meal from "./Meal";
import useFetchData from "../hooks/useFetchData";

export default function Meals() {
  const {
    data: meals,
    error,
    isFetching,
  } = useFetchData("http://localhost:3000/meals");

  return (
    <div id="meals">
      {isFetching ? (
        <p>Please wait for fetching data...</p>
      ) : error === "" ? (
        meals.map(m => (
          <Meal
            key={m.id}
            id={m.id}
            image={`../../backend/public/${m.image}`}
            name={m.name}
            price={m.price}
            description={m.description}
          ></Meal>
        ))
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
