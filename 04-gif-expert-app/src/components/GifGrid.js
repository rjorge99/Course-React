import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);
    console.log(images);
    
    return (
        <div>
            <h3>{category}</h3>
            { loading && <p>Loading...</p>}
            {
                images.map( img => 
                    <GifGridItem
                        key={img.id}
                        { ...img }
                    />
                )
            }
        </div>
    )
}
