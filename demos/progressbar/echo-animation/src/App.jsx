import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

const App = () => {
    useEffect(() => {
        const valuePath = document.getElementsByClassName('smart-value-path')[0];
        const value = document.getElementsByClassName('smart-value')[0];
        if (valuePath) {
            valuePath.setAttribute('filter', 'url(#blueGlow)');
            valuePath.setAttribute('stroke', 'url(#blueGrad)');
        }
        if (value) {
            value.setAttribute('filter', 'url(#mainGlow)');
            value.setAttribute('stroke', 'url(#outlineGrad)');
        }
    }, []);

    return (
        <div>
            <svg>
                <defs>
                    <filter id="mainGlow" x="0" y="0" width="200%" height="200%">
                        <feGaussianBlur className="mainGlowBlur" stdDeviation="14" result="coloredBlur" />
                        <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
                        <feFlood floodColor="#50FFFF" floodOpacity="1"></feFlood>
                        <feComposite in2="offsetblur" operator="atop"></feComposite>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <filter id="blueGlow" x="0" y="0" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
                        <feFlood floodColor="#2144FB" floodOpacity="1"></feFlood>
                        <feComposite in2="offsetblur" operator="in"></feComposite>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <radialGradient id="outlineGrad" cx="10" cy="10" r="50" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#FFF" />
                        <stop offset="0.3" stopColor="#50FFFF" stopOpacity="1" />
                        <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="blueGrad" cx="10" cy="10" r="350" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#2144FB" />
                        <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
            <CircularProgressBar className="echo-animation"></CircularProgressBar>
        </div>
    );
}

export default App;
