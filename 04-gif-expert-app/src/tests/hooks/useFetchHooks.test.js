import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Prubas de hook', () => {
    test('debe retornar el estado inical', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('One Punch')
        );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    test('Debe retornar un arrelga de migs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('One Punch')
        );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
    });
});
