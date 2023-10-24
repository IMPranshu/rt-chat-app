import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, styled, Divider } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

import SingleConversation from "./SingleConversation";

const Component = styled(Box)`
  overflow: overlay;
  height: 81vh;
`;

const Conversations = () => {
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      setUsers(response);
    };
    fetchData();
  }, []);
  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== account.sub && (
            <>
              <SingleConversation user={user} />
              <Divider />
            </>
          )
      )}
    </Component>
  );
};

export default Conversations;
