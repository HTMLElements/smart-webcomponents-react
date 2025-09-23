import React, { useMemo } from "react";
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';

const generateData = (length) => {
  const sampleData = [],
    firstNames = [
      "Andrew",
      "Nancy",
      "Shelley",
      "Regina",
      "Yoshi",
      "Antoni",
      "Mayumi",
      "Ian",
      "Peter",
      "Lars",
      "Petra",
      "Martin",
      "Sven",
      "Elio",
      "Beate",
      "Cheryl",
      "Michael",
      "Guylene",
    ],
    lastNames = [
      "Fuller",
      "Davolio",
      "Burke",
      "Murphy",
      "Nagase",
      "Saavedra",
      "Ohno",
      "Devling",
      "Wilson",
      "Peterson",
      "Winkler",
      "Bein",
      "Petersen",
      "Rossi",
      "Vileid",
      "Saylor",
      "Bjorn",
      "Nodier",
    ],
    petNames = [
      "Sam",
      "Bob",
      "Lucky",
      "Tommy",
      "Charlie",
      "Olliver",
      "Mixie",
      "Fluffy",
      "Acorn",
      "Beak",
    ],
    countries = [
      "Bulgaria",
      "USA",
      "UK",
      "Singapore",
      "Thailand",
      "Russia",
      "China",
      "Belize",
    ],
    productNames = [
      "Black Tea",
      "Green Tea",
      "Caffe Espresso",
      "Doubleshot Espresso",
      "Caffe Latte",
      "White Chocolate Mocha",
      "Cramel Latte",
      "Caffe Americano",
      "Cappuccino",
      "Espresso Truffle",
      "Espresso con Panna",
      "Peppermint Mocha Twist",
    ];

  for (let i = 0; i < length; i++) {
    const row = {};
    row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    row.birthday = new Date(
      Math.round(Math.random() * (2018 - 1918) + 1918),
      Math.round(Math.random() * 11),
      Math.round(Math.random() * (31 - 1) + 1)
    );
    row.petName = petNames[Math.floor(Math.random() * petNames.length)];
    row.country = countries[Math.floor(Math.random() * countries.length)];
    row.productName = productNames[Math.floor(Math.random() * productNames.length)];
    row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
    row.quantity = Math.round(Math.random() * (50 - 1) + 1);
    row.timeOfPurchase = new Date(
      2019,
      0,
      1,
      Math.round(Math.random() * 23),
      Math.round(Math.random() * (31 - 1) + 1)
    );
    row.expired = Math.random() >= 0.5;
    row.attachments = [];
    const maxAttachments = Math.floor(Math.random() * Math.floor(3)) + 1;
    for (let j = 0; j < maxAttachments; j++) {
      row.attachments.push(`../../images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
    }
    row.attachments = row.attachments.join(",");
    sampleData[i] = row;
  }
  return sampleData;
};

export default function App() {
  const dataSource = useMemo(() => generateData(50), []);
  const lookupData = useMemo(() => generateData(100), []);

  const gridProps = {
    dataSource,
    dataSourceSettings: {
      dataFields: [
        "firstName: string",
        "lastName: string",
        "birthday: date",
        "petName: string",
        "country: string",
        "productName: string",
        "price: number",
        "quantity: number",
        "timeOfPurchase: date",
        "expired: boolean",
        "attachments: string",
      ],
      relations: [
        {
          id: "lookupData",
          label: "Other Data Source",
          columns: [
            { label: "First Name", dataField: "firstName" },
            { label: "Last Name", dataField: "lastName" },
            { label: "Product", dataField: "productName" },
          ],
          dataSource: lookupData,
        },
      ],
    },
    selection: {
      enabled: true,
      allowCellSelection: true,
      mode: "extended",
    },
    editing: {
      enabled: true,
    },
    columns: [
      {
        label: "Order Name",
        width: 150,
        dataField: "productName",
        showIcon: true,
        icon: "productName",
      },
      {
        label: "Sales Person",
        width: 150,
        relationId: "lookupData",
        relationField: "firstName",
        template: "dropdownGrid",
        showIcon: true,
        icon: "lastName",
        editor: {
          template: "grid",
          relationId: "lookupData",
          relationField: "firstName",
        },
        templateSettings: {
          dataFields: ["firstName"],
        },
      },
      {
        label: "Price",
        dataField: "price",
        showIcon: true,
        icon: "price",
        formatSettings: { formatString: "c2" },
      },
      {
        label: "Quantity",
        dataField: "quantity",
        showIcon: true,
        icon: "quantity",
        formatFunction: (settings) => {
          const value = settings.value;
          let className;
          if (value < 20) {
            className = "red";
          } else if (value < 35) {
            className = "yellow";
          } else {
            className = "green";
          }
          settings.template = `<div class="${className}">${value}</div>`;
        },
      },
      {
        label: "Attachments",
        dataField: "attachments",
        showIcon: true,
        editor: "image",
        template: "image",
        cardHeight: 6,
      },
      {
        label: "Time of Purchase",
        width: 150,
        cellsAlign: "right",
        dataField: "timeOfPurchase",
        editor: "timeInput",
        showIcon: true,
        icon: "timeOfPurchase",
        formatSettings: { formatString: "hh:mm tt" },
      },
      {
        label: "Status",
        align: "left",
        width: 90,
        dataField: "expired",
        showIcon: true,
        icon: "expired",
        formatFunction: (settings) => {
          settings.template = settings.value ? "☑" : "☐";
        },
      },
    ],
  };

  return <Grid {...gridProps} id="grid" />;
}
