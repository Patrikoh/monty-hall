import {setBackgroundColor} from "./doorStyles";

describe("doorStyle", () => {

    let props = {
        theme: {
            primary: "primary",
            highlight: "highlight",
            success: "success",
            failure: "failure"
        },
        isSelected: false,
        isOpen: false,
        hasCar: false,
    };

    it("Should set background color for default case", () => {
        const result = setBackgroundColor(props);

        expect(result).toEqual(props.theme.primary);
    });

    it("Should set background color when door is selected", () => {
        props.isSelected = true;
        const result = setBackgroundColor(props);

        expect(result).toEqual(props.theme.highlight);
    });

    it("Should set background color when door has a car", () => {
        props.isOpen = true;
        props.hasCar = true;
        const result = setBackgroundColor(props);

        expect(result).toEqual(props.theme.success);
    });

    it("Should set background color when door has a goat", () => {
        props.isOpen = true;
        props.hasCar = false;
        const result = setBackgroundColor(props);

        expect(result).toEqual(props.theme.failure);
    });

});