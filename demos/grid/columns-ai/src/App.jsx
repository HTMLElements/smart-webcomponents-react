import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Grid } from "smart-webcomponents-react/grid";
import "./App.css";

const dataSource = [
  [
    "Grand Horizon Hotel",
    "The room was spacious and had a beautiful view, but the Wi-Fi was slow.",
    4,
    "$$$",
    "Barcelona, Spain",
    "Deluxe Suite",
    4,
    3,
    "Yes",
  ],
  [
    "Seaside Retreat",
    "Amazing beachfront location! The staff were warm and welcoming.",
    5,
    "$$",
    "Nice, France",
    "Ocean View Room",
    5,
    5,
    "Yes",
  ],
  [
    "Mountain Crest Lodge",
    "Cozy vibe, but the heating in my room wasn’t great.",
    3,
    "$$",
    "Zermatt, Switzerland",
    "Alpine Cabin Room",
    3,
    4,
    "No",
  ],
  [
    "Urban Nights Inn",
    "Good value, but the walls were a bit thin.",
    3,
    "$",
    "Berlin, Germany",
    "Standard Room",
    4,
    3,
    "Yes",
  ],
  [
    "Royal Orchid Suites",
    "Luxurious hotel, though check-in took way too long.",
    4,
    "$$$",
    "Singapore",
    "Executive Suite",
    5,
    4,
    "Yes",
  ],
  [
    "Silverwood Resort",
    "Fantastic pools and an excellent breakfast buffet!",
    5,
    "$$",
    "Phuket, Thailand",
    "Family Villa",
    5,
    5,
    "Yes",
  ],
  [
    "Sunrise Hotel",
    "Comfortable bed, but the bathroom wasn’t perfectly clean.",
    3,
    "$$",
    "Lisbon, Portugal",
    "Superior Room",
    3,
    4,
    "No",
  ],
  [
    "Maple Leaf Residence",
    "Modern rooms and fantastic service — highly recommended!",
    5,
    "$$",
    "Toronto, Canada",
    "Premium Room",
    5,
    5,
    "Yes",
  ],
  [
    "Lakeside Haven",
    "Quiet area, but the shuttle service was unreliable.",
    4,
    "$$",
    "Lake Tahoe, USA",
    "Lakeview Suite",
    4,
    3,
    "No",
  ],
  [
    "Golden Peak Hotel",
    "Loved the rooftop bar! The room decor felt a bit old.",
    4,
    "$$$",
    "Tokyo, Japan",
    "Panorama Suite",
    5,
    4,
    "Yes",
  ],
];

// Templates as React components for columns with templates

const RatingTemplate = ({ value }) => {
  // Render star rating (out of 5)
  // We'll show filled stars for rating, empty stars for the rest
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className="material-icons"
        style={{ color: i <= value ? "#ffc107" : "#e0e0e0" }}
        aria-label={i <= value ? "star" : "star_border"}
      >
        {i <= value ? "star" : "star_border"}
      </span>
    );
  }
  return <div style={{ display: "flex", gap: 2, alignItems: "center" }}>{stars}</div>;
};

const LocationTemplate = ({ value }) => (
  <span className="location-chip">
    <span className="material-icons" aria-hidden="true">
      location_on
    </span>
    {value}
  </span>
);

const RoomTypeTemplate = ({ value }) => (
  <span className="room-type-tag">
    <span className="material-icons" aria-hidden="true">
      king_bed
    </span>
    {value}
  </span>
);

const CleanlinessTemplate = ({ value }) => (
  <span className="metric-chip">
    <span className="material-icons" aria-hidden="true">
      cleaning_services
    </span>
    {value}/5
  </span>
);

const ServiceTemplate = ({ value }) => (
  <span className="metric-chip">
    <span className="material-icons" aria-hidden="true">
      room_service
    </span>
    {value}/5
  </span>
);

const StayAgainTemplate = ({ value }) => {
  const yes = value === "Yes";
  return (
    <span className={yes ? "yes-pill" : "no-pill"}>
      <span className="material-icons" aria-hidden="true">
        {yes ? "check_circle" : "cancel"}
      </span>
      {value}
    </span>
  );
};

