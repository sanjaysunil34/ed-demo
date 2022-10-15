import styled from "styled-components";

export const StyledNavbar = styled.div`
.navbar {
    background-color: #4b61fe;
}

.contain {
    width: 100%;
    margin: 0px 2% 0px 2%;
}

.contain-flex {
    display: flex;
    justify-content: space-between;
}

.navbar-brand {
    display: flex;
    flex-wrap: wrap
    align-self: center;
}

@media(min-width: 1200px) {
    .head-icon-drop {
        display: none;
        padding-right: 30px;
        transition: all 0.5s ease;
    }

    .head-icon {
        padding-right: 30px;
    }
}

@media(max-width: 1200px) {
    .head-icon {
        display: none;
    }

    .head-icon-drop {
        padding-right: 30px;
        transition: all 0.5s ease;
    }
}

@media(min-width: 992px) {
    .contain {
        display: flex;
    }
}
`;