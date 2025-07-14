import styled from "styled-components";

const SectionSt = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    color: ${({theme}) => theme.colors.primary};
    background-image: url('../../public/img/leaves.jpg');
    background-size: cover;
    background-repeat: no-repeat;

& div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border-radius: 20px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    padding: 26px 16px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
}
& div form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
& div form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

& div form label {
    position: relative;
    display: flex;
    align-items: center;    
}
& div form label p {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    transition: top 200ms;
}

& div form label input {
    background-color: transparent;
    padding: 6px 12px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.primary};
    
    &:focus ~ p{
        top: -15px;
        font-size: 10px;
    }
}

& div form button{
    background-color: ${({theme}) => theme.colors.primary};
    padding: 6px 0;
    border: none;
    border-radius: 4px;
    font-family: 'Montserrat';
}
`

export {SectionSt}