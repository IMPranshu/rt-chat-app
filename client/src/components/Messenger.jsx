import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Header = styled(AppBar)`
  background-color: #00a884;
  height: 125px;
  box-shadow: none;
`;

const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
