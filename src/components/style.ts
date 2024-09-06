import styled from "styled-components"

export const Div = styled.div`

    display:flex;
    min-width:250px;
    align-items:center;
    flex-direction:column;
    background-color:#C8F0E9;
    justify-content:center;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    position:absolute;
    gap:32px;
    padding:16px 16px;
    box-shadow: 0px 0px 12px -5px rgba(34, 60, 80, 0.55);
    border-radius:16px;
`
export const InputDiv = styled.div`
display:flex;
flex-direction:column;
row-gap:16px;
`
export const Button = styled.button`
display: flex;
    align-items: center;
    justify-content: center;
    outline: 0px;
    border:none;
    color: #6C727F;
    margin: 0px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    background-color: #ffffff;
    font-size: 16px;
    width:100%;
    height: 56px;
    line-height: 15.6px;
    padding: 0px;
    box-shadow: none;
    text-transform: none;
    border-radius: 16px;
    font-family: Gilroy, Arial, sans-serif;
    transition: background-color 0.1s, box-shadow 0.3s ease-in-out;
    &:active{
       background-color: #149C84;
       color:#ffffff;
    }

`
export const Input = styled.input`
    font: inherit;
    width:250px;
    padding: 16.5px 14px;
    letter-spacing: inherit;
    color: #6C727F;
    border-radius: 16px;
    box-sizing: content-box;
    background-color: #ffffff;
    border:1px solid #E5E5E5;
    height: 1.4375em;
    display: block;
    &:focus{
    border:2px solid #149C84;
    outline:none;
    }
    &::placeholder {
    color: #6C727F;
    font-family: Gilroy, Arial, sans-serif;
  }
`
export const H = styled.h1`
font-family: Gilroy, Arial, sans-serif;
font-weight:500;
font-size:32px;
line-height:130%;
`