import styled from '@emotion/styled';
import { BiSolidTrash } from 'react-icons/bi';

export const ContactListStyled = styled.ul`
  padding-left: 0;
  max-width: 450px;
  margin: 0 auto;

  @media screen and (min-width: 1048px) {
    width: 450px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 1px 1px 5px gray;
  padding: 10px 20px;
  margin-bottom: 10px;
  background: linear-gradient(180deg, #b5b5b5, #599caa, #008080);
`;

export const ContactData = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  height: 35px;
  padding: 0 5px;
  background: #008080;
  color: white;

  text-shadow: 5px 5px 10px black;
  font-size: 18px;

  :hover,
  :focus {
    cursor: pointer;
    background: #2a7182;
  }
`;

export const DeleteSpan = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonIcon = styled(BiSolidTrash)`
  fill: currentColor;
`;

export const Text = styled.li`
  display: block;
  font-size: 28px;
`;