import {StyledContainer, WHITE_COLOR} from "../common/CommonStyles";
import styled from "styled-components";
import {useEffect, useState} from "react";

const SearchWrapper = styled.div`
  height: 100px;
  background-color: ${WHITE_COLOR};
  box-shadow: 1px 1px 10px 4px #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  margin-bottom: 20px;
`

const StyledSearch = styled.input`
  
`

function Search() {
    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (event) => setSearchText(event.target.value)

    useEffect(() => {
        console.log(searchText);
    }, [searchText])
    return (
        <StyledContainer>
            <SearchWrapper>
                <StyledSearch type={"search"} onChange={handleSearchChange} placeholder={"поиск"}/>
            </SearchWrapper>
        </StyledContainer>
    )
}

export default Search;