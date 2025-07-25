import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';

const App = () => {

    // Equivalent to handleChange method in class component
    const handleChange = (event) => {
        const value = event.detail.value;
        console.log(value);
    };

    // (Optional) useEffect would be used if you had logic in componentDidMount/init
    // React.useEffect(() => {
    //     // componentDidMount logic here if needed
    // }, []);

    return (
        <div>
            <div className="smart-demo-container">
                <div id="materialGaugeContainer">
                    <section id="overview">
                        <div>
                            <h2>A gauge is a circular (or semi-circular) numeric control used to display or select a value from a range.</h2>
                        </div>
                    </section>
                    <nav>
                        <h2>Contents</h2>
                        <ul>
                            <li><a href="#gauge-continuous">Continuous gauge</a></li>
                            <li><a href="#gauge-discrete">Discrete gauge</a></li>
                            <li><a href="#gauge-scales">Gauge scales</a></li>
                            <li><a href="#gauge-angles">Gauge angles</a></li>
                            <li><a href="#gauge-demo">Demo</a></li>
                        </ul>
                    </nav>
                    <section id="gauge-continuous">
                        <h2>Continuous gauge</h2>
                        <div className="module">
                            <p>Use continuous gauges for subjective settings that do not require a specific
                                value for the user to make meaningful adjustments.</p>
                        </div>
                        <div className="module">
                            <div className="light-background">
                                <Gauge
                                    analogDisplayType="fill"
                                    labelsVisibility="none"
                                    ticksVisibility="none"
                                    digitalDisplay
                                    startAngle={-30}
                                    endAngle={210}
                                    min={0}
                                    max={100}
                                    value={50}
                                    precisionDigits={2}
                                />
                            </div>
                            <br />
                        </div>
                        <div className="module"></div>
                    </section>
                    <section id="gauge-discrete">
                        <h2>Discrete gauge</h2>
                        <div className="module">
                            <p>The discrete gauge's value indicator snaps to evenly spaced tick marks
                                along the gauge. Use for objective settings that require specific values
                                for the user to make meaningful adjustments. Each tick mark should change
                                the setting to a level that’s discernible to the user. The values are predetermined
                                and aren’t user-editable.</p>
                        </div>
                        <div className="module">
                            <div className="light-background">
                                <Gauge
                                    analogDisplayType="fill"
                                    labelsVisibility="none"
                                    ticksVisibility="major"
                                    ticksPosition="track"
                                    digitalDisplay
                                    startAngle={-30}
                                    endAngle={210}
                                    min={0}
                                    max={100}
                                    value={10}
                                    precisionDigits={0}
                                    coerce
                                    interval={10}
                                />
                            </div>
                        </div>
                        <div className="module"></div>
                    </section>
                    <section id="gauge-scales">
                        <h2>Gauge scales</h2>
                        <div className="module">
                            <p>Gauges can have scales with ticks and labels on either side of the track
                                or on it.</p>
                        </div>
                        <div className="module">
                            <div className="light-background">
                                <Gauge
                                    analogDisplayType="fill"
                                    labelsVisibility="all"
                                    ticksVisibility="minor"
                                    ticksPosition="scale"
                                    scalePosition="inside"
                                    digitalDisplay
                                    startAngle={-30}
                                    endAngle={210}
                                    min={0}
                                    max={100}
                                    value={10}
                                    precisionDigits={0}
                                />
                            </div>
                            <p>Continuous gauge with scale positioned inside</p>
                        </div>
                        <div className="module">
                            <div className="light-background">
                                <Gauge
                                    analogDisplayType="fill"
                                    labelsVisibility="all"
                                    ticksVisibility="minor"
                                    ticksPosition="scale"
                                    scalePosition="outside"
                                    digitalDisplay
                                    startAngle={-30}
                                    endAngle={210}
                                    min={0}
                                    max={100}
                                    value={20}
                                    precisionDigits={0}
                                />
                            </div>
                            <p>Continuous gauge with scale positioned outside</p>
                        </div>
                        <div className="module">
                            <div className="light-background">
                                <Gauge
                                    analogDisplayType="fill"
                                    labelsVisibility="all"
                                    ticksVisibility="minor"
                                    ticksPosition="track"
                                    scalePosition="outside"
                                    digitalDisplay
                                    startAngle={-30}
                                    endAngle={210}
                                    min={0}
                                    max={100}
                                    value={30}
                                    precisionDigits={0}
                                />
                            </div>
                            <p>Continuous gauge with label positioned outside and ticks on track</p>
                        </div>
                    </section>
                    <section id="gauge-angles">
                        <h2>Gauge angles</h2>
                        <div className="module">
                            <p>The start and end angles of the gauge's track can be changed as necessary.</p>
                        </div>
                        <div className="module">
                            <div className="light-background">
                                <Gauge
                                    analogDisplayType="fill"
                                    labelsVisibility="none"
                                    ticksVisibility="none"
                                    digitalDisplay
                                    digitalDisplay-position="center"
                                    startAngle={0}
                                    endAngle={180}
                                    min={0}
                                    max={100}
                                    value={45}
                                    precisionDigits={2}
                                />
                            </div>
                            <p>Semi-circular gauge</p>
                        </div>
                        <div className="module">
                            <div className="light-background">
                                <Gauge
                                    analogDisplayType="fill"
                                    labelsVisibility="none"
                                    ticksVisibility="none"
                                    digitalDisplay
                                    digitalDisplay-position="center"
                                    startAngle={0}
                                    endAngle={360}
                                    min={0}
                                    max={100}
                                    value={45}
                                    precisionDigits={2}
                                />
                            </div>
                            <p>Circular gauge</p>
                        </div>
                        <div className="module">
                            <div className="light-background">
                                <Gauge
                                    analogDisplayType="fill"
                                    labelsVisibility="none"
                                    ticksVisibility="none"
                                    digitalDisplay
                                    digitalDisplay-position="center"
                                    startAngle={80}
                                    endAngle={280}
                                    min={0}
                                    max={100}
                                    value={45}
                                    precisionDigits={2}
                                />
                            </div>
                            <p>Gauge with custom angles</p>
                        </div>
                    </section>
                    <section id="gauge-demo">
                        <h2>Demo</h2>
                        <div className="module">
                            <div id="mobileDemo">
                                <Gauge
                                    id="mobileGauge"
                                    onChange={handleChange}
                                    analogDisplayType="fill"
                                    labelsVisibility="none"
                                    ticksVisibility="none"
                                    digitalDisplay
                                    startAngle={-30}
                                    endAngle={210}
                                    min={0}
                                    max={100}
                                    value={50}
                                    precisionDigits={0}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default App;