import { Dialog, Box, ListItem, List, styled, Typography } from "@mui/material";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const dialogStyle = {
  height: "45%",
  width: "60%",
  maxWidth: "100",
  maxHeight: "100%",
  borderRadius: 5,
  boxShadow: "none",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Container = styled(Box)`
  padding: 0px 0 56px 16px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const Title = styled(Typography)`
  font-size: 36px;
  color: #525252;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
    Cantarell, Fira Sans, sans-serif;
  font-weight: 300;
`;

const LoginDialog = () => {
  const onLoginSuccess = (res) => {
    const decode = jwt_decode(res.credential);
    console.log("Login Success", decode);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed", res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Container>
        <Title>Welcome to ChatApp,</Title>
        <StyledList>
          <ListItem>1. Sign-in using your google account.</ListItem>
          <ListItem>
            2. Chat in real-time with your friends using ChatApp.
          </ListItem>
          <ListItem>3. Not only texts, share Docs & Images as well.</ListItem>
        </StyledList>
      </Container>
      <Box>
        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
