import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const stateFavorites = useSelector((store: AppStore) => store.people);

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>

      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gentleman Programmer React TEST
          </Typography>
        </Toolbar>
        <IconButton
          aria-label="favorites"
          color="secondary"
          component="label"
          onClick={handleClick}
        >
          <FavoriteIcon />
        </IconButton>
      </AppBar>
    </>
  );
};
export default Navbar;
