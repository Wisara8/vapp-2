import React from 'react';
// import { Tabs, Tab, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';


// function App() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//   const handleTabs = (e, value) => {
//     console.log(value);
//     setValue(value);
//   };
//   return (
//     <div >
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography>
//             Off Grid Customs
//           </Typography>
//           <IconButton edge="end">
//             $118,321
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Toolbar />
//       <div className={classes.root}>
//         <Tabs
//           value={value}
//           onChange={handleTabs}
//           variant="scrollable"
//           orientation="vertical"
//           className={classes.tabs}
//         >
//           <Tab label="General Info" />
//           <Tab label="Windows/Vents" />
//           <Tab label="Shell" />
//           <Tab label="Exterior" />
//           <Tab label="Electrical" />
//           <Tab label="Mech Heat/AC" />
//           <Tab label="Plumbing Water" />
//           <Tab label="Furniture/Appliances" />
//           <Tab label="Cabinets + Trim" />
//           <Tab label="Extras" />
//         </Tabs>
//         <TabPanel value={value} index={0}>Item 1 Detail</TabPanel>
//         <TabPanel value={value} index={1}>Item 2 Detail</TabPanel>
//         <TabPanel value={value} index={2}>Item 3 Detail</TabPanel>
//       </div>
//     </div>
//   );
// }

// export default App;

// function TabPanel(props) {
//   const { children, value, index } = props;
//   return (<div>
//     {
//       value === index && (
//         <Box p={3}>{children}</Box>
//       )
//     }
//   </div>)
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: 'flex',
//     height: 224,
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
//   down: { offset: theme.mixins.toolbar }
// }));

function computePrice(selected, choices) {
  return choices.reduce((acc, choice) => {
    if (selected[choice.label] === true) {
      return acc + choice.price;
    }
    return acc;
  }, 0);
}
const ChoiceList = ({ choices, updateSelected }) => {
  return (
    <div>
      {
        choices.map(choice => (
          // TODO: `updateState` is not defined in this scope
          // ...Well, it is, but it likely won't be when we fix a different thing.
          <button onClick={() => updateSelected(choice.label)}>{choice.label} (${choice.price})</button>
        ))
      }
    </div>
  )
}


const TotalPrice = ({ price }) => <h2>${price}</h2>

const __choices = [
  {
    label: 'Fridge',
    price: 1000,
  },
  {
    label: 'Twin bed',
    price: 1400,
  },
  {
    label: 'Medium water pump',
    price: 650,
  }
];

//APP compononent look overhere----------
const App = ({ choices }) => {
  const initialSelected = choices.reduce((acc, choice) => ({ ...acc, [choice.label]: false }), {});
  const [selected, setSelected] = React.useState(initialSelected);
  const price = computePrice(selected, choices);

  function updateSelected(label) {
    setSelected({ ...selected, [label]: !selected[label] });
  }

  return (
    <main>
      <TotalPrice price={price} />
      <ChoiceList choices={choices} updateSelected={updateSelected} />
      <p>Choices: {JSON.stringify(choices)}</p>
      <p>Selected: {JSON.stringify(selected)}</p>
      <p>{price}</p>
    </main>
  )
};

ReactDOM.render(<App choices={__choices} />, document.getElementById('app'))