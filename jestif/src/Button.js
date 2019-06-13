import styled, {css} from 'styled-components';


const Button = styled.button`
  padding: ${props => props.padding ? props.padding : '10px 20px'};
  background-color: green;
  border: none;
  color: white;
  transition: transform ${props => props.duration}ms;
  transform-style: preserve-3d;
  ${props => props.rotate && css`
    transform: rotate${props.vertical ? 'X' : 'Y'}(180deg);
`};
`;
export default Button;
