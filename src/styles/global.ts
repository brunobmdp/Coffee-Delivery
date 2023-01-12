import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-700']}
  }
  
  ::-webkit-scrollbar {
    display:none;
  }
  h1{
    font-family:'Baloo 2', cursive;
    line-height:1.3;
    font-weight: 700;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['gray-700']};
  }
  
  body,input,textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`
