import styled from "styled-components";
import {ACCENT_COLOR, GREY_COLOR} from "../CommonStyles";

const StyledCategorySelect = styled.select`
  width: 200px;
  background: none;
  border-bottom: 1.5px solid ${GREY_COLOR};
  color: ${GREY_COLOR};
  padding: 5px;
  outline: none;
  transition: .3s border-color;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;

  &:focus {
    border-color: ${ACCENT_COLOR};
  }
`

function CategorySelect({name, areaLabel, options, onChange}) {

    return (
        <StyledCategorySelect name={name} onChange={onChange} aria-label={areaLabel}>
            {
                options.map((option, index) => {
                    return <option key={index} value={option}>{option}</option>
                })
            }
           </StyledCategorySelect>
    );
}

export default CategorySelect;