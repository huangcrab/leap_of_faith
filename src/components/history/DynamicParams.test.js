import React from "react";
import { shallow } from "enzyme";
import DynamicParams from "./DynamicParams";
describe("DynamicParams", () => {
  it("should render banner text correctly with given strings", () => {
    const objects = [
      { key: "one", value: "asd" },
      { key: "two", value: "dsa" }
    ];
    const component = shallow(<DynamicParams dynamic={objects} />);
    expect(component).toMatchSnapshot();
  });
});
