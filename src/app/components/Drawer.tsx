import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
type Anchor = "right";

export default function TemporaryDrawer({ search }: { search: () => void }) {
  const [state, setState] = React.useState({
    right: false,
  });
  const [contents, setContents] = React.useState([
    {
      name: "Login",
      icon: <PersonOutlineIcon />,
    },
    {
      name: "Search",
      icon: <SearchIcon />,
    },
    {
      name: "Notifications",
      icon: <NotificationsNoneIcon />,
    },
    {
      name: "Cart",
      icon: <WorkOutlineIcon />,
    },
  ]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {contents.map((content) => (
          <ListItem
            onClick={content.name == "Search" ? search : () => {}}
            key={content.name}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{content.icon}</ListItemIcon>
              <ListItemText primary={content.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <MenuIcon
          className="text-[1.75rem]"
          onClick={toggleDrawer("right", true)}
        >
          {"right"}
        </MenuIcon>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
