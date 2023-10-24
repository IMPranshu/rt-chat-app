import React from "react";

import { Box, styled, InputBase } from "@mui/material";
import { EmojiEmotions, AttachFile, Mic } from "@mui/icons-material";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  border-radius: 18px;
  background-color: #ffffff;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;

const ClipIcon = styled(AttachFile)`
  transform: "rotate(40deg)";
`;

const Footer = () => {
  return (
    <Container>
      <EmojiEmotions />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => ""}
      />

      <Search>
        <InputField
          placeholder="Type a message"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => ""}
          onKeyPress={(e) => ""}
          value={"50"}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
