import React from 'react';

// Styles
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

// Components
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

function Chat() {
    return (
      <Container>
        <Header>
            <Channel>
              <ChannelName>
                # Ionut
              </ChannelName>
              <ChannelInfo>
                Informations about the channel
              </ChannelInfo>
            </Channel>
            <ChannelDetails>
              <div>
                Details
              </div>
              <Info />
            </ChannelDetails>
        </Header>
        <ChatMessage />
        <ChatInput />
      </Container>
    );
}

export default Chat

// Container
const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

// Header
const Header = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, .13);
`;

const Channel = styled.div`

`;

const ChannelName = styled.div`
  font-weight: 700;
`;

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`;

const Info = styled(InfoOutlinedIcon)`
  margin: 0 0 0 10px;
`