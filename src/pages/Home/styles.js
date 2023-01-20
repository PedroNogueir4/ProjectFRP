import styled from 'styled-components';
import backgorund from '../../assets/background.svg'



export const Container = styled.div`

background: url("${backgorund}");
background-size: cover;
display:flex;
flex-direction: column;
align-items: center;
gap: 40px;
`;
export const Image = styled.img`

margin-top: 30px;
`

export const Container2 = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;

display: flex;
flex-direction: column;
padding: 50px 29px;
height: 100vh;
`
export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 40px;
color: #FFFFFF;
margin-bottom: 26px;
text-align: center;
`
export const Inputlabel = styled.label`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
padding-left: 11px;
color: #EEEEEE

`

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border:none;
margin-bottom: 30px;
padding-left: 15px;

min-width: 342px;
min-height: 46px;
outline: none;

`
export const Button = styled.button`
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
color: #FFFFFF;
border: none;
display: flex;
justify-content: center;
align-items: center;

gap: 11px;
font-style: normal;
font-weight: 700;
font-size: 11px;
line-height: 28px;

min-width: 342px;
min-height: 48px;
margin-top: 65px;
cursor: pointer;
:hover{opacity: 0.8;}
:active{opacity: 0.5;}

`
export const Image2 = styled.img`
width: 22.95px;
height: 18.93px;
`
