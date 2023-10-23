import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

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
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
