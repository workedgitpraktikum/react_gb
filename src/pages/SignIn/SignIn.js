import AuthPage from "../../containers/AuthPage/AuthPage";
import { useHistory } from "react-router";
import { auth } from "../../services/firebase";
import { signIn } from "../../const";

const SignIn = () => {
  const { push } = useHistory();

  const handleSubmit = async (e, email, password, setError) => {
    e.preventDefault();
    setError(null);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      push("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AuthPage
      handleSubmit={handleSubmit}
      text={signIn.TEXT}
      link={signIn.LINK}
      linkText={signIn.LINK_TEXT}
    />
  );
};

export default SignIn;
