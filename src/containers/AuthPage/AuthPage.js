import { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { LockTwoTone } from "@material-ui/icons";
import { authErrorCodes } from "../../const";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AuthPage = ({ handleSubmit, text, link, linkText }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setError(null);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setError(null);
    setPassword(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockTwoTone />
        </Avatar>
        <Typography component="h1" variant="h5">
          {text}
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => {
            handleSubmit(e, email, password, setError);
          }}
        >
          <TextField
            error={
              error?.message === authErrorCodes.EMAIL_EXISTS ||
              error?.message === authErrorCodes.INVALID_EMAIL ||
              error?.message === authErrorCodes.EMAIL_NOT_FOUND
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <TextField
            error={
              error?.message === authErrorCodes.WEAK_PASSWORD ||
              error?.message === authErrorCodes.INVALID_PASSWORD
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          {error && (
            <Typography variant="body2" color="error" align="center">
              {error.message}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {text}
          </Button>
          <Grid container>
            <Grid item>
              <Link to={link} variant="body2">
                {linkText}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default AuthPage;
