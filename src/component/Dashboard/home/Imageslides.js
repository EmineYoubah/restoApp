import React, { useState, useEffect } from "react";
import './imageslider.css';

function Imageslide({slides}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(currentIndex => 
                currentIndex === slides.length - 1 ? 0 : currentIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe gauche
            setCurrentIndex(currentIndex => 
                currentIndex === slides.length - 1 ? 0 : currentIndex + 1
            );
        }

        if (touchStart - touchEnd < -50) {
            // Swipe droite
            setCurrentIndex(currentIndex => 
                currentIndex === 0 ? slides.length - 1 : currentIndex - 1
            );
        }
    };

    return(
        <div 
            className="sliderstyle"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <img 
                src={slides[currentIndex].url} 
                alt={slides[currentIndex].title}
                className="slide-image"
                loading="eager"
            />
            <div className="dotsContainerStyles">
                {slides.map((slide, slideIndex) => (
                    <div 
                        className="dotStyle" 
                        key={slideIndex} 
                        onClick={() => setCurrentIndex(slideIndex)}
                        style={{
                            color: currentIndex === slideIndex ? '#fff' : 'rgba(255,255,255,0.5)'
                        }}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Imageslide;