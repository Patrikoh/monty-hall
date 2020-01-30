import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {DoorsPanel} from "./DoorsPanel";
import Door from "./Door";

Enzyme.configure({adapter: new Adapter()});

describe("DoorsPanel", () => {
    it("Should render doors", () => {
        const props = {
            doors: [
                {id: 1, isOpen: false, hasCar: true},
                {id: 2, isOpen: false, hasCar: false},
                {id: 3, isOpen: false, hasCar: false}
            ]
        };
        const doors = shallow(<DoorsPanel {...props} />).find(Door);

        expect(doors).toHaveLength(3);
    });

});