import React, { useState } from "react";

export const Slide = ({ children, width }) => {
    return (
        <div className="slide" style={{ width: width }}>
            <div className="inner-slide">
                {children}
            </div>
        </div>
    )
}

const Swiper = (props) => {
    let {
        arrowsColor
    } = props;
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index) => {

        if (index < 0) {
            index = 0;
        } else if (index >= React.Children.count(props.children)) {
            index = React.Children.count(props.children) - 1;
        }

        setActiveIndex(index)
    }

    return (
        <div className="swiper">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(props.children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className="arrows">
                <button onClick={() => { handleClick(activeIndex - 1) }} style={{ color: arrowsColor, transform: 'rotateZ(180deg)', visibility: activeIndex == 0 && "hidden" }} > {'➜'} </button>
                <button onClick={() => { handleClick(activeIndex + 1) }} style={{ color: arrowsColor, visibility: activeIndex == 2 && "hidden" }}> {'➜'} </button>
            </div>
        </div>
    )
};

export default Swiper;