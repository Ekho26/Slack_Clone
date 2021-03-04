import React from 'react'

// Styles
import styled from "styled-components";

function Chat() {
    return (
      <Container>
        <Header>
            <Channel>

            </Channel>
            <ChannelDetails>

            </ChannelDetails>
        </Header>
        <MessageContainer></MessageContainer>
        <ChatInput></ChatInput>
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
    background: orange;
`;

const Channel = styled.div`

`;

const ChannelDetails = styled.div`

`;

// Chat Area
const MessageContainer = styled.div`

`;

// Input
const ChatInput = styled.div`

`;