import Styled from "styled-components";

export const RegisterTaskStyle = Styled.section`
    margin-top: 15px;
    width: 1100px;
    height: 200px;
    h2{
        font-size: 26px;
        color: #26038A;
    }
    #newFormToDo{
        display: flex;
        flex-direction: column;
        height: 135px;
        align-items: center;
        justify-content: space-between;   
    }
    .traco{
        width: 1100px;
        border: 1px solid #26038A;
        margin-bottom: 15px;
    }
    .inputBoxes{
        width: 1100px;
        display: flex;
        justify-content: space-between;
    }
    .inputBoxes div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label{
        color: #26038A;
    }
    .inputBoxes div input, select{
        color: #26038A;
        background: #FFFFFF;
        border-width: 0px 1px 1px 1px;
        border-style: solid;
        border-color: #26038A;
        border-radius: 5px;
        width: 300px;
        height: 40px;
        text-align: center;
    }
    #subimit{
        background: #1B42A5;
        border-radius: 2px;
        border: none;
        width: 350px;
        height: 50px;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
    }

`