import React from "react";
import { shallow } from "enzyme";
import AdditionalInfo from "./AdditionalInfo";

const clickFn = jest.fn();

describe("AdditionalInfo", () => {
  it("should render correctly with no props", () => {
    const fr = false;
    const option = {};
    const component = shallow(<AdditionalInfo fr={fr} option={option} />);

    component.find("#click").simulate("click");

    expect(component.state().show).toBe(true);
  });
});
