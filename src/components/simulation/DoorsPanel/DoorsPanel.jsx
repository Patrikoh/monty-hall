import React from "react";
import PropTypes from "prop-types";
import Door from "./Door";
import styled from "styled-components";

const StyledDoorsPanel = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 2em;
    max-width: 30em;
`;

export const DoorsPanel = ({doors, selectedDoorId}) => {
    return (
        <StyledDoorsPanel>
            {doors.length > 0 && doors.map(door => (
                <Door
                    key={door.id}
                    isSelected={door.id === selectedDoorId}
                    isOpen={door.isOpen}
                    hasCar={door.hasCar}
                />
            ))}
        </StyledDoorsPanel>
    )
};

DoorsPanel.propTypes = {
    doors: PropTypes.array.isRequired,
    selectedDoorId: PropTypes.number,
};