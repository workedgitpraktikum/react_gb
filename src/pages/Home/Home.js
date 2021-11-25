import { useSelector } from "react-redux";
import { getUsername } from "../../store/profile/selectors";

const Home = () => {
  const username = useSelector(getUsername);
  return <h1>Welcome to the Messenger, {username}!</h1>;
};

export default Home;
