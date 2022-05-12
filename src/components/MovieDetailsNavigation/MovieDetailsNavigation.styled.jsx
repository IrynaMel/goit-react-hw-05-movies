import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

export const Div = styled('div')`
border-top:    2px solid  black;
border-bottom: 2px solid black;
margin-top: 10px;
`


export const Li = styled(NavLink)`
display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  &.active {
    color: red;
  }
`