import { Route, Switch, useRouteMatch } from "react-router";
import { Grid } from "@material-ui/core";
import MessageBox from "../../containers/MessageBox/MessageBox";
import ChatBox from "../../containers/ChatBox/ChatBox";

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
          <Route exact path={path}>
            <h3
              style={{
                marginLeft: "1rem",
              }}
            >
              Выберите чат из представленного списка
            </h3>
          </Route>
          <Route path={`${path}/:chatID`}>
            {/*             <MessageBox chatList={chatList} />
             */}{" "}
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Chats;
