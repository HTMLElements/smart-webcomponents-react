import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { Chart } from 'smart-webcomponents-react/chart';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

const App = () => {
  const chartRef = useRef();

  const sampleData = [
    12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15,
    31, 26, 11, 19, 5, 1, 8, 18, 12, 3, 16, 12, 24, 15, 17, 9,
    31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 5, 12, 11
  ];

  const xAxis = {
    unitInterval: 1,
    gridLines: { step: 1 },
    tickMarks: { step: 1 },
    labels: { step: 2 }
  };

  const valueAxis = {
    title: { text: 'Value<br>' },
    unitInterval: 5,
    gridLines: { step: 1 },
    tickMarks: { step: 1 },
    labels: { step: 1 },
    minValue: 0
  };

  const updateAxis = useCallback((axis, propertyPath, value) => {
    const chart = chartRef.current;
    if (!chart || !chart[axis]) return;

    let target = chart[axis];
    const keys = propertyPath.split('.');
    for (let i = 0; i < keys.length - 1; i++) {
      target = target[keys[i]];
      if (!target) return;
    }
    target[keys[keys.length - 1]] = value;
  }, []);

  return (
    <div>
      <Chart
        ref={chartRef}
        id="chart"
        animation="none"
        caption="Chart unitInterval and steps example"
        description=""
        showLegend={true}
        enableCrosshairs={false}
        padding={{ left: 10, top: 5, right: 10, bottom: 5 }}
        titlePadding={{ left: 90, top: 0, right: 0, bottom: 10 }}
        dataSource={sampleData}
        xAxis={xAxis}
        valueAxis={valueAxis}
        colorScheme="scheme05"
        seriesGroups={[
          {
            type: 'line',
            series: [{ displayText: 'value', opacity: 0.7 }]
          }
        ]}
      />
      <div className="options">
        <table>
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td colSpan="2"><b>xAxis settings:</b></td>
                    </tr>
                    <tr>
                      <td>Labels step</td>
                      <td>
                        <NumericTextBox min="1" max="10" value="2" spinButtons
                          onChange={e =>
                            updateAxis("xAxis", "labels.step", parseFloat(e.detail.value))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Grid lines step</td>
                      <td>
                        <NumericTextBox min="1" max="10" value="1" spinButtons
                          onChange={e =>
                            updateAxis("xAxis", "gridLines.step", parseFloat(e.detail.value))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Tick marks step</td>
                      <td>
                        <NumericTextBox min="1" max="10" value="1" spinButtons
                          onChange={e =>
                            updateAxis("xAxis", "tickMarks.step", parseFloat(e.detail.value))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Unit interval</td>
                      <td>
                        <NumericTextBox min="1" max="10" value="1" spinButtons
                          onChange={e =>
                            updateAxis("xAxis", "unitInterval", parseFloat(e.detail.value))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <CheckBox
                          onChange={e =>
                            updateAxis("xAxis", "valuesOnTicks", !e.detail.value)
                          }
                        >
                          Values between ticks
                        </CheckBox>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td colSpan="2"><b>valueAxis settings:</b></td>
                    </tr>
                    <tr>
                      <td>Labels step</td>
                      <td>
                        <NumericTextBox min="1" max="10" value="1" spinButtons
                          onChange={e =>
                            updateAxis("valueAxis", "labels.step", parseFloat(e.detail.value))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Grid lines step</td>
                      <td>
                        <NumericTextBox min="1" max="10" value="1" spinButtons
                          onChange={e =>
                            updateAxis("valueAxis", "gridLines.step", parseFloat(e.detail.value))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Tick marks step</td>
                      <td>
                        <NumericTextBox min="1" max="10" value="1" spinButtons
                          onChange={e =>
                            updateAxis("valueAxis", "tickMarks.step", parseFloat(e.detail.value))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Unit interval</td>
                      <td>
                        <NumericTextBox min="1" max="10" value="5" spinButtons
                          onChange={e =>
                            updateAxis("valueAxis", "unitInterval", parseFloat(e.detail.value))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <CheckBox
                          onChange={e =>
                            updateAxis("valueAxis", "valuesOnTicks", !e.detail.value)
                          }
                        >
                          Values between ticks
                        </CheckBox>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
