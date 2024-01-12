import styled from 'styled-components'

export const InputItem = styled.input`
  border-radius: 5px;
  border: ${props => (props.isActive ? 'dashed' : 'dotted')};
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-family: ${props => props.font};
  outline: none;
  padding: 10px;
  text-align: center;
  background-color: transparent;
`
export const InputItem2 = styled.input`
  border-radius: 5px;
  border: ${props => (props.isActive ? 'dashed' : 'dotted')};
  outline: none;
  padding: 10px;
  text-align: center;
  background-color: transparent;
  color: black;
  font-size: 12px;
`
