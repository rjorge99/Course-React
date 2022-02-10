import { retornaArreglo } from '../../base/07-deses-arr';

describe('07', () => {
    test('debe retornar un string y un numero ', () => {
        const [letras, numeros] = retornaArreglo();
        // expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });
});
