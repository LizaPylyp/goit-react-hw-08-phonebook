import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 350px;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 5px gray;
  background: #008080;
`;

export const FormLabel = styled.label`
  font-size: 28px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 5px;
`;

export const FormInput = styled.input`
  max-width: 300px;
 
  height: 30px;
  border-radius: 8px;
  font-size: 20px;
  padding: 10px;
`;

export const FormButton = styled.button`
  margin: 0 auto;
  border-radius: 8px;
  padding: 5px 10px;
  background: transparent;
  color: white;

  text-shadow: 5px 5px 10px black;
  font-size: 18px;

  :hover,
  :focus {
    cursor: pointer;
    background: #008080;
  }
`;





