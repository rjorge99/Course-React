import { getHeroeByIdAsync } from '../../base/09-promesas';
import { heroes } from '../../data/heroes';

describe('09', () => {
    test('debe retornar un heroe async', done => {
        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

    test('debe obtener un error si en heroe por id no existe', done => {
        const id = 20;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});
