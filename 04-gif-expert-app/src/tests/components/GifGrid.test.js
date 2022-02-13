import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prubas de GifGrid', () => {
    const category = 'Cat';

    test('Debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({ data: [], loading: true });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se carga imagenes', () => {
        const imgs = [{ id: 'abc', url: 'address', title: 'title' }];
        useFetchGifs.mockReturnValue({ data: imgs, loading: false });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    });
});
