import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  gap: 30px;

`;

export const Img = styled.img`
  border-radius: 10px;
  filter: drop-shadow(10px 10px 20px #0f596b) sepia(20%);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const HomeTextContainer = styled.div`
  font-size: 28px;
  display: flex;
  flex-direction: column;
`;

export const HomeSpan = styled.span`
  display: block;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AuthLinkHome = styled(NavLink)`
  margin: 0 auto;
  text-decoration: none;
  border-radius: 8px;
  padding: 5px 10px;
  background: #008080;

  color: white;

  text-shadow: 5px 5px 10px black;
  font-size: 18px;

  :hover,
  :focus {
    cursor: pointer;
    background: #145d6f;
  }
`;