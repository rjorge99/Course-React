import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prubas de GifGridExpert', () => {
    const title = 'Un titulo';
    const url = 'http://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el parrafo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('Debe tener una imagen con los props', () => {
        const img = wrapper.find('img');

        // console.log(p.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
});
