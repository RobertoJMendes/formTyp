import styled from "styled-components"

export const Container = styled.div`
        p {
        font-size: 1rem;
        color: grey;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-style: 1rem;
    }
    hr{
        height: 2px;
        border: 0;
        background-color: #16195c;
        margin: 30px 0;
    }
    label {
        font-style: 1rem;
        display: block;
        margin-bottom: 20px;
        input{
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25cd89;
            border-radius: 10px;
            color: white;
            outline: 0;
            font-size: 1rem;
            background-color: #02044a;
        }
    }
    button {
        background-color: #25cd89;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        padding: 15px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
    .voltar {
        background-color: darkblue;
        text-decoration: none;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        padding: 15px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;   
    }
`
