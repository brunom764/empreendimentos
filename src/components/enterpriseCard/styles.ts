import styled from "styled-components"

export const ContainerHome = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
`

export const ContentHome = styled.div`
    width: 80%;
    height: 8rem;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3.4rem;
`

export const BoxNameEnterprise = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 1rem;

    span {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 1.3rem;
        color: #302E45;
        margin-right: 1.2rem;
        margin-bottom: 0.75rem;
    }

    p {
        font-family: Inter, sans-serif;
        font-weight: 300;
        font-size: 0.8rem;
        margin-top: 0.75rem;
        color: #6D6C7B;
    }

    `

export const ContentStatus = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        width: fit-content;
        padding: 5px 15px;
        border: 1px solid #BBB8D9;
        border-radius: 25px;

        font-family: Inter, sans-serif;
        font-weight: 400;
        font-size: 0.8rem;
        color: #302E45;

        & + div {
            margin-left: 15px;
        }
    }
`

export const ContainerOptions = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContentOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    img {
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }

        & + img {
            margin-left: 0.75rem;
        }
    }
`