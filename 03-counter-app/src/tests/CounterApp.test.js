import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en CounterApp', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe mostrar CounterApp correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe mostrar el contador', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);

        const valor = wrapper.find('h2').text();
        expect(valor).toBe(`${value}`);
    });

    test('debe incrementar', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('debe incrementar', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('debe resetear', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(`${value}`);
    });
});
