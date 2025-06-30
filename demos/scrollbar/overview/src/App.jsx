import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { ScrollBar } from 'smart-webcomponents-react/scrollbar';

function App() {
    const scrollbar = useRef();
    const scrollbar2 = useRef();
    const scrollbar3 = useRef();
    const scrollbar4 = useRef();
    const scrollbar5 = useRef();
    const lowbatteryalert = useRef();
    const powersaver = useRef();

    const setIcon = React.useCallback((sliderName, event) => {
        let below = "",
            above = "",
            off = "",
            slider;

        switch (sliderName) {
            case 'mediaSlider':
                below = '<i class="material-icons">&#xE04D;</i>';
                above = '<i class="material-icons">&#xE050;</i>';
                off = '<i class="material-icons">&#xE04F;</i>';
                slider = scrollbar.current;
                break;
            case 'alarmSlider':
                below = above = '<i class="material-icons">&#xE855;</i>';
                off = '<i class="material-icons">&#xE857;</i>';
                slider = scrollbar2.current;
                break;
            case 'volumeSlider':
                below = '<i class="material-icons">&#xE7F5;</i>';
                above = '<i class="material-icons">&#xE7F4;</i>';
                off = '<i class="material-icons">&#xE7F6;</i>';
                slider = scrollbar3.current;
                break;
            default:
                return;
        }

        if (!slider) return;
        // NativeElement may not be defined at very first render
        const nativeEl = slider.nativeElement;
        if (!nativeEl || !nativeEl.previousElementSibling) return;

        if (slider.value === slider.min) {
            nativeEl.previousElementSibling.innerHTML = off;
        }
        else if (slider.value < slider.max / 2) {
            nativeEl.previousElementSibling.innerHTML = below;
        }
        else {
            nativeEl.previousElementSibling.innerHTML = above;
        }
    }, []);

    const setBatteryLevel = React.useCallback((sliderName, event) => {
        const slider = (sliderName === 'lowBatterySlider' ? scrollbar4 : scrollbar5).current;
        const lowBatterySlider = scrollbar4.current;

        if (slider === lowBatterySlider) {
            if (lowbatteryalert.current) {
                lowbatteryalert.current.textContent = slider.value.toString();
            }
        }
        else {
            if (powersaver.current) {
                powersaver.current.textContent = slider.value.toString();
            }
        }
    }, []);

    return (
        <div>
            <section>
                <div>
                    <h2>Scrollbars let users to select values by moving the scrollbar thumb.</h2>
                    <div className="module">
                        <p>Scrollbars are ideal components for adjusting settings that reflect intensity
                            levels, such as volume, brightness, or color saturation.</p>
                    </div>
                </div>
            </section>
            <section id="continuousSliders">
                <h2>Continuous scrollbar</h2>
                <div className="module">
                    <p>Use continuous scrollbars for subjective settings that do not require
                        a specific value for the user to make meaningful adjustments.</p>
                </div>
                <div className="module continuousSliderLight">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Normal</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ScrollBar ></ScrollBar>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ScrollBar max={100} value={50}></ScrollBar>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ScrollBar max={100} value={100}></ScrollBar>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Disabled</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ScrollBar disabled max={100}></ScrollBar>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ScrollBar disabled max={100} value={50}></ScrollBar>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ScrollBar disabled max={100} value={100}></ScrollBar>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section id="verticalSliders">
                <h2>Orientation</h2>
                <div className="module">
                    <p>smartScrollBar can be horizontal or vertical depending on the orientation
                        property.</p>
                </div>
                <div className="module">
                    <div>
                        <ScrollBar max={100} value={50}></ScrollBar>
                        <br />
                        <br />
                        <ScrollBar orientation="vertical" max={100} value={75}></ScrollBar>
                    </div>
                    <br />
                    <p>Vertical scrollbars</p>
                </div>
            </section>
            <section id="demoSliders">
                <h2>Demo</h2>
                <div className="module">
                    <p>ScrollBars are controls that are used for adjusting values precisely.</p>
                </div>
                <div className="module media-controls">
                    <div>
                        <h2>Volumes</h2>
                        <div>
                            <h3>Media volume</h3>
                            <div id="mediaControl" className="controls">
                                <i className="material-icons">&#xE04D;</i>
                                <ScrollBar
                                    ref={scrollbar}
                                    id="mediaSlider"
                                    onChange={(e) => setIcon('mediaSlider', e)}
                                    max={100}
                                    value={25}
                                ></ScrollBar>
                            </div>
                        </div>
                        <div>
                            <h3>Alarm volume</h3>
                            <div id="alarmControl" className="controls">
                                <i className="material-icons">&#xE855;</i>
                                <ScrollBar
                                    ref={scrollbar2}
                                    id="alarmSlider"
                                    onChange={(e) => setIcon('alarmSlider', e)}
                                    max={100}
                                    value={50}
                                ></ScrollBar>
                            </div>
                        </div>
                        <div>
                            <h3>Ring volume</h3>
                            <div id="ringControl" className="controls">
                                <i className="material-icons">&#xE7F4;</i>
                                <ScrollBar
                                    ref={scrollbar3}
                                    id="volumeSlider"
                                    onChange={(e) => setIcon('volumeSlider', e)}
                                    max={100}
                                    value={75}
                                ></ScrollBar>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="module power-controls">
                    <div>
                        <h2>Battery Saver Mode</h2>
                        <div>
                            <h3>
                                Low battery alert on <b ref={lowbatteryalert} id="lowBatteryAlert">15</b> %
                            </h3>
                            <div id="mediaControl" className="controls">
                                <i className="material-icons">&#xE8B2;</i>
                                <ScrollBar
                                    ref={scrollbar4}
                                    id="lowBatterySlider"
                                    onChange={(e) => setBatteryLevel('lowBatterySlider', e)}
                                    max={100}
                                    value={15}
                                    scaleType="integer"
                                ></ScrollBar>
                            </div>
                        </div>
                        <div>
                            <h3>
                                Power saver mode active on <b ref={powersaver} id="powerSaver">50</b>%
                            </h3>
                            <div id="alarmControl" className="controls">
                                <i className="material-icons">&#xE19C;</i>
                                <ScrollBar
                                    ref={scrollbar5}
                                    id="powerSaverSlider"
                                    onChange={(e) => setBatteryLevel('powerSaverSlider', e)}
                                    max={100}
                                    value={50}
                                    scaleType="integer"
                                ></ScrollBar>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;