import styled from "styled-components";

export const StyledSideBox = styled.div`
height: 100%;
color: #a6a4a7;
.menu-item {
    display: flex;
    align-self: center;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: left;
    padding-left: 40px;
    cursor: pointer;
    transition: all 0.2s ease-out;
}
.selected-menu-item {
    display: flex;
    align-self: center;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: left;
    padding-left: 40px;
    background: #f3f5ff;
    cursor: pointer;
    transition: all 0.2s ease-out;
    color: black;
}

.side-icon {
    padding-right: 20px;
    transition: all .5s ease-out;
}

.selected-side-icon {
    padding-right: 20px;
    color: #4b60fe;
    transition: all .5s ease-out;
}

.menu-cate {
    border: 1px solid rgba(0,0,0,.055);
}
.menu-title {
    text-align: left;
    padding: 30px 0px 10px 40px;
}
`;