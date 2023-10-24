import { styled, Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  height: 45px;
  display: flex;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  objectFit: "cover",
  borderRadius: "50%",
  padding: "0 14px",
});

const SingleConversation = ({ user }) => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default SingleConversation;
