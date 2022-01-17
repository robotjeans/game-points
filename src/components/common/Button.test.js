import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { shallow, mount } from 'enzyme';
import theme from '../../styles/theme';
import Button from './Button';

const TestButton = ({ ...props }) => (
  <ThemeProvider theme={theme}>
    <Button {...props}>Test</Button>
  </ThemeProvider>
);

describe('Button', () => {
  it('should render text correctly', () => {
    const component = shallow(<TestButton />);
    expect(component).toMatchSnapshot();
  });

  it('should be able to click and trigger the callback function', () => {
    const clickFn = jest.fn();
    const component = mount(<TestButton onClick={clickFn} />);

    component.childAt(0).simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it("shouldn't be able to click and trigger the callback function when it's disabled", () => {
    const clickFn = jest.fn();
    const component = mount(<TestButton onClick={clickFn} disabled />);
    component.childAt(0).simulate('click');
    expect(clickFn).not.toHaveBeenCalled();
  });
});
