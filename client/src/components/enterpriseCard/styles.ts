import styled, { css } from "styled-components";

type ContentOptionsProps = {
    isModalOpen?: boolean;
}

export const ContainerHome = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.7rem 1rem 0.7rem 1.5rem;

    @media (max-width: 768px) {
        padding: 0.7rem 0rem 0.7rem 0rem;
    }
`;

export const ContentHome = styled.div`
    width: 80%;
    min-height: 6rem;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2rem 1rem 2rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

    @media (max-width: 719px) {
        flex-direction: row;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        padding: 2rem 1.7rem 1rem 1.7rem;
    }

    @media (max-width: 375px) {
        padding: 2rem 1rem 1rem 1rem;
    }
`;

export const BoxNameEnterprise = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    white-space: normal;

    span {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 1.1rem;
        color: #302E45;
    }

    p {
        font-size: 0.75rem;
        margin-top: 1rem;
        color: #6D6C7B;
        align-self: baseline;
    }

    @media (min-width: 721px) {
        width: fit-content;
        height: 100%;
        justify-content: space-between;
    }
`;

export const ContentStatus = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.5rem;
        width: fit-content;
        padding: 0.35rem 0.755rem;
        border: 1px solid #BBB8D9;
        border-radius: 25px;

        font-family: Inter, sans-serif;
        font-weight: 400;
        font-size: 0.8rem;
        color: #302E45;
    }
`;

export const ContainerOptions = styled.div<ContentOptionsProps>`
    display: flex;
    flex-direction: column;
    width: fit-content;

    @media (max-width: 1024px), (max-width: 720px), (max-width: 375px) {
        ${props =>
            props.isModalOpen &&
            css`
                display: none;
            `
        }
    }

    @media (max-width: 720px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 0.75rem;
        margin-top: 15px;
    }

    @media (max-width: 719px) {
        margin-top: 0;
    }

    @media (max-width: 375px) {
        flex-direction: column;
    }
`;

export const ContentOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem;

    button {
        border: none;
        background-color: transparent;
    }

    img {
        cursor: pointer;
        transition: filter 0.2s;
        width: 18px;

        &:hover {
            filter: brightness(0.8);
        }
    }

    @media (max-width: 720px) {
        justify-content: center;
        padding-right: 0;
        margin-top: 0;
        align-items: center;
    }
`;
