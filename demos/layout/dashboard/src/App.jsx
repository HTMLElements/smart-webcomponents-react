import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from 'react';

import {
  Button,
  RepeatButton,
  ToggleButton,
  PowerButton,
} from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';
import { Chart } from 'smart-webcomponents-react/chart';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import {
  Layout,
  LayoutItem,
  LayoutGroup,
  TabLayoutGroup,
  TabLayoutItem,
} from 'smart-webcomponents-react/layout';
import { Grid } from 'smart-webcomponents-react/grid';
import {
  ListBox,
  ListItem,
  ListItemsGroup,
} from 'smart-webcomponents-react/listbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TextBox } from 'smart-webcomponents-react/textbox';

const App = () => {
  // Refs for components and DOM
  const calendar = useRef();
  const listbox = useRef();
  const textbox = useRef();
  const textbox2 = useRef();
  const radiobutton = useRef();
  const radiobutton2 = useRef();
  const datetimepicker = useRef();
  const grid = useRef();
  const button = useRef();
  const button2 = useRef();
  const headerName = useRef();
  const headerLogo = useRef();
  const personInfo = useRef();

  // Data & State Refs
  const data = useRef([
    {
      id: 0,
      date: new Date(new Date().setDate(new Date().getDate() - 1)),
      name: 'Nancy Davolio',
      image: 'nancy',
      email: 'ndavolio@msn.com',
      diagnosis: 'Aerophobia',
      symptoms: 'Fear of flying',
      inpatient: false,
    },
    {
      id: 1,
      date: new Date(new Date().setDate(new Date().getDate() - 1)),
      name: 'Andrew Fuller',
      image: 'andrew',
      email: 'afuller@msn.com',
      diagnosis: 'Pyrophobia',
      symptoms: 'Fear of fire',
      inpatient: true,
    },
    {
      id: 2,
      date: new Date(new Date().setDate(new Date().getDate() - 1)),
      name: 'John Levering',
      image: 'john',
      email: 'jlevering@msn.com',
      diagnosis: 'Scolionophobia',
      symptoms: 'Fear of school',
      inpatient: true,
    },
    {
      id: 3,
      date: new Date(new Date().setDate(new Date().getDate() - 1)),
      name: 'Maria Peacock',
      image: 'maria',
      email: 'mpeacock@msn.com',
      diagnosis: 'Necrophobia',
      symptoms: 'Fear of death or dead things',
      inpatient: false,
    },
    {
      id: 4,
      date: new Date(new Date().setDate(new Date().getDate() - 1)),
      name: 'Steven Buchanan',
      image: 'steven',
      email: 'sbuchanan@msn.com',
      diagnosis: 'Megalophobia',
      symptoms: 'Fear of large things',
      inpatient: false,
    },
    {
      id: 5,
      date: new Date(),
      name: 'Mark Suyama',
      image: 'mark',
      email: 'msuyama@msn.com',
      diagnosis: 'Microphobia',
      symptoms: 'Fear of small things',
      inpatient: true,
    },
    {
      id: 6,
      date: new Date(),
      name: 'Laura Callahan',
      image: 'laura',
      email: 'lcallahan@msn.com',
      diagnosis: 'Obesophobia',
      symptoms: 'Fear of gaining weight',
      inpatient: false,
    },
    {
      id: 7,
      date: new Date(),
      name: 'Robert King',
      image: 'robert',
      email: 'rking@msn.com',
      diagnosis: 'Pathophobia',
      symptoms: 'Fear of disease',
      inpatient: false,
    },
    {
      id: 8,
      date: new Date(),
      name: 'Anne Barone',
      image: 'anne',
      email: 'abarone@msn.com',
      diagnosis: 'Tachophobia',
      symptoms: 'Fear of speed',
      inpatient: true,
    },
    {
      id: 9,
      date: new Date(),
      name: 'Janet Peterson',
      image: 'janet',
      email: 'jpeterson@msn.com',
      diagnosis: 'Zoophobia',
      symptoms: 'Fear of animals',
      inpatient: false,
    },
  ]);

  const sampleData = useRef([
    {
      type: 'Circulatory',
      inpatients: 55,
      outpatients: 80,
    },
    {
      type: 'Digestive',
      inpatients: 35,
      outpatients: 55,
    },
    {
      type: 'Endocrine',
      inpatients: 85,
      outpatients: 50,
    },
    {
      type: 'Nervous',
      inpatients: 62,
      outpatients: 58,
    },
    {
      type: 'Renal',
      inpatients: 45,
      outpatients: 65,
    },
    {
      type: 'Respiratory',
      inpatients: 75,
      outpatients: 55,
    },
  ]);

  const selectedPersonId = useRef(0);

  const chartProps = {
    caption: 'Total visits',
    description: '',
    showLegend: true,
    showBorderLine: false,
    padding: {
      left: 5,
      top: 5,
      right: 5,
      bottom: 5,
    },
    titlePadding: {
      left: 90,
      top: 0,
      right: 0,
      bottom: 10,
    },
    dataSource: sampleData.current,
    xAxis: {
      dataField: 'type',
      visible: false,
    },
    colorScheme: 'scheme05',
    seriesGroups: [
      {
        type: 'column',
        columnsGapPercent: 50,
        seriesGapPercent: 0,
        valueAxis: {
          unitInterval: 15,
          minValue: 0,
          maxValue: 90,
          displayValueAxis: true,
          axisSize: 'auto',
          tickMarksColor: '#888888',
        },
        series: [
          {
            dataField: 'inpatients',
            displayText: 'Inpatients',
          },
          {
            dataField: 'outpatients',
            displayText: 'Outpatients',
          },
        ],
      },
    ],
  };

  const gridProps = {
    appearance: {
      showRowHeaderNumber: true,
    },
    selection: {
      enabled: true,
      mode: 'one',
    },
    dataSource: data.current,
    columns: [
      {
        label: '',
        dataField: 'inpatient',
        template: 'checkBox',
        width: 30,
      },
      {
        label: 'Date',
        dataField: 'date',
        cellsFormat: 'dd MMMM',
      },
      {
        label: 'Name',
        dataField: 'name',
      },
      {
        label: 'Email',
        dataField: 'email',
      },
      {
        label: 'Diagnosis',
        dataField: 'diagnosis',
      },
      {
        label: 'Symptoms',
        dataField: 'symptoms',
      },
    ],
  };

  // ---------- Equivalent Methods as in the class ----------

  function initCalendar() {
    const cal = calendar.current;

    if (!cal) {
      return;
    }
    cal.min = new Date(new Date().setDate(new Date().getDate() - 1));
    cal.max = new Date();
    cal.clearSelection();
  }

  function initGrid() {
    if (grid.current) {
      grid.current.select(0);
    }
  }

  function initListBox() {
    const lb = listbox.current;

    if (!lb) {
      return;
    }
    lb.dataSource = data.current.map((x) => {
      return {
        id: x.id,
        name: x.name,
        image: x.image,
      };
    });

    const items = lb.items;

    for (let i = 0; i < lb.dataSource.length; i++) {
      if (!items[i].querySelector('img')) {
        continue;
      }
      items[i].querySelector(
        'img'
      ).src = `../../images/people/${lb.dataSource[i].image}.jpg`;
    }
  }

  // onReady for Calendar (kept in case)
  const handleCalendar = () => {
    // Placeholder for onReady event if needed
  };

  const handleCalendarChange = (e) => {
    if (e.detail.value.length) {
      grid.current.addFilter(
        'date',
        '= ' + e.detail.value[0].toLocaleDateString()
      );
    } else {
      grid.current.clearFilter();
    }
  };

  const handleListBoxChange = (e) => {
    changeSelectedPerson(e.detail.value, true);
  };

  const handleGridChange = (e) => {
    if (!e.target || (e.target && !e.target.getSelection)) {
      return;
    }
    const selection = e.target.getSelection();
    if (selection && selection.rows && selection.rows.length > 0) {
      const id = selection.rows[0].id;
      changeSelectedPerson(id);
    }
  };

  function changeSelectedPerson(id, updateGrid) {
    if (selectedPersonId.current === id) return;
    selectedPersonId.current = id;

    const personData = data.current[id];
    if (headerName.current) headerName.current.innerHTML = personData.name;

    const imgSrc = `../../images/people/${personData.image}.jpg`;

    if (headerLogo.current) headerLogo.current.src = imgSrc;

    if (personInfo.current) {
      personInfo.current.querySelector('img').src = imgSrc;
    }

    if (textbox.current) textbox.current.value = personData.name;
    if (datetimepicker.current) datetimepicker.current.value = personData.date;
    if (textbox2.current) textbox2.current.value = personData.email;

    if (personData.inpatient) {
      if (radiobutton.current) radiobutton.current.checked = true;
    } else {
      if (radiobutton2.current) radiobutton2.current.checked = true;
    }

    if (updateGrid) {
      if (grid.current) grid.current.select(personData.id);
    } else {
      if (listbox.current) listbox.current.selectedIndexes = [personData.id];
    }
  }

  function updatePersonData() {
    const selectedIdx = selectedPersonId.current;
    const selectedPerson = data.current[selectedIdx];

    selectedPerson.name = textbox.current.value;
    selectedPerson.date = datetimepicker.current.value;
    selectedPerson.email = textbox2.current.value;
    selectedPerson.inpatient = radiobutton.current.checked ? true : false;

    // update grid data
    const gridRef = grid.current;
    const gridData = gridRef.rows[selectedIdx].data;

    gridData.name = selectedPerson.name;
    gridData.date = selectedPerson.date;
    gridData.email = selectedPerson.email;
    gridData.inpatient = selectedPerson.inpatient;
    gridRef.refreshView();

    // update listbox data
    const lb = listbox.current;
    lb.update(selectedIdx, selectedPerson.name);

    const items = lb.items;

    items[selectedIdx].querySelector(
      'img'
    ).src = `../../images/people/${data.current[selectedIdx].image}.jpg`;
  }

  function resetForm() {
    const selectedIdx = selectedPersonId.current;
    const selectedPerson = data.current[selectedIdx];

    if (textbox.current) textbox.current.value = selectedPerson.name;
    if (datetimepicker.current) datetimepicker.current.value = selectedPerson.date;
    if (textbox2.current) textbox2.current.value = selectedPerson.email;

    if (document.querySelector('#personInfo img')) {
      document.querySelector(
        '#personInfo img'
      ).src = `../../images/people/${selectedPerson.image}.jpg`;
    }

    if (!radiobutton.current) {
      return;
    }

    if (selectedPerson.inpatient) {
      radiobutton.current.checked = true;
    } else {
      radiobutton2.current.checked = true;
    }
  }

  // Initialization routine, similar to componentDidMount
  useEffect(() => {
    initCalendar();
    initGrid();
    initListBox();
    resetForm();

    // templates (can only append once)
    if (!document.getElementById('calendarFooter')) {
      const calendarTemplate = document.createElement('template'),
        itemTemplate = document.createElement('template');

      calendarTemplate.id = 'calendarFooter';
      itemTemplate.id = 'template';

      calendarTemplate.innerHTML =
        '<smart-button className="flat primary">Clear</smart-button>';
      itemTemplate.innerHTML =
        '<span className="list-item"><img height="53px" className="icon" src="../../images/people/nancy.jpg" />{{label}}</span>';

      document.body.appendChild(calendarTemplate);
      document.body.appendChild(itemTemplate);
    }

    if (calendar.current && listbox.current) {
      calendar.current.footerTemplate = "calendarFooter";
      listbox.current.itemTemplate = "template";
    }
    // eslint-disable-next-line
  }, []);

  // ---------- JSX ----------

  return (
    <div>
      <Layout>
        <TabLayoutGroup position="bottom">
          <TabLayoutItem modifiers="drag, resize" label="Patients">
            <div className="dashboard-header">
              <span ref={headerName} className="header-name">
                Nancy Davolio
              </span>
              <div>
                <span className="icon-holder">
                  <img
                    ref={headerLogo}
                    className="header-logo"
                    src="../../images/people/nancy.jpg"
                    alt="Person"
                  />
                </span>
              </div>
            </div>
            <ListBox
              ref={listbox}
              id="listbox"
              filterable
              onChange={handleListBoxChange}
              itemHeight={53}
              displayMember="name"
              selectionMode="zeroOrOne"
              selectedIndexes={[0]}
            ></ListBox>
          </TabLayoutItem>
          <TabLayoutItem modifiers="drag, resize" label="Calendar">
            <Calendar
              ref={calendar}
              id="calendar"
              viewSections={['footer']}
              onReady={handleCalendar}
              onChange={handleCalendarChange}
            ></Calendar>
          </TabLayoutItem>
        </TabLayoutGroup>
        <TabLayoutGroup size="80%">
          <TabLayoutItem modifiers="drag, resize" label="Total Visits">
            <LayoutGroup orientation="horizontal">
              <LayoutGroup orientation="vertical">
                <LayoutItem>
                  <Chart {...chartProps} id="chart"></Chart>
                </LayoutItem>
                <LayoutItem>
                  <div ref={personInfo} id="personInfo">
                    <img width="30%" alt="Person" />
                    <div id="form">
                      <label>Name</label>
                      <TextBox ref={textbox} id="name"></TextBox>
                      <label>Date</label>
                      <DateTimePicker
                        ref={datetimepicker}
                        calendarButton
                        formatString="MM/dd/yyyy"
                        dropDownAppendTo="body"
                      ></DateTimePicker>
                      <label>Email</label>
                      <TextBox ref={textbox2} id="email"></TextBox>
                      <RadioButton ref={radiobutton} id="inpatient">
                        Inpatient
                      </RadioButton>
                      <RadioButton ref={radiobutton2} id="outpatient">
                        Outpatient
                      </RadioButton>
                      <div className="buttons">
                        <Button
                          ref={button}
                          className="primary"
                          id="save"
                          onClick={updatePersonData}
                        >
                          Save
                        </Button>
                        <Button
                          ref={button2}
                          id="reset"
                          onClick={resetForm}
                        >
                          Reset
                        </Button>
                      </div>
                    </div>
                  </div>
                </LayoutItem>
              </LayoutGroup>
              <TabLayoutGroup position="bottom">
                <TabLayoutItem
                  modifiers="drag, resize"
                  label="In/Out Patients"
                >
                  <Grid
                    ref={grid}
                    {...gridProps}
                    id="grid"
                    onChange={handleGridChange}
                  ></Grid>
                </TabLayoutItem>
              </TabLayoutGroup>
            </LayoutGroup>
          </TabLayoutItem>
        </TabLayoutGroup>
      </Layout>
    </div>
  );
};

export default App;
