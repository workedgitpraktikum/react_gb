import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Grid } from "@material-ui/core";
import MessageBox from "../../containers/MessageBox/MessageBox";
import { CHAT_LIST } from "../../const";
import ChatBox from "../../containers/ChatBox/ChatBox";

const Chats = () => {
  const { path } = useRouteMatch();

  const [chatList, setChatList] = useState(CHAT_LIST);

  //функция добавления нового чата
  const handleChatAdd = (newChatName) => {
    setChatList((chatList) => [
      ...chatList,
      {
        id: `chat_${Date.now()}`,
        name: newChatName,
        image: `https://picsum.photos/id/11/45`,
        messages: [],
      },
    ]);
  };

  //функция удаления чата
  const handleChatDelete = (id) => {
    const index = chatList.findIndex((chatItem) => chatItem.id === id);
    setChatList((chatList) => [
      ...chatList.slice(0, index),
      ...chatList.slice(index + 1),
    ]);
  };

  return (
    <Grid
      container
      style={{
        marginTop: "4rem",
      }}
    >
      <Grid item xs={3}>
        <ChatBox
          chatList={chatList}
          handleChatAdd={handleChatAdd}
          handleChatDelete={handleChatDelete}
        />
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
            <MessageBox chatList={chatList} />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Chats;
