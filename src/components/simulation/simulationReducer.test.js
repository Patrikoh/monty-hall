import {simulationReducer} from "./simulationReducer"
import {actionTypes, steps} from "./simulationDispatcher";

describe("simulationReducer", () => {

    const doors = [
        {id: 1, isOpen: false, hasCar: true},
        {id: 2, isOpen: false, hasCar: false},
        {id: 3, isOpen: false, hasCar: false}
    ];

    it("Should handle SELECT_NEW_DOOR_ID", () => {
        const doorId = 1;
        const state = {doors, selectedDoorId: null};
        const action = {type: actionTypes.SELECT_NEW_DOOR_ID, doorId};

        const result = simulationReducer(state, action);

        expect(result.selectedDoorId).toEqual(doorId);
    });

    it("Should handle OPEN_DOOR", () => {
        const doorId = 1;
        const state = {doors, selectedDoorId: null};
        const action = {type: actionTypes.OPEN_DOOR, doorId};

        const result = simulationReducer(state, action);
        const openDoors = result.doors.filter(door => door.id === doorId);

        expect(openDoors).toHaveLength(1);
        expect(openDoors[0].isOpen).toEqual(true);
    });

    it("Should handle SET_STEP", () => {
        const state = {step: steps.IDLE};
        const action = {
            type: actionTypes.SET_STEP,
            step: steps.FIRST_DOOR_SELECTED,
        };
        const result = simulationReducer(state, action);

        expect(result.step).toEqual(steps.FIRST_DOOR_SELECTED);
    });

    it("Should reset stats when handling ROUND_UP", () => {
        const state = {
            stats: {
                totalRuns: 3,
                successesFromChangingDoor: 2,
                successesFromNotChangingDoor: 1
            },
            doors,
            shouldReselectDoor: false,
            selectedDoorId: 1,
            step: steps.FIRST_DOOR_SELECTED,
        };
        const expectedStats = {
            totalRuns: 4,
            successesFromChangingDoor: 2,
            successesFromNotChangingDoor: 2
        };
        const action = {type: actionTypes.ROUND_UP};

        const result = simulationReducer(state, action);

        expect(result.stats).toEqual(expectedStats);
    });

    it("Should reset open doors when handling ROUND_UP", () => {
        const state = {
            stats: {
                totalRuns: 3,
                successesFromChangingDoor: 2,
                successesFromNotChangingDoor: 1
            },
            doors,
            shouldReselectDoor: false,
            selectedDoorId: 1,
            step: steps.FIRST_DOOR_SELECTED,
        };
        const action = {type: actionTypes.ROUND_UP};

        const result = simulationReducer(state, action);
        const openDoors = result.doors.filter(door => door.isOpen);

        expect(openDoors).toHaveLength(0);
    });

    it("Should toggle shouldReselectDoor when handling ROUND_UP", () => {
        const state = {
            stats: {
                totalRuns: 3,
                successesFromChangingDoor: 2,
                successesFromNotChangingDoor: 1
            },
            doors,
            shouldReselectDoor: false,
            selectedDoorId: 1,
            step: steps.FIRST_DOOR_SELECTED,
        };
        const action = {type: actionTypes.ROUND_UP};

        const result = simulationReducer(state, action);

        expect(result.shouldReselectDoor).toEqual(true);
    });

    it("Should set step to IDLE when handling ROUND_UP", () => {
        const state = {
            stats: {
                totalRuns: 3,
                successesFromChangingDoor: 2,
                successesFromNotChangingDoor: 1
            },
            doors,
            shouldReselectDoor: false,
            selectedDoorId: 1,
            step: steps.FIRST_DOOR_SELECTED,
        };
        const action = {type: actionTypes.ROUND_UP};

        const result = simulationReducer(state, action);

        expect(result.step).toEqual(steps.IDLE);
    });

});
