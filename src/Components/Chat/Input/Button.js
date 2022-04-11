import styled from 'styled-components'

const ChatButton = styled.button`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.inputPlaceholder};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.text};
  }
`

export default ChatButton
