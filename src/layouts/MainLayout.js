import GlobalStyle from "../globalStyle";
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
  padding-top: 20px;
`;

function MainLayout() {
    return (
        <div>
            <GlobalStyle/>
            <Header/>
            <StyledMain>
                <Outlet/>
            </StyledMain>
        </div>
    );
}

export default MainLayout;