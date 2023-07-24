import styled from "styled-components"

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
    `
    export const Title = styled.div`
        text-align: right;
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 15px;
        color: #fff;
        `
export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
    `
export const Description = styled.div`
    text-align: right;
    font-size: 15px;
    color: gray;
    `
export const IconArea = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: violet;
`
export const Point = styled.div<{active:boolean}>`
    width: 6px;
    height: 6px;
    border: 3px solid #494a7c;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? "red" : "greenyellow"};
`
