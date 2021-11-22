import React from 'react';
import "./Tops.css"

function Tops({title, poster, rating}){
    return (
        <div className = "tops__movie" width="50%">
            <img src={poster} alt={title} title={title} />
            <div className="tops__data">
                <h4 className="tops__rating">⭐ {rating}</h4>
            </div>
        </div>
    );
}

export default Tops;