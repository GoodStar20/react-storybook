import styled, {css} from 'styled-components';


const Button = styled.button`
  padding: ${props => props.padding ? props.padding : '10px 20px'};
  background-color: green;
  border: none;
  color: white;
  transition: transform ${props => props.duration ? props.duration : 0}ms;
  transform-style: preserve-3d;
  ${props => props.rotate && css`
    transform: rotate${props.vertical ? 'X' : 'Y'}(180deg);
`};

& :hover {
  background-color: red;
  width: 400px;
}
`;
export default Button;
