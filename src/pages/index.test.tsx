import { mount } from 'enzyme';
import Home, { Button } from './index';

describe('button', () => {
  it('should alert "Hello, Emotion!" when clicked', () => {
    const button = mount(
      <Home />
    );

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();
    
    button.find(Button).simulate('click');

    expect(alertSpy).toHaveBeenCalledWith('Hello, Emotion!');
  });
});