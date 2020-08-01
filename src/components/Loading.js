import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Loading.scss';

//還沒設定好，因為Box.js沒有group

const Loading = (props) => {
    
    const {modelLoaded} = props;
    
    const tween = useSpring({opacity: modelLoaded ? 0 : 1})
        return (
            <animated.div style={tween} className="Loading">
                <div className="Loading__spinner"/>
                <div className="Loading__text">
                Loading
                </div>
            </animated.div>
        )
}

export default Loading;