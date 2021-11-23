import AuthPage from "../../containers/AuthPage/AuthPage";
import { useHistory } from "react-router";
import { auth } from "../../services/firebase";
import { signUp } from "../../const";

const SignUp = () => {
  const { push } = useHistory();

  const handleSubmit = async (e, email, password, setError) => {
    e.preventDefault();
    setError(null);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      push("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AuthPage
      handleSubmit={handleSubmit}
      text={signUp.TEXT}
      link={signUp.LINK}
      linkText={signUp.LINK_TEXT}
    />
  );
};

export default SignUp;
