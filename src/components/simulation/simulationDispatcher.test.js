import {
    actionTypes, completeRound,
    openGoatDoor,
    openSelectedDoor,
    selectFirstDoor,
    selectSecondDoor,
    steps
} from "./simulationDispatcher";
import sinon from "sinon";

describe("simulationDispatcher", () => {

    it("Should select first door", () => {
        const dispatchSpy = sinon.spy();
        const doorId = "testId";

        selectFirstDoor(dispatchSpy, doorId);

        sinon.assert.callCount(dispatchSpy, 2);
        sinon.assert.calledWith(dispatchSpy, ({type: actionTypes.SELECT_NEW_DOOR_ID, doorId}));
        sinon.assert.calledWith(dispatchSpy, ({type: actionTypes.SET_STEP, step: steps.FIRST_DOOR_SELECTED}));
    });

    it("Should open goat door", () => {
        const dispatchSpy = sinon.spy();
        const doorId = "testId";

        openGoatDoor(dispatchSpy, doorId);

        sinon.assert.callCount(dispatchSpy, 2);
        sinon.assert.calledWith(dispatchSpy, ({type: actionTypes.OPEN_DOOR, doorId}));
        sinon.assert.calledWith(dispatchSpy, ({type: actionTypes.SET_STEP, step: steps.GOAT_DOOR_OPENED}));
    });

    it("Should select second door", () => {
        const dispatchSpy = sinon.spy();
        const doorId = "testId";

        selectSecondDoor(dispatchSpy, doorId);

        sinon.assert.callCount(dispatchSpy, 2);
        sinon.assert.calledWith(dispatchSpy, ({type: actionTypes.SELECT_NEW_DOOR_ID, doorId}));
        sinon.assert.calledWith(dispatchSpy, ({type: actionTypes.SET_STEP, step: steps.SECOND_DOOR_SELECTED}));
    });

    it("Should open selected door", () => {
        const dispatchSpy = sinon.spy();
        const doorId = "testId";

        openSelectedDoor(dispatchSpy, doorId);

        sinon.assert.callCount(dispatchSpy, 2);
        sinon.assert.calledWith(dispatchSpy, ({type: actionTypes.OPEN_DOOR, doorId}));
        sinon.assert.calledWith(dispatchSpy, ({type: actionTypes.SET_STEP, step: steps.RUN_COMPLETED}));
    });

    it("Should complete round", () => {
        const dispatchSpy = sinon.spy();

        completeRound(dispatchSpy);

        sinon.assert.callCount(dispatchSpy, 1);
        sinon.assert.calledWith(dispatchSpy, ({type: actionTypes.ROUND_UP}));
    });
});