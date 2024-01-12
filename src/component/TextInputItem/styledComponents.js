import styled from 'styled-components'

export const InputItem = styled.input`
  border-radius: 5px;
  border: ${props => (props.isActive ? 'dashed' : 'dotted')};
  outline: none;
  padding: 10px;
  text-align: center;
  background-color: transparent;
  color: ${props => props.color};
  size: ${props => props.size};
  font-family: ${props => props.font};
`
