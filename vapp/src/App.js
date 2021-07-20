import React from 'react';
import { Tabs, Tab, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <div >c
      <AppBar position="fixed">
        <Toolbar>
          <Typography>
            Off Grid Customs
          </Typography>
          <IconButton edge="end">
            $120,000
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleTabs}
          variant="scrollable"
          orientation="vertical"
          className={classes.tabs}
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
        <TabPanel value={value} index={0}>Item 1 Detail</TabPanel>
        <TabPanel value={value} index={1}>Item 2 Detail</TabPanel>
        <TabPanel value={value} index={2}>Item 3 Detail</TabPanel>
      </div>
    </div>
  );
}

export default App;

function TabPanel(props) {
  const { children, value, index } = props;
  return (<div>
    {
      value === index && (
        <Box p={3}>{children}</Box>
      )
    }
  </div>)
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  down: { offset: theme.mixins.toolbar }
}));