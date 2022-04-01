import styled from 'styled-components'

const ModalContainer = styled.div`
  width: 50rem;
  background-color: ${(props) => props.theme.modalBg};
  height: 35rem;
  filter: drop-shadow(0px 0px 5px ${(props) => props.theme.primary});
  border-radius: 10px;
`

export default ModalContainer
