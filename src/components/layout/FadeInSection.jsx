/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`${props.classes} fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export default FadeInSection;