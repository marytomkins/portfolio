import React, { forwardRef, useState } from 'react';
import '../App.css';
import { isMobile } from 'react-device-detect';
import Swiper, { Slide } from "./Swiper";

const Square = forwardRef((props, ref) => {
    let {
        id,
        colors,
        title,
        sections,
        hoverImg = true,
        customImageStyling
    } = props;
    console.log(isMobile)
    return (
        <>
            {isMobile && id !== "contact" ?
                <div className="square" id={id} ref={ref} style={{ background: colors?.background, color: colors?.text, boxShadow: `4px 4px 10px 0px ${colors?.shadow}`, border: colors?.border }}>
                    <div className='square-title'>
                        {title}
                    </div>
                    <Swiper arrowsColor={colors?.text}>
                        {sections.map((section, index) =>
                            <Slide>
                                {section.imgSrc && (
                                    <div className='section-img' id={id}>
                                        <img src={section.imgSrc} alt="section.imgSrc" className='image' id={id} style={{ ...customImageStyling }}></img>
                                        <a href={section.link} target="_blank" rel="noreferrer" className="overlay">
                                            {hoverImg && <div className='overlay-text'>Click here to view</div>}
                                        </a>
                                    </div>
                                )}
                                <div className='section-title' id={id}>{section.title}</div>
                                <div className='section-heading' id={id}>{section.heading}</div>
                                {section.subheading && <div className='section-subheading' id={id}>{section.subheading}</div>}
                                <div className='descriptions'>
                                    {section.description && section.description.map(item =>
                                        <div className='section-description' id={id}>{item}</div>
                                    )}
                                </div>
                            </Slide>
                        )}
                    </Swiper>
                </div>
                :
                <div className="square" id={id} ref={ref} style={{ background: colors?.background, color: colors?.text, boxShadow: `4px 4px 10px 0px ${colors?.shadow}`, border: colors?.border }}>
                    <div className='square-title'>
                        {title}
                    </div>
                    <div className="square-sections" id={id}>
                        {sections.map(section =>
                            <div className='section' id={id}>
                                {section.imgSrc && (
                                    <div className='section-img' id={id}>
                                        <img src={section.imgSrc} alt="section.imgSrc" className='image' id={id} style={{ ...customImageStyling }}></img>
                                        <a href={section.link} target="_blank" rel="noreferrer" className="overlay">
                                            {hoverImg && <div className='overlay-text'>Click here to view</div>}
                                        </a>
                                    </div>
                                )}
                                <div className='section-title' id={id}>{section.title}</div>
                                <div className='section-heading' id={id}>{section.heading}</div>
                                {section.subheading && <div className='section-subheading' id={id}>{section.subheading}</div>}
                                {section.description && section.description.map(item =>
                                    <div className='section-description'>{item}</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            }

        </>
    );
});

export default Square;