import { Grid } from '@material-ui/core';
import ChatList from '../ChatList/ChatList';
import MessageBox from '../MessageBox/MessageBox';
import { USER, CHAT_LIST } from '../../const';

const Chats = () => {
  return (
    <Grid
			container
			style={{
				marginTop: "4rem",
			}}
		>
			<Grid item xs={3}>
				<ChatList list={CHAT_LIST}/>
			</Grid>
			<Grid item xs={9}>
				<MessageBox user={USER}/>
			</Grid>
		</Grid>
  );
}

export default Chats;
