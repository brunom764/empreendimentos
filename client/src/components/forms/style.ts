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
  padding: 1rem;
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
  color: rgba(0, 0, 0, 0.75);

  &:focus {
    border-color: #000;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 525px) {
    width: 25rem;
  }

  @media (max-width: 425px) {
    width: 20rem;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
  margin-top: 5px;
`;

export const Select = styled.select`
  padding: 0.7rem;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.75);
  &:focus {
    border-color: #000;
  }
`;

export const Button = styled.button`
  background-color: #4f46bb;
  color: #fff;
  min-width: 20%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  font-size: 0.8rem;
  margin: 1rem 2rem 2rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: #6f63cc;
  }
`;

export const SubTitle = styled.h2`
  font-size: 0.9rem;
  margin: 0.7rem 0.7rem 1.3rem 0.7rem;
`;

export const AddressContainer = styled.div`
  padding: 1rem;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.75);
`;