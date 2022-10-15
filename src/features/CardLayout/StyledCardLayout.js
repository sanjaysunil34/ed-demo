import styled from "styled-components";

export const StyledCardLayout = styled.div`
margin-top : 2%;
margin-left: 10px;
margin-right: 10px;
display: flex;
justify-content: space-between;

.card-city {
    text-align: left;
    font-weight: 600;
}

.card-head {
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    // background-color: blue;
}

.card-main {
    padding: 0px !important;
    font-size: 35px;
    font-weight: 400;
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    margin-bottom: 25px;
    // background-color: red;
    padding : 30px;
}

.card-foot {
    text-align: left;
    // background-color: yellow;
}

.row {
    margin: 0;
}

.foot-flex {
    display: flex;
    font-size: 20px;
    font-weight: 500;
}


.foot-key {
    font-size: 10px;
}

.up-arrow {
    color: #60c2a0;
}

.down-arrow {
    transform: rotate(90deg);
    color: #ea6890;
}

.number {
    display: flex;
}

.numb-per-neg {
    font-size: 15px;
    align-self: end;
    padding-bottom: 8px;
    padding-left: 3px;
    color: #ea6890;
}

.numb-per-pos {
    font-size: 15px;
    align-self: end;
    padding-bottom: 8px;
    padding-left: 3px;
    color: #60c2a0;
}

@media(max-width: 930px) {
    .graph {
        display: none;
    }

    .dropdown {
        display: none;
    }
}
`;