import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    
    h1 {
        font-size: 24px;
        margin-bottom: 12px;
        letter-spacing: 3px;
    }

    p {
        padding-bottom: 35px;
        text-decoration: underline;
    }

    label {
        padding: 8px 0;
        width: 20%;
    }

    input {
        width: 100%;
        border: 0;
        border-radius: 10px;
        padding: 12px 0;
        padding-left: 8px;
    }

    span{
        padding-top: 20px;
    }
`;


export const FormData = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px 30px;
`