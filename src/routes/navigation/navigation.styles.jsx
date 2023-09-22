import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  background-color:var(--background-color-lighter);
  position: absolute;
  height: 100%;
  width: 250px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction:column;
  justify-content: center;
`;

export const LogoContainer = styled.a`
    display: flex;
    flex-direction:row;
    padding: 25px;
`;

export const LogoImg = styled.img`
  margin:auto;
  margin-right:0px;
  margin-left:25px;
  height: 50px;
  width: 50px;
`
export const LogoTitle = styled.h3`
  margin:auto;
  margin-left:0px;
  margin-bottom:9px;
  text-decoration: var(--main-color-lighter) line-through;
`
export const Hr = styled.hr`
    width: 90%;
    margin-bottom:30px;
    border: 1px solid var(--main-color);
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  flex-direction:column;
  padding:10px 50px;
`;

export const NavIcon = styled.div`
  margin-right:20px;
`;

export const NavLink = styled(Link)`
  width:auto;
  display:flex;
  flex-direction:row;
  justify-content:left;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;  
  font-size:18px;
  font-weight: bold;
  color:var(--grey);
  &:hover{
    color:var(--white);
    ${NavIcon}{
      color:var(--main-color);
    }
  }
`;

export const Version = styled.p`
  margin:auto;
  text-align:center;
  padding-bottom:10px;
  font-size:small;
  color:var(--main-color-darker);
`

