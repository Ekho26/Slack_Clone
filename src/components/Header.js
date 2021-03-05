import React from 'react'

// Style
import styled from 'styled-components';

// Icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

function Header({ user, signOut }) {



    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                       <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineOutlinedIcon />
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={ user.photo ? user.photo : 'https://i.imgur.com/6VBx3io.png'} alt="User"/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
  background: #350d36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
`;

// Main = clock + inputSearch + questionMark
const Main = styled.div`
  display: flex;
  margin: 0 16px;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin: 0 16px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;

    input {
        flex: 1;
        color: white;
        background-color: transparent;
        border: none;
        padding: 4px 10px 4px 10px; /* top, right, bottom, left */
    }

    input:focus {
        outline: none;
    }
`

// UserInfo
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 0 0;
  position: absolute;
  right: 0;
`

const Name = styled.div`
    padding: 0 16px 0 0;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;

    img {
        width: 28px;
        height: 100%;
    } 
`