import React from "react";
import PropTypes from 'prop-types';
import {ReactComponent as CarLogo} from "./images/car.svg";
import {ReactComponent as GoatLogo} from "./images/goat.svg";
import {setBackgroundColor} from "./doorStyles";
import styled from "styled-components";

const StyledDoor = styled.div`
    background: ${props => setBackgroundColor(props)};
    border: ${props => setBackgroundColor(props)} 0.4em solid;
    border-radius: 1em;
    margin: 1em;
    width: 6em;
    height: 10em;
    svg {
        height: 100%;
        width: 100%;
    };
`;

const renderDoorContent = props => (
    props.hasCar ? <CarLogo/> : <GoatLogo/>
);

export const Door = props => {
    return (
        <StyledDoor {...props}>
            {props.isOpen && renderDoorContent(props)}
        </StyledDoor>
    );
};

Door.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    hasCar: PropTypes.bool.isRequired
};