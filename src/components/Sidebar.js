import React from 'react'

// Data
import { sidebarItems } from '../data/SidebarData'

// Styles
import styled from 'styled-components';

// Icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { PeopleSharp } from '@material-ui/icons';

function Sidebar(props) {
    return (
      <Container>
        <WorkspaceContainer>
          <Name>Munteanu Ionut</Name>
          <NewMessage>
            <AddCircleOutlineIcon />
          </NewMessage>
        </WorkspaceContainer>
        <MainChannels>
          {sidebarItems.map((item) => (
            <MainChannelItem>
              {item.icon}
              {item.text}
            </MainChannelItem>
          ))}
        </MainChannels>
        <ChannelsContainer>
          <NewChannelContainer>
            <div>Channels</div>
            <AddIcon />
          </NewChannelContainer>
          <ChannelList>

            {props.rooms.map(item => (
              <Channel># { item.name }</Channel>
            ))}
            
          </ChannelList>
        </ChannelsContainer>
      </Container>
    );
}

export default Sidebar


const Container = styled.div`
  color: white;
  background: #3f0e40;
`;

const WorkspaceContainer = styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 0 0 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`;

const Name = styled.div`

`;

const NewMessage = styled.div`
  display: flex;
  margin: 0 25px 0 0;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 50%;
  color: #3f0e40;
  fill: #3f0e40;
  cursor: pointer;
`;

const MainChannels = styled.div`
    padding: 20px 0 0 0;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding: 0 0 0 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin: 10px 0 0 0;
`;

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding: 0 25px 0 19px;
`;

const ChannelList = styled.div``

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover{
        background: #350D36;
    }
`