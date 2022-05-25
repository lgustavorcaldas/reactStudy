import Styled from "styled-components";

export const WhiteBoardStyle = Styled.section`
    h2{
        font-size: 26px;
        color: #26038A;
    }

    .traco{
        width: 1100px;
        border: 1px solid #26038A;
        margin-bottom: 15px;
    }
    .toDoList{
        display: flex;
        width: 1100px;
        justify-content: space-between;
    }
    .h3Box{
        height: 50px;
        width: 300px;
        background-color: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .divToDo .h3Box{
        background-color: #D21B1B;
    }
    .divDoing .h3Box{
        background-color: #DFD600;
    }
    .doingPostId{
        background-color: #FFFDCE;
        border: 1px solid #DFD600;
    }
    .divDone .h3Box{
        background-color: #0CE155;
    }
    .donePostId{
        background-color: #DFFAE8;
        border: 1px solid #0CE155;
    }
`