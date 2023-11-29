import Meal from "./Meal";
import Error from "./UI/Error";
import useHttp from "../hooks/useHttp";

const config = {
  method: "GET",
};

export default function Meals() {
  const {
    data: meals,
    isFetching,
    error,
  } = useHttp("http://localhost:8080/meals", config, []);

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
        <Error message={error}></Error>
      )}
    </div>
  );
}
