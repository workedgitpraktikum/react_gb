import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../components/CustomInput/CustomInput";
import { auth } from "../../services/firebase";
import { setUsername, showUsername } from "../../store/profile/actions";
import {
  getIsShowUsername,
  getUserEmail,
  getUsername,
} from "../../store/profile/selectors";

const Profile = () => {
  const dispatch = useDispatch();
  const isShowUsername = useSelector(getIsShowUsername);
  const user = auth.currentUser;
  const username = useSelector(getUsername);
  const email = useSelector(getUserEmail);

  const handleSetUsername = (value) => {
    dispatch(setUsername(value));
  };

  useEffect(() => {
    user?.updateProfile({
      displayName: username,
      email: user.email,
    });
  }, [user, username]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Настройки профиля</h1>
      </Grid>
      <Grid item xs={12}>
        <Paper
          style={{
            paddingLeft: "0.75rem",
            display: "flex",
            margin: "0 1rem",
          }}
        >
          <p>{username}</p>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          style={{
            paddingLeft: "0.75rem",
            display: "flex",
            margin: "0 1rem",
          }}
        >
          <p>{email}</p>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <CustomInput
          placeholder="Введите имя пользователя"
          icon={<Check />}
          handleButtonClick={handleSetUsername}
        />
      </Grid>
      <Grid item xs={6}>
        <Paper
          style={{
            paddingLeft: "0.75rem",
            display: "flex",
            margin: "0 1rem",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={isShowUsername}
                onChange={() => {
                  dispatch(showUsername(!isShowUsername));
                }}
                name="private"
                color="primary"
              />
            }
            label="Отображать имя пользователя"
          />
        </Paper>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            auth.signOut();
          }}
        >
          Выйти из профиля
        </Button>
      </Grid>
    </Grid>
  );
};

export default Profile;
