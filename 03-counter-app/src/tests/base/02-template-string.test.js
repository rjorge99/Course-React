import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar hola jorge', () => {
        const nombre = 'jorge';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    });

    test('debe retornar Hola Carlos', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    });
});
