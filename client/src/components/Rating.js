import React from 'react';
import PropTypes from 'prop-types';


const Rating = (props) => {

    const ratingValue = `rating${props.rating}`;
    return (
        <div className={ratingValue}>
            <img src="./star.svg" alt="star"/>
            <img src="./star.svg" alt="star"/>
            <img src="./star.svg" alt="star"/>
            <img src="./star.svg" alt="star"/>
            <img src="./star.svg" alt="star"/>
        </div>
    )
}


Rating.propTypes = {
    rating: PropTypes.number
}

export default Rating;