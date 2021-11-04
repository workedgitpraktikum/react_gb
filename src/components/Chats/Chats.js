import { Route, Switch, useRouteMatch } from 'react-router';
import { Grid } from '@material-ui/core';
import ChatList from '../ChatList/ChatList';
import MessageBox from '../MessageBox/MessageBox';
import { CHAT_LIST } from '../../const';

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
				<ChatList chatList={CHAT_LIST} />
			</Grid>
			<Grid item xs={9}>
				<Switch>
					<Route exact path={path}>
						<h3>Выберите чат из представленного списка</h3>
					</Route>
					<Route path={`${path}/:chatID`}>
						<MessageBox chatList={CHAT_LIST} />
					</Route>
				</Switch>
				
			</Grid>
		</Grid>
  );
}

export default Chats;
