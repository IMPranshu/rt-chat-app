import { Box, styled, Typography, Divider } from "@mui/material";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 320px 0;
  text-align: center;
  height: 90vh;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;

const Title = styled(Typography)`
  font-size: 32px;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
  margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Title>ChatApp</Title>
        <SubTitle>
          Now send and receive messages without a Phone number.
        </SubTitle>
        <SubTitle>
          Use ChatApp to send and receive messages by just using your google
          account.
        </SubTitle>
        <StyledDivider />
      </Container>
    </Component>
  );
};

export default EmptyChat;
