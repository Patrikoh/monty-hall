export const actionTypes = {
    SELECT_NEW_DOOR_ID: "SELECT_NEW_DOOR_ID",
    OPEN_DOOR: "OPEN_DOOR",
    SET_STEP: "SET_STEP",
    ROUND_UP: "ROUND_UP"
};

export const steps = {
    IDLE: "IDLE",
    FIRST_DOOR_SELECTED: "FIRST_DOOR_SELECTED",
    GOAT_DOOR_OPENED: "GOAT_DOOR_OPENED",
    SECOND_DOOR_SELECTED: "SECOND_DOOR_SELECTED",
    SELECTED_DOOR_OPENED: "SELECTED_DOOR_OPENED",
    RUN_COMPLETED: "RUN_COMPLETED"
};

export const selectFirstDoor = (dispatch, doorId) => {
    dispatch({type: actionTypes.SELECT_NEW_DOOR_ID, doorId});
    dispatch({type: actionTypes.SET_STEP, step: steps.FIRST_DOOR_SELECTED});
};

export const openGoatDoor = (dispatch, doorId) => {
    dispatch({type: actionTypes.OPEN_DOOR, doorId});
    dispatch({type: actionTypes.SET_STEP, step: steps.GOAT_DOOR_OPENED});
};

export const selectSecondDoor = (dispatch, doorId) => {
    dispatch({type: actionTypes.SELECT_NEW_DOOR_ID, doorId});
    dispatch({type: actionTypes.SET_STEP, step: steps.SECOND_DOOR_SELECTED});
};

export const openSelectedDoor = (dispatch, doorId) => {
    dispatch({type: actionTypes.OPEN_DOOR, doorId});
    dispatch({type: actionTypes.SET_STEP, step: steps.RUN_COMPLETED});
};

export const completeRound = dispatch => {
    dispatch({type: actionTypes.ROUND_UP});
};
