import { ChatTwoTone, HomeTwoTone, PersonTwoTone } from "@material-ui/icons";
import Chats from "./pages/Chats/Chats";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

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
