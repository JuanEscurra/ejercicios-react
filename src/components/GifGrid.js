import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {loading, data:images} = useFetchGifs(category);

    return (
        <>
            {category && <h3>Category: {category}</h3>}
            {loading && <p className="animate__animated animate__flash">Cargando ...</p>}
            <div className="container">
                {
                    images.map( (img) => (
                        <GifGridItem
                            key={img.id}
                            img={img}
                        />
                    ))
                }
            </div>
        </>
    )
}
