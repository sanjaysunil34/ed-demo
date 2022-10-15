import styled from 'styled-components';

export const StyledDashboard = styled.div`
    height: 100%;

    .row{
        margin: 0;
        height: 100%;
        width: 100%;
    }

    .col-xl-2{
        padding: 0px;
        border-right: 1px solid rgba(0,0,0,.125);
        z-index: 1;
    }

    .col-xl-10{
        background-color: #f3f5ff;
        // background-color: red;
    }

    @media(max-width: 1200px){
        .side-pane-show {
            display: block;
            position: absolute;
            background-color: white;
            height: 92vh;
            width: 40%;
        }

        .side-pane-hide {
            display: none;
        }
    }

    @media(max-width: 600px){
        .side-pane-show {
            display: block;
            position: absolute;
            background-color: white;
            height: 92vh;
            width: 100%;
        }

        .side-pane-hide {
            display: none;
        }
    }
    
`;