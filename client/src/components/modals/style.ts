import styled from 'styled-components';
import { Alert } from "@material-ui/core";

export const StyledAlert = styled(Alert)`
  height: 3.719rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 475px) {
    flex-direction: column;
  }

  @media (max-width: 375px) {
    font-size: 0.80rem;
    padding: 0px;
  }
  }

  @media (max-width: 1024px) {
    height: 3.967rem;
    width: 100%;
  }  

  button {
    @media (max-width: 375px) {
    font-size: 0.75rem;
  }
  }

  span {
    @media (max-width: 425px) {
    display: none;
  }}
`;
