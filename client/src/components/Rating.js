import React from 'react';


const Rating = (props) => {

    const ratingValue = `rating${props.rating}`;
    return (
        <div className={ratingValue}>
            <img src="./star.svg" alt=""/>
            <img src="./star.svg" alt=""/>
            <img src="./star.svg" alt=""/>
            <img src="./star.svg" alt=""/>
            <img src="./star.svg" alt=""/>
        </div>
    )
}


export default Rating;