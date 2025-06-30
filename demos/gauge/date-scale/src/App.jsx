import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';

const App = () => {
    return (
        <div>
            <Gauge
                id="gauge1"
                analogDisplayType="fill"
                scalePosition="outside"
                mode="date"
                dateLabelFormatString="d"
                min={new Date(2000, 0, 1)}
                max={new Date(2020, 0, 1)}
                value={new Date(2001, 10, 1)}
                showRanges
                ranges={[
                    { startValue: new Date(2000, 0, 1), endValue: new Date(2003, 0, 1), className: "range1" },
                    { startValue: new Date(2003, 0, 1), endValue: new Date(2009, 0, 1), className: "range2" },
                    { startValue: new Date(2009, 0, 1), endValue: new Date(2020, 0, 1), className: "range3" }
                ]}
            />
            <Gauge
                id="gauge2"
                analogDisplayType="line"
                coerce
                scalePosition="outside"
                mode="date"
                min={new Date(2017, 0, 1)}
                max={new Date(2019, 0, 1)}
                value={new Date(2018, 0, 1)}
                customInterval
                customTicks={[
                    new Date(2017, 0, 1),
                    new Date(2018, 0, 1),
                    new Date(2018, 4, 17),
                    new Date(2019, 0, 1)
                ]}
            />
            <Gauge
                id="gauge3"
                analogDisplayType="line"
                inverted
                showUnit
                ticksPosition="track"
                unit="μs"
                mode="date"
                dateLabelFormatString="uu"
                // NOTE: For min, max, value below - replace with correct DateTime objects if required by the Gauge component
                min={"new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 45)"}
                max={"new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 347)"}
                value={"new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 300)"}
            />
        </div>
    );
};

export default App;