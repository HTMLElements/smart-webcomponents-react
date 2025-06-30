import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { ScrollBar } from 'smart-webcomponents-react/scrollbar';

function App() {
    const mediaSlider = useRef();
    const alarmSlider = useRef();
    const volumeSlider = useRef();
    const lowBatterySlider = useRef();
    const powerSaverSlider = useRef();
    const lowBatteryAlert = useRef();
    const powerSaver = useRef();

    // Handler for slider icon changes
    const setIcon = React.useCallback((event) => {
        let below = "",
            above = "",
            off = "";
        const slider = event.target;

        switch (slider) {
            case mediaSlider.current.nativeElement:
                below = '<i class="material-icons">&#xE04D;</i>';
                above = '<i class="material-icons">&#xE050;</i>';
                off = '<i class="material-icons">&#xE04F;</i>';
                break;
            case alarmSlider.current.nativeElement:
                below = above = '<i class="material-icons">&#xE855;</i>';
                off = '<i class="material-icons">&#xE857;</i>';
                break;
            case volumeSlider.current.nativeElement:
                below = '<i class="material-icons">&#xE7F5;</i>';
                above = '<i class="material-icons">&#xE7F4;</i>';
                off = '<i class="material-icons">&#xE7F6;</i>';
                break;
            default:
                break;
        }

        if (slider.value === slider.min) {
            slider.previousElementSibling.innerHTML = off;
        } else if (slider.value < slider.max / 2) {
            slider.previousElementSibling.innerHTML = below;
        } else {
            slider.previousElementSibling.innerHTML = above;
        }
    }, []);

    // Handler for battery level changes
    const setBatteryLevel = React.useCallback((event) => {
        const slider = event.target;

        if (slider === lowBatterySlider.current.nativeElement) {
            lowBatteryAlert.current.textContent = slider.value.toString();
        } else {
            powerSaver.current.textContent = slider.value.toString();
        }
    }, []);

    useEffect(() => {
        if (
            mediaSlider.current &&
            alarmSlider.current &&
            volumeSlider.current &&
            lowBatterySlider.current &&
            powerSaverSlider.current
        ) {
            mediaSlider.current.nativeElement.addEventListener('change', setIcon);
            alarmSlider.current.nativeElement.addEventListener('change', setIcon);
            volumeSlider.current.nativeElement.addEventListener('change', setIcon);
            lowBatterySlider.current.nativeElement.addEventListener('change', setBatteryLevel);
            powerSaverSlider.current.nativeElement.addEventListener('change', setBatteryLevel);

            // Cleanup
            return () => {
                mediaSlider.current.nativeElement.removeEventListener('change', setIcon);
                alarmSlider.current.nativeElement.removeEventListener('change', setIcon);
                volumeSlider.current.nativeElement.removeEventListener('change', setIcon);
                lowBatterySlider.current.nativeElement.removeEventListener('change', setBatteryLevel);
                powerSaverSlider.current.nativeElement.removeEventListener('change', setBatteryLevel);
            };
        }
    }, [setIcon, setBatteryLevel]);

    return (
        <div>
            <section>
                <div>
                    <h2>Scrollbars let users to select values by moving the scrollbar thumb.</h2>
                    <div className="module">
                        <p>
                            Scrollbars are ideal components for adjusting settings that reflect intensity levels, such as volume, brightness, or color saturation.
                        </p>
                    </div>
                </div>
            </section>

            <section id="continuousSliders">
                <h2>Continuous scrollbar</h2>
                <div className="module">
                    <p>
                        Use continuous scrollbars for subjective settings that do not require a specific value for the user to make meaningful adjustments.
                    </p>
                </div>

                <div className="module continuousSliderLight">
                    <table>
                        <tbody>
                            <tr>
                                <td><p>Normal</p></td>
                                <tr />
                                <td>
                                    <ScrollBar rightToLeft></ScrollBar>
                                </td>
                                <tr />
                                <td>
                                    <ScrollBar rightToLeft max={100} value={50}></ScrollBar>
                                </td>
                                <tr />
                                <td>
                                    <ScrollBar rightToLeft max={100} value={100}></ScrollBar>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Disabled</p></td>
                                <tr />
                                <td>
                                    <ScrollBar rightToLeft disabled max={100}></ScrollBar>
                                </td>
                                <tr />
                                <td>
                                    <ScrollBar rightToLeft disabled max={100} value={50}></ScrollBar>
                                </td>
                                <tr />
                                <td>
                                    <ScrollBar rightToLeft disabled max={100} value={100}></ScrollBar>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="verticalSliders">
                <h2>Orientation</h2>
                <div className="module">
                    <p>jqxScrollBar can be horizontal or vertical depending on the orientation property.</p>
                </div>
                <div className="module">
                    <div>
                        <ScrollBar rightToLeft max={100} value={50}></ScrollBar>
                        <br />
                        <br />
                        <ScrollBar rightToLeft orientation="vertical" max={100} value={75}></ScrollBar>
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
                                <ScrollBar rightToLeft id="mediaSlider" ref={mediaSlider} max={100} value={25}></ScrollBar>
                            </div>
                        </div>
                        <div>
                            <h3>Alarm volume</h3>
                            <div id="alarmControl" className="controls">
                                <i className="material-icons">&#xE855;</i>
                                <ScrollBar rightToLeft id="alarmSlider" ref={alarmSlider} max={100} value={50}></ScrollBar>
                            </div>
                        </div>
                        <div>
                            <h3>Ring volume</h3>
                            <div id="ringControl" className="controls">
                                <i className="material-icons">&#xE7F4;</i>
                                <ScrollBar rightToLeft id="volumeSlider" ref={volumeSlider} max={100} value={75}></ScrollBar>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="module power-controls">
                    <div>
                        <h2>Battery Saver Mode</h2>
                        <div>
                            <h3>Low battery alert on <b ref={lowBatteryAlert} id="lowBatteryAlert">15</b> %</h3>
                            <div id="mediaControl" className="controls">
                                <i className="material-icons">&#xE8B2;</i>
                                <ScrollBar rightToLeft id="lowBatterySlider" ref={lowBatterySlider} max={100} value={15} scaleType="integer"></ScrollBar>
                            </div>
                        </div>
                        <div>
                            <h3>Power saver mode active on <b ref={powerSaver} id="powerSaver">50</b>%</h3>
                            <div id="alarmControl" className="controls">
                                <i className="material-icons">&#xE19C;</i>
                                <ScrollBar rightToLeft id="powerSaverSlider" ref={powerSaverSlider} max={100} value={50} scaleType="integer"></ScrollBar>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;