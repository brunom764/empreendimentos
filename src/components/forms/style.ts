import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const InputsContainer = styled.div`
    background-color: #ffffff;
    padding: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: #f9f9f9;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;
  width: 30rem;

  &:focus {
    border-color: #000;
  }

`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
  margin-top: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    border-color: #000;
  }
`;

export const Button = styled.button`
  background-color: #4F46BB;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 0.8rem;
  margin: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #6f63cc;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const AddressContainer = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: lighter;
`;