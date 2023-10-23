import { useContext } from "react";
import { Box, styled } from "@mui/material";
import { Chat as MessageIcon } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";

import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  display: flex;
  padding: 8px 16px;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
  }
  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Header = () => {
  const { account } = useContext(AccountContext);
  console.log(account);

  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu />
        </Wrapper>
      </Component>
    </>
  );
};

export default Header;
