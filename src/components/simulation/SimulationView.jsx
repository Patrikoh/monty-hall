import React, {useReducer} from "react";
import styled from "styled-components";
import {DoorsPanel} from "./DoorsPanel/DoorsPanel";
import {simulationReducer} from "./simulationReducer";
import {StatsPanel} from "./StatsPanel/StatsPanel";
import {useInterval} from "../../hooks/useInterval";
import {
    completeRound,
    openGoatDoor,
    openSelectedDoor,
    selectFirstDoor,
    selectSecondDoor,
    steps
} from "./simulationDispatcher";
import {generateDoors, getRandomAvailableDoorId, getRandomAvailableGoatDoorId} from "./doorUtils";

const initialState = {
    doors: generateDoors(3),
    selectedDoorId: null,
    shouldReselectDoor: false,
    step: steps.IDLE,
    stats: {
        totalRuns: 0,
        successesFromChangingDoor: 0,
        successesFromNotChangingDoor: 0
    }
};

const StyledSimulationView = styled.div`
    padding: 2em;
    margin: 5em 15em 0 15em;
    box-shadow: 2px 4px 5px 0px rgba(0,0,0,0.75);
`;

export const SimulationView = () => {
    const [state, dispatch] = useReducer(simulationReducer, initialState);

    useInterval(() => {
        const {step, doors, selectedDoorId, shouldReselectDoor} = state;
        switch (step) {
            case steps.IDLE:
                selectFirstDoor(dispatch, getRandomAvailableDoorId(doors, selectedDoorId));
                break;
            case steps.FIRST_DOOR_SELECTED:
                openGoatDoor(dispatch, getRandomAvailableGoatDoorId(doors, selectedDoorId));
                break;
            case steps.GOAT_DOOR_OPENED: {
                if (shouldReselectDoor) {
                    selectSecondDoor(dispatch, getRandomAvailableDoorId(doors, selectedDoorId));
                } else {
                    openSelectedDoor(dispatch, selectedDoorId);
                }
                break;
            }
            case steps.SECOND_DOOR_SELECTED:
                openSelectedDoor(dispatch, selectedDoorId);
                break;
            case steps.RUN_COMPLETED:
                completeRound(dispatch);
                break;
            default:
                break;
        }
    }, 500);

    return (
        <StyledSimulationView>
            <DoorsPanel doors={state.doors} selectedDoorId={state.selectedDoorId}/>
            <StatsPanel {...state.stats} />
        </StyledSimulationView>
    )
};
