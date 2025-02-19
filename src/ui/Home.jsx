import CreateUser from "../features/users/CreateUser.jsx";
import {useSelector} from "react-redux";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";


function Home() {
    const username = useSelector(state => state.user.username);
    const navigate = useNavigate();
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
          De beste pizza.
        <br />
        <span className="text-yellow-500">
          Rechtstreeks uit de oven, rechtstreeks naar u toe.
        </span>
      </h1>
        {!username ? <CreateUser /> : <Button type="primary" to='/menu' > Start Ordering ! {username}</Button>}
    </div>
  );
}

export default Home;
