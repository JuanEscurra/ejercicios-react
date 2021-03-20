import React from 'react'

export const GifGridItem = ({img}) => {
    
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={img.img} alt={img.title} className="card__img" />
            <h3 className="card__title">{img.title}</h3>
        </div>
    )
}
