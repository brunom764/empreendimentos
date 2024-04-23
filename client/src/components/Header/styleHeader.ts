import styled from "styled-components";

export const HeaderContainerAll = styled.header`
  max-width: 100%;
  height: 4rem;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 4rem;

  @media (max-width: 425px) {
    padding: 0 2rem;
  }
`;

export const BoxAdd = styled.div<{ return: boolean }>`
  width: ${(props) => (props.return ? `92%` : `100%`)};
  height: 100%;
  padding: ${(props) => (props.return ? `0 10rem 0 2rem` : `0 5rem`)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    color: #4f46bb;
  }

  button {
    width: 12rem;
    height: 2rem;
    padding: 0.5rem 1rem;
    background: #4f46bb;
    border: none;
    border-radius: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color: #ffffff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
    padding: 0px 28px 0px 28px;
  }

  @media (max-width: 445px) {
    padding-left: 0;
    padding-right: 0;
    span {
      display: none;
    }
  }
`;

export const BoxReturn = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    cursor: pointer;
  }
`;
