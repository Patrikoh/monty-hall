import {generateDoors} from "./doorUtils";

describe("simulationUtils", () => {

    it("Should generate a door", () => {
        const numberOfDoors = 1;
        const result = generateDoors(numberOfDoors);

        expect(result).toHaveLength(numberOfDoors);
    });

    it("Should generate 3 doors", () => {
        const numberOfDoors = 3;
        const result = generateDoors(numberOfDoors);

        expect(result).toHaveLength(numberOfDoors);
    });

});