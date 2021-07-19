import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';


function App() {
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <div>
      <h1>
        Off Grid Customs
      </h1>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleTabs}
          variant="scrollable"
        // orientation="vertical"
        >
          <Tab label="General Info" />
          <Tab label="Windows/Vents" />
          <Tab label="Shell" />
          <Tab label="Exterior" />
          <Tab label="Electrical" />
          <Tab label="Mech Heat/AC" />
          <Tab label="Plumbing Water" />
          <Tab label="Furniture/Appliances" />
          <Tab label="Cabinets + Trim" />
          <Tab label="Extras" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>Item 1 Detail</TabPanel>
      <TabPanel value={value} index={1}>Item 2 Detail</TabPanel>
      <TabPanel value={value} index={2}>Item 3 Detail</TabPanel>

    </div>
  );
}

export default App;

function TabPanel(props) {
  const { children, value, index } = props;
  return (<div>
    {
      value === index && (
        <h1>{children}</h1>
      )
    }
  </div>)
}