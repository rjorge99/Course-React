import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            {images.map(img => (
                <GifGridItem key={img.id} {...img} />
            ))}
        </div>
    );
};
