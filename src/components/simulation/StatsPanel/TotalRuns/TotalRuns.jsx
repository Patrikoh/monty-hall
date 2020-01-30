import React from "react";
import styled from "styled-components";

const StyledTotalRuns = styled.div`
    flex: 1;
    border-right: #ccc 1px solid;
`;

export const TotalRuns = ({totalRuns}) => {
    return (
        <StyledTotalRuns>
            <p>Total runs: {totalRuns}</p>
        </StyledTotalRuns>
    )
};