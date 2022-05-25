import Styled from "styled-components";

export const PostItStyle = Styled.div`
    margin-top: 3px;
    padding: 10px;
    background-color: #FFD0D0;
    border: 1px solid #D21B1B;
    width: 278px;
    height: 128px;
    p{
        color: #1B42A5;
        font-weight: bold;
    }
    .descPostIt{
        height: 75px;
    }
    .icon{
        width: 278px;
        display: flex;
        justify-content: flex-end;
        column-gap: 5px;
    }
`