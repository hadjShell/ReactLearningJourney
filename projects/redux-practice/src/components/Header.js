import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLogin, logout } from "../redux/isLoginSlice";

const Header = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogin && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
