import styled from "styled-components";

export const StyledDetailEntry = styled.div`
width: 100%;
.row {
    margin: 0;
}

.entry {
    text-align: left;
    width: 100%;
    padding: 20px 0px 20px 20px !important;
    font-size: 13px;
    font-weight: 500;
    border: solid #dedcdf;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-top-width: 1px;

    .colmn {
        padding: 0px;
    }

    .status {
        padding: 0px;
        background-color: #dedcdf;
        padding: 0px 10px;
        border-radius: 20px;
    }
}
`;