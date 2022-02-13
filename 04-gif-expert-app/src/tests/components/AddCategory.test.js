import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Prubas de AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe mostrarse correctamente', async () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', async () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
    });

    test('no debe postear informacion', async () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar setCategories y limpiar la caja de texto', async () => {
        const value = 'Hola mundo';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
