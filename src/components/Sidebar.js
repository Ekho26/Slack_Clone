import React from 'react'

// Styles
import styled from 'styled-components';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Munteanu Ionut
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
        </Container>
    )
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