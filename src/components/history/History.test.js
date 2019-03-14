import React from "react";
import { shallow } from "enzyme";
import History from "./History";
describe("History", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<History debug />);

    expect(component).toMatchSnapshot();
  });
});
