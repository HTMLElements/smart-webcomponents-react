import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';

const App = () => {
  return (
    <div>
      <div className="demo-description">
        Responsive tables allow tables to be scrolled horizontally with ease.
        Make any table responsive across all viewports by setting the .table-responsive.
        Or, pick a maximum breakpoint with which to have a responsive table up
        to by using .table-responsive {'{-sm|-md|-lg|-xl}'}.
      </div>
      <Table className="table-responsive" id="table">
        <table>
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Area</th>
              <th scope="col">Population_Rural</th>
              <th scope="col">Population_Total</th>
              <th scope="col">GDP_Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brazil</td>
              <td>8515767</td>
              <td>0.15</td>
              <td>205809000</td>
              <td>2353025</td>
            </tr>
            <tr>
              <td>China</td>
              <td>9388211</td>
              <td>0.46</td>
              <td>1375530000</td>
              <td>10380380</td>
            </tr>
            <tr>
              <td>France</td>
              <td>675417</td>
              <td>0.21</td>
              <td>64529000</td>
              <td>2846889</td>
            </tr>
            <tr>
              <td>Germany</td>
              <td>357021</td>
              <td>0.25</td>
              <td>81459000</td>
              <td>3859547</td>
            </tr>
            <tr>
              <td>India</td>
              <td>3287590</td>
              <td>0.68</td>
              <td>1286260000</td>
              <td>2047811</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>301230</td>
              <td>0.31</td>
              <td>60676361</td>
              <td>2147952</td>
            </tr>
            <tr>
              <td>Japan</td>
              <td>377835</td>
              <td>0.07</td>
              <td>126920000</td>
              <td>4616335</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td>17098242</td>
              <td>0.26</td>
              <td>146544710</td>
              <td>1857461</td>
            </tr>
            <tr>
              <td>United States</td>
              <td>9147420</td>
              <td>0.19</td>
              <td>323097000</td>
              <td>17418925</td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>244820</td>
              <td>0.18</td>
              <td>65097000</td>
              <td>2945146</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>
  );
};

export default App;
