import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en PrimeraApp', () => {
    // test('Debe de mostrar el mensaje Hola', () => {
    //     const saludo = 'Hola';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('debe mostrar PrimeraApp correctamente', () => {
        const saludo = 'Hola';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });
    test('debe mostrar el subtitulo', () => {
        const saludo = 'Hola';
        const subtitulo = 'soy subtitulo';
        const wrapper = shallow(
            <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    });
});
