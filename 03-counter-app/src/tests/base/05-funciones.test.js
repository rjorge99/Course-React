import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('05', () => {
    test('debe retornar un objeto', () => {
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const userTest = getUser();
        expect(user).toEqual(userTest);
    });

    test('debe retornar un objeto', () => {
        const nombre = 'jorge';
        const user = {
            uid: 'ABC567',
            username: nombre
        };

        const userTest = getUsuarioActivo(nombre);
        expect(user).toEqual(userTest);
    });
});
