import { ChatTwoTone, HomeTwoTone, PersonTwoTone } from "@material-ui/icons";
import Chats from "./components/Chats/Chats";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

export const navigation = [
	{
    title: "Home",
    link: "/",
		component: Home,
    icon: <HomeTwoTone/>
  }, {
    title: "Chats",
    link: "/chats",
		component: Chats,
		icon: <ChatTwoTone/>
  }, {
    title: "Profile",
    link: "/profile",
		component: Profile,
		icon: <PersonTwoTone/>
  }
];
