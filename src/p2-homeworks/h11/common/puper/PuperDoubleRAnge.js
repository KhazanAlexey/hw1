import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";

const MultiRangeSlider = ({ min, max,setValue1,setValue2 }) => {

    // const [minVal, setMinVal] = useState(min);
    // const [maxVal, setMaxVal] = useState(max);
    // const minValRef = useRef(min);
    // const maxValRef = useRef(max);
    const range = useRef(null);
    setValue1(min)
    setValue2(max)
    // Convert to percentage
    const getPercent = useCallback(
        value => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side

    // Set width of the range to decrease from the right side


    return (
        <div className="container">
            <input
                type="range"
                min={0}
                max={100}
                value={min}
                onChange={event => {
                    // const value = Math.min(Number(event.target.value), maxVal - 1);
                    setValue1(event.target.value);
                    // minValRef.current = value;
                }}
                className="thumb thumb--left"
                style={{ zIndex: min > max - 100 && "5" }}
            />
            <input
                type="range"
                min={0}
                max={100}
                value={max}
                onChange={event => {
                    // const value = Math.max(Number(event.target.value), minVal + 1);
                    setValue2(event.target.value);
                    // maxValRef.current = value;
                }}
                className="thumb thumb--right"
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />

            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

export default MultiRangeSlider;
