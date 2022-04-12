import styled from 'styled-components'

const ChatForm = styled.form`
  display: flex;
  height: 4rem;
  background-color: ${(props) => props.theme.white};
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  margin: 1rem;
`
export default ChatForm
