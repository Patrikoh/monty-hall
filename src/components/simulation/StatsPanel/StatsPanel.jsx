import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Successes from "./Successes";
import {TotalRuns} from "./TotalRuns/TotalRuns";

const StyledStatsPanel = styled.section`
    border-top: solid 1px #ccc;
    margin: 0 auto;
    padding: 2em 1em 0.5em 1em;
    display: flex;
`;

export const StatsPanel = props => {
    const {totalRuns, successesFromChangingDoor, successesFromNotChangingDoor} = props;
    return (
        <StyledStatsPanel>
            <TotalRuns totalRuns={totalRuns}/>
            <Successes
                successesFromChangingDoor={successesFromChangingDoor}
                successesFromNotChangingDoor={successesFromNotChangingDoor}
            />
        </StyledStatsPanel>
    )
};

StatsPanel.propTypes = {
    totalRuns: PropTypes.number.isRequired,
    successesFromChangingDoor: PropTypes.number.isRequired,
    successesFromNotChangingDoor: PropTypes.number.isRequired
};