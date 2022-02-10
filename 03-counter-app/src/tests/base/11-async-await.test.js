import { getImagen } from '../../base/11-async-await';

describe('11', () => {
    test('debe retornar el url', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
});
