import styled from "styled-components";
import {ACCENT_COLOR, GREY_COLOR} from "../CommonStyles";

const StyledSearchInput = styled.input`
  border-bottom: 1.5px solid ${GREY_COLOR};
  padding: 5px;
  outline: none;
  transition: .3s border-color;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  width: 200px;

  &:focus {
    border-color: ${ACCENT_COLOR};
  }
`

function SearchInput({areaLabel, placeholder, onChange}) {
    return (
        <>
            <StyledSearchInput aria-label={areaLabel} placeholder={placeholder} onChange={onChange}/>
        </>
    );
}

export default SearchInput;