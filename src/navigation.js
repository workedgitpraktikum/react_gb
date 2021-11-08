import { ChatTwoTone, HomeTwoTone, PersonTwoTone } from "@material-ui/icons";
import Chats from "./containers/Chats/Chats";
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";

export const navigation = [
  {
    title: "Home",
    link: "/",
    component: Home,
    icon: <HomeTwoTone />,
  },
  {
    title: "Chats",
    link: "/chats",
    component: Chats,
    icon: <ChatTwoTone />,
  },
  {
    title: "Profile",
    link: "/profile",
    component: Profile,
    icon: <PersonTwoTone />,
  },
];