const Demo = () => {
  const gridRef = useRef(null);

  // The original demo uses AI to generate a "response" column based on review and rating.
  // smart-webcomponents-react Grid supports AI features via the ai prop.
  // We'll pass the same ai prop as in the original.

  // The original dataSource is an array of arrays, but the grid expects array of objects.
  // We must map the data to objects with keys matching dataFields.

  const dataFields = [
    "hotel",
    "review",
    "rating",
    "price",
    "location",
    "room",
    "clean",
    "service",
    "again",
  ];

  const dataSourceObjects = dataSource.map((row) => {
    const obj = {};
    dataFields.forEach((field, i) => {
      obj[field] = row[i];
    });
    return obj;
  });

  // Tooltip renderer for Response column
  const responseTooltipRenderer = (id, dataField, value, formattedValue, data) => {
    if (data.response) {
      return data.response;
    }
    return "";
  };

  // Columns definition with templates as React components
  // smart-webcomponents-react Grid supports a "template" prop as a React component function
  // or a function returning JSX.

  // For the AI column, the grid will generate the "response" field automatically.

  // We keep the width and label as in original.

  // The original demo uses "template: 'rating'" and "template: 'ai'" strings,
  // but here we replace with React components or functions.

  // The "ai" prop is passed to the Grid component.

  return (
    <Grid
      ref={gridRef}
      id="grid"
      dataSource={dataSourceObjects}
      appearance={{ showColumnIcon: true }}
      layout={{ rowHeight: 90 }}
      dataSourceSettings={{
        dataFields: [
          { name: "hotel", dataType: "string" },
          { name: "review", dataType: "string" },
          { name: "rating", dataType: "number" },
          { name: "price", dataType: "string" },
          { name: "location", dataType: "string" },
          { name: "room", dataType: "string" },
          { name: "clean", dataType: "number" },
          { name: "service", dataType: "number" },
          { name: "again", dataType: "string" },
        ],
      }}
      selection={{ enabled: true, mode: "extended", allowCellSelection: true }}
      sorting={{ enabled: true }}
      ai={{
        promptVariables: [
          { name: "review", dataField: "review" },
          { name: "rating", dataField: "rating" },
        ],
      }}
      columns={ [
        {
            label: "Hotel", dataField: "hotel", width: 160
        },
        { label: "Review", dataField: "review", width: 200 },

        {
            label: "Rating",
            dataField: "rating",
            width: 150,
            template: 'rating'
        },
        {
            label: "Response",
            dataField: "response",
            width: 450,
            tooltipRenderer: (id, dataField, value, formattedValue, data) => {
                if (data.response) {
                    return `${data.response}`;
                }
                return '';
            },
            AIQuery: `The following is a hotel review along with its star rating (out of 5). Provide a brief, polite response from the hotel's management addressing the guest's feedback.
Review: "{{review}}"
Rating: {{rating}} stars`,
            template: 'ai'
        },

        {
            label: "Location",
            dataField: "location",
            width: 180,
            formatFunction: function (o) {
                o.template = `
                      <span class="location-chip">
                        <span class="material-icons">location_on</span>
                        ${o.value}
                      </span>`;
            }
        },

        {
            label: "Room Type",
            dataField: "room",
            width: 300,
            formatFunction: function (o) {
                o.template = `
                      <span class="room-type-tag">
                        <span class="material-icons">king_bed</span>
                        ${o.value}
                      </span>`;
            }
        },

        {
            label: "Cleanliness",
            dataField: "clean",
            width: 130,
            formatFunction: function (o) {
                o.template = `
                      <span class="metric-chip">
                        <span class="material-icons">cleaning_services</span>
                        ${o.value}/5
                      </span>`;
            }
        },
         {
            label: "Service",
            dataField: "service",
            width: 120,
            formatFunction: function (o) {
                o.template = `
                      <span class="metric-chip">
                        <span class="material-icons">room_service</span>
                        ${o.value}/5
                      </span>`;
            }
        },
        {
            label: "Stay Again?",
            dataField: "again",
            width: 150,
            formatFunction: function (o) {
                const yes = o.value === "Yes";
                o.template = `
                      <span class="${yes ? "yes-pill" : "no-pill"}">
                        <span class="material-icons">
                          ${yes ? "check_circle" : "cancel"}
                        </span>
                        ${o.value}
                      </span>`;
            }
        }
    ]}
    />
  );
};

export default Demo;

