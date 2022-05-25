import { createGlobalStyle } from "styled-components";

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
</style>


export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
    }
    .container{
        width: 1100px;
    }
`