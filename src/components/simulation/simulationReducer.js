import {generateDoors} from "./doorUtils";
import {actionTypes, steps} from "./simulationDispatcher";

const getDoorWithId = (state, doorId) => {
    return state.doors.filter(door => door.id === doorId)[0];
};

const updateStats = state => {
    const {stats} = state;
    const isSuccess = getDoorWithId(state, state.selectedDoorId).hasCar;
    if (!isSuccess) {
        return {
            ...stats,
            totalRuns: stats.totalRuns + 1
        }
    }
    const successesFromChangingDoor = state.shouldReselectDoor
        ? stats.successesFromChangingDoor + 1
        : stats.successesFromChangingDoor;
    const successesFromNotChangingDoor = !state.shouldReselectDoor
        ? stats.successesFromNotChangingDoor + 1
        : stats.successesFromNotChangingDoor;
    return {
        ...stats,
        totalRuns: stats.totalRuns + 1,
        successesFromChangingDoor,
        successesFromNotChangingDoor,
    };
};

const openDoorWithId = (state, doorId) => {
    return state.doors.map(door => {
        if (door.id === doorId) {
            return {
                ...door,
                isOpen: true,
            }
        }
        return door;
    });
};

export const simulationReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SELECT_NEW_DOOR_ID:
            return {
                ...state,
                selectedDoorId: action.doorId
            };
        case actionTypes.OPEN_DOOR: {
            return {
                ...state,
                doors: openDoorWithId(state, action.doorId),
            }
        }
        case actionTypes.SET_STEP:
            return {
                ...state,
                step: action.step,
            };
        case actionTypes.ROUND_UP:
            return {
                ...state,
                stats: updateStats(state),
                doors: generateDoors(3),
                shouldReselectDoor: !state.shouldReselectDoor,
                selectedDoorId: null,
                step: steps.IDLE,
            };
        default:
            return state;
    }
};