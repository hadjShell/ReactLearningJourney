import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
import { selectIsLogin } from "./redux/isLoginSlice";

function App() {
  const isLogin = useSelector(selectIsLogin);

  return (
    <>
      <Header></Header>
      {isLogin ? <UserProfile></UserProfile> : <Auth></Auth>}
      <Counter />
    </>
  );
}

export default App;
