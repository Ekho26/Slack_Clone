import React from 'react'

// Style
import styled from 'styled-components';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Header() {
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
                    Munteanu
                </Name>
                <UserImage>
                    <AccountBoxIcon />
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
 justify-content: space-between;
`

const Main = styled.div`
  display: flex;
`

const SearchContainer = styled.div`
    min-width: 400px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;

    input {
        color: white;
        background-color: transparent;
        border: none;
        padding: 4px 10px 4px 10px; /* top, right, bottom, left */
    }

    input:focus {
        outline: none;
    }
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 0 0;
`

const Name = styled.div`

`

const UserImage = styled.div`

`