import { Checkbox, FormControlLabel, Grid, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_USERNAME } from "../../store/profile/actions";

const Profile = () => {
  const dispatch = useDispatch();
  const showUsername = useSelector((state) => state.showUsername);

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
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={showUsername}
                onChange={() => {
                  dispatch({ type: SHOW_USERNAME });
                }}
                name="private"
                color="primary"
              />
            }
            label="Отображать имя пользователя"
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Profile;
