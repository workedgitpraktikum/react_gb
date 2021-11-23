import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../services/firebase";
import { showUsername } from "../../store/profile/actions";
import { getIsShowUsername } from "../../store/profile/selectors";

const Profile = () => {
  const dispatch = useDispatch();
  const isShowUsername = useSelector(getIsShowUsername);

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
            margin: "1rem 0",
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
