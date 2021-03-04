import React from 'react';

// Styles
import styled from 'styled-components';
import SendIcon from "@material-ui/icons/Send";

function ChatInput() {
    return (
      <Container>
        <InputContainer>
          <form>
            <input type="text" placeholder="Message..." />
            <SendButton>
                <SendIcon />
            </SendButton>
          </form>
        </InputContainer>
      </Container>
    );
}

export default ChatInput;

const Container = styled.div`
    padding: 0 20px 20px 20px;
`;

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        justify-content: space-between;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }

        input:focus {
            outline: none;
        }
    }
`;

const SendButton = styled.div`

`