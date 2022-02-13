import { shallow } from 'enzyme';
import GiftExpertApp from '../../GifExpertApp';

describe('Prubas de GifExpertApp', () => {
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar una lista de categorias', () => {
        const categorias = ['1', '2'];
        const wrapper = shallow(
            <GiftExpertApp defaultCategories={categorias} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    });
});
