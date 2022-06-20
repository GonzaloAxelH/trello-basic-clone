import { useContext } from "react";
import {
  Box,
  Drawer,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlined";
import { UIContext } from "../../../context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];
export const Sidebar = () => {
  const { sidemenuOpen, closeSidemenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSidemenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => {
            return (
              <ListItem key={text}>
                <ListItemIcon>
                  {index % 2 ? (
                    <InboxOutlinedIcon />
                  ) : (
                    <MailOutlineOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
