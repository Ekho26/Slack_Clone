import React, { useEffect, useState } from 'react';

// Styles
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

// Components
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

// Database
import db from '../firebase';
import { useParams } from 'react-router';

function Chat() {

  const [ channel, setChannel] = useState();

  let { channelId } = useParams();

  const getChannels = () => {
    db.collection('rooms')
      .doc(channelId)
      .onSnapshot((snapshot) => {
        // console.log(snapshot.data());
        setChannel(snapshot.data());
      })
  }

  useEffect(() => {
    getChannels();
  }, [channelId])

  getChannels();

    return (
      <Container>
        <Header>
            <Channel>
              <ChannelName>
                # {channel.name}
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
        <MessageContainer>
          <ChatMessage />
        </MessageContainer>
        <ChatInput />
      </Container>
    );
}

export default Chat

// Container
const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
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

// Messages area
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;