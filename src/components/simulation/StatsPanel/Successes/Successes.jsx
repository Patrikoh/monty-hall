import React from "react";
import styled from "styled-components";

const StyledSuccess = styled.div`
    flex: 1;
    padding-left: 3em;
`;

export const Successes = ({successesFromChangingDoor, successesFromNotChangingDoor}) => {
    return (
        <StyledSuccess>
            <p>Successes from changing door: {successesFromChangingDoor}</p>
            <p>Successes from not changing door: {successesFromNotChangingDoor}</p>
        </StyledSuccess>
    )
};