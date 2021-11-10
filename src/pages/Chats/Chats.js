import { Route, Switch, useRouteMatch } from "react-router";
import { Grid } from "@material-ui/core";
import MessageBox from "../../containers/MessageBox/MessageBox";
import ChatBox from "../../containers/ChatBox/ChatBox";
import NoChat from "../../components/NoChat/NoChat";

const Chats = () => {
  const { path } = useRouteMatch();

  return (
    <Grid
      container
      style={{
        marginTop: "4rem",
      }}
    >
      <Grid item xs={3}>
        <ChatBox />
      </Grid>
      <Grid item xs={9}>
        <Switch>
          <Route exact path={path} component={NoChat} />
          <Route path={`${path}/:chatID`} component={MessageBox} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Chats;
