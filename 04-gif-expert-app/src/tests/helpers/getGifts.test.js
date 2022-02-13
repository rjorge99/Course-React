import { getGifs } from '../../helpers.js/getGifs';

describe('Prubas de getGifts fetch', () => {
    test('debe traer 1 elemento', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(1);
    });

    test('debe traer 1 elemento', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
