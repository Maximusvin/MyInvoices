import styled from 'styled-components';

export const MainFormWrap = styled.div`
  padding: 35px 25px;
  border: 1px solid rgba(128, 128, 128, 0.4);
  margin-bottom: 30px;
`;

export const Form = styled.form``;

export const InputWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 35px;
  margin-bottom: 35px;
`;

export const Input = styled.input`
  display: block;
  padding: 10px 15px;
  border: 1px solid rgba(128, 128, 128, 0.4);
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;
`;

export const Textarea = styled.textarea`
  display: block;
  padding: 10px 15px;
  border: 1px solid rgba(128, 128, 128, 0.4);
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;
  outline: none;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 25px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  background-color: ${props =>
    props.disabled ? 'rgb(136, 136, 136)' : 'rgb(11, 11, 255)'};
  cursor: pointer;
`;
