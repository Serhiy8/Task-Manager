import styled from "styled-components";

const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & div {        
        position: relative;
        border-radius: 8px;
        width: 80%;
    }
    & p {
        position: absolute;
        top: 1px;
        left: 2px;
        font-size: 12px;
        opacity: 0.7;
        letter-spacing: 0;
    }
    & textarea {
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.2);
        border: none;
        outline: none;
        color: white;
        width: 100%;
    }
    & button {
        background-color: transparent;
        outline: none;
        border: 1px solid ${({theme}) => theme.colors.primary};
        border-radius: 8px;
        color: ${({theme}) => theme.colors.primary};
        padding: 6px 36px;
        letter-spacing: 2px;
    }
`

export {Label}