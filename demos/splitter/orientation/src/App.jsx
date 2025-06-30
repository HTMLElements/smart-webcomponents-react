import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { ListBox, ListItem } from 'smart-webcomponents-react/listbox';
import { Splitter, SplitterItem } from 'smart-webcomponents-react/splitter';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';
import { CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const options = {
  center: {
    lat: 40.7590403,
    lng: -74.0392705
  },
  zoom: 8
};

function App() {
  const splitter = useRef();
  const splitter2 = useRef();
  const tabs = useRef();
  const progressbar = useRef();
  const listbox = useRef();
  const contentHolder = useRef();
  const tabsContentHolder = useRef();
  const watertext = useRef();
  const soiltext = useRef();
  const airtext = useRef();
  const map = useRef();

  // Mimic componentDidMount for initialization
  useEffect(() => {
    if (contentHolder.current && watertext.current) {
      contentHolder.current.nativeElement.innerHTML = watertext.current.innerHTML;
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (event) => {
    const ch = contentHolder.current;
    const pb = progressbar.current;

    if (
      event.detail.label &&
      event.detail.label.toLowerCase() === "water"
    ) {
      ch.nativeElement.innerHTML = watertext.current.innerHTML;
      pb.value = 71;
    } else if (
      event.detail.label &&
      event.detail.label.toLowerCase() === "soil"
    ) {
      ch.nativeElement.innerHTML = soiltext.current.innerHTML;
      pb.value = 29;
    } else {
      ch.nativeElement.innerHTML = airtext.current.innerHTML;
      pb.value = 100;
    }
  };

  const handleTabsChange = (event) => {
    const index = event.detail.index;
    const mapCoordinates = [
      {
        lat: 40.7590403,
        lng: -74.0392705
      },
      {
        lat: 22.257983,
        lng: 114.1696828
      },
      {
        lat: -8.409518,
        lng: 115.188919
      }
    ];

    if (
      map.current &&
      map.current.mapRef &&
      window.google &&
      window.google.maps
    ) {
      new window.google.maps.Map(map.current.mapRef, {
        center: new window.google.maps.LatLng(
          mapCoordinates[index].lat,
          mapCoordinates[index].lng
        ),
        zoom: 10
      });
    }
  };

  const handleMapLoad = () => {
    if (map.current && map.current.mapRef && map.current.mapRef.previousElementSibling) {
      map.current.mapRef.previousElementSibling.remove();
    }
  };

  return (
    <div>
      <div id="container">
        <h2>Horizontal Splitter with a nested Vertical Splitter</h2>
        <Splitter ref={splitter} orientation="horizontal" id="horizontalSplitter">
          <SplitterItem collapsible locked>
            <ListBox
              ref={listbox}
              id="chooser"
              onChange={handleChange}
            >
              <ListItem>Water</ListItem>
              <ListItem>Soil</ListItem>
              <ListItem>Air</ListItem>
            </ListBox>
          </SplitterItem>
          <SplitterItem>
            <Splitter ref={splitter2} id="nestedVerticalSplitter">
              <SplitterItem ref={contentHolder} id="contentHolder"></SplitterItem>
              <SplitterItem locked>
                <CircularProgressBar
                  ref={progressbar}
                  id="progressBar"
                  value={71}
                  showProgressValue
                  className="animation"
                ></CircularProgressBar>
              </SplitterItem>
            </Splitter>
          </SplitterItem>
        </Splitter>
      </div>
      <div id="container">
        <h2>Vertical Splitter</h2>
        <Splitter id="verticalSplitter">
          <SplitterItem collapsible size="25%">
            <Tabs
              ref={tabs}
              id="tabs"
              onChange={handleTabsChange}
            >
              <TabItem label="New York">
                <p>Welcome to NYC. Planning a trip to the five boroughs can be part...</p>
                {/* ... Same content as before ... */}
                {/* Please keep the entire tab content as in your original */}
              </TabItem>
              <TabItem label="Hong Kong">
                <h3>Geography of Hong Kong</h3>
                {/* ... Hong Kong description ... */}
                {/* Please keep the content as in your original */}
              </TabItem>
              <TabItem label="Bali">
                <h3>Bali Indonesia</h3>
                {/* ... Bali description ... */}
                {/* Please keep the content as in your original */}
              </TabItem>
            </Tabs>
          </SplitterItem>
          <SplitterItem
            ref={tabsContentHolder}
            id="tabsContentHolder"
          >
            <LoadScript
              id="script-loader"
              googleMapsApiKey="AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ"
            >
              <GoogleMap
                ref={map}
                id="example-map"
                mapContainerStyle={{
                  height: "100%",
                  width: "100%"
                }}
                onLoad={handleMapLoad}
                zoom={options.zoom}
                center={options.center}
              ></GoogleMap>
            </LoadScript>
          </SplitterItem>
        </Splitter>
      </div>
      <div ref={watertext} id="waterText">
        <h2>Water</h2>
        {/* ... Water text ... */}
        {/* Insert full content as before */}
      </div>
      <div ref={soiltext} id="soilText">
        <h2>Soil</h2>
        {/* ... Soil text ... */}
        {/* Insert full content as before */}
      </div>
      <div ref={airtext} id="airText">
        <h2>Air</h2>
        {/* ... Air text ... */}
        {/* Insert full content as before */}
      </div>
    </div>
  );
}

export default App;